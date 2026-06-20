import { createWorkflow, createStep } from '@mastra/core/workflows';
import { z } from 'zod';

import { confidenceIntervalProportionLanguageVariantAgent } from '../agents/confidenceIntervalProportionLanguageVariantAgent';
import { languageProfiles } from '../../problem-bank/languageProfiles';

import { mathInvariantAgent } from '../agents/mathInvariantAgent';
import { registerEvaluatorAgent } from '../agents/registerEvaluatorAgent';

import { confidenceIntervalProportionProblemSchema } from '../../problem-bank/schemas/confidenceIntervalProportion.schema';
import { computeReadabilityMetrics } from '../tools/readabilityMetrics.tool';
import { assessReadabilityTargets } from '../tools/readabilityTarget.tool';
import { confidenceIntervalMeanKnownVarianceLanguageVariantAgent } from '../agents/confidenceIntervalMeanKnownVarianceLanguageVariantAgent';
import { confidenceIntervalMeanUnknownVarianceLanguageVariantAgent } from '../agents/confidenceIntervalMeanUnknownVarianceLanguageVariantAgent';

// Schemas

const singleLanguageVariantSchema = z.object({
  problemText: z.string(),
  linguisticNotes: z.array(z.string()),
});

const languageVariantsSchema = z.object({
  beginner: singleLanguageVariantSchema,
  intermediate: singleLanguageVariantSchema,
  advanced: singleLanguageVariantSchema,
});

const singleVariantValidationSchema = z.object({
  passes: z.boolean(),
  issues: z.array(z.string()),
  invariantChecks: z.object({
    distributionPreserved: z.boolean(),
    randomVariablePreserved: z.boolean(),
    meanPreserved: z.boolean(),
    standardDeviationPreserved: z.boolean(),
    questionTypePreserved: z.boolean(),
    questionValuesPreserved: z.boolean(),
    directionOrTailPreserved: z.boolean(),
  }),
});

const mathValidationSchema = z.object({
  beginner: singleVariantValidationSchema,
  intermediate: singleVariantValidationSchema,
  advanced: singleVariantValidationSchema,
});

const singleRegisterEvaluationSchema = z.object({
  targetLevel: z.enum(['beginner', 'intermediate', 'advanced']),

  passes: z.boolean(),

  scores: z.object({
    lexicalDifficulty: z.number().min(1).max(5),
    syntacticComplexity: z.number().min(1).max(5),
    mathematicalExplicitness: z.number().min(1).max(5),
    register: z.number().min(1).max(5),
    referentialCohesion: z.number().min(1).max(5),
    conceptualDensity: z.number().min(1).max(5),
  }),

  strengths: z.array(z.string()),

  concerns: z.array(z.string()),

  revisionAdvice: z.array(z.string()),
});

const registerEvaluationSchema = z.object({
  beginner: singleRegisterEvaluationSchema,
  intermediate: singleRegisterEvaluationSchema,
  advanced: singleRegisterEvaluationSchema,

  overallProgression: z.object({
    passes: z.boolean(),
    notes: z.array(z.string()),
  }),
});

const generatedVariantsWithCanonicalProblemSchema = z.object({
  canonicalProblem: confidenceIntervalProportionProblemSchema,
  variants: languageVariantsSchema,
});

const variantsWithMathValidationSchema = z.object({
  variants: languageVariantsSchema,
  mathValidation: mathValidationSchema,
});

const singleReadabilityMetricsSchema = z.object({
  wordCount: z.number(),
  sentenceCount: z.number(),
  averageSentenceLength: z.number(),
  longestSentenceLength: z.number(),

  characterCount: z.number(),
  syllableCount: z.number(),

  fleschReadingEase: z.number(),
  fleschKincaidGrade: z.number(),

  technicalTermCount: z.number(),
  quantityCount: z.number(),

  notes: z.array(z.string()),
});

