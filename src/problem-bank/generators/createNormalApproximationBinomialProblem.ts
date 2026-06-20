import type { NormalApproximationBinomialProblem } from '../schemas/normalApproximationBinomial.schema';
import { normalApproximationBinomialContexts } from '../contextSeeds/normalApproximationBinomialContexts';

type NormalApproximationBinomialQuestionType =
  | 'less-than'
  | 'at-most'
  | 'more-than'
  | 'at-least'
  | 'between';

type BetweenInclusivity =
  | 'inclusive'
  | 'exclusive'
  | 'lower-inclusive-upper-exclusive'
  | 'lower-exclusive-upper-inclusive';

type CreateNormalApproximationBinomialProblemOptions = {
  contextId: string;
  questionType: NormalApproximationBinomialQuestionType;

  numberOfTrials?: number;
  probabilityOfSuccess?: number;

  successCount?: number;

  lowerSuccessCount?: number;
  upperSuccessCount?: number;
  inclusivity?: BetweenInclusivity;
};

function roundTo(value: number, digits: number): number {
  return Number(value.toFixed(digits));
}

function formatProbabilityOfSuccess(p: number): string {
  return Number.isInteger(p) ? `${p}` : `${p}`;
}

function buildQuestion(
  questionType: NormalApproximationBinomialQuestionType,
  options: CreateNormalApproximationBinomialProblemOptions,
  suggestedSuccessCounts: {
    lessThan?: number;
    atMost?: number;
    moreThan?: number;
    atLeast?: number;
    between?: {
      lower: number;
      upper: number;
      inclusivity?: BetweenInclusivity;
    };
  },
): NormalApproximationBinomialProblem['question'] {
  if (questionType === 'between') {
    const lowerSuccessCount =
      options.lowerSuccessCount ?? suggestedSuccessCounts.between?.lower;

    const upperSuccessCount =
      options.upperSuccessCount ?? suggestedSuccessCounts.between?.upper;

    const inclusivity =
      options.inclusivity ??
      suggestedSuccessCounts.between?.inclusivity ??
      'inclusive';

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
      inclusivity,
    };
  }

  const suggestedCount =
    questionType === 'less-than'
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

function buildOriginalBinomialNotation(
  question: NormalApproximationBinomialProblem['question'],
  symbol: string,
): string {
  switch (question.type) {
    case 'less-than':
      return `P(${symbol} < ${question.successCount})`;

    case 'at-most':
      return `P(${symbol} ≤ ${question.successCount})`;

    case 'more-than':
      return `P(${symbol} > ${question.successCount})`;

    case 'at-least':
      return `P(${symbol} ≥ ${question.successCount})`;

    case 'between':
      switch (question.inclusivity) {
        case 'inclusive':
          return `P(${question.lowerSuccessCount} ≤ ${symbol} ≤ ${question.upperSuccessCount})`;

        case 'exclusive':
          return `P(${question.lowerSuccessCount} < ${symbol} < ${question.upperSuccessCount})`;

        case 'lower-inclusive-upper-exclusive':
          return `P(${question.lowerSuccessCount} ≤ ${symbol} < ${question.upperSuccessCount})`;

        case 'lower-exclusive-upper-inclusive':
          return `P(${question.lowerSuccessCount} < ${symbol} ≤ ${question.upperSuccessCount})`;
      }
  }
}

