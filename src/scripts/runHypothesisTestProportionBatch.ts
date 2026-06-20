import 'dotenv/config';

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { mastra } from '../mastra';
import { generatedHypothesisTestProportionCalibrationSet } from '../problem-bank/examples/hypothesisTestProportion/generatedCalibrationSet';
import { generateHypothesisTestProportionProblemVariantsWorkflow } from '../mastra/workflows/generateHypothesisTestProportionProblemVariants.workflow';
async function main() {
  const outputDirectory = 'outputs';

  mkdirSync(outputDirectory, {
    recursive: true,
  });

  const workflow = generateHypothesisTestProportionProblemVariantsWorkflow;

  const results = [];

  for (const problem of generatedHypothesisTestProportionCalibrationSet) {
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
    'hypothesis-test-proportion-batch-results.json',
  );

  writeFileSync(outputPath, JSON.stringify(results, null, 2));

  console.log(`Done. Results saved to ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
