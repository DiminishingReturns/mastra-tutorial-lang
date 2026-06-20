// This file creates a batch of generated problems for the normal distribution topic, using the createNormalDistributionProblem generator function and the context seeds defined in normalDistributionContextSeeds. Each problem is created with a specific question type (e.g., 'less-than', 'greater-than', 'between', 'percentile') and is exported for use in the problem bank.

import { normalDistributionContextSeeds } from '../../contextSeeds/normalDistributionContexts';
import { createNormalDistributionProblem } from '../../generators/createNormalDistributionProblems';

function getSeed(id: string) {
  const seed = normalDistributionContextSeeds.find((seed) => seed.id === id);

  if (!seed) {
    throw new Error(`Could not find context seed: ${id}`);
  }

  return seed;
}

export const generatedNormalExamples = [
  createNormalDistributionProblem({
    seed: getSeed('pineapple-height'),
    questionType: 'less-than',
    mean: 30,
    standardDeviation: 4,
    thresholdOffsetInStandardDeviations: -1.75,
  }),

  createNormalDistributionProblem({
    seed: getSeed('keyboard-battery-life'),
    questionType: 'greater-than',
    mean: 50,
    standardDeviation: 10,
    thresholdOffsetInStandardDeviations: 1,
  }),

  createNormalDistributionProblem({
    seed: getSeed('commute-time'),
    questionType: 'between',
    mean: 45,
    standardDeviation: 12,
    lowerOffsetInStandardDeviations: -1,
    upperOffsetInStandardDeviations: 1.5,
  }),

  createNormalDistributionProblem({
    seed: getSeed('pineapple-height'),
    questionType: 'percentile',
    mean: 30,
    standardDeviation: 4,
    percentile: 0.05,
    percentileTail: 'lower',
  }),
];
