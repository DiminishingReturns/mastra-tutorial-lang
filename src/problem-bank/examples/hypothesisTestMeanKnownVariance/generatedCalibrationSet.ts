import { createHypothesisTestMeanKnownVarianceProblem } from '../../generators/createHypothesisTestMeanKnownVarianceProblems';

export const generatedHypothesisTestMeanKnownVarianceCalibrationSet = [
  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'battery-life',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'loaf-mass',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'commute-times',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'plant-growth',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'jellyfish-diameter',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'turtle-hatchling-mass',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'reaction-times',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'phone-screen-time',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  // End of calibration set.  Start of course problems.

  // Double tail tests.  Reject null hypothesis with strong, weak, and borderline evidence.

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'church-spritz',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'gruens-effect',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'ant-seed-dispersal',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'pistols-pilates',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'rice-growth',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'secret-keeping',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'expensive-christmas-tree',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'coffee-hand-wash',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'cheese-holes',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'teabag-insect-dna',
    questionType: 'two-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  // Double tail tests.  Fail to reject null hypothesis with weak, borderline, and strong evidence.

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'church-spritz',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'gruens-effect',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'ant-seed-dispersal',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'pistols-pilates',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'rice-growth',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'secret-keeping',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'expensive-christmas-tree',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'coffee-hand-wash',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'cheese-holes',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'teabag-insect-dna',
    questionType: 'two-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  // Left tail tests.  Fail to reject null hypothesis with borderline, strong, weak evidence.

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'church-spritz',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'gruens-effect',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'ant-seed-dispersal',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'pistols-pilates',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'rice-growth',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'secret-keeping',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'expensive-christmas-tree',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'coffee-hand-wash',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'cheese-holes',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'teabag-insect-dna',
    questionType: 'left-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  // Left tail tests.  Reject null hypothesis with strong, weak, and borderline evidence.

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'church-spritz',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'gruens-effect',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'ant-seed-dispersal',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'pistols-pilates',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'rice-growth',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'secret-keeping',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'expensive-christmas-tree',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'coffee-hand-wash',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'cheese-holes',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'teabag-insect-dna',
    questionType: 'left-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  // Right tail tests.  Fail to reject null hypothesis with weak, borderline, strong evidence.

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'church-spritz',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'gruens-effect',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'ant-seed-dispersal',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'pistols-pilates',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'rice-growth',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'secret-keeping',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'expensive-christmas-tree',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'coffee-hand-wash',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'cheese-holes',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'teabag-insect-dna',
    questionType: 'right-tailed',
    expectedDecision: 'fail-to-reject-null',
    evidenceStrength: 'weak',
  }),

  // Right tail tests.  Reject null hypothesis with borderline, strong, weak evidence.

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'church-spritz',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'gruens-effect',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'ant-seed-dispersal',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'pistols-pilates',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'rice-growth',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'secret-keeping',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'expensive-christmas-tree',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'coffee-hand-wash',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'strong',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'cheese-holes',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'weak',
  }),

  createHypothesisTestMeanKnownVarianceProblem({
    contextId: 'teabag-insect-dna',
    questionType: 'right-tailed',
    expectedDecision: 'reject-null',
    evidenceStrength: 'borderline',
  }),
];
