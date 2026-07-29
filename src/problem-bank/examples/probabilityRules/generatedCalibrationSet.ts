import { createProbabilityRulesProblem } from '../../generators/createProbabilityRulesProblems';

export const generatedProbabilityRulesCalibrationSet = [
  createProbabilityRulesProblem({
    contextId: 'test-preparation',
    questionType: 'total-probability',
  }),

  createProbabilityRulesProblem({
    contextId: 'app-feature-usability',
    questionType: 'bayes-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'library-workshop',
    questionType: 'union-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'library-workshop',
    questionType: 'conditional-probability',
  }),

  createProbabilityRulesProblem({
    contextId: 'science-club-activities',
    questionType: 'independence',
  }),

  createProbabilityRulesProblem({
    contextId: 'campus-events',
    questionType: 'only-a',
  }),

  createProbabilityRulesProblem({
    contextId: 'campus-events',
    questionType: 'only-b',
  }),

  createProbabilityRulesProblem({
    contextId: 'equipment-checks',
    questionType: 'conditional-probability',
  }),

  createProbabilityRulesProblem({
    contextId: 'equipment-checks',
    questionType: 'complement-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'equipment-checks',
    questionType: 'intersection-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'student-course-platform',
    questionType: 'conditional-probability',
  }),

  createProbabilityRulesProblem({
    contextId: 'student-course-platform',
    questionType: 'union-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'student-course-platform',
    questionType: 'only-a',
  }),

  createProbabilityRulesProblem({
    contextId: 'student-course-platform',
    questionType: 'only-b',
  }),

  createProbabilityRulesProblem({
    contextId: 'orientation-session-choice',
    questionType: 'union-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'orientation-session-choice',
    questionType: 'independence',
  }),

  createProbabilityRulesProblem({
    contextId: 'campus-survey-counts',
    questionType: 'conditional-probability',
  }),

  createProbabilityRulesProblem({
    contextId: 'campus-survey-counts',
    questionType: 'independence',
  }),

  createProbabilityRulesProblem({
    contextId: 'campus-survey-counts',
    questionType: 'only-a',
  }),

  createProbabilityRulesProblem({
    contextId: 'medical-screening',
    questionType: 'bayes-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'medical-screening',
    questionType: 'total-probability',
  }),

  createProbabilityRulesProblem({
    contextId: 'seed-germination',
    questionType: 'total-probability',
  }),

  createProbabilityRulesProblem({
    contextId: 'seed-germination',
    questionType: 'bayes-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'email-filter',
    questionType: 'bayes-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'email-filter',
    questionType: 'total-probability',
  }),

  // End of calibration set.  Beginning of course set.  These problems are not used for calibration, but they are used in the course.

  // Two-event problems: union-rule.

  createProbabilityRulesProblem({
    contextId: 'histamine-study',
    questionType: 'union-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'stress-study',
    questionType: 'union-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'extreme-heat-event',
    questionType: 'union-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'bumblebee-morse-code',
    questionType: 'union-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'items-left-in-ubers',
    questionType: 'union-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'speed-camera-offences',
    questionType: 'union-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'aging-colleagues',
    questionType: 'union-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'colon-or-semicolon',
    questionType: 'union-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'doorway-effect',
    questionType: 'union-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'parrot-video-call',
    questionType: 'union-rule',
  }),

  // Two-event problems: intersection-rule.

  createProbabilityRulesProblem({
    contextId: 'histamine-study',
    questionType: 'intersection-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'stress-study',
    questionType: 'intersection-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'extreme-heat-event',
    questionType: 'intersection-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'bumblebee-morse-code',
    questionType: 'intersection-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'items-left-in-ubers',
    questionType: 'intersection-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'speed-camera-offences',
    questionType: 'intersection-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'aging-colleagues',
    questionType: 'intersection-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'colon-or-semicolon',
    questionType: 'intersection-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'doorway-effect',
    questionType: 'intersection-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'parrot-video-call',
    questionType: 'intersection-rule',
  }),

  // Two-event problems: complement-rule.

  createProbabilityRulesProblem({
    contextId: 'histamine-study',
    questionType: 'complement-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'stress-study',
    questionType: 'complement-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'extreme-heat-event',
    questionType: 'complement-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'bumblebee-morse-code',
    questionType: 'complement-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'items-left-in-ubers',
    questionType: 'complement-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'speed-camera-offences',
    questionType: 'complement-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'aging-colleagues',
    questionType: 'complement-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'colon-or-semicolon',
    questionType: 'complement-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'doorway-effect',
    questionType: 'complement-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'parrot-video-call',
    questionType: 'complement-rule',
  }),

  // Two-event problems: conditional-probability.

  createProbabilityRulesProblem({
    contextId: 'histamine-study',
    questionType: 'conditional-probability',
  }),

  createProbabilityRulesProblem({
    contextId: 'stress-study',
    questionType: 'conditional-probability',
  }),

  createProbabilityRulesProblem({
    contextId: 'extreme-heat-event',
    questionType: 'conditional-probability',
  }),

  createProbabilityRulesProblem({
    contextId: 'bumblebee-morse-code',
    questionType: 'conditional-probability',
  }),

  createProbabilityRulesProblem({
    contextId: 'items-left-in-ubers',
    questionType: 'conditional-probability',
  }),

  createProbabilityRulesProblem({
    contextId: 'speed-camera-offences',
    questionType: 'conditional-probability',
  }),

  createProbabilityRulesProblem({
    contextId: 'aging-colleagues',
    questionType: 'conditional-probability',
  }),

  createProbabilityRulesProblem({
    contextId: 'colon-or-semicolon',
    questionType: 'conditional-probability',
  }),

  createProbabilityRulesProblem({
    contextId: 'doorway-effect',
    questionType: 'conditional-probability',
  }),

  createProbabilityRulesProblem({
    contextId: 'parrot-video-call',
    questionType: 'conditional-probability',
  }),

  // Two-event problems: independence.

  createProbabilityRulesProblem({
    contextId: 'histamine-study',
    questionType: 'independence',
  }),

  createProbabilityRulesProblem({
    contextId: 'stress-study',
    questionType: 'independence',
  }),

  createProbabilityRulesProblem({
    contextId: 'extreme-heat-event',
    questionType: 'independence',
  }),

  createProbabilityRulesProblem({
    contextId: 'bumblebee-morse-code',
    questionType: 'independence',
  }),

  createProbabilityRulesProblem({
    contextId: 'items-left-in-ubers',
    questionType: 'independence',
  }),

  createProbabilityRulesProblem({
    contextId: 'speed-camera-offences',
    questionType: 'independence',
  }),

  createProbabilityRulesProblem({
    contextId: 'aging-colleagues',
    questionType: 'independence',
  }),

  createProbabilityRulesProblem({
    contextId: 'colon-or-semicolon',
    questionType: 'independence',
  }),

  createProbabilityRulesProblem({
    contextId: 'doorway-effect',
    questionType: 'independence',
  }),

  createProbabilityRulesProblem({
    contextId: 'parrot-video-call',
    questionType: 'independence',
  }),

  // Two-event problems: only-a.

  createProbabilityRulesProblem({
    contextId: 'histamine-study',
    questionType: 'only-a',
  }),

  createProbabilityRulesProblem({
    contextId: 'stress-study',
    questionType: 'only-a',
  }),

  createProbabilityRulesProblem({
    contextId: 'extreme-heat-event',
    questionType: 'only-a',
  }),

  createProbabilityRulesProblem({
    contextId: 'bumblebee-morse-code',
    questionType: 'only-a',
  }),

  createProbabilityRulesProblem({
    contextId: 'items-left-in-ubers',
    questionType: 'only-a',
  }),

  createProbabilityRulesProblem({
    contextId: 'speed-camera-offences',
    questionType: 'only-a',
  }),

  createProbabilityRulesProblem({
    contextId: 'aging-colleagues',
    questionType: 'only-a',
  }),

  createProbabilityRulesProblem({
    contextId: 'colon-or-semicolon',
    questionType: 'only-a',
  }),

  createProbabilityRulesProblem({
    contextId: 'doorway-effect',
    questionType: 'only-a',
  }),

  createProbabilityRulesProblem({
    contextId: 'parrot-video-call',
    questionType: 'only-a',
  }),

  // Two-event problems: only-b.

  createProbabilityRulesProblem({
    contextId: 'histamine-study',
    questionType: 'only-b',
  }),

  createProbabilityRulesProblem({
    contextId: 'stress-study',
    questionType: 'only-b',
  }),

  createProbabilityRulesProblem({
    contextId: 'extreme-heat-event',
    questionType: 'only-b',
  }),

  createProbabilityRulesProblem({
    contextId: 'bumblebee-morse-code',
    questionType: 'only-b',
  }),

  createProbabilityRulesProblem({
    contextId: 'items-left-in-ubers',
    questionType: 'only-b',
  }),

  createProbabilityRulesProblem({
    contextId: 'speed-camera-offences',
    questionType: 'only-b',
  }),

  createProbabilityRulesProblem({
    contextId: 'aging-colleagues',
    questionType: 'only-b',
  }),

  createProbabilityRulesProblem({
    contextId: 'colon-or-semicolon',
    questionType: 'only-b',
  }),

  createProbabilityRulesProblem({
    contextId: 'doorway-effect',
    questionType: 'only-b',
  }),

  createProbabilityRulesProblem({
    contextId: 'parrot-video-call',
    questionType: 'only-b',
  }),

  // Partition problems: total-probability.

  createProbabilityRulesProblem({
    contextId: 'placebo-study',
    questionType: 'total-probability',
  }),

  createProbabilityRulesProblem({
    contextId: 'crying-study',
    questionType: 'total-probability',
  }),

  createProbabilityRulesProblem({
    contextId: 'car-sickness-music',
    questionType: 'total-probability',
  }),

  createProbabilityRulesProblem({
    contextId: 'men-eating-study',
    questionType: 'total-probability',
  }),

  createProbabilityRulesProblem({
    contextId: 'egyptian-priests',
    questionType: 'total-probability',
  }),

  createProbabilityRulesProblem({
    contextId: 'water-bed-invention',
    questionType: 'total-probability',
  }),

  createProbabilityRulesProblem({
    contextId: 'chip-bags',
    questionType: 'total-probability',
  }),

  createProbabilityRulesProblem({
    contextId: 'coffee-benefits',
    questionType: 'total-probability',
  }),

  createProbabilityRulesProblem({
    contextId: 'witches-accusations',
    questionType: 'total-probability',
  }),

  createProbabilityRulesProblem({
    contextId: 'sugar-study',
    questionType: 'total-probability',
  }),

  // Partition problems: bayes-rule.

  createProbabilityRulesProblem({
    contextId: 'placebo-study',
    questionType: 'bayes-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'crying-study',
    questionType: 'bayes-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'car-sickness-music',
    questionType: 'bayes-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'men-eating-study',
    questionType: 'bayes-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'egyptian-priests',
    questionType: 'bayes-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'water-bed-invention',
    questionType: 'bayes-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'chip-bags',
    questionType: 'bayes-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'coffee-benefits',
    questionType: 'bayes-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'witches-accusations',
    questionType: 'bayes-rule',
  }),

  createProbabilityRulesProblem({
    contextId: 'sugar-study',
    questionType: 'bayes-rule',
  }),
];
