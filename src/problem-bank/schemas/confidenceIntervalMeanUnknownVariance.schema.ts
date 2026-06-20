import { z } from 'zod';

const twoSidedIntervalQuestionSchema = z.object({
  type: z.literal('two-sided'),
  confidenceLevel: z.number(),
});

const lowerBoundQuestionSchema = z.object({
  type: z.literal('lower-bound'),
  confidenceLevel: z.number(),
});

const upperBoundQuestionSchema = z.object({
  type: z.literal('upper-bound'),
  confidenceLevel: z.number(),
});

const confidenceIntervalMeanUnknownVarianceQuestionSchema =
  z.discriminatedUnion('type', [
    twoSidedIntervalQuestionSchema,
    lowerBoundQuestionSchema,
    upperBoundQuestionSchema,
  ]);

export const confidenceIntervalMeanUnknownVarianceProblemSchema = z.object({
  id: z.string(),

  topic: z.literal('confidence-interval-mean-unknown-variance'),

  subtopic: z.enum(['two-sided', 'lower-bound', 'upper-bound']),

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

  parameter: z.object({
    symbol: z.literal('mu'),
    description: z.string(),
  }),

  populationStandardDeviation: z.object({
    symbol: z.literal('sigma'),
    known: z.literal(false),
  }),

  sample: z.object({
    sampleSize: z.number(),
    sampleMean: z.number(),
    sampleStandardDeviation: z.number(),
  }),

  question: confidenceIntervalMeanUnknownVarianceQuestionSchema,

  method: z.object({
    intervalFamily: z.literal('t'),
    criticalValueType: z.enum(['two-sided-t', 'one-sided-t']),
    degreesOfFreedomFormula: z.literal('n - 1'),
    standardErrorFormula: z.literal('s / sqrt(n)'),
    marginOfErrorFormula: z.literal('t* s / sqrt(n)'),
  }),

  learningGoals: z.array(z.string()),

  invariantFacts: z.array(z.string()),

  requiredTasks: z.array(z.string()),
});

export type ConfidenceIntervalMeanUnknownVarianceProblem = z.infer<
  typeof confidenceIntervalMeanUnknownVarianceProblemSchema
>;
