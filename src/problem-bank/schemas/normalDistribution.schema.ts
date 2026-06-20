import { z } from 'zod';

const singleThresholdQuestionSchema = z.object({
  type: z.enum(['less-than', 'greater-than']),
  threshold: z.number(),
  notation: z.string(),
});

const betweenQuestionSchema = z.object({
  type: z.literal('between'),
  lowerBound: z.number(),
  upperBound: z.number(),
  notation: z.string(),
});

const percentileQuestionSchema = z.object({
  type: z.literal('percentile'),
  percentile: z.number(),
  tail: z.enum(['lower', 'upper']),
  notation: z.string(),
});

const normalQuestionSchema = z.discriminatedUnion('type', [
  singleThresholdQuestionSchema,
  betweenQuestionSchema,
  percentileQuestionSchema,
]);

export const normalDistributionProblemSchema = z.object({
  id: z.string(),

  topic: z.literal('normal-distribution'),

  subtopic: z.enum(['less-than', 'greater-than', 'between', 'percentile']),

  context: z.object({
    setting: z.string(),
    variableDescription: z.string(),
    unit: z.string().optional(),
    tone: z.string().optional(),
    variationProfile: z
      .object({
        openingStyle: z
          .enum([
            'direct',
            'conversational',
            'research',
            'quality-control',
            'curiosity',
          ])
          .optional(),
        toneGuidance: z.string().optional(),
        vocabularySuggestions: z.array(z.string()).optional(),
        avoidPhrases: z.array(z.string()).optional(),
        contextDetails: z.array(z.string()).optional(),
        seedPhrasesInContext: z.array(z.string()).optional(),
      })
      .optional(),
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

  question: normalQuestionSchema,

  learningGoals: z.array(z.string()),

  invariantFacts: z.array(z.string()),

  requiredTasks: z.array(z.string()),
});

export type NormalDistributionProblem = z.infer<
  typeof normalDistributionProblemSchema
>;
