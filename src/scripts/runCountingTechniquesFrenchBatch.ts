import 'dotenv/config';

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { generatedCountingTechniquesCalibrationSet } from '../problem-bank/examples/countingTechniques/generatedCalibrationSet';
import { generateCountingTechniquesFrenchVariantsWorkflow } from '../mastra/workflows/generateCountingTechniquesProblemFrenchVariants.workflow';
async function main() {
  const outputDirectory = 'outputs';

  mkdirSync(outputDirectory, {
    recursive: true,
  });

  const selectedProblems = generatedCountingTechniquesCalibrationSet.filter(
    (_problem, index) => index % 2 === 0,
  );

  const workflow = generateCountingTechniquesFrenchVariantsWorkflow;

  const results = [];

  for (const problem of selectedProblems) {
    console.log(`Running workflow for ${problem.id}...`);

    const run = await workflow.createRun();

    const workflowResult = await run.start({
      inputData: problem,
    });

    results.push({
      id: problem.id,
      topic: problem.topic,
      subtopic: problem.subtopic,
      canonicalProblem: problem,
      output: workflowResult,
    });
  }

  const outputPath = join(
    outputDirectory,
    'french-counting-techniques-batch-results-every-2nd.json',
  );

  writeFileSync(outputPath, JSON.stringify(results, null, 2));

  console.log(`Done. Results saved to ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
