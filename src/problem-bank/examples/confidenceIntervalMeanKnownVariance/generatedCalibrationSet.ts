import { createConfidenceIntervalMeanKnownVarianceProblem } from '../../generators/createConfidenceIntervalMeanKnownVarianceProblems';

export const generatedConfidenceIntervalMeanKnownVarianceCalibrationSet = [
  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'battery-life',
    questionType: 'two-sided',
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'loaf-mass',
    questionType: 'lower-bound',
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'commute-times',
    questionType: 'upper-bound',
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'plant-growth',
    questionType: 'sample-size',
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'jellyfish-diameter',
    questionType: 'two-sided',
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'turtle-hatchling-mass',
    questionType: 'lower-bound',
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'reaction-times',
    questionType: 'upper-bound',
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'phone-screen-time',
    questionType: 'sample-size',
  }),

  // End of calibration set
  // Start of contexts for course.

  // Two-sided CI problems

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'ancient-toothpaste',
    questionType: 'two-sided',
    confidenceLevel: 95,
    sampleMean: 100,
    sampleSize: 36,
    populationStandardDeviation: 5,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'solar-panel-dowry',
    questionType: 'two-sided',
    confidenceLevel: 90,
    sampleMean: 200,
    sampleSize: 25,
    populationStandardDeviation: 10,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'goblin-mentions',
    questionType: 'two-sided',
    confidenceLevel: 98,
    sampleMean: 150,
    sampleSize: 18,
    populationStandardDeviation: 20,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'average-nest-temperature',
    questionType: 'two-sided',
    confidenceLevel: 90,
    sampleMean: 77,
    sampleSize: 10,
    populationStandardDeviation: 3,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'cost-of-a-laser-printer',
    questionType: 'two-sided',
    confidenceLevel: 80,
    sampleMean: 200,
    sampleSize: 16,
    populationStandardDeviation: 15,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'average-lifespan-of-swiss-male',
    questionType: 'two-sided',
    confidenceLevel: 95,
    sampleMean: 77,
    sampleSize: 20,
    populationStandardDeviation: 2.5,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'garbage-cafes-central-india',
    questionType: 'two-sided',
    confidenceLevel: 99,
    sampleMean: 110,
    sampleSize: 24,
    populationStandardDeviation: 6,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'tree-lined-roads',
    questionType: 'two-sided',
    confidenceLevel: 90,
    sampleMean: 60,
    sampleSize: 27,
    populationStandardDeviation: 9,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'cats-learning-associations',
    questionType: 'two-sided',
    confidenceLevel: 99,
    sampleMean: 30,
    sampleSize: 10,
    populationStandardDeviation: 4,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'price-of-dorm-room-art',
    questionType: 'two-sided',
    confidenceLevel: 97,
    sampleMean: 65,
    sampleSize: 12,
    populationStandardDeviation: 5.78,
  }),

  // Lower bound CI problems

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'ancient-toothpaste',
    questionType: 'lower-bound',
    confidenceLevel: 95,
    sampleMean: 100,
    sampleSize: 36,
    populationStandardDeviation: 5,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'solar-panel-dowry',
    questionType: 'lower-bound',
    confidenceLevel: 90,
    sampleMean: 200,
    sampleSize: 25,
    populationStandardDeviation: 10,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'goblin-mentions',
    questionType: 'lower-bound',
    confidenceLevel: 98,
    sampleMean: 150,
    sampleSize: 18,
    populationStandardDeviation: 20,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'average-nest-temperature',
    questionType: 'lower-bound',
    confidenceLevel: 90,
    sampleMean: 77,
    sampleSize: 10,
    populationStandardDeviation: 3,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'cost-of-a-laser-printer',
    questionType: 'lower-bound',
    confidenceLevel: 80,
    sampleMean: 200,
    sampleSize: 16,
    populationStandardDeviation: 15,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'average-lifespan-of-swiss-male',
    questionType: 'lower-bound',
    confidenceLevel: 95,
    sampleMean: 77,
    sampleSize: 20,
    populationStandardDeviation: 2.5,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'garbage-cafes-central-india',
    questionType: 'lower-bound',
    confidenceLevel: 99,
    sampleMean: 110,
    sampleSize: 24,
    populationStandardDeviation: 6,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'tree-lined-roads',
    questionType: 'lower-bound',
    confidenceLevel: 90,
    sampleMean: 60,
    sampleSize: 27,
    populationStandardDeviation: 9,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'cats-learning-associations',
    questionType: 'lower-bound',
    confidenceLevel: 99,
    sampleMean: 30,
    sampleSize: 10,
    populationStandardDeviation: 4,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'price-of-dorm-room-art',
    questionType: 'lower-bound',
    confidenceLevel: 97,
    sampleMean: 65,
    sampleSize: 12,
    populationStandardDeviation: 5.78,
  }),

  // Upper bound CI problems

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'ancient-toothpaste',
    questionType: 'upper-bound',
    confidenceLevel: 95,
    sampleMean: 100,
    sampleSize: 36,
    populationStandardDeviation: 5,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'solar-panel-dowry',
    questionType: 'upper-bound',
    confidenceLevel: 90,
    sampleMean: 200,
    sampleSize: 25,
    populationStandardDeviation: 10,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'goblin-mentions',
    questionType: 'upper-bound',
    confidenceLevel: 98,
    sampleMean: 150,
    sampleSize: 18,
    populationStandardDeviation: 20,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'average-nest-temperature',
    questionType: 'upper-bound',
    confidenceLevel: 90,
    sampleMean: 77,
    sampleSize: 10,
    populationStandardDeviation: 3,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'cost-of-a-laser-printer',
    questionType: 'upper-bound',
    confidenceLevel: 80,
    sampleMean: 200,
    sampleSize: 16,
    populationStandardDeviation: 15,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'average-lifespan-of-swiss-male',
    questionType: 'upper-bound',
    confidenceLevel: 95,
    sampleMean: 77,
    sampleSize: 20,
    populationStandardDeviation: 2.5,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'garbage-cafes-central-india',
    questionType: 'upper-bound',
    confidenceLevel: 99,
    sampleMean: 110,
    sampleSize: 24,
    populationStandardDeviation: 6,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'tree-lined-roads',
    questionType: 'upper-bound',
    confidenceLevel: 90,
    sampleMean: 60,
    sampleSize: 27,
    populationStandardDeviation: 9,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'cats-learning-associations',
    questionType: 'upper-bound',
    confidenceLevel: 99,
    sampleMean: 30,
    sampleSize: 10,
    populationStandardDeviation: 4,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'price-of-dorm-room-art',
    questionType: 'upper-bound',
    confidenceLevel: 97,
    sampleMean: 65,
    sampleSize: 12,
    populationStandardDeviation: 5.8,
  }),

  // Sample size problems

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'ancient-toothpaste',
    questionType: 'sample-size',
    confidenceLevel: 95,
    marginOfError: 2,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'solar-panel-dowry',
    questionType: 'sample-size',
    confidenceLevel: 90,
    marginOfError: 5,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'goblin-mentions',
    questionType: 'sample-size',
    confidenceLevel: 98,
    marginOfError: 10,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'average-nest-temperature',
    questionType: 'sample-size',
    confidenceLevel: 90,
    marginOfError: 1.5,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'cost-of-a-laser-printer',
    questionType: 'sample-size',
    confidenceLevel: 80,
    marginOfError: 4,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'average-lifespan-of-swiss-male',
    questionType: 'sample-size',
    confidenceLevel: 95,
    marginOfError: 3,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'garbage-cafes-central-india',
    questionType: 'sample-size',
    confidenceLevel: 99,
    marginOfError: 10,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'tree-lined-roads',
    questionType: 'sample-size',
    confidenceLevel: 90,
    marginOfError: 5,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'cats-learning-associations',
    questionType: 'sample-size',
    confidenceLevel: 99,
    marginOfError: 4,
  }),

  createConfidenceIntervalMeanKnownVarianceProblem({
    contextId: 'price-of-dorm-room-art',
    questionType: 'sample-size',
    confidenceLevel: 97,
    marginOfError: 4.5,
  }),
];
