import type { HypothesisTestMeanUnknownVarianceProblem } from '../schemas/hypothesisTestMeanUnknownVariance.schema';
import { hypothesisTestMeanUnknownVarianceContexts } from '../contextSeeds/hypothesisTestMeanUnknownVarianceContexts';

type HypothesisTestMeanUnknownVarianceQuestionType =
  | 'left-tailed'
  | 'right-tailed'
  | 'two-tailed';

type CreateHypothesisTestMeanUnknownVarianceProblemOptions = {
  contextId: string;
  questionType: HypothesisTestMeanUnknownVarianceQuestionType;

  significanceLevel?: number;
  nullClaimValue?: number;
  sampleSize?: number;
  sampleMean?: number;
  sampleStandardDeviation?: number;

  expectedDecision?: 'reject-null' | 'fail-to-reject-null';
  evidenceStrength?: 'strong' | 'borderline' | 'weak';
};

function getSignificanceLevel(
  questionType: HypothesisTestMeanUnknownVarianceQuestionType,
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
  questionType: HypothesisTestMeanUnknownVarianceQuestionType,
): HypothesisTestMeanUnknownVarianceProblem['alternativeHypothesis']['operator'] {
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
  questionType: HypothesisTestMeanUnknownVarianceQuestionType,
): HypothesisTestMeanUnknownVarianceProblem['alternativeHypothesis']['direction'] {
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
  questionType: HypothesisTestMeanUnknownVarianceQuestionType,
): HypothesisTestMeanUnknownVarianceProblem['method']['pValueDirection'] {
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
  questionType: HypothesisTestMeanUnknownVarianceQuestionType,
  significanceLevel: number,
): HypothesisTestMeanUnknownVarianceProblem['question'] {
  return {
    type: questionType,
    significanceLevel,
  };
}

