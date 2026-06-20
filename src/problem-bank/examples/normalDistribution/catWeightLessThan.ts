import type { NormalDistributionProblem } from '../../schemas/normalDistribution.schema';

export const catWeightLessThan: NormalDistributionProblem = {
  id: 'normal-cat-weight-less-than-001',

  topic: 'normal-distribution',

  subtopic: 'less-than',

  context: {
    setting: 'animal biology',
    variableDescription: 'weight of an adult cat',
    unit: 'kg',
  },

  randomVariable: {
    symbol: 'X',
    description: 'the weight of a randomly selected adult cat',
    unit: 'kg',
  },

  distribution: {
    type: 'normal',
    mean: 4.5,
    standardDeviation: 0.8,
  },

  question: {
    type: 'less-than',
    threshold: 3.7,
    notation: 'P(X < 3.7)',
  },

  learningGoals: [
    'Identify the random variable.',
    'Recognize the mean and standard deviation.',
    'Translate the wording into probability notation.',
    'Compute and interpret a z-score.',
  ],

  invariantFacts: [
    'The random variable is normally distributed.',
    'The mean is 4.5 kg.',
    'The standard deviation is 0.8 kg.',
    'The question asks for the probability that the cat weighs less than 3.7 kg.',
    'The probability notation is P(X < 3.7).',
  ],

  requiredTasks: [
    'State the distribution.',
    'Write the probability notation.',
    'Calculate the z-score.',
    'Find the probability.',
    'Write a sentence interpreting the probability in context.',
  ],
};
