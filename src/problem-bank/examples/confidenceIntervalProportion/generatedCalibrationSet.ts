import { createConfidenceIntervalProportionProblem } from '../../generators/createConfidenceIntervalProportionProblems';

export const generatedConfidenceIntervalProportionCalibrationSet = [
  createConfidenceIntervalProportionProblem({
    contextId: 'students-use-transit',
    questionType: 'two-sided',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'voters-support-bike-lanes',
    questionType: 'lower-bound',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'plants-germinate',
    questionType: 'upper-bound',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'cats-choose-sunny-window',
    questionType: 'sample-size-with-preliminary-estimate',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'emails-flagged-spam',
    questionType: 'sample-size-no-preliminary-estimate',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'cars-pass-emissions-test',
    questionType: 'two-sided',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'turtles-reach-water',
    questionType: 'lower-bound',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'jellyfish-detected',
    questionType: 'upper-bound',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'voters-support-bike-lanes',
    questionType: 'sample-size-with-preliminary-estimate',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'students-use-transit',
    questionType: 'sample-size-no-preliminary-estimate',
  }),
];
