import 'dotenv/config';

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { mastra } from '../mastra';

import { generatedConfidenceIntervalMeanUnknownVarianceCalibrationSet } from '../problem-bank/examples/confidenceIntervalMeanUnknownVariance/generatedCalibrationSet';

import { generateConfidenceIntervalMeanUnknownVarianceProblemVariantsWorkflow } from '../mastra/workflows/generateConfidenceIntervalMeanUnknownVarianceProblemVariants.workflow';
async function main() {
  const outputDirectory = 'outputs';

  mkdirSync(outputDirectory, {
    recursive: true,
  });

  const selectedProblems =
    generatedConfidenceIntervalMeanUnknownVarianceCalibrationSet.filter(
      (_problem, index) => index % 6 === 0,
    );

  const workflow =
    generateConfidenceIntervalMeanUnknownVarianceProblemVariantsWorkflow;

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
    'confidence-interval-mean-unknown-variance-batch-results-every-6th.json',
  );

  writeFileSync(outputPath, JSON.stringify(results, null, 2));

  console.log(`Done. Results saved to ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
