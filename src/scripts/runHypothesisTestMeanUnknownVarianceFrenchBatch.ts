import 'dotenv/config';

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { mastra } from '../mastra';

import { generatedHypothesisTestMeanUnknownVarianceCalibrationSet } from '../problem-bank/examples/hypothesisTestMeanUnknownVariance/generatedCalibrationSet';

import { generateHypothesisTestMeanUnknownVarianceFrenchVariantsWorkflow } from '../mastra/workflows/generateHypothesisTestMeanUnknownVarianceFrenchVariants.workflow';

async function main() {
  const outputDirectory = 'outputs';

  mkdirSync(outputDirectory, {
    recursive: true,
  });

  const selectedProblems =
    generatedHypothesisTestMeanUnknownVarianceCalibrationSet.filter(
      (_problem, index) => index % 8 === 0,
    );

  const workflow =
    generateHypothesisTestMeanUnknownVarianceFrenchVariantsWorkflow;

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
    'french-hypothesis-test-mean-unknown-variance-batch-results-every-8th.json',
  );

  writeFileSync(outputPath, JSON.stringify(results, null, 2));

  console.log(`Done. Results saved to ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
