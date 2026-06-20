import { createHypothesisTestMeanUnknownVarianceProblem } from '../../generators/createHypothesisTestMeanUnknownVarianceProblems';

export const generatedHypothesisTestMeanUnknownVarianceCalibrationSet = [
  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'battery-life',
    questionType: 'left-tailed',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'loaf-mass',
    questionType: 'two-tailed',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'commute-times',
    questionType: 'left-tailed',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'plant-growth',
    questionType: 'right-tailed',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'jellyfish-diameter',
    questionType: 'left-tailed',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'turtle-hatchling-mass',
    questionType: 'two-tailed',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'reaction-times',
    questionType: 'right-tailed',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'phone-screen-time',
    questionType: 'right-tailed',
  }),
];
