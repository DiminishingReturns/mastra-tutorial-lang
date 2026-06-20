import { createHypothesisTestProportionProblem } from '../../generators/createHypothesisTestProportionProblems';

export const generatedHypothesisTestProportionCalibrationSet = [
  createHypothesisTestProportionProblem({
    contextId: 'students-use-transit',
    questionType: 'left-tailed',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'voters-support-bike-lanes',
    questionType: 'right-tailed',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'plants-germinate',
    questionType: 'left-tailed',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'cats-choose-sunny-window',
    questionType: 'two-tailed',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'emails-flagged-spam',
    questionType: 'left-tailed',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'cars-pass-emissions-test',
    questionType: 'right-tailed',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'turtles-reach-water',
    questionType: 'left-tailed',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'jellyfish-detected',
    questionType: 'two-tailed',
  }),
];
