import { createBinomialDistributionProblem } from '../../generators/createBinomialDistributionProblems';

export const generatedBinomialCalibrationSet = [
  createBinomialDistributionProblem({
    contextId: 'seed-germination',
    questionType: 'exactly',
  }),

  createBinomialDistributionProblem({
    contextId: 'free-throws',
    questionType: 'less-than',
  }),

  createBinomialDistributionProblem({
    contextId: 'quality-control-lightbulbs',
    questionType: 'at-most',
  }),

  createBinomialDistributionProblem({
    contextId: 'multiple-choice-guessing',
    questionType: 'more-than',
  }),

  createBinomialDistributionProblem({
    contextId: 'email-spam-filter',
    questionType: 'at-least',
  }),

  createBinomialDistributionProblem({
    contextId: 'sunny-window-cats',
    questionType: 'between',
  }),

  createBinomialDistributionProblem({
    contextId: 'blood-test-screening',
    questionType: 'variance-standard-deviation',
  }),

  createBinomialDistributionProblem({
    contextId: 'transit-card-tap-success',
    questionType: 'between',
  }),

  createBinomialDistributionProblem({
    contextId: 'financiers-job-performance',
    questionType: 'at-least',
  }),

  createBinomialDistributionProblem({
    contextId: 'fancy-car-drivers',
    questionType: 'expected-value',
  }),

  // End of calibration set
  // Start of course problems.

  // Less-than

  createBinomialDistributionProblem({
    contextId: 'male-parrot-fish',
    questionType: 'less-than',
    upperSuccessCount: 3,
  }),

  createBinomialDistributionProblem({
    contextId: 'overdue-books-cat-picture',
    questionType: 'less-than',
    upperSuccessCount: 2,
  }),

  createBinomialDistributionProblem({
    contextId: 'no-bad-photos',
    questionType: 'less-than',
    upperSuccessCount: 2,
  }),

  createBinomialDistributionProblem({
    contextId: 'bumblebees-morse-code',
    questionType: 'less-than',
    upperSuccessCount: 11,
  }),

  createBinomialDistributionProblem({
    contextId: 'oak-trees-delayed-leaf-opening',
    questionType: 'less-than',
    upperSuccessCount: 8,
  }),

  createBinomialDistributionProblem({
    contextId: 'united-airlines-men-flight',
    questionType: 'less-than',
    upperSuccessCount: 3,
  }),

  createBinomialDistributionProblem({
    contextId: 'hay-fever',
    questionType: 'less-than',
    upperSuccessCount: 4,
  }),

  createBinomialDistributionProblem({
    contextId: 'items-left-in-ubers',
    questionType: 'less-than',
  }),

  createBinomialDistributionProblem({
    contextId: 'driving-under-the-influence',
    questionType: 'less-than',
    upperSuccessCount: 2,
  }),

  createBinomialDistributionProblem({
    contextId: 'baby-behaviours',
    questionType: 'less-than',
    upperSuccessCount: 3,
  }),

  // More-than

  createBinomialDistributionProblem({
    contextId: 'male-parrot-fish',
    questionType: 'more-than',
    lowerSuccessCount: 4,
  }),

  createBinomialDistributionProblem({
    contextId: 'overdue-books-cat-picture',
    questionType: 'more-than',
    lowerSuccessCount: 23,
  }),

  createBinomialDistributionProblem({
    contextId: 'no-bad-photos',
    questionType: 'more-than',
    lowerSuccessCount: 2,
  }),

  createBinomialDistributionProblem({
    contextId: 'bumblebees-morse-code',
    questionType: 'more-than',
    lowerSuccessCount: 11,
  }),

  createBinomialDistributionProblem({
    contextId: 'oak-trees-delayed-leaf-opening',
    questionType: 'more-than',
    lowerSuccessCount: 10,
  }),

  createBinomialDistributionProblem({
    contextId: 'united-airlines-men-flight',
    questionType: 'more-than',
    lowerSuccessCount: 8,
  }),

  createBinomialDistributionProblem({
    contextId: 'hay-fever',
    questionType: 'more-than',
    lowerSuccessCount: 4,
  }),

  createBinomialDistributionProblem({
    contextId: 'items-left-in-ubers',
    questionType: 'more-than',
    lowerSuccessCount: 4,
  }),

  createBinomialDistributionProblem({
    contextId: 'driving-under-the-influence',
    questionType: 'more-than',
    lowerSuccessCount: 14,
  }),

  createBinomialDistributionProblem({
    contextId: 'baby-behaviours',
    questionType: 'more-than',
    lowerSuccessCount: 6,
  }),

  // Between type

  createBinomialDistributionProblem({
    contextId: 'male-parrot-fish',
    questionType: 'between',
    lowerSuccessCount: 2,
    upperSuccessCount: 5,
  }),

  createBinomialDistributionProblem({
    contextId: 'overdue-books-cat-picture',
    questionType: 'between',
    lowerSuccessCount: 20,
    upperSuccessCount: 22,
  }),

  createBinomialDistributionProblem({
    contextId: 'no-bad-photos',
    questionType: 'between',
    lowerSuccessCount: 7,
    upperSuccessCount: 11,
  }),

  createBinomialDistributionProblem({
    contextId: 'bumblebees-morse-code',
    questionType: 'between',
    lowerSuccessCount: 9,
    upperSuccessCount: 12,
  }),

  createBinomialDistributionProblem({
    contextId: 'oak-trees-delayed-leaf-opening',
    questionType: 'between',
    lowerSuccessCount: 7,
    upperSuccessCount: 10,
  }),

  createBinomialDistributionProblem({
    contextId: 'united-airlines-men-flight',
    questionType: 'between',
    lowerSuccessCount: 6,
    upperSuccessCount: 8,
  }),

  createBinomialDistributionProblem({
    contextId: 'hay-fever',
    questionType: 'between',
    lowerSuccessCount: 2,
    upperSuccessCount: 5,
  }),

  createBinomialDistributionProblem({
    contextId: 'items-left-in-ubers',
    questionType: 'between',
    lowerSuccessCount: 3,
    upperSuccessCount: 6,
  }),

  createBinomialDistributionProblem({
    contextId: 'driving-under-the-influence',
    questionType: 'between',
    lowerSuccessCount: 12,
    upperSuccessCount: 15,
  }),

  createBinomialDistributionProblem({
    contextId: 'baby-behaviours',
    questionType: 'between',
    lowerSuccessCount: 4,
    upperSuccessCount: 6,
  }),

  // At-least

  createBinomialDistributionProblem({
    contextId: 'male-parrot-fish',
    questionType: 'at-least',
    lowerSuccessCount: 3,
  }),

  createBinomialDistributionProblem({
    contextId: 'overdue-books-cat-picture',
    questionType: 'at-least',
    lowerSuccessCount: 23,
  }),

  createBinomialDistributionProblem({
    contextId: 'no-bad-photos',
    questionType: 'at-least',
    lowerSuccessCount: 11,
  }),

  createBinomialDistributionProblem({
    contextId: 'bumblebees-morse-code',
    questionType: 'at-least',
    lowerSuccessCount: 2,
  }),

  createBinomialDistributionProblem({
    contextId: 'oak-trees-delayed-leaf-opening',
    questionType: 'at-least',
    lowerSuccessCount: 9,
  }),

  createBinomialDistributionProblem({
    contextId: 'united-airlines-men-flight',
    questionType: 'at-least',
    lowerSuccessCount: 7,
  }),

  createBinomialDistributionProblem({
    contextId: 'hay-fever',
    questionType: 'at-least',
    lowerSuccessCount: 3,
  }),

  createBinomialDistributionProblem({
    contextId: 'items-left-in-ubers',
    questionType: 'at-least',
    lowerSuccessCount: 3,
  }),

  createBinomialDistributionProblem({
    contextId: 'driving-under-the-influence',
    questionType: 'at-least',
    lowerSuccessCount: 1,
  }),

  createBinomialDistributionProblem({
    contextId: 'baby-behaviours',
    questionType: 'at-least',
    lowerSuccessCount: 2,
  }),

  // At-most

  createBinomialDistributionProblem({
    contextId: 'male-parrot-fish',
    questionType: 'at-most',
    upperSuccessCount: 4,
  }),

  createBinomialDistributionProblem({
    contextId: 'overdue-books-cat-picture',
    questionType: 'at-most',
    upperSuccessCount: 3,
  }),

  createBinomialDistributionProblem({
    contextId: 'no-bad-photos',
    questionType: 'at-most',
    upperSuccessCount: 2,
  }),

  createBinomialDistributionProblem({
    contextId: 'bumblebees-morse-code',
    questionType: 'at-most',
    upperSuccessCount: 11,
  }),

  createBinomialDistributionProblem({
    contextId: 'oak-trees-delayed-leaf-opening',
    questionType: 'at-most',
    upperSuccessCount: 8,
  }),

  createBinomialDistributionProblem({
    contextId: 'united-airlines-men-flight',
    questionType: 'at-most',
    upperSuccessCount: 3,
  }),

  createBinomialDistributionProblem({
    contextId: 'hay-fever',
    questionType: 'at-most',
    upperSuccessCount: 2,
  }),

  createBinomialDistributionProblem({
    contextId: 'items-left-in-ubers',
    questionType: 'at-most',
    upperSuccessCount: 4,
  }),

  createBinomialDistributionProblem({
    contextId: 'driving-under-the-influence',
    questionType: 'at-most',
    upperSuccessCount: 16,
  }),

  createBinomialDistributionProblem({
    contextId: 'baby-behaviours',
    questionType: 'at-most',
    upperSuccessCount: 5,
  }),

  // Exactly

  createBinomialDistributionProblem({
    contextId: 'male-parrot-fish',
    questionType: 'exactly',
    successCount: 3,
  }),

  createBinomialDistributionProblem({
    contextId: 'overdue-books-cat-picture',
    questionType: 'exactly',
    successCount: 21,
  }),

  createBinomialDistributionProblem({
    contextId: 'no-bad-photos',
    questionType: 'exactly',
    successCount: 8,
  }),

  createBinomialDistributionProblem({
    contextId: 'bumblebees-morse-code',
    questionType: 'exactly',
    successCount: 12,
  }),

  createBinomialDistributionProblem({
    contextId: 'oak-trees-delayed-leaf-opening',
    questionType: 'exactly',
    successCount: 9,
  }),

  createBinomialDistributionProblem({
    contextId: 'united-airlines-men-flight',
    questionType: 'exactly',
    successCount: 7,
  }),

  createBinomialDistributionProblem({
    contextId: 'hay-fever',
    questionType: 'exactly',
    successCount: 3,
  }),

  createBinomialDistributionProblem({
    contextId: 'items-left-in-ubers',
    questionType: 'exactly',
    successCount: 3,
  }),

  createBinomialDistributionProblem({
    contextId: 'driving-under-the-influence',
    questionType: 'exactly',
    successCount: 14,
  }),

  createBinomialDistributionProblem({
    contextId: 'baby-behaviours',
    questionType: 'exactly',
    successCount: 6,
  }),

  // Expected value

  createBinomialDistributionProblem({
    contextId: 'male-parrot-fish',
    questionType: 'expected-value',
  }),

  createBinomialDistributionProblem({
    contextId: 'overdue-books-cat-picture',
    questionType: 'expected-value',
  }),

  createBinomialDistributionProblem({
    contextId: 'no-bad-photos',
    questionType: 'expected-value',
  }),

  createBinomialDistributionProblem({
    contextId: 'bumblebees-morse-code',
    questionType: 'expected-value',
  }),

  createBinomialDistributionProblem({
    contextId: 'oak-trees-delayed-leaf-opening',
    questionType: 'expected-value',
  }),

  createBinomialDistributionProblem({
    contextId: 'united-airlines-men-flight',
    questionType: 'expected-value',
  }),

  createBinomialDistributionProblem({
    contextId: 'hay-fever',
    questionType: 'expected-value',
  }),

  createBinomialDistributionProblem({
    contextId: 'items-left-in-ubers',
    questionType: 'expected-value',
  }),

  createBinomialDistributionProblem({
    contextId: 'driving-under-the-influence',
    questionType: 'expected-value',
  }),

  createBinomialDistributionProblem({
    contextId: 'baby-behaviours',
    questionType: 'expected-value',
  }),

  // Variance and standard deviation

  createBinomialDistributionProblem({
    contextId: 'male-parrot-fish',
    questionType: 'variance-standard-deviation',
  }),

  createBinomialDistributionProblem({
    contextId: 'overdue-books-cat-picture',
    questionType: 'variance-standard-deviation',
  }),

  createBinomialDistributionProblem({
    contextId: 'no-bad-photos',
    questionType: 'variance-standard-deviation',
  }),

  createBinomialDistributionProblem({
    contextId: 'bumblebees-morse-code',
    questionType: 'variance-standard-deviation',
  }),

  createBinomialDistributionProblem({
    contextId: 'oak-trees-delayed-leaf-opening',
    questionType: 'variance-standard-deviation',
  }),

  createBinomialDistributionProblem({
    contextId: 'united-airlines-men-flight',
    questionType: 'variance-standard-deviation',
  }),

  createBinomialDistributionProblem({
    contextId: 'hay-fever',
    questionType: 'variance-standard-deviation',
  }),

  createBinomialDistributionProblem({
    contextId: 'items-left-in-ubers',
    questionType: 'variance-standard-deviation',
  }),

  createBinomialDistributionProblem({
    contextId: 'driving-under-the-influence',
    questionType: 'variance-standard-deviation',
  }),

  createBinomialDistributionProblem({
    contextId: 'baby-behaviours',
    questionType: 'variance-standard-deviation',
  }),
];
