import { z } from 'zod';

const countingQuestionModeSchema = z.enum([
  'counting-only',
  'probability-with-counting',
]);

const countingTechniqueQuestionTypeSchema = z.enum([
  'product-rule',
  'sum-rule',
  'factorial-arrangement',
  'permutation-without-repetition',
  'combination-without-repetition',
  'arrangements-with-identical-items',
  'counting-with-restriction',
  'probability-with-counting',
]);

const countingMethodSchema = z.enum([
  'product-rule',
  'sum-rule',
  'factorial',
  'permutation-without-repetition',
  'combination-without-repetition',
  'identical-items-arrangement',
  'restriction-casework',
  'complement-counting',
]);

const stageSchema = z.object({
  label: z.string(),
  numberOfChoices: z.number(),
});

const groupSchema = z.object({
  label: z.string(),
  count: z.number(),
});

const repeatedItemGroupSchema = z.object({
  label: z.string(),
  count: z.number(),
});

const restrictionSchema = z.object({
  description: z.string(),
  strategy: z.enum([
    'direct-count',
    'casework',
    'complement',
    'slot-restriction',
  ]),
});

const countingSetupSchema = z.object({
  totalItems: z.number().optional(),
  selectedItems: z.number().optional(),

  stages: z.array(stageSchema).optional(),

  groups: z.array(groupSchema).optional(),

  repeatedItemGroups: z.array(repeatedItemGroupSchema).optional(),

  orderMatters: z.boolean(),
  repetitionAllowed: z.boolean(),

  restriction: restrictionSchema.optional(),
});

const probabilitySetupSchema = z.object({
  sampleSpaceDescription: z.string(),
  favorableOutcomeDescription: z.string(),

  sampleSpaceCount: z.number(),
  favorableOutcomeCount: z.number(),

  probability: z.number(),
});

export const countingTechniquesProblemSchema = z.object({
  id: z.string(),

  topic: z.literal('counting-techniques'),

  subtopic: countingTechniqueQuestionTypeSchema,

  questionMode: countingQuestionModeSchema,

  context: z.object({
    setting: z.string(),
    story: z.string(),
    populationOrProcess: z.string().optional(),
  }),

  countingSetup: countingSetupSchema,

  question: z.object({
    type: countingTechniqueQuestionTypeSchema,
    promptGoal: z.string(),
  }),

  method: z.object({
    countingMethod: countingMethodSchema,
    primaryFormula: z.string(),
    methodNotes: z.string().optional(),
  }),

  probabilitySetup: probabilitySetupSchema.optional(),

  solutionMetadata: z
    .object({
      countAnswer: z.number().optional(),
      sampleSpaceCount: z.number().optional(),
      favorableOutcomeCount: z.number().optional(),
      probabilityAnswer: z.number().optional(),
      explanation: z.string().optional(),
    })
    .optional(),

  learningGoals: z.array(z.string()),
  invariantFacts: z.array(z.string()),
  requiredTasks: z.array(z.string()),
});

export type CountingTechniquesProblem = z.infer<
  typeof countingTechniquesProblemSchema
>;

export type CountingTechniqueQuestionType = z.infer<
  typeof countingTechniqueQuestionTypeSchema
>;

export type CountingQuestionMode = z.infer<typeof countingQuestionModeSchema>;

export type CountingMethod = z.infer<typeof countingMethodSchema>;
