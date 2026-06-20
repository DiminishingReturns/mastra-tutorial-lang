import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

import { normalDistributionProblemSchema } from '../../problem-bank/schemas/normalDistribution.schema';
import type { NormalDistributionProblem } from '../../problem-bank/schemas/normalDistribution.schema';

const normalDistributionSolutionInputSchema = z.object({
  id: z.string(),

  topic: z.literal('normal-distribution'),

  subtopic: z.enum(['less-than', 'greater-than', 'between', 'percentile']),

  context: z.object({
    setting: z.string(),
    variableDescription: z.string(),
    unit: z.string().optional(),
  }),

  randomVariable: z.object({
    symbol: z.string(),
    description: z.string(),
    unit: z.string().optional(),
  }),

  distribution: z.object({
    type: z.literal('normal'),
    mean: z.number(),
    standardDeviation: z.number(),
  }),

  question: z.object({
    type: z.enum(['less-than', 'greater-than', 'between', 'percentile']),

    // for less-than / greater-than
    threshold: z.number().optional(),

    // for between
    lowerBound: z.number().optional(),
    upperBound: z.number().optional(),

    // for percentile
    percentile: z.number().optional(),
    tail: z.enum(['lower', 'upper']).optional(),

    notation: z.string().optional(),
  }),

  learningGoals: z.array(z.string()),
  invariantFacts: z.array(z.string()),
  requiredTasks: z.array(z.string()),
});

const normalSolutionSchema = z.discriminatedUnion('questionType', [
  z.object({
    questionType: z.enum(['less-than', 'greater-than']),
    mean: z.number(),
    standardDeviation: z.number(),
    threshold: z.number(),
    zScore: z.number(),
    probability: z.number(),
    probabilityPercent: z.number(),
    roundedProbability: z.string(),
    interpretation: z.string(),
  }),

  z.object({
    questionType: z.literal('between'),
    mean: z.number(),
    standardDeviation: z.number(),
    lowerBound: z.number(),
    upperBound: z.number(),
    lowerZScore: z.number(),
    upperZScore: z.number(),
    probability: z.number(),
    probabilityPercent: z.number(),
    roundedProbability: z.string(),
    interpretation: z.string(),
  }),

  z.object({
    questionType: z.literal('percentile'),
    mean: z.number(),
    standardDeviation: z.number(),
    percentile: z.number(),
    tail: z.enum(['lower', 'upper']),
    zScore: z.number(),
    xValue: z.number(),
    interpretation: z.string(),
  }),
]);

function round(value: number, digits = 4): number {
  return Number(value.toFixed(digits));
}

function roundForDisplay(value: number, digits = 4): string {
  return value.toFixed(digits);
}

// Approximation to the standard normal CDF.
// Abramowitz and Stegun style approximation.
function standardNormalCdf(z: number): number {
  const sign = z < 0 ? -1 : 1;
  const absZ = Math.abs(z) / Math.sqrt(2);

  const t = 1 / (1 + 0.3275911 * absZ);

  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;

  const erf =
    sign *
    (1 -
      ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) *
        t *
        Math.exp(-absZ * absZ));

  return 0.5 * (1 + erf);
}

