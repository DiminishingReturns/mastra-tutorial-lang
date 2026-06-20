import { Mastra } from '@mastra/core';

import { languageVariantAgent } from './agents/languageVariantAgent';
import { generateNormalProblemVariantsWorkflow } from './workflows/generateNormalProblemVariants.workflow';
import { mathInvariantAgent } from './agents/mathInvariantAgent';
import { registerEvaluatorAgent } from './agents/registerEvaluatorAgent';
import { readabilityMetricsTool } from './tools/readabilityMetrics.tool';
import { readabilityTargetTool } from './tools/readabilityTarget.tool';
//
//
import { generateBinomialProblemVariantsWorkflow } from './workflows/generateBinomialProblemVariants.workflow';

import { generateNormalApproximationBinomialProblemVariantsWorkflow } from './workflows/generateNormalApproximationBinomialProblemVariants.workflow';

import { generateCentralLimitTheoremProblemVariantsWorkflow } from './workflows/generateCentralLimitTheoremProblemVariants.workflow';

import { generateConfidenceIntervalMeanKnownVarianceProblemVariantsWorkflow } from './workflows/generateConfidenceIntervalMeanKnownVarianceProblemVariants.workflow';

import { generateConfidenceIntervalMeanUnknownVarianceProblemVariantsWorkflow } from './workflows/generateConfidenceIntervalMeanUnknownVarianceProblemVariants.workflow';

import { generateConfidenceIntervalProportionProblemVariantsWorkflow } from './workflows/generateConfidenceIntervalProportionProblemVariants.workflow';

import { generateHypothesisTestMeanKnownVarianceProblemVariantsWorkflow } from './workflows/generateHypothesisTestMeanKnownVarianceProblemVariants.workflow';

import { generateHypothesisTestMeanUnknownVarianceProblemVariantsWorkflow } from './workflows/generateHypothesisTestMeanUnknownVarianceProblemVariants.workflow';

import { generateHypothesisTestProportionProblemVariantsWorkflow } from './workflows/generateHypothesisTestProportionProblemVariants.workflow';

export const mastra = new Mastra({
  agents: {
    languageVariantAgent,
    mathInvariantAgent,
    registerEvaluatorAgent,
  },

  workflows: {
    generateNormalProblemVariantsWorkflow,
    generateBinomialProblemVariantsWorkflow,
    generateNormalApproximationBinomialProblemVariantsWorkflow,
    generateCentralLimitTheoremProblemVariantsWorkflow,
    generateConfidenceIntervalMeanKnownVarianceProblemVariantsWorkflow,
    generateConfidenceIntervalMeanUnknownVarianceProblemVariantsWorkflow,
    generateConfidenceIntervalProportionProblemVariantsWorkflow,
    generateHypothesisTestMeanKnownVarianceProblemVariantsWorkflow,
    generateHypothesisTestMeanUnknownVarianceProblemVariantsWorkflow,
    generateHypothesisTestProportionProblemVariantsWorkflow,
  },
  tools: {
    readabilityMetricsTool,
    readabilityTargetTool,
    // normalDistributionSolutionTool,
  },
});