function buildCorrectedNormalNotation(
  question: NormalApproximationBinomialProblem['question'],
  normalSymbol: string,
): string {
  switch (question.type) {
    case 'less-than':
      // X < k means X ≤ k - 1, so use k - 0.5
      return `P(${normalSymbol} < ${question.successCount - 0.5})`;

    case 'at-most':
      // X ≤ k, so use k + 0.5
      return `P(${normalSymbol} < ${question.successCount + 0.5})`;

    case 'more-than':
      // X > k means X ≥ k + 1, so use k + 0.5
      return `P(${normalSymbol} > ${question.successCount + 0.5})`;

    case 'at-least':
      // X ≥ k, so use k - 0.5
      return `P(${normalSymbol} > ${question.successCount - 0.5})`;

    case 'between': {
      const lowerCorrection =
        question.inclusivity === 'inclusive' ||
        question.inclusivity === 'lower-inclusive-upper-exclusive'
          ? question.lowerSuccessCount - 0.5
          : question.lowerSuccessCount + 0.5;

      const upperCorrection =
        question.inclusivity === 'inclusive' ||
        question.inclusivity === 'lower-exclusive-upper-inclusive'
          ? question.upperSuccessCount + 0.5
          : question.upperSuccessCount - 0.5;

      return `P(${lowerCorrection} < ${normalSymbol} < ${upperCorrection})`;
    }
  }
}

function buildContinuityCorrectionExplanation(
  question: NormalApproximationBinomialProblem['question'],
): string {
  switch (question.type) {
    case 'less-than':
      return `Because the binomial variable counts whole successes, “less than ${question.successCount}” means ${question.successCount - 1} or fewer. The continuity correction uses ${question.successCount - 0.5} as the normal cutoff.`;

    case 'at-most':
      return `Because the binomial variable counts whole successes, “at most ${question.successCount}” includes ${question.successCount}. The continuity correction uses ${question.successCount + 0.5} as the normal cutoff.`;

    case 'more-than':
      return `Because the binomial variable counts whole successes, “more than ${question.successCount}” starts at ${question.successCount + 1}. The continuity correction uses ${question.successCount + 0.5} as the normal cutoff.`;

    case 'at-least':
      return `Because the binomial variable counts whole successes, “at least ${question.successCount}” includes ${question.successCount}. The continuity correction uses ${question.successCount - 0.5} as the normal cutoff.`;

    case 'between': {
      const lowerCorrection =
        question.inclusivity === 'inclusive' ||
        question.inclusivity === 'lower-inclusive-upper-exclusive'
          ? question.lowerSuccessCount - 0.5
          : question.lowerSuccessCount + 0.5;

      const upperCorrection =
        question.inclusivity === 'inclusive' ||
        question.inclusivity === 'lower-exclusive-upper-inclusive'
          ? question.upperSuccessCount + 0.5
          : question.upperSuccessCount - 0.5;

      return `Because the binomial variable counts whole successes, the continuity correction changes the lower boundary to ${lowerCorrection} and the upper boundary to ${upperCorrection}.`;
    }
  }
}

function buildQuestionDescription(
  question: NormalApproximationBinomialProblem['question'],
  successDescription: string,
): string {
  switch (question.type) {
    case 'less-than':
      return `the probability that fewer than ${question.successCount} trials result in: ${successDescription}`;

    case 'at-most':
      return `the probability that at most ${question.successCount} trials result in: ${successDescription}`;

    case 'more-than':
      return `the probability that more than ${question.successCount} trials result in: ${successDescription}`;

    case 'at-least':
      return `the probability that at least ${question.successCount} trials result in: ${successDescription}`;

    case 'between':
      switch (question.inclusivity) {
        case 'inclusive':
          return `the probability that between ${question.lowerSuccessCount} and ${question.upperSuccessCount} trials, inclusive, result in: ${successDescription}`;

        case 'exclusive':
          return `the probability that more than ${question.lowerSuccessCount} but fewer than ${question.upperSuccessCount} trials result in: ${successDescription}`;

        case 'lower-inclusive-upper-exclusive':
          return `the probability that at least ${question.lowerSuccessCount} but fewer than ${question.upperSuccessCount} trials result in: ${successDescription}`;

        case 'lower-exclusive-upper-inclusive':
          return `the probability that more than ${question.lowerSuccessCount} but at most ${question.upperSuccessCount} trials result in: ${successDescription}`;
      }
  }
}

