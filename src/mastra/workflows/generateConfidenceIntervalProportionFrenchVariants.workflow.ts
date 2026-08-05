import { createWorkflow, createStep } from '@mastra/core/workflows';
import { z } from 'zod';

import { languageProfiles } from '../../problem-bank/languageProfiles';

import { mathInvariantAgent } from '../agents/mathInvariantAgent';
import { registerEvaluatorAgent } from '../agents/registerEvaluatorAgent';
import { confidenceIntervalProportionFrenchLanguageVariantAgent } from '../agents/confidenceIntervalProportionFrenchLanguageVariantAgent';
import { computeReadabilityMetrics } from '../tools/readabilityMetrics.tool';
import { assessReadabilityTargets } from '../tools/readabilityTarget.tool';

import { confidenceIntervalProportionProblemSchema } from '../../problem-bank/schemas/confidenceIntervalProportion.schema';

// Schemas

const singleLanguageVariantSchema = z.object({
  problemText: z.string(),
  linguisticNotes: z.array(z.string()),
});

const languageVariantsSchema = z.object({
  debutant: singleLanguageVariantSchema,
  intermediaire: singleLanguageVariantSchema,
  avance: singleLanguageVariantSchema,
});
const singleVariantValidationSchema = z.object({
  passes: z.boolean(),
  issues: z.array(z.string()),
  invariantChecks: z.object({
    contextPreserved: z.boolean(),
    parameterPreserved: z.boolean(),
    sampleProportionPreserved: z.boolean(),
    sampleSizePreserved: z.boolean(),
    confidenceLevelPreserved: z.boolean(),
    questionTypePreserved: z.boolean(),
    populationProportionPreserved: z.boolean(),
    answerNotRevealed: z.boolean(),
    methodNotOverRevealed: z.boolean(),
  }),
});

const mathValidationSchema = z.object({
  debutant: singleVariantValidationSchema,
  intermediaire: singleVariantValidationSchema,
  avance: singleVariantValidationSchema,
});

const singleRegisterEvaluationSchema = z.object({
  targetLevel: z.enum(['debutant', 'intermediaire', 'avance']),

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
  debutant: singleRegisterEvaluationSchema,
  intermediaire: singleRegisterEvaluationSchema,
  avance: singleRegisterEvaluationSchema,

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
  debutant: singleReadabilityMetricsSchema,
  intermediaire: singleReadabilityMetricsSchema,
  avance: singleReadabilityMetricsSchema,
});

const singleReadabilityTargetAssessmentSchema = z.object({
  targetLevel: z.enum(['debutant', 'intermediaire', 'avance']),

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
  debutant: singleReadabilityTargetAssessmentSchema,
  intermediaire: singleReadabilityTargetAssessmentSchema,
  avance: singleReadabilityTargetAssessmentSchema,

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
  id: 'generate-confidence-interval-proportion-french-language-variants',

  inputSchema: confidenceIntervalProportionProblemSchema,

  outputSchema: generatedVariantsWithCanonicalProblemSchema,

  execute: async ({ inputData }) => {
    const prompt = `
Génère trois variantes en français de ce problème sur l’intervalle de confiance pour une proportion.

Le problème doit rester contextualisé et rédigé en français naturel.
Ne le transforme pas en exercice purement symbolique.

Les étudiants doivent identifier eux-mêmes la méthode de dénombrement.
Ne nomme donc pas directement la méthode dans l'énoncé destiné aux étudiants.

Retourne exactement trois variantes avec les clés suivantes :
- debutant
- intermediaire
- avance

Chaque variante doit contenir :
- problemText
- linguisticNotes

Le champ problemText doit contenir seulement l’énoncé destiné aux étudiants.

Objet canonique :
${JSON.stringify(inputData, null, 2)}

Language profiles:
${JSON.stringify(languageProfiles, null, 2)}

Return structured data only.
`;

    const response =
      await confidenceIntervalProportionFrenchLanguageVariantAgent.generate(
        prompt,
        {
          structuredOutput: {
            schema: languageVariantsSchema,
          },
        },
      );

    return {
      canonicalProblem: inputData,
      variants: response.object,
    };
  },
});

