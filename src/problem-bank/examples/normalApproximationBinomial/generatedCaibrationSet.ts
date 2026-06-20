import { createNormalApproximationBinomialProblem } from '../../generators/createNormalApproximationBinomialProblem';

export const generatedNormalApproximationBinomialCalibrationSet = [
  createNormalApproximationBinomialProblem({
    contextId: 'cars-pass-emissions-test',
    questionType: 'less-than',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'squirrels-visit-feeder',
    questionType: 'at-most',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'cats-choose-sunny-window',
    questionType: 'more-than',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'plants-survive-transplant',
    questionType: 'at-least',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'turtles-reach-water',
    questionType: 'between',
  }),

  // Explicit between inclusivity tests

  createNormalApproximationBinomialProblem({
    contextId: 'jellyfish-detected-transect',
    questionType: 'between',
    lowerSuccessCount: 35,
    upperSuccessCount: 50,
    inclusivity: 'exclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'cars-need-minor-repair',
    questionType: 'between',
    lowerSuccessCount: 35,
    upperSuccessCount: 55,
    inclusivity: 'lower-inclusive-upper-exclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'plants-flower-by-week-six',
    questionType: 'between',
    lowerSuccessCount: 90,
    upperSuccessCount: 110,
    inclusivity: 'lower-exclusive-upper-inclusive',
  }),
];