export function createNormalApproximationBinomialProblem(
  options: CreateNormalApproximationBinomialProblemOptions,
): NormalApproximationBinomialProblem {
  const seed = normalApproximationBinomialContexts.find(
    (context) => context.id === options.contextId,
  );

  if (!seed) {
    throw new Error(
      `No normal approximation binomial context seed found for: ${options.contextId}`,
    );
  }

  const numberOfTrials = options.numberOfTrials ?? seed.defaultNumberOfTrials;

  const probabilityOfSuccess =
    options.probabilityOfSuccess ?? seed.defaultProbabilityOfSuccess;

  const mean = roundTo(numberOfTrials * probabilityOfSuccess, 4);

  const standardDeviation = roundTo(
    Math.sqrt(
      numberOfTrials * probabilityOfSuccess * (1 - probabilityOfSuccess),
    ),
    4,
  );

  const question = buildQuestion(
    options.questionType,
    options,
    seed.suggestedSuccessCounts,
  );

  const binomialSymbol = 'X';
  const normalSymbol = 'Y';

  const originalBinomialNotation = buildOriginalBinomialNotation(
    question,
    binomialSymbol,
  );

  const correctedNormalNotation = buildCorrectedNormalNotation(
    question,
    normalSymbol,
  );

  const continuityCorrectionExplanation =
    buildContinuityCorrectionExplanation(question);

  const questionDescription = buildQuestionDescription(
    question,
    seed.context.successDescription,
  );

  return {
    id: `normal-approx-binomial-${seed.id}-${options.questionType}-n-${numberOfTrials}-p-${formatProbabilityOfSuccess(
      probabilityOfSuccess,
    )}`,

    topic: 'normal-approximation-binomial',

    subtopic: options.questionType,

    context: seed.context,

    randomVariable: {
      symbol: binomialSymbol,
      description: seed.randomVariableDescription,
    },

    binomialDistribution: {
      type: 'binomial',
      numberOfTrials,
      probabilityOfSuccess,
    },

    normalApproximation: {
      type: 'normal',
      mean,
      standardDeviation,
      meanFormula: 'np',
      standardDeviationFormula: 'sqrt(np(1-p))',
    },

    question,

    continuityCorrection: {
      originalBinomialNotation,
      correctedNormalNotation,
      explanation: continuityCorrectionExplanation,
    },

    learningGoals: [
      'Identify the binomial setting.',
      'Recognize when a normal approximation to a binomial distribution may be used.',
      'Compute the mean and standard deviation of the approximating normal distribution.',
      'Apply the correct continuity correction.',
      'Translate the corrected normal event into probability notation.',
    ],

    invariantFacts: [
      `There are ${numberOfTrials} fixed trials.`,
      `The probability of success on each trial is ${probabilityOfSuccess}.`,
      `The random variable ${binomialSymbol} represents ${seed.randomVariableDescription}.`,
      `${binomialSymbol} follows a binomial distribution with n = ${numberOfTrials} and p = ${probabilityOfSuccess}.`,
      `The normal approximation uses mean np = ${mean}.`,
      `The normal approximation uses standard deviation sqrt(np(1-p)) = ${standardDeviation}.`,
      `The question asks for ${questionDescription}.`,
      `The original binomial event is ${originalBinomialNotation}.`,
      `The continuity-corrected normal event is ${correctedNormalNotation}.`,
      `The corrected cutoff or corrected interval should be calculated by the student, not stated in the problem text.`,
    ],

    requiredTasks: [
      'State the binomial distribution.',
      'Check that a normal approximation is appropriate.',
      'Calculate the mean using np.',
      'Calculate the standard deviation using sqrt(np(1-p)).',
      'Identify the original binomial probability event.',
      'Apply the appropriate continuity correction.',
      'Use the normal approximation to find the requested probability.',
      'Write a sentence interpreting the probability in context.',
    ],
  };
}
