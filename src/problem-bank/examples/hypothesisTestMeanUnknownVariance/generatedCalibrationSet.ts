import { createHypothesisTestMeanUnknownVarianceProblem } from '../../generators/createHypothesisTestMeanUnknownVarianceProblems';

export const generatedHypothesisTestMeanUnknownVarianceCalibrationSet = [
  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'battery-life',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'battery-life',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'loaf-mass',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'loaf-mass',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'commute-times',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'commute-times',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'plant-growth',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'plant-growth',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'jellyfish-diameter',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'jellyfish-diameter',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'reaction-times',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'reaction-times',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  // End of calibration set.  Start of course set.

  // DT.  Fail to reject.  Strong, weak, borderline evidence.

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'mummy-illiad',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'chennai-traffic-lights',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'stress-blood-clotting',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'pine-marten-euro',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'harry-potter-reading-time',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'cockatoo-dancing-time',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'ai-heart-test-prediction',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'bottled-water-freshness',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'octopus-grudge',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'fork-weight',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  // DT.  Reject.  Weak, borderline, strong evidence.

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'mummy-illiad',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'chennai-traffic-lights',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'stress-blood-clotting',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'pine-marten-euro',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'harry-potter-reading-time',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'cockatoo-dancing-time',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'ai-heart-test-prediction',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'bottled-water-freshness',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'octopus-grudge',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'fork-weight',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  // LT.  Fail to reject.  Borderline, strong, weak evidence.

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'mummy-illiad',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'chennai-traffic-lights',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'stress-blood-clotting',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'pine-marten-euro',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'harry-potter-reading-time',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'cockatoo-dancing-time',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'ai-heart-test-prediction',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'bottled-water-freshness',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'octopus-grudge',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'fork-weight',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  // LT.  Reject.  Strong, weak, borderline evidence.

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'mummy-illiad',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'chennai-traffic-lights',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'stress-blood-clotting',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'pine-marten-euro',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'harry-potter-reading-time',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'cockatoo-dancing-time',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'ai-heart-test-prediction',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'bottled-water-freshness',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'octopus-grudge',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'fork-weight',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  // RT.  Fail to reject.  Weak, borderline, strong evidence.

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'mummy-illiad',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'chennai-traffic-lights',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'stress-blood-clotting',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'pine-marten-euro',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'harry-potter-reading-time',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'cockatoo-dancing-time',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'ai-heart-test-prediction',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'bottled-water-freshness',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'octopus-grudge',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'fork-weight',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  // RT.  Reject.  Borderline, strong, weak evidence.

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'mummy-illiad',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'chennai-traffic-lights',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'stress-blood-clotting',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'pine-marten-euro',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'harry-potter-reading-time',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'cockatoo-dancing-time',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'ai-heart-test-prediction',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'bottled-water-freshness',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'octopus-grudge',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanUnknownVarianceProblem({
    contextId: 'fork-weight',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),
];