const readabilityMetricsSchema = z.object({
  beginner: singleReadabilityMetricsSchema,
  intermediate: singleReadabilityMetricsSchema,
  advanced: singleReadabilityMetricsSchema,
});

const singleReadabilityTargetAssessmentSchema = z.object({
  targetLevel: z.enum(['beginner', 'intermediate', 'advanced']),

  status: z.enum(['passes', 'warning', 'needsRevision']),

  checks: z.object({
    averageSentenceLength: z.object({
      value: z.number(),
      target: z.string(),
      status: z.enum(['passes', 'warning', 'needsRevision']),
    }),

    longestSentenceLength: z.object({
      value: z.number(),
      target: z.string(),
      status: z.enum(['passes', 'warning', 'needsRevision']),
    }),

    fleschKincaidGrade: z.object({
      value: z.number(),
      target: z.string(),
      status: z.enum(['passes', 'warning', 'needsRevision']),
    }),

    technicalTermCount: z.object({
      value: z.number(),
      target: z.string(),
      status: z.enum(['passes', 'warning', 'needsRevision']),
    }),
  }),

  issues: z.array(z.string()),
  notes: z.array(z.string()),
});

const readabilityTargetAssessmentSchema = z.object({
  beginner: singleReadabilityTargetAssessmentSchema,
  intermediate: singleReadabilityTargetAssessmentSchema,
  advanced: singleReadabilityTargetAssessmentSchema,

  overallProgression: z.object({
    status: z.enum(['passes', 'warning', 'needsRevision']),
    issues: z.array(z.string()),
    notes: z.array(z.string()),
  }),
});

const workflowOutputSchema = z.object({
  variants: languageVariantsSchema,
  mathValidation: mathValidationSchema,
  registerEvaluation: registerEvaluationSchema,
  readabilityMetrics: readabilityMetricsSchema,
  readabilityTargetAssessment: readabilityTargetAssessmentSchema,
});

const variantsWithMathAndRegisterSchema = z.object({
  variants: languageVariantsSchema,
  mathValidation: mathValidationSchema,
  registerEvaluation: registerEvaluationSchema,
});

const variantsWithMathRegisterAndMetricsSchema = z.object({
  variants: languageVariantsSchema,
  mathValidation: mathValidationSchema,
  registerEvaluation: registerEvaluationSchema,
  readabilityMetrics: readabilityMetricsSchema,
});

// Steps

const generateLanguageVariantsStep = createStep({
  id: 'generate-confidence-interval-proportion-language-variants',

  inputSchema: confidenceIntervalProportionProblemSchema,

  outputSchema: generatedVariantsWithCanonicalProblemSchema,

  execute: async ({ inputData }) => {
    const prompt = `
You generate three language-register versions of a canonical confidence interval problem for estimating a population proportion.

Canonical problem:
${JSON.stringify(inputData, null, 2)}

Language profiles:
${JSON.stringify(languageProfiles, null, 2)}

Return structured data with beginner, intermediate, and advanced versions.
`;

    const response =
      await confidenceIntervalProportionLanguageVariantAgent.generate(prompt, {
        structuredOutput: {
          schema: languageVariantsSchema,
        },
      });

    return {
      canonicalProblem: inputData,
      variants: response.object,
    };
  },
});

const validateMathInvariantsStep = createStep({
  id: 'validate-confidence-interval-proportion-math-invariants',

  inputSchema: generatedVariantsWithCanonicalProblemSchema,

  outputSchema: variantsWithMathValidationSchema,

  execute: async ({ inputData }) => {
    const prompt = `
Compare each rewritten problem to the canonical problem.

Canonical problem:
${JSON.stringify(inputData.canonicalProblem, null, 2)}

Generated variants:
${JSON.stringify(inputData.variants, null, 2)}

Check whether each version preserves:
- normal distribution
- random variable
- mean
- standard deviation
- question type
- threshold, if the question is less-than or greater-than
- lower and upper bounds, if the question is between
- percentile and tail direction, if the question is percentile
- inequality direction or tail direction
- required task

Return structured validation data only.
`;

    const response = await mathInvariantAgent.generate(prompt, {
      structuredOutput: {
        schema: mathValidationSchema,
      },
    });

    return {
      variants: inputData.variants,
      mathValidation: response.object,
    };
  },
});

