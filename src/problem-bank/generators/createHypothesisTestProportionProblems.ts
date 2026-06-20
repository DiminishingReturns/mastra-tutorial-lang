import type { HypothesisTestProportionProblem } from '../schemas/hypothesisTestProportion.schema';
import { hypothesisTestProportionContexts } from '../contextSeeds/hypothesisTestProportionContexts';

type HypothesisTestProportionQuestionType =
  | 'left-tailed'
  | 'right-tailed'
  | 'two-tailed';

type CreateHypothesisTestProportionProblemOptions = {
  contextId: string;
  questionType: HypothesisTestProportionQuestionType;

  significanceLevel?: number;
  nullClaimValue?: number;
  sampleSize?: number;
  successCount?: number;
};

function roundTo(value: number, digits: number): number {
  return Number(value.toFixed(digits));
}

function getSignificanceLevel(
  questionType: HypothesisTestProportionQuestionType,
  significanceLevels: {
    leftTailed: number;
    rightTailed: number;
    twoTailed: number;
  },
): number {
  switch (questionType) {
    case 'left-tailed':
      return significanceLevels.leftTailed;

    case 'right-tailed':
      return significanceLevels.rightTailed;

    case 'two-tailed':
      return significanceLevels.twoTailed;
  }
}

function getAlternativeOperator(
  questionType: HypothesisTestProportionQuestionType,
): HypothesisTestProportionProblem['alternativeHypothesis']['operator'] {
  switch (questionType) {
    case 'left-tailed':
      return '<';

    case 'right-tailed':
      return '>';

    case 'two-tailed':
      return '!=';
  }
}

function getAlternativeDirection(
  questionType: HypothesisTestProportionQuestionType,
): HypothesisTestProportionProblem['alternativeHypothesis']['direction'] {
  switch (questionType) {
    case 'left-tailed':
      return 'left';

    case 'right-tailed':
      return 'right';

    case 'two-tailed':
      return 'two-sided';
  }
}

function getPValueDirection(
  questionType: HypothesisTestProportionQuestionType,
): HypothesisTestProportionProblem['method']['pValueDirection'] {
  switch (questionType) {
    case 'left-tailed':
      return 'left-tail';

    case 'right-tailed':
      return 'right-tail';

    case 'two-tailed':
      return 'two-tail';
  }
}

function buildQuestion(
  questionType: HypothesisTestProportionQuestionType,
  significanceLevel: number,
): HypothesisTestProportionProblem['question'] {
  return {
    type: questionType,
    significanceLevel,
  };
}

function buildQuestionDescription(
  questionType: HypothesisTestProportionQuestionType,
  parameterDescription: string,
  nullClaimValue: number,
): string {
  switch (questionType) {
    case 'left-tailed':
      return `test whether ${parameterDescription} is less than ${nullClaimValue}`;

    case 'right-tailed':
      return `test whether ${parameterDescription} is greater than ${nullClaimValue}`;

    case 'two-tailed':
      return `test whether ${parameterDescription} is different from ${nullClaimValue}`;
  }
}

function buildRequiredTasks(
  questionType: HypothesisTestProportionQuestionType,
): string[] {
  const commonTasks = [
    'Identify the population proportion being tested.',
    'State the null hypothesis.',
    'State the alternative hypothesis.',
    'Identify the null claim value.',
    'Identify the sample size.',
    'Identify the number of successes.',
    'Calculate the sample proportion.',
    'Identify the significance level.',
    'Use a one-sample z test for a population proportion.',
    'Calculate the p-value using the correct tail direction.',
    'Make a decision about the null hypothesis.',
    'Write a conclusion in context.',
  ];

  switch (questionType) {
    case 'left-tailed':
      return [...commonTasks, 'Use a left-tailed alternative hypothesis.'];

    case 'right-tailed':
      return [...commonTasks, 'Use a right-tailed alternative hypothesis.'];

    case 'two-tailed':
      return [...commonTasks, 'Use a two-tailed alternative hypothesis.'];
  }
}

export function createHypothesisTestProportionProblem(
  options: CreateHypothesisTestProportionProblemOptions,
): HypothesisTestProportionProblem {
  const seed = hypothesisTestProportionContexts.find(
    (context) => context.id === options.contextId,
  );

  if (!seed) {
    throw new Error(
      `No hypothesis test proportion context seed found for: ${options.contextId}`,
    );
  }

  const significanceLevel =
    options.significanceLevel ??
    getSignificanceLevel(
      options.questionType,
      seed.suggestedSignificanceLevels,
    );

  const nullClaimValue = options.nullClaimValue ?? seed.nullClaimValue;

  const sampleSize = options.sampleSize ?? seed.defaultSampleSize;

  const successCount = options.successCount ?? seed.defaultSuccessCount;

  const sampleProportion = roundTo(successCount / sampleSize, 4);

  const question = buildQuestion(options.questionType, significanceLevel);

  const questionDescription = buildQuestionDescription(
    options.questionType,
    seed.parameterDescription,
    nullClaimValue,
  );

  return {
    id: `ht-proportion-${seed.id}-${options.questionType}-alpha-${significanceLevel}`,

    topic: 'hypothesis-test-proportion',

    subtopic: options.questionType,

    context: seed.context,

    parameter: {
      symbol: 'p',
      description: seed.parameterDescription,
    },

    nullHypothesis: {
      parameterSymbol: 'p',
      claimedValue: nullClaimValue,
      operator: '=',
    },

    alternativeHypothesis: {
      parameterSymbol: 'p',
      operator: getAlternativeOperator(options.questionType),
      direction: getAlternativeDirection(options.questionType),
    },

    sample: {
      sampleSize,
      successCount,
      sampleProportion,
    },

    question,

    method: {
      testFamily: 'z',
      testStatisticFormula: '(p-hat - p0) / sqrt(p0(1-p0)/n)',
      standardErrorFormula: 'sqrt(p0(1-p0)/n)',
      pValueDirection: getPValueDirection(options.questionType),
    },

    learningGoals: [
      'Identify the population proportion as the parameter being tested.',
      'State null and alternative hypotheses for a claim about a population proportion.',
      'Distinguish left-tailed, right-tailed, and two-tailed tests.',
      'Calculate and interpret the sample proportion.',
      'Recognize that the null claim value is used in the standard error for a one-sample proportion test.',
      'Use a one-sample z test for a population proportion.',
      'Interpret the decision and conclusion in context.',
    ],

    invariantFacts: [
      `The parameter is ${seed.parameterDescription}.`,
      `The success outcome is: ${seed.context.successDescription}.`,
      `The null claim value is ${nullClaimValue}.`,
      `The null hypothesis is p = ${nullClaimValue}.`,
      `The alternative hypothesis is p ${getAlternativeOperator(
        options.questionType,
      )} ${nullClaimValue}.`,
      `The sample size is ${sampleSize}.`,
      `The number of successes is ${successCount}.`,
      `The sample proportion is ${sampleProportion}.`,
      `The significance level is ${significanceLevel}.`,
      'The method uses a z test for one population proportion.',
      'The standard error is calculated using the null claim value p0, not the sample proportion.',
      `The p-value direction is ${getPValueDirection(options.questionType)}.`,
      `The question asks students to ${questionDescription}.`,
    ],

    requiredTasks: buildRequiredTasks(options.questionType),
  };
}
