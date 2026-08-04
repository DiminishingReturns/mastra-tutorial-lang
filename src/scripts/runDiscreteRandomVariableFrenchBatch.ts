import 'dotenv/config';

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { generatedDiscreteRandomVariableCalibrationSet } from '../problem-bank/examples/discreteRandomVariable/generateCalibrationSet';
import { generateDiscreteRandomVariableFrenchVariantsWorkflow } from '../mastra/workflows/generateDiscreteRandomVariableFrenchVariants.workflow';

async function main() {
  const outputDirectory = 'outputs';

  mkdirSync(outputDirectory, {
    recursive: true,
  });

  const selectedProblems = generatedDiscreteRandomVariableCalibrationSet.filter(
    (_problem, index) => index % 6 === 0,
  );

  const workflow = generateDiscreteRandomVariableFrenchVariantsWorkflow;

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
    'french-discrete-random-variable-batch-results-every-6th.json',
  );

  writeFileSync(outputPath, JSON.stringify(results, null, 2));

  console.log(`Done. Results saved to ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