// Approximation to inverse standard normal CDF.
// Peter John Acklam's approximation.
function inverseStandardNormalCdf(p: number): number {
  if (p <= 0 || p >= 1) {
    throw new Error('Percentile probability must be between 0 and 1.');
  }

  const a = [
    -3.969683028665376e1, 2.209460984245205e2, -2.759285104469687e2,
    1.38357751867269e2, -3.066479806614716e1, 2.506628277459239,
  ];

  const b = [
    -5.447609879822406e1, 1.615858368580409e2, -1.556989798598866e2,
    6.680131188771972e1, -1.328068155288572e1,
  ];

  const c = [
    -7.784894002430293e-3, -3.223964580411365e-1, -2.400758277161838,
    -2.549732539343734, 4.374664141464968, 2.938163982698783,
  ];

  const d = [
    7.784695709041462e-3, 3.224671290700398e-1, 2.445134137142996,
    3.754408661907416,
  ];

  const pLow = 0.02425;
  const pHigh = 1 - pLow;

  let q: number;
  let r: number;

  if (p < pLow) {
    q = Math.sqrt(-2 * Math.log(p));
    return (
      (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
      ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1)
    );
  }

  if (p <= pHigh) {
    q = p - 0.5;
    r = q * q;
    return (
      ((((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) *
        q) /
      (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1)
    );
  }

  q = Math.sqrt(-2 * Math.log(1 - p));
  return -(
    (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
    ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1)
  );
}

function describeVariable(problem: NormalDistributionProblem): string {
  return problem.randomVariable.description;
}

export function solveNormalDistributionProblem(
  problem: NormalDistributionProblem,
) {
  const mean = problem.distribution.mean;
  const standardDeviation = problem.distribution.standardDeviation;
  const variableDescription = describeVariable(problem);
  const unit = problem.randomVariable.unit ?? problem.context.unit ?? '';

  if (problem.question.type === 'less-than') {
    const threshold = problem.question.threshold;
    const zScore = (threshold - mean) / standardDeviation;
    const probability = standardNormalCdf(zScore);

    return {
      questionType: 'less-than' as const,
      mean,
      standardDeviation,
      threshold,
      zScore: round(zScore),
      probability: round(probability),
      probabilityPercent: round(probability * 100, 2),
      roundedProbability: roundForDisplay(probability),
      interpretation: `The probability that ${variableDescription} is less than ${threshold} ${unit} is approximately ${roundForDisplay(
        probability,
      )}, or ${round(probability * 100, 2)}%.`,
    };
  }

  if (problem.question.type === 'greater-than') {
    const threshold = problem.question.threshold;
    const zScore = (threshold - mean) / standardDeviation;
    const probability = 1 - standardNormalCdf(zScore);

    return {
      questionType: 'greater-than' as const,
      mean,
      standardDeviation,
      threshold,
      zScore: round(zScore),
      probability: round(probability),
      probabilityPercent: round(probability * 100, 2),
      roundedProbability: roundForDisplay(probability),
      interpretation: `The probability that ${variableDescription} is greater than ${threshold} ${unit} is approximately ${roundForDisplay(
        probability,
      )}, or ${round(probability * 100, 2)}%.`,
    };
  }

  if (problem.question.type === 'between') {
    const lowerBound = problem.question.lowerBound;
    const upperBound = problem.question.upperBound;

    const lowerZScore = (lowerBound - mean) / standardDeviation;
    const upperZScore = (upperBound - mean) / standardDeviation;

    const probability =
      standardNormalCdf(upperZScore) - standardNormalCdf(lowerZScore);

    return {
      questionType: 'between' as const,
      mean,
      standardDeviation,
      lowerBound,
      upperBound,
      lowerZScore: round(lowerZScore),
      upperZScore: round(upperZScore),
      probability: round(probability),
      probabilityPercent: round(probability * 100, 2),
      roundedProbability: roundForDisplay(probability),
      interpretation: `The probability that ${variableDescription} is between ${lowerBound} ${unit} and ${upperBound} ${unit} is approximately ${roundForDisplay(
        probability,
      )}, or ${round(probability * 100, 2)}%.`,
    };
  }

  if (problem.question.type === 'percentile') {
    const percentile = problem.question.percentile;
    const tail = problem.question.tail;

    const cumulativeProbability =
      tail === 'lower' ? percentile : 1 - percentile;

    const zScore = inverseStandardNormalCdf(cumulativeProbability);
    const xValue = mean + zScore * standardDeviation;

    const percentage = round(percentile * 100, 2);

    return {
      questionType: 'percentile' as const,
      mean,
      standardDeviation,
      percentile,
      tail,
      zScore: round(zScore),
      xValue: round(xValue, 2),
      interpretation:
        tail === 'lower'
          ? `Approximately ${percentage}% of values of ${variableDescription} are below ${round(
              xValue,
              2,
            )} ${unit}.`
          : `Approximately ${percentage}% of values of ${variableDescription} are above ${round(
              xValue,
              2,
            )} ${unit}.`,
    };
  }

  throw new Error('Invalid question type');
}

export const normalDistributionSolutionTool = createTool({
  id: 'normal-distribution-solution',
  description:
    'Computes z-scores, probabilities, percentile values, and interpretations for canonical normal distribution problems.',

  inputSchema: normalDistributionSolutionInputSchema,

  outputSchema: normalSolutionSchema,

  execute: async (inputData) => {
    return solveNormalDistributionProblem(
      inputData as NormalDistributionProblem,
    );
  },
});
