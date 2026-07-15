import 'dotenv/config';

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { mastra } from '../mastra';

import { generatedConfidenceIntervalProportionCalibrationSet } from '../problem-bank/examples/confidenceIntervalProportion/generatedCalibrationSet';

import { generateConfidenceIntervalProportionProblemVariantsWorkflow } from '../mastra/workflows/generateConfidenceIntervalProportionProblemVariants.workflow';
async function main() {
  const outputDirectory = 'outputs';

  mkdirSync(outputDirectory, {
    recursive: true,
  });

  const selectedProblems =
    generatedConfidenceIntervalProportionCalibrationSet.filter(
      (_problem, index) => index % 6 === 0,
    );

  const workflow = generateConfidenceIntervalProportionProblemVariantsWorkflow;

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
    'confidence-interval-proportion-batch-results-every-6th.json',
  );

  writeFileSync(outputPath, JSON.stringify(results, null, 2));

  console.log(`Done. Results saved to ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
