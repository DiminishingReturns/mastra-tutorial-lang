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

const sampleSizeWithPreliminaryEstimateQuestionSchema = z.object({
  type: z.literal('sample-size-with-preliminary-estimate'),
  confidenceLevel: z.number(),
  marginOfError: z.number(),
  preliminaryEstimate: z.number(),
});

const sampleSizeNoPreliminaryEstimateQuestionSchema = z.object({
  type: z.literal('sample-size-no-preliminary-estimate'),
  confidenceLevel: z.number(),
  marginOfError: z.number(),
});

const confidenceIntervalProportionQuestionSchema = z.discriminatedUnion(
  'type',
  [
    twoSidedIntervalQuestionSchema,
    lowerBoundQuestionSchema,
    upperBoundQuestionSchema,
    sampleSizeWithPreliminaryEstimateQuestionSchema,
    sampleSizeNoPreliminaryEstimateQuestionSchema,
  ],
);

export const confidenceIntervalProportionProblemSchema = z.object({
  id: z.string(),

  topic: z.literal('confidence-interval-proportion'),

  subtopic: z.enum([
    'two-sided',
    'lower-bound',
    'upper-bound',
    'sample-size-with-preliminary-estimate',
    'sample-size-no-preliminary-estimate',
  ]),

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

  sample: z
    .object({
      sampleSize: z.number(),
      successCount: z.number(),
      sampleProportion: z.number(),
    })
    .optional(),

  question: confidenceIntervalProportionQuestionSchema,

  method: z.object({
    intervalFamily: z.literal('z'),
    criticalValueType: z.enum(['two-sided-z', 'one-sided-z']),
    standardErrorFormula: z.literal('sqrt(p-hat(1-p-hat)/n)').optional(),
    marginOfErrorFormula: z.literal('z* sqrt(p-hat(1-p-hat)/n)').optional(),
    sampleSizeFormulaWithPreliminaryEstimate: z
      .literal('z^2 p-hat(1-p-hat) / E^2')
      .optional(),
    sampleSizeFormulaNoPreliminaryEstimate: z
      .literal('z^2(0.25) / E^2')
      .optional(),
  }),

  learningGoals: z.array(z.string()),

  invariantFacts: z.array(z.string()),

  requiredTasks: z.array(z.string()),
});

export type ConfidenceIntervalProportionProblem = z.infer<
  typeof confidenceIntervalProportionProblemSchema
>;
