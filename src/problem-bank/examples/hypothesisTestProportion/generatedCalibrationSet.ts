import { createHypothesisTestProportionProblem } from '../../generators/createHypothesisTestProportionProblems';

export const generatedHypothesisTestProportionCalibrationSet = [
  createHypothesisTestProportionProblem({
    contextId: 'students-use-transit',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'students-use-transit',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'voters-support-bike-lanes',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'voters-support-bike-lanes',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'plants-germinate',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'plants-germinate',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'cats-choose-sunny-window',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'cats-choose-sunny-window',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'emails-flagged-spam',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'emails-flagged-spam',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'cars-pass-emissions-test',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'cars-pass-emissions-test',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'jellyfish-detected',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'jellyfish-detected',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  // End of calibration set.  Start of course problems.

  // DT. Fail to reject null.  Strong, weak, borderline evidence.

  createHypothesisTestProportionProblem({
    contextId: 'godzilla-movie',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'funeral-crying',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'fake-online-stores',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'dog-snack-liking',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'rat-basketball-playing',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'luxury-car-drivers',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'paris-syndrome',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'cat-wiggle',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'jean-pocket-size',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'moth-pollination',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  // DT. Reject.  Weak, borderline, strong evidence.

  createHypothesisTestProportionProblem({
    contextId: 'godzilla-movie',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'funeral-crying',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'fake-online-stores',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'dog-snack-liking',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'rat-basketball-playing',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'luxury-car-drivers',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'paris-syndrome',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'cat-wiggle',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'jean-pocket-size',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'moth-pollination',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  // LT. Fail to reject null.  Borderline, strong, weak evidence.

  createHypothesisTestProportionProblem({
    contextId: 'godzilla-movie',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'funeral-crying',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'fake-online-stores',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'dog-snack-liking',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'rat-basketball-playing',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'luxury-car-drivers',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'paris-syndrome',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'cat-wiggle',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'jean-pocket-size',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'moth-pollination',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  // LT. Reject.  Strong, weak, borderline evidence.

  createHypothesisTestProportionProblem({
    contextId: 'godzilla-movie',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'funeral-crying',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'fake-online-stores',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'dog-snack-liking',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'rat-basketball-playing',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'luxury-car-drivers',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'paris-syndrome',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'cat-wiggle',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'jean-pocket-size',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'moth-pollination',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  // RT. Fail to reject null.  Weak, borderline, strong evidence.

  createHypothesisTestProportionProblem({
    contextId: 'godzilla-movie',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'funeral-crying',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'fake-online-stores',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'dog-snack-liking',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'rat-basketball-playing',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'luxury-car-drivers',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'paris-syndrome',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'cat-wiggle',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'jean-pocket-size',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'moth-pollination',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  // RT. Reject.  Strong, weak, borderline evidence.

  createHypothesisTestProportionProblem({
    contextId: 'godzilla-movie',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'funeral-crying',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'fake-online-stores',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'dog-snack-liking',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'rat-basketball-playing',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'luxury-car-drivers',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'paris-syndrome',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'cat-wiggle',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'jean-pocket-size',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestProportionProblem({
    contextId: 'moth-pollination',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),
];