const evaluateRegisterStep = createStep({
  id: 'evaluate-confidence-interval-proportion-register',

  inputSchema: variantsWithMathValidationSchema,

  outputSchema: variantsWithMathAndRegisterSchema,

  execute: async ({ inputData }) => {
    const prompt = `
Evaluate the language level and register of each generated problem version.

Generated variants:
${JSON.stringify(inputData.variants, null, 2)}

Math validation report:
${JSON.stringify(inputData.mathValidation, null, 2)}

Language profiles:
${JSON.stringify(languageProfiles, null, 2)}

Evaluate each version according to these dimensions:
- lexical difficulty
- syntactic complexity
- mathematical explicitness
- register
- referential cohesion
- conceptual density

Use a 1 to 5 scale for each score.

Target score guidance:
- Beginner should generally score 1–2 on syntactic complexity, mathematical explicitness, cohesion, and conceptual density, and about 2 for register.
- Intermediate should generally score around 3.
- Advanced should generally score around 4, but should not be obscure or confusing.

Also evaluate whether the three versions show a clear progression from beginner to intermediate to advanced.

Return structured evaluation data only.
`;

    const response = await registerEvaluatorAgent.generate(prompt, {
      structuredOutput: {
        schema: registerEvaluationSchema,
      },
    });

    return {
      variants: inputData.variants,
      mathValidation: inputData.mathValidation,
      registerEvaluation: response.object,
    };
  },
});

const computeReadabilityMetricsStep = createStep({
  id: 'compute-confidence-interval-proportion-readability-metrics',

  inputSchema: variantsWithMathAndRegisterSchema,

  outputSchema: variantsWithMathRegisterAndMetricsSchema,

  execute: async ({ inputData }) => {
    const beginnerMetrics = computeReadabilityMetrics(
      inputData.variants.beginner.problemText,
    );

    const intermediateMetrics = computeReadabilityMetrics(
      inputData.variants.intermediate.problemText,
    );

    const advancedMetrics = computeReadabilityMetrics(
      inputData.variants.advanced.problemText,
    );

    return {
      variants: inputData.variants,
      mathValidation: inputData.mathValidation,
      registerEvaluation: inputData.registerEvaluation,
      readabilityMetrics: {
        beginner: beginnerMetrics,
        intermediate: intermediateMetrics,
        advanced: advancedMetrics,
      },
    };
  },
});

const assessReadabilityTargetsStep = createStep({
  id: 'assess-confidence-interval-proportion-readability-targets',

  inputSchema: variantsWithMathRegisterAndMetricsSchema,

  outputSchema: workflowOutputSchema,

  execute: async ({ inputData }) => {
    const readabilityTargetAssessment = assessReadabilityTargets(
      inputData.readabilityMetrics,
    );

    return {
      variants: inputData.variants,
      mathValidation: inputData.mathValidation,
      registerEvaluation: inputData.registerEvaluation,
      readabilityMetrics: inputData.readabilityMetrics,
      readabilityTargetAssessment,
    };
  },
});

// Putting it all together in the workflow

export const generateConfidenceIntervalProportionProblemVariantsWorkflow =
  createWorkflow({
    id: 'generate-confidence-interval-proportion-problem-variants',
    inputSchema: confidenceIntervalProportionProblemSchema,
    outputSchema: workflowOutputSchema,
  })
    .then(generateLanguageVariantsStep)
    .then(validateMathInvariantsStep)
    .then(evaluateRegisterStep)
    .then(computeReadabilityMetricsStep)
    .then(assessReadabilityTargetsStep)
    .commit();
