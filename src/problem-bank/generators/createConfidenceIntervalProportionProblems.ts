import type { ConfidenceIntervalProportionProblem } from '../schemas/confidenceIntervalProportion.schema';
import { confidenceIntervalProportionContexts } from '../contextSeeds/confidenceIntervalProportionContexts';

type ConfidenceIntervalProportionQuestionType =
  | 'two-sided'
  | 'lower-bound'
  | 'upper-bound'
  | 'sample-size-with-preliminary-estimate'
  | 'sample-size-no-preliminary-estimate';

type CreateConfidenceIntervalProportionProblemOptions = {
  contextId: string;
  questionType: ConfidenceIntervalProportionQuestionType;

  confidenceLevel?: number;

  sampleSize?: number;
  successCount?: number;

  marginOfError?: number;
  preliminaryEstimate?: number;
};

function roundTo(value: number, digits: number): number {
  return Number(value.toFixed(digits));
}

function getConfidenceLevel(
  questionType: ConfidenceIntervalProportionQuestionType,
  confidenceLevels: {
    twoSided: number;
    lowerBound: number;
    upperBound: number;
    sampleSizeWithPreliminaryEstimate: number;
    sampleSizeNoPreliminaryEstimate: number;
  },
): number {
  switch (questionType) {
    case 'two-sided':
      return confidenceLevels.twoSided;

    case 'lower-bound':
      return confidenceLevels.lowerBound;

    case 'upper-bound':
      return confidenceLevels.upperBound;

    case 'sample-size-with-preliminary-estimate':
      return confidenceLevels.sampleSizeWithPreliminaryEstimate;

    case 'sample-size-no-preliminary-estimate':
      return confidenceLevels.sampleSizeNoPreliminaryEstimate;
  }
}

function getCriticalValueType(
  questionType: ConfidenceIntervalProportionQuestionType,
): ConfidenceIntervalProportionProblem['method']['criticalValueType'] {
  return questionType === 'lower-bound' || questionType === 'upper-bound'
    ? 'one-sided-z'
    : 'two-sided-z';
}

function buildQuestion(
  questionType: ConfidenceIntervalProportionQuestionType,
  confidenceLevel: number,
  marginOfError?: number,
  preliminaryEstimate?: number,
): ConfidenceIntervalProportionProblem['question'] {
  switch (questionType) {
    case 'two-sided':
    case 'lower-bound':
    case 'upper-bound':
      return {
        type: questionType,
        confidenceLevel,
      };

    case 'sample-size-with-preliminary-estimate':
      if (typeof marginOfError !== 'number') {
        throw new Error(
          'A sample-size-with-preliminary-estimate question requires marginOfError.',
        );
      }

      if (typeof preliminaryEstimate !== 'number') {
        throw new Error(
          'A sample-size-with-preliminary-estimate question requires preliminaryEstimate.',
        );
      }

      return {
        type: questionType,
        confidenceLevel,
        marginOfError,
        preliminaryEstimate,
      };

    case 'sample-size-no-preliminary-estimate':
      if (typeof marginOfError !== 'number') {
        throw new Error(
          'A sample-size-no-preliminary-estimate question requires marginOfError.',
        );
      }

      return {
        type: questionType,
        confidenceLevel,
        marginOfError,
      };
  }
}

function buildQuestionDescription(
  question: ConfidenceIntervalProportionProblem['question'],
  parameterDescription: string,
): string {
  switch (question.type) {
    case 'two-sided':
      return `construct a ${question.confidenceLevel}% confidence interval for ${parameterDescription}`;

    case 'lower-bound':
      return `construct a ${question.confidenceLevel}% lower confidence bound for ${parameterDescription}`;

    case 'upper-bound':
      return `construct a ${question.confidenceLevel}% upper confidence bound for ${parameterDescription}`;

    case 'sample-size-with-preliminary-estimate':
      return `find the minimum sample size needed to estimate ${parameterDescription} with a ${question.confidenceLevel}% confidence level, a margin of error no more than ${question.marginOfError}, and a preliminary estimate of ${question.preliminaryEstimate}`;

    case 'sample-size-no-preliminary-estimate':
      return `find the minimum sample size needed to estimate ${parameterDescription} with a ${question.confidenceLevel}% confidence level and a margin of error no more than ${question.marginOfError}, when no preliminary estimate is available`;
  }
}

