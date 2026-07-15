import { z } from 'zod';

const leftTailedQuestionSchema = z.object({
  type: z.literal('left-tailed'),
  significanceLevel: z.number(),
});

const rightTailedQuestionSchema = z.object({
  type: z.literal('right-tailed'),
  significanceLevel: z.number(),
});

const twoTailedQuestionSchema = z.object({
  type: z.literal('two-tailed'),
  significanceLevel: z.number(),
});

const hypothesisTestMeanKnownVarianceQuestionSchema = z.discriminatedUnion(
  'type',
  [
    leftTailedQuestionSchema,
    rightTailedQuestionSchema,
    twoTailedQuestionSchema,
  ],
);

export const hypothesisTestMeanKnownVarianceProblemSchema = z.object({
  id: z.string(),

  topic: z.literal('hypothesis-test-mean-known-variance'),

  subtopic: z.enum(['left-tailed', 'right-tailed', 'two-tailed']),

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

  nullHypothesis: z.object({
    parameterSymbol: z.literal('mu'),
    claimedValue: z.number(),
    operator: z.literal('='),
  }),

  alternativeHypothesis: z.object({
    parameterSymbol: z.literal('mu'),
    operator: z.enum(['<', '>', '!=']),
    direction: z.enum(['left', 'right', 'two-sided']),
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

  question: hypothesisTestMeanKnownVarianceQuestionSchema,

  method: z.object({
    testFamily: z.literal('z'),
    testStatisticFormula: z.literal('(x-bar - mu0) / (sigma / sqrt(n))'),
    standardErrorFormula: z.literal('sigma / sqrt(n)'),
    pValueDirection: z.enum(['left-tail', 'right-tail', 'two-tail']),
  }),

  solutionMetadata: z
    .object({
      expectedDecision: z.enum(['reject-null', 'fail-to-reject-null']),
      evidenceStrength: z.enum(['strong', 'borderline', 'weak']).optional(),
    })
    .optional(),

  learningGoals: z.array(z.string()),

  invariantFacts: z.array(z.string()),

  requiredTasks: z.array(z.string()),
});

export type HypothesisTestMeanKnownVarianceProblem = z.infer<
  typeof hypothesisTestMeanKnownVarianceProblemSchema
>;
