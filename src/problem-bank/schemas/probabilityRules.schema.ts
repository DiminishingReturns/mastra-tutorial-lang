import { z } from 'zod';

const probabilityFormatSchema = z.enum([
  'decimal',
  'fraction',
  'percentage',
  'count',
]);

const eventSchema = z.object({
  symbol: z.string(),
  label: z.string(),
  description: z.string(),
});

const probabilityRulesQuestionTypeSchema = z.enum([
  'complement-rule',
  'union-rule',
  'intersection-rule',
  'conditional-probability',
  'independence',
  'only-a',
  'only-b',
  'total-probability',
  'bayes-rule',
]);

const twoEventQuestionSchema = z.object({
  structureType: z.literal('two-event'),
  type: z.enum([
    'complement-rule',
    'union-rule',
    'intersection-rule',
    'conditional-probability',
    'independence',
    'only-a',
    'only-b',
  ]),
  target: z.enum([
    'probabilityA',
    'probabilityB',
    'probabilityNotA',
    'probabilityNotB',
    'probabilityAAndB',
    'probabilityAOrB',
    'probabilityAGivenB',
    'probabilityBGivenA',
    'probabilityAAndNotB',
    'probabilityBAndNotA',
    'isIndependent',
  ]),
});

const partitionQuestionSchema = z.object({
  structureType: z.literal('partition'),
  type: z.enum(['total-probability', 'bayes-rule']),
  target: z.enum([
    'probabilityB',
    'probabilityA',
    'probabilityAGivenB',
    'probabilityNotAGivenB',
  ]),
});

const probabilityRulesQuestionSchema = z.discriminatedUnion('structureType', [
  twoEventQuestionSchema,
  partitionQuestionSchema,
]);

const twoEventStructureSchema = z.object({
  structureType: z.literal('two-event'),

  eventA: eventSchema,
  eventB: eventSchema,

  probabilities: z.object({
    probabilityA: z.number().optional(),
    probabilityB: z.number().optional(),
    probabilityNotA: z.number().optional(),
    probabilityNotB: z.number().optional(),

    probabilityAAndB: z.number().optional(),
    probabilityAOrB: z.number().optional(),

    probabilityAGivenB: z.number().optional(),
    probabilityBGivenA: z.number().optional(),

    probabilityAAndNotB: z.number().optional(),
    probabilityBAndNotA: z.number().optional(),

    isIndependent: z.boolean().optional(),
    isMutuallyExclusive: z.boolean().optional(),
  }),
});

const partitionStructureSchema = z.object({
  structureType: z.literal('partition'),

  conditionEvent: eventSchema,
  complementConditionEvent: eventSchema,
  targetEvent: eventSchema,

  probabilities: z.object({
    probabilityA: z.number(),
    probabilityNotA: z.number(),

    probabilityBGivenA: z.number(),
    probabilityBGivenNotA: z.number(),

    probabilityB: z.number().optional(),
    probabilityAGivenB: z.number().optional(),
    probabilityNotAGivenB: z.number().optional(),
  }),
});

const probabilityRulesStructureSchema = z.discriminatedUnion('structureType', [
  twoEventStructureSchema,
  partitionStructureSchema,
]);

export const probabilityRulesProblemSchema = z.object({
  id: z.string(),

  topic: z.literal('probability-rules'),

  subtopic: probabilityRulesQuestionTypeSchema,

  context: z.object({
    setting: z.string(),
    story: z.string(),
    populationOrProcess: z.string().optional(),
  }),

  probabilityPresentation: z.object({
    format: probabilityFormatSchema,
    sampleSpaceSize: z.number().optional(),
    notes: z.string().optional(),
  }),

  structure: probabilityRulesStructureSchema,

  question: probabilityRulesQuestionSchema,

  method: z.object({
    ruleFamily: z.enum([
      'complement',
      'addition',
      'multiplication',
      'conditional',
      'independence',
      'total-probability',
      'bayes',
    ]),
    primaryFormula: z.string(),
  }),

  solutionMetadata: z
    .object({
      targetValue: z.number().optional(),
      isIndependent: z.boolean().optional(),
      explanation: z.string().optional(),
    })
    .optional(),

  learningGoals: z.array(z.string()),
  invariantFacts: z.array(z.string()),
  requiredTasks: z.array(z.string()),
});

export type ProbabilityRulesProblem = z.infer<
  typeof probabilityRulesProblemSchema
>;

export type ProbabilityRulesQuestionType = z.infer<
  typeof probabilityRulesQuestionTypeSchema
>;

export type ProbabilityRulesStructureType =
  ProbabilityRulesProblem['structure']['structureType'];
