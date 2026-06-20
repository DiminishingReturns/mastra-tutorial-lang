import type { CentralLimitTheoremProblem } from '../schemas/centralLimitTheorem.schema';
import { centralLimitTheoremContexts } from '../contextSeeds/centralLimitTheoremContexts';

type CentralLimitTheoremQuestionType = 'less-than' | 'greater-than' | 'between';

type CreateCentralLimitTheoremProblemOptions = {
  contextId: string;
  questionType: CentralLimitTheoremQuestionType;

  sampleSize?: number;

  sampleMeanThreshold?: number;

  lowerSampleMeanThreshold?: number;
  upperSampleMeanThreshold?: number;
};

function roundTo(value: number, digits: number): number {
  return Number(value.toFixed(digits));
}

function formatNumber(value: number): string {
  return Number.isInteger(value) ? `${value}` : `${value}`;
}

function buildQuestion(
  questionType: CentralLimitTheoremQuestionType,
  options: CreateCentralLimitTheoremProblemOptions,
  suggestedSampleMeanThresholds: {
    lessThan?: number;
    greaterThan?: number;
    between?: {
      lower: number;
      upper: number;
    };
  },
): CentralLimitTheoremProblem['question'] {
  if (questionType === 'between') {
    const lowerSampleMeanThreshold =
      options.lowerSampleMeanThreshold ??
      suggestedSampleMeanThresholds.between?.lower;

    const upperSampleMeanThreshold =
      options.upperSampleMeanThreshold ??
      suggestedSampleMeanThresholds.between?.upper;

    if (
      typeof lowerSampleMeanThreshold !== 'number' ||
      typeof upperSampleMeanThreshold !== 'number'
    ) {
      throw new Error(
        'A between CLT question requires lowerSampleMeanThreshold and upperSampleMeanThreshold.',
      );
    }

    return {
      type: 'between',
      lowerSampleMeanThreshold,
      upperSampleMeanThreshold,
    };
  }

  const suggestedThreshold =
    questionType === 'less-than'
      ? suggestedSampleMeanThresholds.lessThan
      : questionType === 'greater-than'
        ? suggestedSampleMeanThresholds.greaterThan
        : undefined;

  const sampleMeanThreshold = options.sampleMeanThreshold ?? suggestedThreshold;

  if (typeof sampleMeanThreshold !== 'number') {
    throw new Error(
      `${questionType} CLT question requires sampleMeanThreshold.`,
    );
  }

  return {
    type: questionType,
    sampleMeanThreshold,
  };
}

function buildNotation(
  question: CentralLimitTheoremProblem['question'],
  sampleMeanSymbol: string,
): string {
  switch (question.type) {
    case 'less-than':
      return `P(${sampleMeanSymbol} < ${question.sampleMeanThreshold})`;

    case 'greater-than':
      return `P(${sampleMeanSymbol} > ${question.sampleMeanThreshold})`;

    case 'between':
      return `P(${question.lowerSampleMeanThreshold} < ${sampleMeanSymbol} < ${question.upperSampleMeanThreshold})`;
  }
}

function buildQuestionDescription(
  question: CentralLimitTheoremProblem['question'],
  variableDescription: string,
  unit?: string,
): string {
  const unitText = unit ? ` ${unit}` : '';

  switch (question.type) {
    case 'less-than':
      return `the probability that the sample mean ${variableDescription} is less than ${question.sampleMeanThreshold}${unitText}`;

    case 'greater-than':
      return `the probability that the sample mean ${variableDescription} is greater than ${question.sampleMeanThreshold}${unitText}`;

    case 'between':
      return `the probability that the sample mean ${variableDescription} is between ${question.lowerSampleMeanThreshold}${unitText} and ${question.upperSampleMeanThreshold}${unitText}`;
  }
}

export function createCentralLimitTheoremProblem(
  options: CreateCentralLimitTheoremProblemOptions,
): CentralLimitTheoremProblem {
  const seed = centralLimitTheoremContexts.find(
    (context) => context.id === options.contextId,
  );

  if (!seed) {
    throw new Error(`No CLT context seed found for: ${options.contextId}`);
  }

  const sampleSize = options.sampleSize ?? seed.defaultSampleSize;

  const standardError = roundTo(
    seed.populationStandardDeviation / Math.sqrt(sampleSize),
    4,
  );

  const question = buildQuestion(
    options.questionType,
    options,
    seed.suggestedSampleMeanThresholds,
  );

  const individualSymbol = 'X';
  const sampleMeanSymbol = 'X̄';

  const notation = buildNotation(question, sampleMeanSymbol);

  const questionDescription = buildQuestionDescription(
    question,
    seed.context.variableDescription,
    seed.context.unit,
  );

  return {
    id: `clt-${seed.id}-${options.questionType}-n-${sampleSize}`,

    topic: 'central-limit-theorem',

    subtopic: options.questionType,

    context: seed.context,

    individualRandomVariable: {
      symbol: individualSymbol,
      description: seed.individualRandomVariableDescription,
      unit: seed.context.unit,
    },

    populationDistribution: {
      mean: seed.populationMean,
      standardDeviation: seed.populationStandardDeviation,
      shape: seed.populationShape,
    },

    sample: {
      sampleSize,
    },

    samplingDistribution: {
      symbol: sampleMeanSymbol,
      description: `the sample mean ${seed.context.variableDescription} for a sample of size ${sampleSize}`,

      approximateDistribution: 'normal',

      mean: seed.populationMean,
      standardError,

      meanFormula: 'mu',
      standardErrorFormula: 'sigma / sqrt(n)',
    },

    question,

    learningGoals: [
      'Distinguish an individual value from a sample mean.',
      'Identify the population mean and population standard deviation.',
      'Identify the sample size.',
      'Use the central limit theorem to model the sampling distribution of the sample mean.',
      'Find a probability involving the sample mean.',
    ],

    invariantFacts: [
      `The individual random variable ${individualSymbol} represents ${seed.individualRandomVariableDescription}.`,
      `The population mean is ${seed.populationMean}.`,
      `The population standard deviation is ${seed.populationStandardDeviation}.`,
      `The sample size is ${sampleSize}.`,
      `The sample mean is represented by ${sampleMeanSymbol}.`,
      `The sampling distribution of ${sampleMeanSymbol} is approximately normal.`,
      `The sampling distribution has mean ${seed.populationMean}.`,
      `The sampling distribution has standard error ${standardError}.`,
      `The question asks for ${questionDescription}.`,
      `The probability notation is ${notation}.`,
    ],

    requiredTasks: [
      'Identify the individual random variable.',
      'Identify the sample mean random variable.',
      'State the approximate sampling distribution of the sample mean.',
      'Calculate the standard error using sigma / sqrt(n).',
      'Find the requested probability involving the sample mean.',
      'Write a sentence interpreting the probability in context.',
    ],
  };
}
