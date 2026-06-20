import { z } from 'zod';

const lessThanQuestionSchema = z.object({
  type: z.literal('less-than'),
  sampleMeanThreshold: z.number(),
});

const greaterThanQuestionSchema = z.object({
  type: z.literal('greater-than'),
  sampleMeanThreshold: z.number(),
});

const betweenQuestionSchema = z.object({
  type: z.literal('between'),
  lowerSampleMeanThreshold: z.number(),
  upperSampleMeanThreshold: z.number(),
});

const centralLimitTheoremQuestionSchema = z.discriminatedUnion('type', [
  lessThanQuestionSchema,
  greaterThanQuestionSchema,
  betweenQuestionSchema,
]);

export const centralLimitTheoremProblemSchema = z.object({
  id: z.string(),

  topic: z.literal('central-limit-theorem'),

  subtopic: z.enum(['less-than', 'greater-than', 'between']),

  context: z.object({
    setting: z.string(),

    individualDescription: z.string(),
    variableDescription: z.string(),
    unit: z.string().optional(),

    tone: z.string().optional(),

    variationProfile: z
      .object({
        openingStyle: z.string().optional(),
        toneGuidance: z.string().optional(),
        vocabularySuggestions: z.array(z.string()).optional(),
        seedPhraseInContext: z.string().optional(),
        avoidPhrases: z.array(z.string()).optional(),
        contextDetails: z.array(z.string()).optional(),
      })
      .optional(),
  }),

  individualRandomVariable: z.object({
    symbol: z.string(),
    description: z.string(),
    unit: z.string().optional(),
  }),

  populationDistribution: z.object({
    mean: z.number(),
    standardDeviation: z.number(),

    shape: z
      .enum([
        'normal',
        'approximately-normal',
        'skewed-right',
        'skewed-left',
        'unknown',
      ])
      .optional(),
  }),

  sample: z.object({
    sampleSize: z.number(),
  }),

  samplingDistribution: z.object({
    symbol: z.string(),
    description: z.string(),

    approximateDistribution: z.literal('normal'),

    mean: z.number(),
    standardError: z.number(),

    meanFormula: z.literal('mu'),
    standardErrorFormula: z.literal('sigma / sqrt(n)'),
  }),

  question: centralLimitTheoremQuestionSchema,

  learningGoals: z.array(z.string()),

  invariantFacts: z.array(z.string()),

  requiredTasks: z.array(z.string()),
});

export type CentralLimitTheoremProblem = z.infer<
  typeof centralLimitTheoremProblemSchema
>;
