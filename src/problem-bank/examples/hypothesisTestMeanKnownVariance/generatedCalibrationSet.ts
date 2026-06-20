import { createHypothesisTestMeanKnownVarianceProblem } from '../../generators/createHypothesisTestMeanKnownVarianceProblems';

export const generatedHypothesisTestMeanKnownVarianceCalibrationSet = [
  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'battery-life',
    questionType: 'left-tailed',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'loaf-mass',
    questionType: 'two-tailed',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'commute-times',
    questionType: 'left-tailed',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'plant-growth',
    questionType: 'right-tailed',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'jellyfish-diameter',
    questionType: 'left-tailed',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'turtle-hatchling-mass',
    questionType: 'two-tailed',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'reaction-times',
    questionType: 'right-tailed',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'phone-screen-time',
    questionType: 'right-tailed',
  }),
];
