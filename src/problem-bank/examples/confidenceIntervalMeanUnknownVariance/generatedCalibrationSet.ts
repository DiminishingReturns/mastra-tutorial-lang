import { createConfidenceIntervalMeanUnknownVarianceProblem } from '../../generators/createConfidenceIntervalMeanUnknownVarianceProblem';

export const generatedConfidenceIntervalMeanUnknownVarianceCalibrationSet = [
  createConfidenceIntervalMeanUnknownVarianceProblem({
    contextId: 'battery-life',
    questionType: 'two-sided',
  }),

  createConfidenceIntervalMeanUnknownVarianceProblem({
    contextId: 'loaf-mass',
    questionType: 'lower-bound',
  }),

  createConfidenceIntervalMeanUnknownVarianceProblem({
    contextId: 'commute-times',
    questionType: 'upper-bound',
  }),

  createConfidenceIntervalMeanUnknownVarianceProblem({
    contextId: 'plant-growth',
    questionType: 'two-sided',
  }),

  createConfidenceIntervalMeanUnknownVarianceProblem({
    contextId: 'jellyfish-diameter',
    questionType: 'lower-bound',
  }),

  createConfidenceIntervalMeanUnknownVarianceProblem({
    contextId: 'turtle-hatchling-mass',
    questionType: 'upper-bound',
  }),

  createConfidenceIntervalMeanUnknownVarianceProblem({
    contextId: 'reaction-times',
    questionType: 'two-sided',
  }),

  createConfidenceIntervalMeanUnknownVarianceProblem({
    contextId: 'phone-screen-time',
    questionType: 'lower-bound',
  }),
];
