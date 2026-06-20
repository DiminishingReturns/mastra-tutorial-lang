import type { HypothesisTestMeanKnownVarianceProblem } from '../schemas/hypothesisTestMeanKnownVariance.schema';
import { hypothesisTestMeanKnownVarianceContexts } from '../contextSeeds/hypothesisTestMeanKnonwnVarianceContexts';

type HypothesisTestMeanKnownVarianceQuestionType =
  | 'left-tailed'
  | 'right-tailed'
  | 'two-tailed';

type CreateHypothesisTestMeanKnownVarianceProblemOptions = {
  contextId: string;
  questionType: HypothesisTestMeanKnownVarianceQuestionType;

  significanceLevel?: number;
  nullClaimValue?: number;
  populationStandardDeviation?: number;
  sampleSize?: number;
  sampleMean?: number;
};

function getSignificanceLevel(
  questionType: HypothesisTestMeanKnownVarianceQuestionType,
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
  questionType: HypothesisTestMeanKnownVarianceQuestionType,
): HypothesisTestMeanKnownVarianceProblem['alternativeHypothesis']['operator'] {
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
  questionType: HypothesisTestMeanKnownVarianceQuestionType,
): HypothesisTestMeanKnownVarianceProblem['alternativeHypothesis']['direction'] {
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
  questionType: HypothesisTestMeanKnownVarianceQuestionType,
): HypothesisTestMeanKnownVarianceProblem['method']['pValueDirection'] {
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
  questionType: HypothesisTestMeanKnownVarianceQuestionType,
  significanceLevel: number,
): HypothesisTestMeanKnownVarianceProblem['question'] {
  return {
    type: questionType,
    significanceLevel,
  };
}

function buildQuestionDescription(
  questionType: HypothesisTestMeanKnownVarianceQuestionType,
  parameterDescription: string,
  nullClaimValue: number,
  unit?: string,
): string {
  const valueWithUnit = `${nullClaimValue}${unit ? ` ${unit}` : ''}`;

  switch (questionType) {
    case 'left-tailed':
      return `test whether ${parameterDescription} is less than ${valueWithUnit}`;

    case 'right-tailed':
      return `test whether ${parameterDescription} is greater than ${valueWithUnit}`;

    case 'two-tailed':
      return `test whether ${parameterDescription} is different from ${valueWithUnit}`;
  }
}

function buildRequiredTasks(
  questionType: HypothesisTestMeanKnownVarianceQuestionType,
): string[] {
  const commonTasks = [
    'Identify the population mean being tested.',
    'State the null hypothesis.',
    'State the alternative hypothesis.',
    'Identify the known population standard deviation.',
    'Identify the sample mean.',
    'Identify the sample size.',
    'Identify the significance level.',
    'Use a z test statistic.',
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

export function createHypothesisTestMeanKnownVarianceProblem(
  options: CreateHypothesisTestMeanKnownVarianceProblemOptions,
): HypothesisTestMeanKnownVarianceProblem {
  const seed = hypothesisTestMeanKnownVarianceContexts.find(
    (context) => context.id === options.contextId,
  );

  if (!seed) {
    throw new Error(
      `No hypothesis test mean known variance context seed found for: ${options.contextId}`,
    );
  }

  const significanceLevel =
    options.significanceLevel ??
    getSignificanceLevel(
      options.questionType,
      seed.suggestedSignificanceLevels,
    );

  const nullClaimValue = options.nullClaimValue ?? seed.nullClaimValue;

  const populationStandardDeviation =
    options.populationStandardDeviation ??
    seed.knownPopulationStandardDeviation;

  const sampleSize = options.sampleSize ?? seed.defaultSampleSize;

  const sampleMean = options.sampleMean ?? seed.defaultSampleMean;

  const question = buildQuestion(options.questionType, significanceLevel);

  const questionDescription = buildQuestionDescription(
    options.questionType,
    seed.parameterDescription,
    nullClaimValue,
    seed.context.unit,
  );

  return {
    id: `ht-mean-known-variance-${seed.id}-${options.questionType}-alpha-${significanceLevel}`,

    topic: 'hypothesis-test-mean-known-variance',

    subtopic: options.questionType,

    context: seed.context,

    parameter: {
      symbol: 'mu',
      description: seed.parameterDescription,
    },

    nullHypothesis: {
      parameterSymbol: 'mu',
      claimedValue: nullClaimValue,
      operator: '=',
    },

    alternativeHypothesis: {
      parameterSymbol: 'mu',
      operator: getAlternativeOperator(options.questionType),
      direction: getAlternativeDirection(options.questionType),
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
      testFamily: 'z',
      testStatisticFormula: '(x-bar - mu0) / (sigma / sqrt(n))',
      standardErrorFormula: 'sigma / sqrt(n)',
      pValueDirection: getPValueDirection(options.questionType),
    },

    learningGoals: [
      'Identify the population mean as the parameter being tested.',
      'State null and alternative hypotheses for a claim about a population mean.',
      'Distinguish left-tailed, right-tailed, and two-tailed tests.',
      'Recognize that a z test is appropriate when the population standard deviation is known.',
      'Calculate the P-value of the test statistic using the correct tail(s) based on the alternative hypothesis.',
      'Make a decision about the null hypothesis based on the significance level and p-value.',
      'Use the sample mean, known population standard deviation, and sample size to conduct the test.',
      'Interpret the decision and conclusion in context.',
    ],

    invariantFacts: [
      `The parameter is ${seed.parameterDescription}.`,
      `The null claim value is ${nullClaimValue}${
        seed.context.unit ? ` ${seed.context.unit}` : ''
      }.`,
      `The null hypothesis is mu = ${nullClaimValue}.`,
      `The alternative hypothesis is mu ${getAlternativeOperator(
        options.questionType,
      )} ${nullClaimValue}.`,
      `The population standard deviation is known and equals ${populationStandardDeviation}${
        seed.context.unit ? ` ${seed.context.unit}` : ''
      }.`,
      `The sample size is ${sampleSize}.`,
      `The sample mean is ${sampleMean}${
        seed.context.unit ? ` ${seed.context.unit}` : ''
      }.`,
      `The significance level is ${significanceLevel}.`,
      `The method uses a z test because the population standard deviation is known.`,
      `The p-value direction is ${getPValueDirection(options.questionType)}.`,
      `The question asks students to ${questionDescription}.`,
    ],

    requiredTasks: buildRequiredTasks(options.questionType),
  };
}
