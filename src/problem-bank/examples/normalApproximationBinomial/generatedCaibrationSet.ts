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

  // End of Calibration examples
  // Start of class contexts

  createNormalApproximationBinomialProblem({
    contextId: 'spiders-build-web',
    questionType: 'less-than',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'snake-bite-men',
    questionType: 'less-than',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'conspiracy-theories',
    questionType: 'less-than',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'dragonflies-success-rate',
    questionType: 'less-than',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'bubblegum-broccoli',
    questionType: 'less-than',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'lost-luggage',
    questionType: 'less-than',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'speeding-offences',
    questionType: 'less-than',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'car-blessings',
    questionType: 'less-than',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'portugese-employers',
    questionType: 'less-than',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'the-curse-of-knowledge',
    questionType: 'less-than',
  }),

  // More-than

  createNormalApproximationBinomialProblem({
    contextId: 'spiders-build-web',
    questionType: 'more-than',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'snake-bite-men',
    questionType: 'more-than',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'conspiracy-theories',
    questionType: 'more-than',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'dragonflies-success-rate',
    questionType: 'more-than',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'bubblegum-broccoli',
    questionType: 'more-than',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'lost-luggage',
    questionType: 'more-than',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'speeding-offences',
    questionType: 'more-than',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'car-blessings',
    questionType: 'more-than',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'portugese-employers',
    questionType: 'more-than',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'the-curse-of-knowledge',
    questionType: 'more-than',
  }),

  // At-least

  createNormalApproximationBinomialProblem({
    contextId: 'spiders-build-web',
    questionType: 'at-least',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'snake-bite-men',
    questionType: 'at-least',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'conspiracy-theories',
    questionType: 'at-least',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'dragonflies-success-rate',
    questionType: 'at-least',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'bubblegum-broccoli',
    questionType: 'at-least',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'lost-luggage',
    questionType: 'at-least',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'speeding-offences',
    questionType: 'at-least',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'car-blessings',
    questionType: 'at-least',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'portugese-employers',
    questionType: 'at-least',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'the-curse-of-knowledge',
    questionType: 'at-least',
  }),

  // At-most

  createNormalApproximationBinomialProblem({
    contextId: 'spiders-build-web',
    questionType: 'at-most',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'snake-bite-men',
    questionType: 'at-most',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'conspiracy-theories',
    questionType: 'at-most',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'dragonflies-success-rate',
    questionType: 'at-most',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'bubblegum-broccoli',
    questionType: 'at-most',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'lost-luggage',
    questionType: 'at-most',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'speeding-offences',
    questionType: 'at-most',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'car-blessings',
    questionType: 'at-most',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'portugese-employers',
    questionType: 'at-most',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'the-curse-of-knowledge',
    questionType: 'at-most',
  }),

  // Between exclusive

  createNormalApproximationBinomialProblem({
    contextId: 'spiders-build-web',
    questionType: 'between',
    inclusivity: 'exclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'snake-bite-men',
    questionType: 'between',
    inclusivity: 'exclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'conspiracy-theories',
    questionType: 'between',
    inclusivity: 'exclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'dragonflies-success-rate',
    questionType: 'between',
    inclusivity: 'exclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'bubblegum-broccoli',
    questionType: 'between',
    inclusivity: 'exclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'lost-luggage',
    questionType: 'between',
    inclusivity: 'exclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'speeding-offences',
    questionType: 'between',
    inclusivity: 'exclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'car-blessings',
    questionType: 'between',
    inclusivity: 'exclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'portugese-employers',
    questionType: 'between',
    inclusivity: 'exclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'the-curse-of-knowledge',
    questionType: 'between',
    inclusivity: 'exclusive',
  }),

  // Between inclusive

  createNormalApproximationBinomialProblem({
    contextId: 'spiders-build-web',
    questionType: 'between',
    inclusivity: 'inclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'snake-bite-men',
    questionType: 'between',
    inclusivity: 'inclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'conspiracy-theories',
    questionType: 'between',
    inclusivity: 'inclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'dragonflies-success-rate',
    questionType: 'between',
    inclusivity: 'inclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'bubblegum-broccoli',
    questionType: 'between',
    inclusivity: 'inclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'lost-luggage',
    questionType: 'between',
    inclusivity: 'inclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'speeding-offences',
    questionType: 'between',
    inclusivity: 'inclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'car-blessings',
    questionType: 'between',
    inclusivity: 'inclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'portugese-employers',
    questionType: 'between',
    inclusivity: 'inclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'the-curse-of-knowledge',
    questionType: 'between',
    inclusivity: 'inclusive',
  }),

  // Between lower-inclusive, upper-exclusive

  createNormalApproximationBinomialProblem({
    contextId: 'spiders-build-web',
    questionType: 'between',
    inclusivity: 'lower-inclusive-upper-exclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'snake-bite-men',
    questionType: 'between',
    inclusivity: 'lower-inclusive-upper-exclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'conspiracy-theories',
    questionType: 'between',
    inclusivity: 'lower-inclusive-upper-exclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'dragonflies-success-rate',
    questionType: 'between',
    inclusivity: 'lower-inclusive-upper-exclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'bubblegum-broccoli',
    questionType: 'between',
    inclusivity: 'lower-inclusive-upper-exclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'lost-luggage',
    questionType: 'between',
    inclusivity: 'lower-inclusive-upper-exclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'speeding-offences',
    questionType: 'between',
    inclusivity: 'lower-inclusive-upper-exclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'car-blessings',
    questionType: 'between',
    inclusivity: 'lower-inclusive-upper-exclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'portugese-employers',
    questionType: 'between',
    inclusivity: 'lower-inclusive-upper-exclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'the-curse-of-knowledge',
    questionType: 'between',
    inclusivity: 'lower-inclusive-upper-exclusive',
  }),

  // Between lower-exclusive, upper-inclusive

  createNormalApproximationBinomialProblem({
    contextId: 'spiders-build-web',
    questionType: 'between',
    inclusivity: 'lower-exclusive-upper-inclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'snake-bite-men',
    questionType: 'between',
    inclusivity: 'lower-exclusive-upper-inclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'conspiracy-theories',
    questionType: 'between',
    inclusivity: 'lower-exclusive-upper-inclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'dragonflies-success-rate',
    questionType: 'between',
    inclusivity: 'lower-exclusive-upper-inclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'bubblegum-broccoli',
    questionType: 'between',
    inclusivity: 'lower-exclusive-upper-inclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'lost-luggage',
    questionType: 'between',
    inclusivity: 'lower-exclusive-upper-inclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'speeding-offences',
    questionType: 'between',
    inclusivity: 'lower-exclusive-upper-inclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'car-blessings',
    questionType: 'between',
    inclusivity: 'lower-exclusive-upper-inclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'portugese-employers',
    questionType: 'between',
    inclusivity: 'lower-exclusive-upper-inclusive',
  }),

  createNormalApproximationBinomialProblem({
    contextId: 'the-curse-of-knowledge',
    questionType: 'between',
    inclusivity: 'lower-exclusive-upper-inclusive',
  }),
];
