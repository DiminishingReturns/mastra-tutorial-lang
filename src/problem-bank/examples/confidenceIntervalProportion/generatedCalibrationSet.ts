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

  // End of calibration set.  Start of course problems.
  createConfidenceIntervalProportionProblem({
    contextId: 'tears-contain-natural-painkiller',
    questionType: 'two-sided',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'ice-cream-victory',
    questionType: 'two-sided',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'seatbelt-estonia',
    questionType: 'two-sided',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'official-languages-new-zealand',
    questionType: 'two-sided',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'swiss-cheese-funeral',
    questionType: 'two-sided',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'ai-romantic-partner',
    questionType: 'two-sided',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'female-dragonflies-fake-death',
    questionType: 'two-sided',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'fire-alarm-wasabi',
    questionType: 'two-sided',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'flamingoes-migrate-slow-aging',
    questionType: 'two-sided',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'music-anhedonia',
    questionType: 'two-sided',
  }),

  // lower bound problems

  createConfidenceIntervalProportionProblem({
    contextId: 'tears-contain-natural-painkiller',
    questionType: 'lower-bound',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'ice-cream-victory',
    questionType: 'lower-bound',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'seatbelt-estonia',
    questionType: 'lower-bound',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'official-languages-new-zealand',
    questionType: 'lower-bound',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'swiss-cheese-funeral',
    questionType: 'lower-bound',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'ai-romantic-partner',
    questionType: 'lower-bound',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'female-dragonflies-fake-death',
    questionType: 'lower-bound',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'fire-alarm-wasabi',
    questionType: 'lower-bound',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'flamingoes-migrate-slow-aging',
    questionType: 'lower-bound',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'music-anhedonia',
    questionType: 'lower-bound',
  }),

  // upper bound problems

  createConfidenceIntervalProportionProblem({
    contextId: 'tears-contain-natural-painkiller',
    questionType: 'upper-bound',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'ice-cream-victory',
    questionType: 'upper-bound',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'seatbelt-estonia',
    questionType: 'upper-bound',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'official-languages-new-zealand',
    questionType: 'upper-bound',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'swiss-cheese-funeral',
    questionType: 'upper-bound',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'ai-romantic-partner',
    questionType: 'upper-bound',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'female-dragonflies-fake-death',
    questionType: 'upper-bound',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'fire-alarm-wasabi',
    questionType: 'upper-bound',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'flamingoes-migrate-slow-aging',
    questionType: 'upper-bound',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'music-anhedonia',
    questionType: 'upper-bound',
  }),

  // sample size problems; with preliminary estimate

  createConfidenceIntervalProportionProblem({
    contextId: 'tears-contain-natural-painkiller',
    questionType: 'sample-size-with-preliminary-estimate',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'ice-cream-victory',
    questionType: 'sample-size-with-preliminary-estimate',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'seatbelt-estonia',
    questionType: 'sample-size-with-preliminary-estimate',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'official-languages-new-zealand',
    questionType: 'sample-size-with-preliminary-estimate',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'swiss-cheese-funeral',
    questionType: 'sample-size-with-preliminary-estimate',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'ai-romantic-partner',
    questionType: 'sample-size-with-preliminary-estimate',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'female-dragonflies-fake-death',
    questionType: 'sample-size-with-preliminary-estimate',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'fire-alarm-wasabi',
    questionType: 'sample-size-with-preliminary-estimate',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'flamingoes-migrate-slow-aging',
    questionType: 'sample-size-with-preliminary-estimate',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'music-anhedonia',
    questionType: 'sample-size-with-preliminary-estimate',
  }),

  // sample size problems; no preliminary estimate

  createConfidenceIntervalProportionProblem({
    contextId: 'tears-contain-natural-painkiller',
    questionType: 'sample-size-no-preliminary-estimate',
  }),
  createConfidenceIntervalProportionProblem({
    contextId: 'ice-cream-victory',
    questionType: 'sample-size-no-preliminary-estimate',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'seatbelt-estonia',
    questionType: 'sample-size-no-preliminary-estimate',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'official-languages-new-zealand',
    questionType: 'sample-size-no-preliminary-estimate',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'swiss-cheese-funeral',
    questionType: 'sample-size-no-preliminary-estimate',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'ai-romantic-partner',
    questionType: 'sample-size-no-preliminary-estimate',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'female-dragonflies-fake-death',
    questionType: 'sample-size-no-preliminary-estimate',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'fire-alarm-wasabi',
    questionType: 'sample-size-no-preliminary-estimate',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'flamingoes-migrate-slow-aging',
    questionType: 'sample-size-no-preliminary-estimate',
  }),

  createConfidenceIntervalProportionProblem({
    contextId: 'music-anhedonia',
    questionType: 'sample-size-no-preliminary-estimate',
  }),
];
