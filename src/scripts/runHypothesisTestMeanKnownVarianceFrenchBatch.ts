import 'dotenv/config';

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { mastra } from '../mastra';

import { generatedHypothesisTestMeanKnownVarianceCalibrationSet } from '../problem-bank/examples/hypothesisTestMeanKnownVariance/generatedCalibrationSet';

import { generateHypothesisTestMeanKnownVarianceFrenchVariantsWorkflow } from '../mastra/workflows/generateHypothesisTestMeanKnownVarianceFrenchVariants.workflow';
async function main() {
  const outputDirectory = 'outputs';

  mkdirSync(outputDirectory, {
    recursive: true,
  });

  const selectedProblems =
    generatedHypothesisTestMeanKnownVarianceCalibrationSet.filter(
      (_problem, index) => index % 7 === 0,
    );

  const workflow =
    generateHypothesisTestMeanKnownVarianceFrenchVariantsWorkflow;

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
    'french-hypothesis-test-mean-known-variance-batch-results-every-7th.json',
  );

  writeFileSync(outputPath, JSON.stringify(results, null, 2));

  console.log(`Done. Results saved to ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
