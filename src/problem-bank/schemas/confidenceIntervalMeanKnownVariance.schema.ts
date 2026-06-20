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

const sampleSizeQuestionSchema = z.object({
  type: z.literal('sample-size'),
  confidenceLevel: z.number(),
  marginOfError: z.number(),
});

const confidenceIntervalMeanKnownVarianceQuestionSchema = z.discriminatedUnion(
  'type',
  [
    twoSidedIntervalQuestionSchema,
    lowerBoundQuestionSchema,
    upperBoundQuestionSchema,
    sampleSizeQuestionSchema,
  ],
);

export const confidenceIntervalMeanKnownVarianceProblemSchema = z.object({
  id: z.string(),

  topic: z.literal('confidence-interval-mean-known-variance'),

  subtopic: z.enum(['two-sided', 'lower-bound', 'upper-bound', 'sample-size']),

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
    value: z.number(),
    unit: z.string().optional(),
    known: z.literal(true),
  }),

  sample: z.object({
    sampleSize: z.number(),
    sampleMean: z.number(),
  }),

  question: confidenceIntervalMeanKnownVarianceQuestionSchema,

  method: z.object({
    intervalFamily: z.literal('z'),
    criticalValueType: z.enum(['two-sided-z', 'one-sided-z']),
    standardErrorFormula: z.literal('sigma / sqrt(n)'),
    marginOfErrorFormula: z.literal('z* sigma / sqrt(n)'),
    sampleSizeFormula: z.literal('(z* sigma / E)^2').optional(),
  }),

  learningGoals: z.array(z.string()),

  invariantFacts: z.array(z.string()),

  requiredTasks: z.array(z.string()),
});

export type ConfidenceIntervalMeanKnownVarianceProblem = z.infer<
  typeof confidenceIntervalMeanKnownVarianceProblemSchema
>;
