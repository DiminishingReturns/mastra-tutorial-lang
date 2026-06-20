import { normalDistributionContextSeeds } from '../../contextSeeds/normalDistributionContexts';
import { createNormalDistributionProblem } from '../../generators/createNormalDistributionProblems';

function getSeed(id: string) {
  const seed = normalDistributionContextSeeds.find((seed) => seed.id === id);

  if (!seed) {
    throw new Error(`Could not find context seed: ${id}`);
  }

  return seed;
}

export const generatedCalibrationSet = [
  // Start of calibration examples
  // Less-than examples
  createNormalDistributionProblem({
    seed: getSeed('pineapple-height'),
    questionType: 'less-than',
    mean: 30,
    standardDeviation: 4,
    thresholdOffsetInStandardDeviations: -1.75,
  }),

  createNormalDistributionProblem({
    seed: getSeed('commute-time'),
    questionType: 'less-than',
    mean: 45,
    standardDeviation: 12,
    thresholdOffsetInStandardDeviations: -1,
  }),

  createNormalDistributionProblem({
    seed: getSeed('sprinter-reaction-time'),
    questionType: 'less-than',
    mean: 0.18,
    standardDeviation: 0.03,
    thresholdOffsetInStandardDeviations: -1,
  }),

  // Greater-than examples
  createNormalDistributionProblem({
    seed: getSeed('keyboard-battery-life'),
    questionType: 'greater-than',
    mean: 50,
    standardDeviation: 10,
    thresholdOffsetInStandardDeviations: 1,
  }),

  createNormalDistributionProblem({
    seed: getSeed('coffee-temperature'),
    questionType: 'greater-than',
    mean: 65,
    standardDeviation: 5,
    thresholdOffsetInStandardDeviations: 1.5,
  }),

  createNormalDistributionProblem({
    seed: getSeed('bird-wingspan'),
    questionType: 'greater-than',
    mean: 80,
    standardDeviation: 8,
    thresholdOffsetInStandardDeviations: 1.25,
  }),

  // Between examples
  createNormalDistributionProblem({
    seed: getSeed('plant-growth'),
    questionType: 'between',
    mean: 8,
    standardDeviation: 1.5,
    lowerOffsetInStandardDeviations: -1,
    upperOffsetInStandardDeviations: 1.5,
  }),

  createNormalDistributionProblem({
    seed: getSeed('bread-loaf-mass'),
    questionType: 'between',
    mean: 650,
    standardDeviation: 50,
    lowerOffsetInStandardDeviations: -1.2,
    upperOffsetInStandardDeviations: 1.2,
  }),

  createNormalDistributionProblem({
    seed: getSeed('commute-time'),
    questionType: 'between',
    mean: 45,
    standardDeviation: 12,
    lowerOffsetInStandardDeviations: -1,
    upperOffsetInStandardDeviations: 1.5,
  }),

  // Percentile examples
  createNormalDistributionProblem({
    seed: getSeed('cat-weight'),
    questionType: 'percentile',
    mean: 4.5,
    standardDeviation: 0.8,
    percentile: 0.1,
    percentileTail: 'lower',
  }),

  createNormalDistributionProblem({
    seed: getSeed('pineapple-height'),
    questionType: 'percentile',
    mean: 30,
    standardDeviation: 4,
    percentile: 0.05,
    percentileTail: 'lower',
  }),

  createNormalDistributionProblem({
    seed: getSeed('phone-screen-time'),
    questionType: 'percentile',
    mean: 5.5,
    standardDeviation: 1.4,
    percentile: 0.9,
    percentileTail: 'upper',
  }),

  // End of calibration examples
  // Start of course examples

  // Less-than examples

  createNormalDistributionProblem({
    seed: getSeed('Syria-yoyos-ban'),
    questionType: 'less-than',
    mean: 300,
    standardDeviation: 60,
    thresholdOffsetInStandardDeviations: -1.5,
  }),

  createNormalDistributionProblem({
    seed: getSeed('intense-dreams'),
    questionType: 'less-than',
    mean: 75,
    standardDeviation: 20,
    thresholdOffsetInStandardDeviations: -1.25,
  }),

  createNormalDistributionProblem({
    seed: getSeed('wind-speed'),
    questionType: 'less-than',
    mean: 55,
    standardDeviation: 17,
    thresholdOffsetInStandardDeviations: -1.63,
  }),

  createNormalDistributionProblem({
    seed: getSeed('weight-of-pigeon'),
    questionType: 'less-than',
    mean: 350,
    standardDeviation: 15,
    thresholdOffsetInStandardDeviations: 1.75,
  }),

  createNormalDistributionProblem({
    seed: getSeed('pigeon-coded-message'),
    questionType: 'less-than',
    mean: 60,
    standardDeviation: 17,
    thresholdOffsetInStandardDeviations: 2.45,
  }),

  createNormalDistributionProblem({
    seed: getSeed('marathon-completion-time'),
    questionType: 'less-than',
    mean: 190,
    standardDeviation: 17,
    thresholdOffsetInStandardDeviations: 0.58,
  }),

  createNormalDistributionProblem({
    seed: getSeed('giraffes-neck-length'),
    questionType: 'less-than',
    mean: 4.2,
    standardDeviation: 0.6,
    thresholdOffsetInStandardDeviations: 0.75,
  }),

  createNormalDistributionProblem({
    seed: getSeed('goffins-cockatoos-beak-length'),
    questionType: 'less-than',
    mean: 22,
    standardDeviation: 2.75,
    thresholdOffsetInStandardDeviations: -1.75,
  }),

  createNormalDistributionProblem({
    seed: getSeed('delay-time-for-planes'),
    questionType: 'less-than',
    mean: 35,
    standardDeviation: 12,
    thresholdOffsetInStandardDeviations: 1.68,
  }),

  createNormalDistributionProblem({
    seed: getSeed('sleep-duration'),
    questionType: 'less-than',
    mean: 7.5,
    standardDeviation: 1.2,
    thresholdOffsetInStandardDeviations: -1.8,
  }),

  // More-than examples

  createNormalDistributionProblem({
    seed: getSeed('Syria-yoyos-ban'),
    questionType: 'greater-than',
    mean: 300,
    standardDeviation: 60,
    thresholdOffsetInStandardDeviations: -1.5,
  }),

  createNormalDistributionProblem({
    seed: getSeed('intense-dreams'),
    questionType: 'greater-than',
    mean: 75,
    standardDeviation: 20,
    thresholdOffsetInStandardDeviations: -1.25,
  }),

  createNormalDistributionProblem({
    seed: getSeed('wind-speed'),
    questionType: 'greater-than',
    mean: 55,
    standardDeviation: 17,
    thresholdOffsetInStandardDeviations: -1.63,
  }),

  createNormalDistributionProblem({
    seed: getSeed('weight-of-pigeon'),
    questionType: 'greater-than',
    mean: 350,
    standardDeviation: 15,
    thresholdOffsetInStandardDeviations: 1.75,
  }),

  createNormalDistributionProblem({
    seed: getSeed('pigeon-coded-message'),
    questionType: 'greater-than',
    mean: 60,
    standardDeviation: 17,
    thresholdOffsetInStandardDeviations: 2.45,
  }),

  createNormalDistributionProblem({
    seed: getSeed('marathon-completion-time'),
    questionType: 'greater-than',
    mean: 190,
    standardDeviation: 17,
    thresholdOffsetInStandardDeviations: 0.58,
  }),

  createNormalDistributionProblem({
    seed: getSeed('giraffes-neck-length'),
    questionType: 'greater-than',
    mean: 4.2,
    standardDeviation: 0.6,
    thresholdOffsetInStandardDeviations: 0.75,
  }),

  createNormalDistributionProblem({
    seed: getSeed('goffins-cockatoos-beak-length'),
    questionType: 'greater-than',
    mean: 22,
    standardDeviation: 2.75,
    thresholdOffsetInStandardDeviations: -1.75,
  }),

  createNormalDistributionProblem({
    seed: getSeed('delay-time-for-planes'),
    questionType: 'greater-than',
    mean: 35,
    standardDeviation: 12,
    thresholdOffsetInStandardDeviations: 1.68,
  }),

  createNormalDistributionProblem({
    seed: getSeed('sleep-duration'),
    questionType: 'greater-than',
    mean: 7.5,
    standardDeviation: 1.2,
    thresholdOffsetInStandardDeviations: -1.8,
  }),

  // Between examples

  createNormalDistributionProblem({
    seed: getSeed('Syria-yoyos-ban'),
    questionType: 'between',
    mean: 300,
    standardDeviation: 60,
    lowerOffsetInStandardDeviations: -1.5,
    upperOffsetInStandardDeviations: 1.5,
  }),

  createNormalDistributionProblem({
    seed: getSeed('intense-dreams'),
    questionType: 'between',
    mean: 75,
    standardDeviation: 20,
    lowerOffsetInStandardDeviations: -1.25,
    upperOffsetInStandardDeviations: 1.35,
  }),

  createNormalDistributionProblem({
    seed: getSeed('wind-speed'),
    questionType: 'between',
    mean: 55,
    standardDeviation: 17,
    lowerOffsetInStandardDeviations: -0.63,
    upperOffsetInStandardDeviations: 1.65,
  }),

  createNormalDistributionProblem({
    seed: getSeed('weight-of-pigeon'),
    questionType: 'between',
    mean: 350,
    standardDeviation: 15,
    lowerOffsetInStandardDeviations: 1.75,
    upperOffsetInStandardDeviations: 2.75,
  }),

  createNormalDistributionProblem({
    seed: getSeed('pigeon-coded-message'),
    questionType: 'between',
    mean: 60,
    standardDeviation: 17,
    lowerOffsetInStandardDeviations: -3.45,
    upperOffsetInStandardDeviations: -1.45,
  }),

  createNormalDistributionProblem({
    seed: getSeed('marathon-completion-time'),
    questionType: 'between',
    mean: 190,
    standardDeviation: 17,
    lowerOffsetInStandardDeviations: -0.58,
    upperOffsetInStandardDeviations: 1.28,
  }),

  createNormalDistributionProblem({
    seed: getSeed('giraffes-neck-length'),
    questionType: 'between',
    mean: 4.2,
    standardDeviation: 0.6,
    lowerOffsetInStandardDeviations: 0.15,
    upperOffsetInStandardDeviations: 1.55,
  }),

  createNormalDistributionProblem({
    seed: getSeed('goffins-cockatoos-beak-length'),
    questionType: 'between',
    mean: 22,
    standardDeviation: 2.75,
    lowerOffsetInStandardDeviations: -1.75,
    upperOffsetInStandardDeviations: 2.75,
  }),

  createNormalDistributionProblem({
    seed: getSeed('delay-time-for-planes'),
    questionType: 'between',
    mean: 35,
    standardDeviation: 12,
    lowerOffsetInStandardDeviations: -1.68,
    upperOffsetInStandardDeviations: 1.68,
  }),

  createNormalDistributionProblem({
    seed: getSeed('sleep-duration'),
    questionType: 'between',
    mean: 7.5,
    standardDeviation: 1.2,
    lowerOffsetInStandardDeviations: -1.98,
    upperOffsetInStandardDeviations: 3.08,
  }),

  // Lower - percentiles

  createNormalDistributionProblem({
    seed: getSeed('Syria-yoyos-ban'),
    questionType: 'percentile',
    mean: 300,
    standardDeviation: 60,
    percentile: 0.05,
    percentileTail: 'lower',
  }),

  createNormalDistributionProblem({
    seed: getSeed('intense-dreams'),
    questionType: 'percentile',
    mean: 75,
    standardDeviation: 20,
    percentile: 0.15,
    percentileTail: 'lower',
  }),

  createNormalDistributionProblem({
    seed: getSeed('wind-speed'),
    questionType: 'percentile',
    mean: 55,
    standardDeviation: 17,
    percentile: 0.25,
    percentileTail: 'lower',
  }),

  createNormalDistributionProblem({
    seed: getSeed('weight-of-pigeon'),
    questionType: 'percentile',
    mean: 350,
    standardDeviation: 15,
    percentile: 0.1,
    percentileTail: 'lower',
  }),

  createNormalDistributionProblem({
    seed: getSeed('pigeon-coded-message'),
    questionType: 'percentile',
    mean: 60,
    standardDeviation: 17,
    percentile: 0.02,
    percentileTail: 'lower',
  }),

  createNormalDistributionProblem({
    seed: getSeed('marathon-completion-time'),
    questionType: 'percentile',
    mean: 190,
    standardDeviation: 17,
    percentile: 0.03,
    percentileTail: 'lower',
  }),

  createNormalDistributionProblem({
    seed: getSeed('giraffes-neck-length'),
    questionType: 'percentile',
    mean: 4.2,
    standardDeviation: 0.6,
    percentile: 0.08,
    percentileTail: 'lower',
  }),

  createNormalDistributionProblem({
    seed: getSeed('goffins-cockatoos-beak-length'),
    questionType: 'percentile',
    mean: 22,
    standardDeviation: 2.75,
    percentile: 0.2,
    percentileTail: 'lower',
  }),

  createNormalDistributionProblem({
    seed: getSeed('delay-time-for-planes'),
    questionType: 'percentile',
    mean: 35,
    standardDeviation: 12,
    percentile: 0.05,
    percentileTail: 'lower',
  }),

  createNormalDistributionProblem({
    seed: getSeed('sleep-duration'),
    questionType: 'percentile',
    mean: 7.5,
    standardDeviation: 1.2,
    percentile: 0.01,
    percentileTail: 'lower',
  }),

  // Upper - percentiles

  createNormalDistributionProblem({
    seed: getSeed('Syria-yoyos-ban'),
    questionType: 'percentile',
    mean: 300,
    standardDeviation: 60,
    percentile: 0.02,
    percentileTail: 'upper',
  }),

  createNormalDistributionProblem({
    seed: getSeed('intense-dreams'),
    questionType: 'percentile',
    mean: 75,
    standardDeviation: 20,
    percentile: 0.05,
    percentileTail: 'upper',
  }),

  createNormalDistributionProblem({
    seed: getSeed('wind-speed'),
    questionType: 'percentile',
    mean: 55,
    standardDeviation: 17,
    percentile: 0.15,
    percentileTail: 'upper',
  }),

  createNormalDistributionProblem({
    seed: getSeed('weight-of-pigeon'),
    questionType: 'percentile',
    mean: 350,
    standardDeviation: 15,
    percentile: 0.01,
    percentileTail: 'upper',
  }),

  createNormalDistributionProblem({
    seed: getSeed('pigeon-coded-message'),
    questionType: 'percentile',
    mean: 60,
    standardDeviation: 17,
    percentile: 0.05,
    percentileTail: 'upper',
  }),

  createNormalDistributionProblem({
    seed: getSeed('marathon-completion-time'),
    questionType: 'percentile',
    mean: 190,
    standardDeviation: 17,
    percentile: 0.1,
    percentileTail: 'upper',
  }),

  createNormalDistributionProblem({
    seed: getSeed('giraffes-neck-length'),
    questionType: 'percentile',
    mean: 4.2,
    standardDeviation: 0.6,
    percentile: 0.02,
    percentileTail: 'upper',
  }),

  createNormalDistributionProblem({
    seed: getSeed('goffins-cockatoos-beak-length'),
    questionType: 'percentile',
    mean: 22,
    standardDeviation: 2.75,
    percentile: 0.08,
    percentileTail: 'upper',
  }),

  createNormalDistributionProblem({
    seed: getSeed('delay-time-for-planes'),
    questionType: 'percentile',
    mean: 35,
    standardDeviation: 12,
    percentile: 0.05,
    percentileTail: 'upper',
  }),

  createNormalDistributionProblem({
    seed: getSeed('sleep-duration'),
    questionType: 'percentile',
    mean: 7.5,
    standardDeviation: 1.2,
    percentile: 0.1,
    percentileTail: 'upper',
  }),
];
