import type { NormalDistributionProblem } from '../schemas/normalDistribution.schema';
import type { NormalDistributionContextSeed } from '../contextSeeds/normalDistributionContexts';

type NormalQuestionType =
  | 'less-than'
  | 'greater-than'
  | 'between'
  | 'percentile';

type CreateNormalDistributionProblemOptions = {
  seed: NormalDistributionContextSeed;
  questionType?: NormalQuestionType;
  mean?: number;
  standardDeviation?: number;
  thresholdOffsetInStandardDeviations?: number;
  lowerOffsetInStandardDeviations?: number;
  upperOffsetInStandardDeviations?: number;
  percentile?: number;
  percentileTail?: 'lower' | 'upper';
};

function round(value: number, digits = 2): number {
  return Number(value.toFixed(digits));
}

function midpoint([min, max]: [number, number]): number {
  return (min + max) / 2;
}

function makeProblemId(
  seedId: string,
  questionType: NormalQuestionType,
  mean: number,
  standardDeviation: number,
  threshold: number,
): string {
  return `normal-${seedId}-${questionType}-mean-${mean}-sd-${standardDeviation}-threshold-${threshold}`
    .replace(/\./g, '-')
    .replace(/\s+/g, '-')
    .toLowerCase();
}

function makeNotation(options: {
  questionType?: NormalQuestionType;
  threshold?: number;
  lowerBound?: number;
  upperBound?: number;
  percentile?: number;
  percentileTail?: 'lower' | 'upper';
}): string {
  const {
    questionType = 'less-than',
    threshold,
    lowerBound,
    upperBound,
    percentile,
    percentileTail,
  } = options;

  if (questionType === 'less-than') {
    return `P(X < ${threshold})`;
  }
  if (questionType === 'greater-than') {
    return `P(X > ${threshold})`;
  }
  if (questionType === 'between') {
    return `P(${lowerBound} < X < ${upperBound})`;
  }
  const percentage = percentile !== undefined ? percentile * 100 : 0;

  if (percentileTail === 'upper') {
    return `Find x such that P(X > x) = ${percentage}%`;
  }

  return `Find x such that P(X < x) = ${percentage}%`;
}

function makeQuestionDescription(options: {
  questionType: NormalQuestionType;
  variableDescription: string;
  threshold: number;
  unit: string;
  lowerBound?: number;
  upperBound?: number;
  percentile?: number;
  percentileTail?: 'lower' | 'upper';
}): string {
  const {
    questionType,
    variableDescription,
    threshold,
    unit,
    lowerBound,
    upperBound,
    percentile,
    percentileTail,
  } = options;

  if (questionType === 'less-than') {
    return `The question asks for the probability that ${variableDescription} is less than ${threshold} ${unit}.`;
  }

  if (questionType === 'greater-than') {
    return `The question asks for the probability that ${variableDescription} is greater than ${threshold} ${unit}.`;
  }

  if (questionType === 'between') {
    return `The question asks for the probability that ${variableDescription} is between ${lowerBound} ${unit} and ${upperBound} ${unit}.`;
  }

  const percentage = percentile !== undefined ? percentile * 100 : 0;

  if (percentileTail === 'upper') {
    return `The question asks for the value above which the highest ${percentage}% of observations fall.`;
  }

  return `The question asks for the value below which the lowest ${percentage}% of observations fall.`;
}

export function createNormalDistributionProblem({
  seed,
  questionType = 'less-than',
  mean,
  standardDeviation,
  thresholdOffsetInStandardDeviations,
  lowerOffsetInStandardDeviations,
  upperOffsetInStandardDeviations,
  percentile = 0.05,
  percentileTail = 'lower',
}: CreateNormalDistributionProblemOptions): NormalDistributionProblem {
  const chosenMean = round(mean ?? midpoint(seed.realisticMeanRange));

  const chosenStandardDeviation = round(
    standardDeviation ?? midpoint(seed.realisticStandardDeviationRange),
  );

  const chosenOffset =
    thresholdOffsetInStandardDeviations ??
    seed.suggestedThresholdOffsetsInStandardDeviations[0] ??
    -1;

  const threshold = round(chosenMean + chosenOffset * chosenStandardDeviation);

  const lowerOffset = lowerOffsetInStandardDeviations ?? -1;
  const upperOffset = upperOffsetInStandardDeviations ?? 1;

  const lowerBound = round(chosenMean + lowerOffset * chosenStandardDeviation);

  const upperBound = round(chosenMean + upperOffset * chosenStandardDeviation);

  const notation = makeNotation({
    questionType,
    threshold,
    lowerBound,
    upperBound,
    percentile,
    percentileTail,
  });

  const question =
    questionType === 'between'
      ? {
          type: 'between' as const,
          lowerBound,
          upperBound,
          notation,
        }
      : questionType === 'percentile'
        ? {
            type: 'percentile' as const,
            percentile,
            tail: percentileTail,
            notation,
          }
        : {
            type: questionType,
            threshold,
            notation,
          };

  return {
    id: makeProblemId(
      seed.id,
      questionType,
      chosenMean,
      chosenStandardDeviation,
      questionType === 'between' ? lowerBound : threshold,
    ),

    topic: 'normal-distribution',

    subtopic: questionType,

    context: {
      setting: seed.setting,
      variableDescription: seed.variableDescription,
      unit: seed.unit,
      tone: seed.tone,
      variationProfile: seed.variationProfile,
    },

    randomVariable: {
      symbol: 'X',
      description: seed.randomVariableDescription,
      unit: seed.unit,
    },

    distribution: {
      type: 'normal',
      mean: chosenMean,
      standardDeviation: chosenStandardDeviation,
    },

    question,

    learningGoals: [
      'Identify the random variable.',
      'Recognize the mean and standard deviation.',
      'Translate the wording into probability notation.',
      'Compute and interpret a z-score.',
    ],

    invariantFacts: [
      'The random variable is normally distributed.',
      `The mean is ${chosenMean} ${seed.unit}.`,
      `The standard deviation is ${chosenStandardDeviation} ${seed.unit}.`,

      makeQuestionDescription({
        questionType,
        variableDescription: seed.variableDescription,
        unit: seed.unit,
        threshold,
        lowerBound,
        upperBound,
        percentile,
        percentileTail,
      }),
      `The probability notation is ${notation}.`,
    ],

    requiredTasks:
      questionType === 'percentile'
        ? [
            'Find the requested percentile value.',
            'Find the corresponding z-score.',
            'Calculate the z-score to a value of the random variable.',
            'Write a sentence interpreting the percentile in context.',
          ]
        : [
            'Find the requested probability.',
            'Calculate the z-score.',
            'Find the probability.',
            'Write a sentence interpreting the probability in context.',
          ],
  };
}
