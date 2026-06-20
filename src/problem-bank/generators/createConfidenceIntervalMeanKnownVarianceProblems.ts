import type { ConfidenceIntervalMeanKnownVarianceProblem } from '../schemas/confidenceIntervalMeanKnownVariance.schema';
import { confidenceIntervalMeanKnownVarianceContexts } from '../contextSeeds/confidenceIntervalMeanKnownVarianceContexts';

type ConfidenceIntervalMeanKnownVarianceQuestionType =
  | 'two-sided'
  | 'lower-bound'
  | 'upper-bound'
  | 'sample-size';

type CreateConfidenceIntervalMeanKnownVarianceProblemOptions = {
  contextId: string;
  questionType: ConfidenceIntervalMeanKnownVarianceQuestionType;

  confidenceLevel?: number;
  sampleSize?: number;
  sampleMean?: number;
  populationStandardDeviation?: number;
  marginOfError?: number;
};

function formatNumber(value: number): string {
  return Number.isInteger(value) ? `${value}` : `${value}`;
}

function buildQuestion(
  questionType: ConfidenceIntervalMeanKnownVarianceQuestionType,
  confidenceLevel: number,
  marginOfError?: number,
): ConfidenceIntervalMeanKnownVarianceProblem['question'] {
  if (questionType === 'sample-size') {
    if (typeof marginOfError !== 'number') {
      throw new Error('A sample-size question requires marginOfError.');
    }

    return {
      type: 'sample-size',
      confidenceLevel,
      marginOfError,
    };
  }

  return {
    type: questionType,
    confidenceLevel,
  };
}

function getCriticalValueType(
  questionType: ConfidenceIntervalMeanKnownVarianceQuestionType,
): ConfidenceIntervalMeanKnownVarianceProblem['method']['criticalValueType'] {
  return questionType === 'lower-bound' || questionType === 'upper-bound'
    ? 'one-sided-z'
    : 'two-sided-z';
}

function buildQuestionDescription(
  question: ConfidenceIntervalMeanKnownVarianceProblem['question'],
  parameterDescription: string,
): string {
  switch (question.type) {
    case 'two-sided':
      return `construct a ${question.confidenceLevel}% confidence interval for ${parameterDescription}`;

    case 'lower-bound':
      return `construct a ${question.confidenceLevel}% lower confidence bound for ${parameterDescription}`;

    case 'upper-bound':
      return `construct a ${question.confidenceLevel}% upper confidence bound for ${parameterDescription}`;

    case 'sample-size':
      return `find the minimum sample size needed to estimate ${parameterDescription} with a ${question.confidenceLevel}% confidence level and a margin of error no more than ${question.marginOfError}`;
  }
}

function buildRequiredTasks(
  question: ConfidenceIntervalMeanKnownVarianceProblem['question'],
): string[] {
  const commonTasks = [
    'Identify the parameter being estimated.',
    'Identify the sample mean.',
    'Identify the sample size.',
    'Identify the known population standard deviation.',
    'Use a z critical value.',
    'Calculate the standard error using sigma / sqrt(n).',
  ];

  switch (question.type) {
    case 'two-sided':
      return [
        ...commonTasks,
        'Construct the two-sided confidence interval.',
        'Write a sentence interpreting the confidence interval in context.',
      ];

    case 'lower-bound':
      return [
        ...commonTasks,
        'Construct the lower confidence bound.',
        'Write a sentence interpreting the lower confidence bound in context.',
      ];

    case 'upper-bound':
      return [
        ...commonTasks,
        'Construct the upper confidence bound.',
        'Write a sentence interpreting the upper confidence bound in context.',
      ];

    case 'sample-size':
      return [
        'Identify the parameter being estimated.',
        'Identify the known population standard deviation.',
        'Identify the desired confidence level.',
        'Identify the desired margin of error.',
        'Use a z critical value.',
        'Calculate the required sample size using the margin-of-error formula.',
        'Round the sample size up to the next whole number.',
        'Write a sentence interpreting the required sample size in context.',
      ];
  }
}

export function createConfidenceIntervalMeanKnownVarianceProblem(
  options: CreateConfidenceIntervalMeanKnownVarianceProblemOptions,
): ConfidenceIntervalMeanKnownVarianceProblem {
  const seed = confidenceIntervalMeanKnownVarianceContexts.find(
    (context) => context.id === options.contextId,
  );

  if (!seed) {
    throw new Error(
      `No confidence interval mean known variance context seed found for: ${options.contextId}`,
    );
  }

  const marginOfError = options.marginOfError ?? seed.defaultMarginOfError;

  const confidenceLevel =
  options.confidenceLevel ??
  (options.questionType === 'two-sided'
    ? seed.suggestedConfidenceLevels.twoSided
    : options.questionType === 'lower-bound'
      ? seed.suggestedConfidenceLevels.lowerBound
      : options.questionType === 'upper-bound'
        ? seed.suggestedConfidenceLevels.upperBound
        : seed.suggestedConfidenceLevels.sampleSize);

  const sampleSize = options.sampleSize ?? seed.defaultSampleSize;

  const sampleMean = options.sampleMean ?? seed.defaultSampleMean;

  const populationStandardDeviation =
    options.populationStandardDeviation ??
    seed.knownPopulationStandardDeviation;

  const question = buildQuestion(
    options.questionType,
    confidenceLevel,
    marginOfError,
  );

  const questionDescription = buildQuestionDescription(
    question,
    seed.parameterDescription,
  );

  return {
    id: `ci-mean-known-variance-${seed.id}-${options.questionType}-${confidenceLevel}-n-${sampleSize}`,

    topic: 'confidence-interval-mean-known-variance',

    subtopic: options.questionType,

    context: seed.context,

    parameter: {
      symbol: 'mu',
      description: seed.parameterDescription,
    },

    populationStandardDeviation: {
      symbol: 'sigma',
      value: populationStandardDeviation,
      unit: seed.context.unit,
      known: true,
    },

    sample: {
      sampleSize,
      sampleMean,
    },

    question,

    method: {
      intervalFamily: 'z',
      criticalValueType: getCriticalValueType(options.questionType),
      standardErrorFormula: 'sigma / sqrt(n)',
      marginOfErrorFormula: 'z* sigma / sqrt(n)',
      sampleSizeFormula:
        options.questionType === 'sample-size' ? '(z* sigma / E)^2' : undefined,
    },

    learningGoals: [
      'Identify the population mean as the parameter being estimated.',
      'Recognize that the population standard deviation is known.',
      'Choose a z-based confidence interval or confidence bound.',
      'Distinguish a two-sided confidence interval from a one-sided confidence bound.',
      'Interpret the interval or bound in context.',
    ],

    invariantFacts: [
      `The parameter is ${seed.parameterDescription}.`,
      `The population standard deviation is known and equals ${populationStandardDeviation}${
        seed.context.unit ? ` ${seed.context.unit}` : ''
      }.`,
      `The sample size is ${sampleSize}.`,
      `The sample mean is ${sampleMean}${
        seed.context.unit ? ` ${seed.context.unit}` : ''
      }.`,
      `The confidence level is ${confidenceLevel}%.`,
      `The method uses a z critical value because the population standard deviation is known.`,
      `The standard error is calculated using sigma / sqrt(n).`,
      `The question asks students to ${questionDescription}.`,

    ]
    
    ,

    requiredTasks: buildRequiredTasks(question),
  };
}
