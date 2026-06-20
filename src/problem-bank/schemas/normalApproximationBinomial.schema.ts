import { z } from 'zod';

const lessThanQuestionSchema = z.object({
  type: z.literal('less-than'),
  successCount: z.number(),
});

const atMostQuestionSchema = z.object({
  type: z.literal('at-most'),
  successCount: z.number(),
});

const moreThanQuestionSchema = z.object({
  type: z.literal('more-than'),
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

  inclusivity: z.enum([
    'inclusive',
    'exclusive',
    'lower-inclusive-upper-exclusive',
    'lower-exclusive-upper-inclusive',
  ]),
});

const normalApproximationBinomialQuestionSchema = z.discriminatedUnion('type', [
  lessThanQuestionSchema,
  atMostQuestionSchema,
  moreThanQuestionSchema,
  atLeastQuestionSchema,
  betweenQuestionSchema,
]);

export const normalApproximationBinomialProblemSchema = z.object({
  id: z.string(),

  topic: z.literal('normal-approximation-binomial'),

  subtopic: z.enum([
    'less-than',
    'at-most',
    'more-than',
    'at-least',
    'between',
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

  binomialDistribution: z.object({
    type: z.literal('binomial'),
    numberOfTrials: z.number(),
    probabilityOfSuccess: z.number(),
  }),

  normalApproximation: z.object({
    type: z.literal('normal'),
    mean: z.number(),
    standardDeviation: z.number(),
    meanFormula: z.literal('np'),
    standardDeviationFormula: z.literal('sqrt(np(1-p))'),
  }),

  question: normalApproximationBinomialQuestionSchema,

  continuityCorrection: z.object({
    originalBinomialNotation: z.string(),
    correctedNormalNotation: z.string(),
    explanation: z.string(),
  }),

  learningGoals: z.array(z.string()),

  invariantFacts: z.array(z.string()),

  requiredTasks: z.array(z.string()),
});

export type NormalApproximationBinomialProblem = z.infer<
  typeof normalApproximationBinomialProblemSchema
>;
