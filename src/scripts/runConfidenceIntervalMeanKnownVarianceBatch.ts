import 'dotenv/config';

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { mastra } from '../mastra';

import { generatedConfidenceIntervalMeanKnownVarianceCalibrationSet } from '../problem-bank/examples/confidenceIntervalMeanKnownVariance/generatedCalibrationSet';

import { generateConfidenceIntervalMeanKnownVarianceProblemVariantsWorkflow } from '../mastra/workflows/generateConfidenceIntervalMeanKnownVarianceProblemVariants.workflow';
async function main() {
  const outputDirectory = 'outputs';

  mkdirSync(outputDirectory, {
    recursive: true,
  });

  const selectedProblems =
    generatedConfidenceIntervalMeanKnownVarianceCalibrationSet.filter(
      (_problem, index) => index % 7 === 0,
    );

  const workflow =
    generateConfidenceIntervalMeanKnownVarianceProblemVariantsWorkflow;

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
    'confidence-interval-mean-known-variance-batch-results-every-7th.json',
  );

  writeFileSync(outputPath, JSON.stringify(results, null, 2));

  console.log(`Done. Results saved to ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
