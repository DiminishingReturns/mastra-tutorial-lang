import 'dotenv/config';

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { mastra } from '../mastra';
import { generatedHypothesisTestProportionCalibrationSet } from '../problem-bank/examples/hypothesisTestProportion/generatedCalibrationSet';
import { generateHypothesisTestProportionFrenchVariantsWorkflow } from '../mastra/workflows/generateHypothesisTestProportionFrenchVariants.workflow';
async function main() {
  const outputDirectory = 'outputs';

  mkdirSync(outputDirectory, {
    recursive: true,
  });

  const selectedProblems =
    generatedHypothesisTestProportionCalibrationSet.filter(
      (_problem, index) => index % 7 === 0,
    );

  const workflow = generateHypothesisTestProportionFrenchVariantsWorkflow;

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
    'french-hypothesis-test-proportion-batch-results-every-7th.json',
  );

  writeFileSync(outputPath, JSON.stringify(results, null, 2));

  console.log(`Done. Results saved to ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