function buildQuestionDescription(
  questionType: HypothesisTestMeanUnknownVarianceQuestionType,
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
  questionType: HypothesisTestMeanUnknownVarianceQuestionType,
): string[] {
  const commonTasks = [
    'Identify the population mean being tested.',
    'State the null hypothesis.',
    'State the alternative hypothesis.',
    'Recognize that the population standard deviation is unknown.',
    'Identify the sample mean.',
    'Identify the sample size.',
    'Identify the sample standard deviation.',
    'Identify the significance level.',
    'Use a t test statistic.',
    'Calculate the degrees of freedom using n - 1.',
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

function getApproximateCriticalT({
  questionType,
  significanceLevel,
  degreesOfFreedom,
}: {
  questionType: HypothesisTestMeanUnknownVarianceQuestionType;
  significanceLevel: number;
  degreesOfFreedom: number;
}): number {
  const alpha = significanceLevel;

  // Simple table for common alpha levels and typical df ranges.
  // These are approximate but good enough for generating pedagogical examples.

  if (questionType === 'two-tailed') {
    if (alpha === 0.1) {
      if (degreesOfFreedom <= 10) return 1.812;
      if (degreesOfFreedom <= 20) return 1.725;
      if (degreesOfFreedom <= 30) return 1.697;
      if (degreesOfFreedom <= 40) return 1.684;
      if (degreesOfFreedom <= 50) return 1.676;
      if (degreesOfFreedom <= 60) return 1.671;
      if (degreesOfFreedom <= 70) return 1.667;
      if (degreesOfFreedom <= 80) return 1.664;
      if (degreesOfFreedom <= 90) return 1.662;
      if (degreesOfFreedom <= 100) return 1.66;
      return 1.645;
    }

    if (alpha === 0.05) {
      if (degreesOfFreedom <= 10) return 2.228;
      if (degreesOfFreedom <= 20) return 2.086;
      if (degreesOfFreedom <= 30) return 2.042;
      if (degreesOfFreedom <= 40) return 2.021;
      if (degreesOfFreedom <= 50) return 2.009;
      if (degreesOfFreedom <= 60) return 2.0;
      if (degreesOfFreedom <= 70) return 1.994;
      if (degreesOfFreedom <= 80) return 1.99;
      if (degreesOfFreedom <= 90) return 1.987;
      if (degreesOfFreedom <= 100) return 1.984;
      return 1.96;
    }
    if (alpha === 0.025) {
      if (degreesOfFreedom <= 10) return 2.228;
      if (degreesOfFreedom <= 20) return 2.086;
      if (degreesOfFreedom <= 30) return 2.042;
      if (degreesOfFreedom <= 40) return 2.021;
      if (degreesOfFreedom <= 50) return 2.009;
      if (degreesOfFreedom <= 60) return 2.0;
      if (degreesOfFreedom <= 70) return 1.994;
      if (degreesOfFreedom <= 80) return 1.99;
      if (degreesOfFreedom <= 90) return 1.987;
      if (degreesOfFreedom <= 100) return 1.984;
      return 1.96;
    }

    if (alpha === 0.01) {
      if (degreesOfFreedom <= 10) return 3.169;
      if (degreesOfFreedom <= 20) return 2.845;
      if (degreesOfFreedom <= 30) return 2.75;
      if (degreesOfFreedom <= 40) return 2.704;
      if (degreesOfFreedom <= 50) return 2.678;
      if (degreesOfFreedom <= 60) return 2.66;
      if (degreesOfFreedom <= 70) return 2.648;
      if (degreesOfFreedom <= 80) return 2.639;
      if (degreesOfFreedom <= 90) return 2.632;
      if (degreesOfFreedom <= 100) return 2.626;
      return 2.576;
    }
    if (alpha === 0.005) {
      if (degreesOfFreedom <= 10) return 3.169;
      if (degreesOfFreedom <= 20) return 2.845;
      if (degreesOfFreedom <= 30) return 2.75;
      if (degreesOfFreedom <= 40) return 2.704;
      if (degreesOfFreedom <= 50) return 2.678;
      if (degreesOfFreedom <= 60) return 2.66;
      if (degreesOfFreedom <= 70) return 2.648;
      if (degreesOfFreedom <= 80) return 2.639;
      if (degreesOfFreedom <= 90) return 2.632;
      if (degreesOfFreedom <= 100) return 2.626;
      return 2.576;
    }
  }

  if (questionType === 'left-tailed' || questionType === 'right-tailed') {
    if (alpha === 0.1) {
      if (degreesOfFreedom <= 10) return 1.372;
      if (degreesOfFreedom <= 20) return 1.325;
      if (degreesOfFreedom <= 30) return 1.31;
      if (degreesOfFreedom <= 40) return 1.303;
      if (degreesOfFreedom <= 50) return 1.299;
      if (degreesOfFreedom <= 60) return 1.296;
      if (degreesOfFreedom <= 70) return 1.294;
      if (degreesOfFreedom <= 80) return 1.292;
      if (degreesOfFreedom <= 90) return 1.291;
      if (degreesOfFreedom <= 100) return 1.29;
      return 1.282;
    }

    if (alpha === 0.05) {
      if (degreesOfFreedom <= 10) return 1.812;
      if (degreesOfFreedom <= 20) return 1.725;
      if (degreesOfFreedom <= 30) return 1.697;
      if (degreesOfFreedom <= 40) return 1.684;
      if (degreesOfFreedom <= 50) return 1.676;
      if (degreesOfFreedom <= 60) return 1.671;
      if (degreesOfFreedom <= 70) return 1.667;
      if (degreesOfFreedom <= 80) return 1.664;
      if (degreesOfFreedom <= 90) return 1.662;
      if (degreesOfFreedom <= 100) return 1.66;
      return 1.645;
    }

    if (alpha === 0.025) {
      if (degreesOfFreedom <= 10) return 2.228;
      if (degreesOfFreedom <= 20) return 2.086;
      if (degreesOfFreedom <= 30) return 2.042;
      if (degreesOfFreedom <= 40) return 2.021;
      if (degreesOfFreedom <= 50) return 2.009;
      if (degreesOfFreedom <= 60) return 2.0;
      if (degreesOfFreedom <= 70) return 1.994;
      if (degreesOfFreedom <= 80) return 1.99;
      if (degreesOfFreedom <= 90) return 1.987;
      if (degreesOfFreedom <= 100) return 1.984;
      return 1.96;
    }

    if (alpha === 0.01) {
      if (degreesOfFreedom <= 10) return 2.764;
      if (degreesOfFreedom <= 20) return 2.528;
      if (degreesOfFreedom <= 30) return 2.457;
      if (degreesOfFreedom <= 40) return 2.423;
      if (degreesOfFreedom <= 50) return 2.403;
      if (degreesOfFreedom <= 60) return 2.39;
      if (degreesOfFreedom <= 70) return 2.381;
      if (degreesOfFreedom <= 80) return 2.374;
      if (degreesOfFreedom <= 90) return 2.368;
      if (degreesOfFreedom <= 100) return 2.364;
      return 2.326;
    }

    if (alpha === 0.005) {
      if (degreesOfFreedom <= 10) return 3.169;
      if (degreesOfFreedom <= 20) return 2.845;
      if (degreesOfFreedom <= 30) return 2.75;
      if (degreesOfFreedom <= 40) return 2.704;
      if (degreesOfFreedom <= 50) return 2.678;
      if (degreesOfFreedom <= 60) return 2.66;
      if (degreesOfFreedom <= 70) return 2.648;
      if (degreesOfFreedom <= 80) return 2.639;
      if (degreesOfFreedom <= 90) return 2.632;
      if (degreesOfFreedom <= 100) return 2.626;
      return 2.576;
    }
  }

  // Safe fallback for common 5% cases.
  return questionType === 'two-tailed' ? 2.042 : 1.697;
}

function chooseSampleMeanForExpectedDecision({
  questionType,
  expectedDecision,
  evidenceStrength = 'strong',
  nullClaimValue,
  sampleStandardDeviation,
  sampleSize,
  significanceLevel,
}: {
  questionType: HypothesisTestMeanUnknownVarianceQuestionType;
  expectedDecision: 'reject-null' | 'fail-to-reject-null';
  evidenceStrength?: 'strong' | 'borderline' | 'weak';
  nullClaimValue: number;
  sampleStandardDeviation: number;
  sampleSize: number;
  significanceLevel: number;
}): number {
  const degreesOfFreedom = sampleSize - 1;

  const standardError = sampleStandardDeviation / Math.sqrt(sampleSize);

  const criticalT = getApproximateCriticalT({
    questionType,
    significanceLevel,
    degreesOfFreedom,
  });

  const offsetFromCritical = {
    'reject-null': {
      strong: 0.75,
      borderline: 0.15,
      weak: 0.35,
    },
    'fail-to-reject-null': {
      strong: -1.0,
      borderline: -0.15,
      weak: -0.5,
    },
  } as const;

  const tMagnitude =
    criticalT + offsetFromCritical[expectedDecision][evidenceStrength];

  let signedT: number;

  switch (questionType) {
    case 'left-tailed':
      signedT = -tMagnitude;
      break;

    case 'right-tailed':
      signedT = tMagnitude;
      break;

    case 'two-tailed':
      signedT = tMagnitude;
      break;
  }

  const sampleMean = nullClaimValue + signedT * standardError;

  return Number(sampleMean.toFixed(2));
}

export function createHypothesisTestMeanUnknownVarianceProblem(
  options: CreateHypothesisTestMeanUnknownVarianceProblemOptions,
): HypothesisTestMeanUnknownVarianceProblem {
  const seed = hypothesisTestMeanUnknownVarianceContexts.find(
    (context) => context.id === options.contextId,
  );

  if (!seed) {
    throw new Error(
      `No hypothesis test mean unknown variance context seed found for: ${options.contextId}`,
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

  const sampleStandardDeviation =
    options.sampleStandardDeviation ?? seed.defaultSampleStandardDeviation;

  const sampleMean =
    options.sampleMean ??
    (options.expectedDecision
      ? chooseSampleMeanForExpectedDecision({
          questionType: options.questionType,
          expectedDecision: options.expectedDecision,
          evidenceStrength: options.evidenceStrength,
          nullClaimValue,
          sampleStandardDeviation,
          sampleSize,
          significanceLevel,
        })
      : seed.defaultSampleMean);

  const degreesOfFreedom = sampleSize - 1;

  const question = buildQuestion(options.questionType, significanceLevel);

  const questionDescription = buildQuestionDescription(
    options.questionType,
    seed.parameterDescription,
    nullClaimValue,
    seed.context.unit,
  );

  return {
    id: `ht-mean-unknown-variance-${seed.id}-${options.questionType}-alpha-${significanceLevel}`,

    topic: 'hypothesis-test-mean-unknown-variance',

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
      known: false,
    },

    sample: {
      sampleSize,
      sampleMean,
      sampleStandardDeviation,
    },

    question,

    method: {
      testFamily: 't',
      testStatisticFormula: '(x-bar - mu0) / (s / sqrt(n))',
      standardErrorFormula: 's / sqrt(n)',
      degreesOfFreedomFormula: 'n - 1',
      pValueDirection: getPValueDirection(options.questionType),
    },

    solutionMetadata: options.expectedDecision
      ? {
          expectedDecision: options.expectedDecision,
          evidenceStrength: options.evidenceStrength ?? 'strong',
        }
      : undefined,

    learningGoals: [
      'Identify the population mean as the parameter being tested.',
      'State null and alternative hypotheses for a claim about a population mean.',
      'Distinguish left-tailed, right-tailed, and two-tailed tests.',
      'Recognize that a t test is appropriate when the population standard deviation is unknown.',
      'Use the sample mean, sample standard deviation, and sample size to conduct the test.',
      'Calculate the degrees of freedom for a one-sample t test.',
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
      'The population standard deviation is unknown.',
      `The sample standard deviation is ${sampleStandardDeviation}${
        seed.context.unit ? ` ${seed.context.unit}` : ''
      }.`,
      `The sample size is ${sampleSize}.`,
      `The degrees of freedom are ${degreesOfFreedom}.`,
      `The sample mean is ${sampleMean}${
        seed.context.unit ? ` ${seed.context.unit}` : ''
      }.`,
      `The significance level is ${significanceLevel}.`,
      `The method uses a t test because the population standard deviation is unknown.`,
      `The p-value direction is ${getPValueDirection(options.questionType)}.`,
      `The question asks students to ${questionDescription}.`,
    ],

    requiredTasks: buildRequiredTasks(options.questionType),
  };
}
