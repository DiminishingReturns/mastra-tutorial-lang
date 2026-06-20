import { z } from 'zod';

const exactlyQuestionSchema = z.object({
  type: z.literal('exactly'),
  successCount: z.number(),
});

const atMostQuestionSchema = z.object({
  type: z.literal('at-most'),
  successCount: z.number(),
});

const atLeastQuestionSchema = z.object({
  type: z.literal('at-least'),
  successCount: z.number(),
});

const betweenQuestionSchema = z.object({
  type: z.literal('between'),
  lowerSuccessCount: z.number(),
  upperSuccessCount: z.number(),
});

const lessThanQuestionSchema = z.object({
  type: z.literal('less-than'),
  successCount: z.number(),
});
const moreThanQuestionSchema = z.object({
  type: z.literal('more-than'),
  successCount: z.number(),
});

const expectedValueQuestionSchema = z.object({
  type: z.literal('expected-value'),
});

const varianceQuestionSchema = z.object({
  type: z.literal('variance-standard-deviation'),
});

const binomialQuestionSchema = z.discriminatedUnion('type', [
  exactlyQuestionSchema,
  atMostQuestionSchema,
  atLeastQuestionSchema,
  betweenQuestionSchema,
  lessThanQuestionSchema,
  moreThanQuestionSchema,
  expectedValueQuestionSchema,
  varianceQuestionSchema,
]);

export const binomialDistributionProblemSchema = z.object({
  id: z.string(),

  topic: z.literal('binomial-distribution'),

  subtopic: z.enum([
    'exactly',
    'at-most',
    'at-least',
    'between',
    'less-than',
    'more-than',
    'expected-value',
    'variance-standard-deviation',
  ]),

  context: z.object({
    setting: z.string(),
    trialDescription: z.string(),
    successDescription: z.string(),
    failureDescription: z.string().optional(),
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

  randomVariable: z.object({
    symbol: z.string(),
    description: z.string(),
  }),

  distribution: z.object({
    type: z.literal('binomial'),
    numberOfTrials: z.number(),
    probabilityOfSuccess: z.number(),
  }),

  question: binomialQuestionSchema,

  learningGoals: z.array(z.string()),

  invariantFacts: z.array(z.string()),

  requiredTasks: z.array(z.string()),
});

export type BinomialDistributionProblem = z.infer<
  typeof binomialDistributionProblemSchema
>;
