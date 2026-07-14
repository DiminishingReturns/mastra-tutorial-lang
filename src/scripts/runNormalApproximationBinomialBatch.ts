import 'dotenv/config';

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { mastra } from '../mastra';
import { generatedNormalApproximationBinomialCalibrationSet } from '../problem-bank/examples/normalApproximationBinomial/generatedCaibrationSet';

import { generateNormalApproximationBinomialProblemVariantsWorkflow } from '../mastra/workflows/generateNormalApproximationBinomialProblemVariants.workflow';

async function main() {
  const outputDirectory = 'outputs';

  mkdirSync(outputDirectory, {
    recursive: true,
  });

  const selectedProblems =
    generatedNormalApproximationBinomialCalibrationSet.filter(
      (_problem, index) => index % 9 === 0,
    );

  const workflow = generateNormalApproximationBinomialProblemVariantsWorkflow;

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
    'normal-approximation-binomial-batch-results-every-9th.json',
  );

  writeFileSync(outputPath, JSON.stringify(results, null, 2));

  console.log(`Done. Results saved to ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
