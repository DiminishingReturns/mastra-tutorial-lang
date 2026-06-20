import type { BinomialDistributionProblem } from '../schemas/binomialDistribution.schema';
import { binomialDistributionContexts } from '../contextSeeds/binomialDistributionContexts';

type BinomialQuestionType =
  | 'exactly'
  | 'less-than'
  | 'at-most'
  | 'more-than'
  | 'at-least'
  | 'between'
  | 'expected-value'
  | 'variance-standard-deviation';

type CreateBinomialDistributionProblemOptions = {
  contextId: string;
  questionType: BinomialQuestionType;

  numberOfTrials?: number;
  probabilityOfSuccess?: number;

  successCount?: number;

  lowerSuccessCount?: number;
  upperSuccessCount?: number;
};

function formatProbabilityOfSuccess(p: number): string {
  return Number.isInteger(p) ? `${p}` : `${p}`;
}

function buildQuestion(
  questionType: BinomialQuestionType,
  options: CreateBinomialDistributionProblemOptions,
  suggestedSuccessCounts: {
    exactly?: number;
    lessThan?: number;
    atMost?: number;
    moreThan?: number;
    atLeast?: number;
    between?: {
      lower: number;
      upper: number;
    };
  },
): BinomialDistributionProblem['question'] {
  if (questionType === 'expected-value') {
    return {
      type: 'expected-value',
    };
  }

  if (questionType === 'variance-standard-deviation') {
    return {
      type: 'variance-standard-deviation',
    };
  }

  if (questionType === 'between') {
    const lowerSuccessCount =
      options.lowerSuccessCount ?? suggestedSuccessCounts.between?.lower;

    const upperSuccessCount =
      options.upperSuccessCount ?? suggestedSuccessCounts.between?.upper;

    if (
      typeof lowerSuccessCount !== 'number' ||
      typeof upperSuccessCount !== 'number'
    ) {
      throw new Error(
        'A between question requires lowerSuccessCount and upperSuccessCount.',
      );
    }

    return {
      type: 'between',
      lowerSuccessCount,
      upperSuccessCount,
    };
  }

  const suggestedCount =
    questionType === 'exactly'
      ? suggestedSuccessCounts.exactly
      : questionType === 'less-than'
        ? suggestedSuccessCounts.lessThan
        : questionType === 'at-most'
          ? suggestedSuccessCounts.atMost
          : questionType === 'more-than'
            ? suggestedSuccessCounts.moreThan
            : questionType === 'at-least'
              ? suggestedSuccessCounts.atLeast
              : undefined;

  const successCount = options.successCount ?? suggestedCount;

  if (typeof successCount !== 'number') {
    throw new Error(`${questionType} question requires successCount.`);
  }

  return {
    type: questionType,
    successCount,
  };
}

function buildQuestionDescription(
  question: BinomialDistributionProblem['question'],
  successDescription: string,
): string {
  switch (question.type) {
    case 'exactly':
      return `the probability that exactly ${question.successCount} trials result in: ${successDescription}`;

    case 'less-than':
      return `the probability that fewer than ${question.successCount} trials result in: ${successDescription}`;

    case 'at-most':
      return `the probability that at most ${question.successCount} trials result in: ${successDescription}`;

    case 'more-than':
      return `the probability that more than ${question.successCount} trials result in: ${successDescription}`;

    case 'at-least':
      return `the probability that at least ${question.successCount} trials result in: ${successDescription}`;

    case 'between':
      return `the probability that between ${question.lowerSuccessCount} and ${question.upperSuccessCount} trials, inclusive, result in: ${successDescription}`;

    case 'expected-value':
      return `the expected number of trials that result in: ${successDescription}`;

    case 'variance-standard-deviation':
      return `the variance and standard deviation of the number of trials that result in: ${successDescription}`;
  }
}

function buildNotation(
  question: BinomialDistributionProblem['question'],
  symbol: string,
): string {
  switch (question.type) {
    case 'exactly':
      return `P(${symbol} = ${question.successCount})`;

    case 'less-than':
      return `P(${symbol} < ${question.successCount})`;

    case 'at-most':
      return `P(${symbol} ≤ ${question.successCount})`;

    case 'more-than':
      return `P(${symbol} > ${question.successCount})`;

    case 'at-least':
      return `P(${symbol} ≥ ${question.successCount})`;

    case 'between':
      return `P(${question.lowerSuccessCount} ≤ ${symbol} ≤ ${question.upperSuccessCount})`;

    case 'expected-value':
      return `E(${symbol})`;

    case 'variance-standard-deviation':
      return `Var(${symbol}) and SD(${symbol})`;
  }
}

export function createBinomialDistributionProblem(
  options: CreateBinomialDistributionProblemOptions,
): BinomialDistributionProblem {
  const seed = binomialDistributionContexts.find(
    (context) => context.id === options.contextId,
  );

  if (!seed) {
    throw new Error(`No binomial context seed found for: ${options.contextId}`);
  }

  const numberOfTrials = options.numberOfTrials ?? seed.defaultNumberOfTrials;

  const probabilityOfSuccess =
    options.probabilityOfSuccess ?? seed.defaultProbabilityOfSuccess;

  const question = buildQuestion(
    options.questionType,
    options,
    seed.suggestedSuccessCounts,
  );

  const symbol = 'X';

  const notation = buildNotation(question, symbol);

  const questionDescription = buildQuestionDescription(
    question,
    seed.context.successDescription,
  );

  return {
    id: `binomial-${seed.id}-${options.questionType}-n-${numberOfTrials}-p-${formatProbabilityOfSuccess(
      probabilityOfSuccess,
    )}`,

    topic: 'binomial-distribution',

    subtopic: options.questionType,

    context: seed.context,

    randomVariable: {
      symbol,
      description: seed.randomVariableDescription,
    },

    distribution: {
      type: 'binomial',
      numberOfTrials,
      probabilityOfSuccess,
    },

    question,

    learningGoals: [
      'Identify the binomial setting.',
      'Define the random variable as the number of successes.',
      'Recognize the number of trials and probability of success.',
      'Translate the wording into a binomial probability event.',
    ],

    invariantFacts: [
      `There are ${numberOfTrials} fixed trials.`,
      `The probability of success on each trial is ${probabilityOfSuccess}.`,
      `The random variable ${symbol} represents ${seed.randomVariableDescription}.`,
      `${symbol} follows a binomial distribution with n = ${numberOfTrials} and p = ${probabilityOfSuccess}.`,
      `The question asks for ${questionDescription}.`,
      `The probability notation is ${notation}.`,
    ],

    requiredTasks:
      question.type === 'expected-value'
        ? [
            'Identify the number of trials.',
            'Identify the probability of success.',
            `Calculate the expected value.`,
            'Write a sentence interpreting the expected value in context.',
          ]
        : question.type === 'variance-standard-deviation'
          ? [
              'Identify the number of trials.',
              'Identify the probability of success.',
              `Calculate the variance.`,
              `Calculate the standard deviation.`,
              'Write a sentence interpreting the standard deviation in context.',
            ]
          : [
              'Identify the number of trials.',
              'Identify the probability of success.',
              'Find the requested probability.',
              'Write a sentence interpreting the probability in context.',
            ],
  };
}
