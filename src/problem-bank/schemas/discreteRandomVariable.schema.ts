import { z } from 'zod';

const probabilityTableRowSchema = z.object({
  value: z.number(),
  probability: z.number(),
});

const validatePmfQuestionSchema = z.object({
  type: z.literal('validate-pmf'),
});

const findMissingProbabilityQuestionSchema = z.object({
  type: z.literal('find-missing-probability'),
  missingValue: z.number(),
});

const computeExpectedValueQuestionSchema = z.object({
  type: z.literal('compute-expected-value'),
});

const computeVarianceQuestionSchema = z.object({
  type: z.literal('compute-variance'),
});

const computeStandardDeviationQuestionSchema = z.object({
  type: z.literal('compute-standard-deviation'),
});

const interpretExpectedValueQuestionSchema = z.object({
  type: z.literal('interpret-expected-value'),
});

const discreteRandomVariableQuestionSchema = z.discriminatedUnion('type', [
  validatePmfQuestionSchema,
  findMissingProbabilityQuestionSchema,
  computeExpectedValueQuestionSchema,
  computeVarianceQuestionSchema,
  computeStandardDeviationQuestionSchema,
  interpretExpectedValueQuestionSchema,
]);

export const discreteRandomVariableProblemSchema = z.object({
  id: z.string(),
  topic: z.literal('discrete-random-variable'),

  subtopic: z.enum([
    'validate-pmf',
    'find-missing-probability',
    'compute-expected-value',
    'compute-variance',
    'compute-standard-deviation',
    'interpret-expected-value',
  ]),

  context: z.object({
    setting: z.string(),
    randomVariableDescription: z.string(),
    unit: z.string().optional(),
    populationOrProcess: z.string().optional(),
  }),

  randomVariable: z.object({
    symbol: z.literal('X'),
    description: z.string(),
    valuesRepresent: z.string(),
  }),

  probabilityTable: z.array(probabilityTableRowSchema),

  distributionPresentation: z.object({
    format: z.enum(['table', 'verbal']),
    verbalDescription: z.string().optional(),
  }),

  question: discreteRandomVariableQuestionSchema,

  method: z.object({
    distributionType: z.literal('finite-discrete'),
    expectedValueFormula: z.literal('sum x * P(X = x)'),
    varianceFormula: z.literal('sum (x - mu)^2 * P(X = x)'),
    alternativeVarianceFormula: z.literal('E(X^2) - [E(X)]^2'),
  }),

  solutionMetadata: z
    .object({
      expectedValue: z.number().optional(),
      variance: z.number().optional(),
      standardDeviation: z.number().optional(),
      missingProbability: z.number().optional(),
      isValidPmf: z.boolean().optional(),
    })
    .optional(),

  learningGoals: z.array(z.string()),
  invariantFacts: z.array(z.string()),
  requiredTasks: z.array(z.string()),
});

export type DiscreteRandomVariableProblem = z.infer<
  typeof discreteRandomVariableProblemSchema
>;

export type DiscreteRandomVariableQuestionType =
  DiscreteRandomVariableProblem['question']['type'];
