import type { ConfidenceIntervalMeanUnknownVarianceProblem } from '../schemas/confidenceIntervalMeanUnknownVariance.schema';
import { confidenceIntervalMeanUnknownVarianceContexts } from '../contextSeeds/confidenceIntervalMeanUnknownVarianceContexts';

type ConfidenceIntervalMeanUnknownVarianceQuestionType =
  | 'two-sided'
  | 'lower-bound'
  | 'upper-bound';

type CreateConfidenceIntervalMeanUnknownVarianceProblemOptions = {
  contextId: string;
  questionType: ConfidenceIntervalMeanUnknownVarianceQuestionType;

  confidenceLevel?: number;
  sampleSize?: number;
  sampleMean?: number;
  sampleStandardDeviation?: number;
};

function buildQuestion(
  questionType: ConfidenceIntervalMeanUnknownVarianceQuestionType,
  confidenceLevel: number,
): ConfidenceIntervalMeanUnknownVarianceProblem['question'] {
  return {
    type: questionType,
    confidenceLevel,
  };
}

function getCriticalValueType(
  questionType: ConfidenceIntervalMeanUnknownVarianceQuestionType,
): ConfidenceIntervalMeanUnknownVarianceProblem['method']['criticalValueType'] {
  return questionType === 'two-sided' ? 'two-sided-t' : 'one-sided-t';
}

function buildQuestionDescription(
  question: ConfidenceIntervalMeanUnknownVarianceProblem['question'],
  parameterDescription: string,
): string {
  switch (question.type) {
    case 'two-sided':
      return `construct a ${question.confidenceLevel}% confidence interval for ${parameterDescription}`;

    case 'lower-bound':
      return `construct a ${question.confidenceLevel}% lower confidence bound for ${parameterDescription}`;

    case 'upper-bound':
      return `construct a ${question.confidenceLevel}% upper confidence bound for ${parameterDescription}`;
  }
}

function buildRequiredTasks(
  question: ConfidenceIntervalMeanUnknownVarianceProblem['question'],
): string[] {
  const commonTasks = [
    'Identify the parameter being estimated.',
    'Identify the sample mean.',
    'Identify the sample size.',
    'Identify the sample standard deviation.',
    'Recognize that the population standard deviation is unknown.',
    'Use a t critical value.',
    'Calculate the degrees of freedom using n - 1.',
    'Calculate the standard error using s / sqrt(n).',
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
  }
}

export function createConfidenceIntervalMeanUnknownVarianceProblem(
  options: CreateConfidenceIntervalMeanUnknownVarianceProblemOptions,
): ConfidenceIntervalMeanUnknownVarianceProblem {
  const seed = confidenceIntervalMeanUnknownVarianceContexts.find(
    (context) => context.id === options.contextId,
  );

  if (!seed) {
    throw new Error(
      `No confidence interval mean unknown variance context seed found for: ${options.contextId}`,
    );
  }

  const confidenceLevel =
    options.confidenceLevel ??
    (options.questionType === 'two-sided'
      ? seed.suggestedConfidenceLevels.twoSided
      : options.questionType === 'lower-bound'
        ? seed.suggestedConfidenceLevels.lowerBound
        : seed.suggestedConfidenceLevels.upperBound);

  const sampleSize = options.sampleSize ?? seed.defaultSampleSize;

  const sampleMean = options.sampleMean ?? seed.defaultSampleMean;

  const sampleStandardDeviation =
    options.sampleStandardDeviation ?? seed.defaultSampleStandardDeviation;

  const degreesOfFreedom = sampleSize - 1;

  const question = buildQuestion(options.questionType, confidenceLevel);

  const questionDescription = buildQuestionDescription(
    question,
    seed.parameterDescription,
  );

  return {
    id: `ci-mean-unknown-variance-${seed.id}-${options.questionType}-${confidenceLevel}-n-${sampleSize}`,

    topic: 'confidence-interval-mean-unknown-variance',

    subtopic: options.questionType,

    context: seed.context,

    parameter: {
      symbol: 'mu',
      description: seed.parameterDescription,
    },

    populationStandardDeviation: {
      symbol: 'sigma',
      known: false,
    },

    sample: {
      sampleSize,
      sampleMean,
      sampleStandardDeviation,
    },

    question,

    method: {
      intervalFamily: 't',
      criticalValueType: getCriticalValueType(options.questionType),
      degreesOfFreedomFormula: 'n - 1',
      standardErrorFormula: 's / sqrt(n)',
      marginOfErrorFormula: 't* s / sqrt(n)',
    },

    learningGoals: [
      'Identify the population mean as the parameter being estimated.',
      'Recognize that the population standard deviation is unknown.',
      'Use the sample standard deviation in place of the unknown population standard deviation.',
      'Choose a t-based confidence interval or confidence bound.',
      'Distinguish a two-sided confidence interval from a one-sided confidence bound.',
      'Interpret the interval or bound in context.',
    ],

    invariantFacts: [
      `The parameter is ${seed.parameterDescription}.`,
      'The population standard deviation is unknown.',
      `The sample standard deviation is ${sampleStandardDeviation}${
        seed.context.unit ? ` ${seed.context.unit}` : ''
      }.`,
      `The sample size is ${sampleSize}.`,
      `The degrees of freedom are ${degreesOfFreedom}.`,
      `The sample mean is ${sampleMean}${
        seed.context.unit ? ` ${seed.context.unit}` : ''
      }.`,
      `The confidence level is ${confidenceLevel}%.`,
      'The method uses a t critical value because the population standard deviation is unknown.',
      'The standard error is calculated using s / sqrt(n).',
      `The question asks students to ${questionDescription}.`,
    ],

    requiredTasks: buildRequiredTasks(question),
  };
}