function buildRequiredTasks(
  question: ConfidenceIntervalProportionProblem['question'],
): string[] {
  switch (question.type) {
    case 'two-sided':
      return [
        'Identify the population proportion being estimated.',
        'Identify the sample size.',
        'Identify the number of successes.',
        'Calculate the sample proportion.',
        'Use a z critical value.',
        'Construct the two-sided confidence interval.',
        'Write a sentence interpreting the confidence interval in context.',
      ];

    case 'lower-bound':
      return [
        'Identify the population proportion being estimated.',
        'Identify the sample size.',
        'Identify the number of successes.',
        'Calculate the sample proportion.',
        'Use a z critical value.',
        'Construct the lower confidence bound.',
        'Write a sentence interpreting the lower confidence bound in context.',
      ];

    case 'upper-bound':
      return [
        'Identify the population proportion being estimated.',
        'Identify the sample size.',
        'Identify the number of successes.',
        'Calculate the sample proportion.',
        'Use a z critical value.',
        'Construct the upper confidence bound.',
        'Write a sentence interpreting the upper confidence bound in context.',
      ];

    case 'sample-size-with-preliminary-estimate':
      return [
        'Identify the population proportion being estimated.',
        'Identify the desired confidence level.',
        'Identify the desired margin of error.',
        'Identify the preliminary estimate of the population proportion.',
        'Use a z critical value.',
        'Calculate the required sample size using the preliminary estimate.',
        'Round the sample size up to the next whole number.',
        'Write a sentence interpreting the required sample size in context.',
      ];

    case 'sample-size-no-preliminary-estimate':
      return [
        'Identify the population proportion being estimated.',
        'Identify the desired confidence level.',
        'Identify the desired margin of error.',
        'Recognize that no preliminary estimate is available.',
        'Use the conservative planning value 0.5 for the population proportion.',
        'Use a z critical value.',
        'Calculate the required sample size.',
        'Round the sample size up to the next whole number.',
        'Write a sentence interpreting the required sample size in context.',
      ];
  }
}

export function createConfidenceIntervalProportionProblem(
  options: CreateConfidenceIntervalProportionProblemOptions,
): ConfidenceIntervalProportionProblem {
  const seed = confidenceIntervalProportionContexts.find(
    (context) => context.id === options.contextId,
  );

  if (!seed) {
    throw new Error(
      `No confidence interval proportion context seed found for: ${options.contextId}`,
    );
  }

  const confidenceLevel =
    options.confidenceLevel ??
    getConfidenceLevel(options.questionType, seed.suggestedConfidenceLevels);

  const marginOfError = options.marginOfError ?? seed.defaultMarginOfError;

  const preliminaryEstimate =
    options.preliminaryEstimate ?? seed.defaultPreliminaryEstimate;

  const question = buildQuestion(
    options.questionType,
    confidenceLevel,
    marginOfError,
    preliminaryEstimate,
  );

  const questionDescription = buildQuestionDescription(
    question,
    seed.parameterDescription,
  );

  const isSampleSizeQuestion =
    question.type === 'sample-size-with-preliminary-estimate' ||
    question.type === 'sample-size-no-preliminary-estimate';

  const sampleSize = options.sampleSize ?? seed.defaultSampleSize;

  const successCount = options.successCount ?? seed.defaultSuccessCount;

  const sampleProportion = roundTo(successCount / sampleSize, 4);

  return {
    id: `ci-proportion-${seed.id}-${options.questionType}-${confidenceLevel}`,

    topic: 'confidence-interval-proportion',

    subtopic: options.questionType,

    context: seed.context,

    parameter: {
      symbol: 'p',
      description: seed.parameterDescription,
    },

    sample: isSampleSizeQuestion
      ? undefined
      : {
          sampleSize,
          successCount,
          sampleProportion,
        },

    question,

    method: {
      intervalFamily: 'z',
      criticalValueType: getCriticalValueType(options.questionType),

      standardErrorFormula: isSampleSizeQuestion
        ? undefined
        : 'sqrt(p-hat(1-p-hat)/n)',

      marginOfErrorFormula: isSampleSizeQuestion
        ? undefined
        : 'z* sqrt(p-hat(1-p-hat)/n)',

      sampleSizeFormulaWithPreliminaryEstimate:
        question.type === 'sample-size-with-preliminary-estimate'
          ? 'z^2 p-hat(1-p-hat) / E^2'
          : undefined,

      sampleSizeFormulaNoPreliminaryEstimate:
        question.type === 'sample-size-no-preliminary-estimate'
          ? 'z^2(0.25) / E^2'
          : undefined,
    },

    learningGoals: [
      'Identify the population proportion as the parameter being estimated.',
      'Distinguish a sample proportion from a population proportion.',
      'Choose a z-based confidence interval, confidence bound, or sample-size method for a population proportion.',
      'Distinguish a two-sided confidence interval from a one-sided confidence bound.',
      'Recognize when a preliminary estimate is available for sample-size planning.',
      'Interpret the interval, bound, or required sample size in context.',
    ],

    invariantFacts: [
      `The parameter is ${seed.parameterDescription}.`,
      `The success outcome is: ${seed.context.successDescription}.`,
      `The confidence level is ${confidenceLevel}%.`,
      `The method uses a z critical value for a population proportion.`,
      `The question asks students to ${questionDescription}.`,

      ...(isSampleSizeQuestion
        ? [
            `The desired margin of error is ${marginOfError}.`,
            ...(question.type === 'sample-size-with-preliminary-estimate'
              ? [
                  `A preliminary estimate of the population proportion is ${question.preliminaryEstimate}.`,
                ]
              : [
                  'No preliminary estimate of the population proportion is available.',
                  'The conservative planning value is 0.5.',
                ]),
            'The required sample size should be rounded up to the next whole number.',
          ]
        : [
            `The sample size is ${sampleSize}.`,
            `The number of successes is ${successCount}.`,
            `The sample proportion is ${sampleProportion}.`,
          ]),
    ],

    requiredTasks: buildRequiredTasks(question),
  };
}
