import 'dotenv/config';

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { generateNormalApproximationBinomialFrenchVariantsWorkflow } from '../mastra/workflows/generateNormalApproximationBinomialFrenchVariants.workflow';
import { generatedNormalApproximationBinomialCalibrationSet } from '../problem-bank/examples/normalApproximationBinomial/generatedCaibrationSet';

async function main() {
  const outputDirectory = 'outputs';

  mkdirSync(outputDirectory, {
    recursive: true,
  });

  const selectedProblems =
    generatedNormalApproximationBinomialCalibrationSet.filter(
      (_problem, index) => index % 9 === 0,
    );

  const workflow = generateNormalApproximationBinomialFrenchVariantsWorkflow;

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
    'french-normal-approximation-binomial-batch-results-every-9th.json',
  );

  writeFileSync(outputPath, JSON.stringify(results, null, 2));

  console.log(`Done. Results saved to ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
