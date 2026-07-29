import {
  discreteRandomVariableProblemSchema,
  type DiscreteRandomVariableProblem,
  type DiscreteRandomVariableQuestionType,
} from '../schemas/discreteRandomVariable.schema';

import {
  discreteRandomVariableContextSeeds,
  type DiscreteRandomVariableContextSeed,
} from '../contextSeeds/discreteRandomVariableContexts';

type CreateDiscreteRandomVariableProblemOptions = {
  contextId: string;
  questionType?: DiscreteRandomVariableQuestionType;
  seedPhrase?: string;
};

function roundTo(value: number, decimalPlaces: number): number {
  const factor = 10 ** decimalPlaces;
  return Math.round(value * factor) / factor;
}

function getExpectedValue(
  probabilityTable: { value: number; probability: number }[],
): number {
  return probabilityTable.reduce(
    (sum, row) => sum + row.value * row.probability,
    0,
  );
}

function getVariance({
  probabilityTable,
  expectedValue,
}: {
  probabilityTable: { value: number; probability: number }[];
  expectedValue: number;
}): number {
  return probabilityTable.reduce(
    (sum, row) => sum + (row.value - expectedValue) ** 2 * row.probability,
    0,
  );
}

function getMissingValue(
  probabilityTable: { value: number; probability: number }[],
): number {
  // For the first version, use the middle value when possible.
  const middleIndex = Math.floor(probabilityTable.length / 2);
  return probabilityTable[middleIndex].value;
}

function getDiscreteRandomVariableContextSeed(
  contextId: string,
): DiscreteRandomVariableContextSeed {
  const seed = discreteRandomVariableContextSeeds.find(
    (contextSeed) => contextSeed.id === contextId,
  );

  if (!seed) {
    throw new Error(
      `Unknown discrete random variable context seed: ${contextId}`,
    );
  }

  return seed;
}

export function createDiscreteRandomVariableProblem(
  options: CreateDiscreteRandomVariableProblemOptions,
): DiscreteRandomVariableProblem {
  const seed = getDiscreteRandomVariableContextSeed(options.contextId);

  const questionType = options.questionType ?? seed.defaultQuestionType;

  const expectedValue = roundTo(getExpectedValue(seed.probabilityTable), 4);

  const variance = roundTo(
    getVariance({
      probabilityTable: seed.probabilityTable,
      expectedValue,
    }),
    4,
  );

  const standardDeviation = roundTo(Math.sqrt(variance), 4);

  const missingValue = getMissingValue(seed.probabilityTable);

  const missingProbability = seed.probabilityTable.find(
    (row) => row.value === missingValue,
  )?.probability;

  if (
    questionType === 'find-missing-probability' &&
    missingProbability === undefined
  ) {
    throw new Error(
      `Could not find missing probability for value ${missingValue}`,
    );
  }

  const probabilitySum = roundTo(
    seed.probabilityTable.reduce((sum, row) => sum + row.probability, 0),
    4,
  );

  const isValidPmf =
    probabilitySum === 1 &&
    seed.probabilityTable.every(
      (row) => row.probability >= 0 && row.probability <= 1,
    );

  const question =
    questionType === 'find-missing-probability'
      ? {
          type: questionType,
          missingValue,
        }
      : {
          type: questionType,
        };

  const problem: DiscreteRandomVariableProblem = {
    id: `discrete-random-variable-${seed.id}-${questionType}`,

    topic: 'discrete-random-variable',
    subtopic: questionType,

    context: {
      setting: seed.setting,
      randomVariableDescription: seed.randomVariableDescription,
      unit: seed.unit,
      populationOrProcess: seed.populationOrProcess,
    },

    randomVariable: {
      symbol: 'X',
      description: seed.randomVariableDescription,
      valuesRepresent: seed.valuesRepresent,
    },

    probabilityTable: seed.probabilityTable,

    distributionPresentation: seed.distributionPresentation ?? {
      format: 'table',
    },

    question,

    method: {
      distributionType: 'finite-discrete',
      expectedValueFormula: 'sum x * P(X = x)',
      varianceFormula: 'sum (x - mu)^2 * P(X = x)',
      alternativeVarianceFormula: 'E(X^2) - [E(X)]^2',
    },

    solutionMetadata: {
      expectedValue,
      variance,
      standardDeviation,
      missingProbability:
        questionType === 'find-missing-probability'
          ? missingProbability
          : undefined,
      isValidPmf: questionType === 'validate-pmf' ? isValidPmf : undefined,
    },

    learningGoals: [
      'Represent a finite discrete random variable using a probability table.',
      'Identify the values and probabilities associated with a discrete random variable.',
      'Use a probability mass function to compute or interpret summary measures.',
    ],

    invariantFacts: [
      `The random variable is ${seed.randomVariableDescription}.`,
      `The possible values are ${seed.probabilityTable
        .map((row) => row.value)
        .join(', ')}.`,
      `The probabilities are ${seed.probabilityTable
        .map((row) => row.probability)
        .join(', ')}.`,
      `The question type is ${questionType}.`,
    ],

    requiredTasks: getRequiredTasks(questionType),
  };

  return discreteRandomVariableProblemSchema.parse(problem);
}

function getRequiredTasks(
  questionType: DiscreteRandomVariableQuestionType,
): string[] {
  switch (questionType) {
    case 'validate-pmf':
      return [
        'Check whether all probabilities are between 0 and 1.',
        'Check whether the probabilities add to 1.',
        'State whether the table is a valid probability distribution.',
      ];

    case 'find-missing-probability':
      return [
        'Use the fact that probabilities in a probability distribution must add to 1.',
        'Find the missing probability.',
      ];

    case 'compute-expected-value':
      return [
        'Multiply each possible value by its probability.',
        'Add the products to find the expected value.',
        'Interpret the expected value in context if appropriate.',
      ];

    case 'compute-variance':
      return [
        'Find or use the expected value.',
        'Compute the variance of the discrete random variable.',
      ];

    case 'compute-standard-deviation':
      return [
        'Find or use the variance.',
        'Compute the standard deviation of the discrete random variable.',
      ];

    case 'interpret-expected-value':
      return [
        'Compute or use the expected value.',
        'Interpret the expected value as a long-run average in context.',
      ];
  }
}
