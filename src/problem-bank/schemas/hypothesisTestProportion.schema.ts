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

const hypothesisTestProportionQuestionSchema = z.discriminatedUnion('type', [
  leftTailedQuestionSchema,
  rightTailedQuestionSchema,
  twoTailedQuestionSchema,
]);

export const hypothesisTestProportionProblemSchema = z.object({
  id: z.string(),

  topic: z.literal('hypothesis-test-proportion'),

  subtopic: z.enum(['left-tailed', 'right-tailed', 'two-tailed']),

  context: z.object({
    setting: z.string(),

    individualDescription: z.string(),
    successDescription: z.string(),
    failureDescription: z.string().optional(),

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
    symbol: z.literal('p'),
    description: z.string(),
  }),

  nullHypothesis: z.object({
    parameterSymbol: z.literal('p'),
    claimedValue: z.number(),
    operator: z.literal('='),
  }),

  alternativeHypothesis: z.object({
    parameterSymbol: z.literal('p'),
    operator: z.enum(['<', '>', '!=']),
    direction: z.enum(['left', 'right', 'two-sided']),
  }),

  sample: z.object({
    sampleSize: z.number(),
    successCount: z.number(),
    sampleProportion: z.number(),
  }),

  question: hypothesisTestProportionQuestionSchema,

  method: z.object({
    testFamily: z.literal('z'),
    testStatisticFormula: z.literal('(p-hat - p0) / sqrt(p0(1-p0)/n)'),
    standardErrorFormula: z.literal('sqrt(p0(1-p0)/n)'),
    pValueDirection: z.enum(['left-tail', 'right-tail', 'two-tail']),
  }),

  learningGoals: z.array(z.string()),

  invariantFacts: z.array(z.string()),

  requiredTasks: z.array(z.string()),
});

export type HypothesisTestProportionProblem = z.infer<
  typeof hypothesisTestProportionProblemSchema
>;
