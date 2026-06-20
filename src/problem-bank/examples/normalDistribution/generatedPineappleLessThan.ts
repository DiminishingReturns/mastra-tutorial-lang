import { normalDistributionContextSeeds } from '../../contextSeeds/normalDistributionContexts';
import { createNormalDistributionProblem } from '../../generators/createNormalDistributionProblems';

const pineappleSeed = normalDistributionContextSeeds.find(
  (seed) => seed.id === 'pineapple-height',
);

if (!pineappleSeed) {
  throw new Error('Could not find pineapple-height context seed.');
}

export const generatedPineappleLessThan = createNormalDistributionProblem({
  seed: pineappleSeed,
  questionType: 'less-than',
  mean: 30,
  standardDeviation: 4,
  thresholdOffsetInStandardDeviations: -1.75,
});