const validateMathInvariantsStep = createStep({
  id: 'validate-confidence-interval-proportion-french-math-invariants',

  inputSchema: generatedVariantsWithCanonicalProblemSchema,

  outputSchema: variantsWithMathValidationSchema,

  execute: async ({ inputData }) => {
    const prompt = `
Compare chaque problème rédigé en français au problème canonique.

Canonical problem:
${JSON.stringify(inputData.canonicalProblem, null, 2)}

Generated French variants:
${JSON.stringify(inputData.variants, null, 2)}

Pour chaque variante, vérifie exactement les éléments suivants :

- contextPreserved: le contexte général est préservé.
- parameterPreserved: la proportion populationnelle à estimer est préservée.
- populationPreserved: la population visée est préservée.
- sampleSizePreserved: la taille de l’échantillon est préservée, si applicable.
- successCountPreserved: le nombre de succès observés est préservé, si applicable.
- sampleProportionPreserved: la proportion d’échantillon est préservée, si applicable.
- confidenceLevelPreserved: le niveau de confiance est préservé.
- questionTypePreserved: le type de question est préservé.
- marginOfErrorPreserved: la marge d’erreur est préservée, si applicable.
- preliminaryEstimatePreserved: l’estimation préliminaire est préservée, si applicable.
- noPreliminaryEstimatePreserved: le fait qu’aucune estimation préliminaire n’est disponible est préservé, si applicable.
- answerNotRevealed: l’intervalle final, la borne finale, la taille d’échantillon finale, la valeur critique ou les calculs intermédiaires ne sont pas révélés.
- methodNotOverRevealed: la méthode de résolution n’est pas révélée trop directement.

Return structured validation data only, using these exact keys:
- debutant
- intermediaire
- avance
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
  id: 'evaluate-confidence-interval-proportion-french-register',

  inputSchema: variantsWithMathValidationSchema,

  outputSchema: variantsWithMathAndRegisterSchema,

  execute: async ({ inputData }) => {
    const prompt = `
Evaluate the French language level and register of each generated problem version.

Generated French variants:
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
- debutant should generally score 1–2 on syntactic complexity, mathematical explicitness, cohesion, and conceptual density, and about 2 for register.
- intermediaire should generally score around 3.
- avance should generally score around 4, but should not be obscure or confusing.

Also evaluate whether the three versions show a clear progression from debutant to intermediaire to avance.

Return structured evaluation data only, using these exact keys:
- debutant
- intermediaire
- avance

The targetLevel values must be:
- debutant
- intermediaire
- avance
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
  id: 'compute-confidence-interval-proportion-french-readability-metrics',

  inputSchema: variantsWithMathAndRegisterSchema,

  outputSchema: variantsWithMathRegisterAndMetricsSchema,

  execute: async ({ inputData }) => {
    const debutantMetrics = computeReadabilityMetrics(
      inputData.variants.debutant.problemText,
    );

    const intermediaireMetrics = computeReadabilityMetrics(
      inputData.variants.intermediaire.problemText,
    );

    const avanceMetrics = computeReadabilityMetrics(
      inputData.variants.avance.problemText,
    );

    return {
      variants: inputData.variants,
      mathValidation: inputData.mathValidation,
      registerEvaluation: inputData.registerEvaluation,
      readabilityMetrics: {
        debutant: debutantMetrics,
        intermediaire: intermediaireMetrics,
        avance: avanceMetrics,
      },
    };
  },
});

const assessReadabilityTargetsStep = createStep({
  id: 'assess-confidence-interval-proportion-french-readability-targets',

  inputSchema: variantsWithMathRegisterAndMetricsSchema,

  outputSchema: workflowOutputSchema,

  execute: async ({ inputData }) => {
    /**
     * The existing readability target tool expects English level keys:
     * beginner, intermediate, advanced.
     *
     * So we temporarily map the French keys to English keys,
     * run the existing tool, then map the assessment back to French keys.
     */
    const readabilityMetricsForTargets = {
      beginner: inputData.readabilityMetrics.debutant,
      intermediate: inputData.readabilityMetrics.intermediaire,
      advanced: inputData.readabilityMetrics.avance,
    };

    const readabilityTargetAssessment = assessReadabilityTargets(
      readabilityMetricsForTargets,
    );

    const frenchAssessment = {
      debutant: {
        ...readabilityTargetAssessment.beginner,
        targetLevel: 'debutant' as const,
      },
      intermediaire: {
        ...readabilityTargetAssessment.intermediate,
        targetLevel: 'intermediaire' as const,
      },
      avance: {
        ...readabilityTargetAssessment.advanced,
        targetLevel: 'avance' as const,
      },
      overallProgression: readabilityTargetAssessment.overallProgression,
    };

    return {
      variants: inputData.variants,
      mathValidation: inputData.mathValidation,
      registerEvaluation: inputData.registerEvaluation,
      readabilityMetrics: inputData.readabilityMetrics,
      readabilityTargetAssessment: frenchAssessment,
    };
  },
});

// Putting it all together in the workflow

export const generateConfidenceIntervalProportionFrenchVariantsWorkflow =
  createWorkflow({
    id: 'generate-confidence-interval-proportion-french-variants',
    inputSchema: confidenceIntervalProportionProblemSchema,
    outputSchema: workflowOutputSchema,
  })
    .then(generateLanguageVariantsStep)
    .then(validateMathInvariantsStep)
    .then(evaluateRegisterStep)
    .then(computeReadabilityMetricsStep)
    .then(assessReadabilityTargetsStep)
    .commit();
