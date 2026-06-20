import { createCentralLimitTheoremProblem } from '../../generators/createCentralLimitProblems';

export const generatedCentralLimitTheoremCalibrationSet = [
  createCentralLimitTheoremProblem({
    contextId: 'commute-times',
    questionType: 'less-than',
  }),

  createCentralLimitTheoremProblem({
    contextId: 'phone-screen-time',
    questionType: 'greater-than',
  }),

  createCentralLimitTheoremProblem({
    contextId: 'plant-growth',
    questionType: 'between',
  }),

  createCentralLimitTheoremProblem({
    contextId: 'battery-life',
    questionType: 'less-than',
  }),

  createCentralLimitTheoremProblem({
    contextId: 'reaction-times',
    questionType: 'greater-than',
  }),

  createCentralLimitTheoremProblem({
    contextId: 'loaf-mass',
    questionType: 'between',
  }),

  createCentralLimitTheoremProblem({
    contextId: 'jellyfish-diameter',
    questionType: 'less-than',
  }),

  createCentralLimitTheoremProblem({
    contextId: 'turtle-hatchling-mass',
    questionType: 'between',
  }),

  // End of calibration set.
  // Start of course context problems.

  // Less-than

  createCentralLimitTheoremProblem({
    contextId: 'barnacle-geese-chick-mass',
    questionType: 'less-than',
    upperSampleMeanThreshold: 145,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'trained-ferrets',
    questionType: 'less-than',
    upperSampleMeanThreshold: 13,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'medication-absorption-time',
    questionType: 'less-than',
    upperSampleMeanThreshold: 27,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'fees-for-subscription-services',
    questionType: 'less-than',
    upperSampleMeanThreshold: 57,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'time-spent-in-sauna',
    questionType: 'less-than',
    upperSampleMeanThreshold: 70,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'number-of-texts-sent-per-day',
    questionType: 'less-than',
    upperSampleMeanThreshold: 18,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'time-spent-on-apps-per-day',
    questionType: 'less-than',
    upperSampleMeanThreshold: 110,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'jellyfish-naptime',
    questionType: 'less-than',
    upperSampleMeanThreshold: 7.5,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'weed-eating-donkeys',
    questionType: 'less-than',
    upperSampleMeanThreshold: 1080,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'number-of-words-in-a-will',
    questionType: 'less-than',
    upperSampleMeanThreshold: 2531,
  }),

  // Greater-than

  createCentralLimitTheoremProblem({
    contextId: 'barnacle-geese-chick-mass',
    questionType: 'greater-than',
    lowerSampleMeanThreshold: 155,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'trained-ferrets',
    questionType: 'greater-than',
    lowerSampleMeanThreshold: 17,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'medication-absorption-time',
    questionType: 'greater-than',
    lowerSampleMeanThreshold: 33,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'fees-for-subscription-services',
    questionType: 'greater-than',
    lowerSampleMeanThreshold: 62,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'time-spent-in-sauna',
    questionType: 'greater-than',
    lowerSampleMeanThreshold: 74,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'number-of-texts-sent-per-day',
    questionType: 'greater-than',
    lowerSampleMeanThreshold: 23,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'time-spent-on-apps-per-day',
    questionType: 'greater-than',
    lowerSampleMeanThreshold: 129,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'jellyfish-naptime',
    questionType: 'greater-than',
    lowerSampleMeanThreshold: 8.2,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'weed-eating-donkeys',
    questionType: 'greater-than',
    lowerSampleMeanThreshold: 1144,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'number-of-words-in-a-will',
    questionType: 'greater-than',
    lowerSampleMeanThreshold: 2542,
  }),

  // Between

  createCentralLimitTheoremProblem({
    contextId: 'barnacle-geese-chick-mass',
    questionType: 'between',
    lowerSampleMeanThreshold: 145,
    upperSampleMeanThreshold: 155,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'trained-ferrets',
    questionType: 'between',
    lowerSampleMeanThreshold: 13,
    upperSampleMeanThreshold: 17,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'medication-absorption-time',
    questionType: 'between',
    lowerSampleMeanThreshold: 27,
    upperSampleMeanThreshold: 33,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'fees-for-subscription-services',
    questionType: 'between',
    lowerSampleMeanThreshold: 57,
    upperSampleMeanThreshold: 62,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'time-spent-in-sauna',
    questionType: 'between',
    lowerSampleMeanThreshold: 70,
    upperSampleMeanThreshold: 74,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'number-of-texts-sent-per-day',
    questionType: 'between',
    lowerSampleMeanThreshold: 18,
    upperSampleMeanThreshold: 23,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'time-spent-on-apps-per-day',
    questionType: 'between',
    lowerSampleMeanThreshold: 100,
    upperSampleMeanThreshold: 129,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'jellyfish-naptime',
    questionType: 'between',
    lowerSampleMeanThreshold: 7.5,
    upperSampleMeanThreshold: 8.2,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'weed-eating-donkeys',
    questionType: 'between',
    lowerSampleMeanThreshold: 1080,
    upperSampleMeanThreshold: 1144,
  }),

  createCentralLimitTheoremProblem({
    contextId: 'number-of-words-in-a-will',
    questionType: 'between',
    lowerSampleMeanThreshold: 2531,
    upperSampleMeanThreshold: 2542,
  }),
];
