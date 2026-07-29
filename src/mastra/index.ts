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
import { generateDiscreteRandomVariableProblemVariantsWorkflow } from './workflows/generateDiscreteRandomVariableVariants.workflow';

import { generateNormalApproximationBinomialProblemVariantsWorkflow } from './workflows/generateNormalApproximationBinomialProblemVariants.workflow';

import { generateCentralLimitTheoremProblemVariantsWorkflow } from './workflows/generateCentralLimitTheoremProblemVariants.workflow';

import { generateConfidenceIntervalMeanKnownVarianceProblemVariantsWorkflow } from './workflows/generateConfidenceIntervalMeanKnownVarianceProblemVariants.workflow';

import { generateConfidenceIntervalMeanUnknownVarianceProblemVariantsWorkflow } from './workflows/generateConfidenceIntervalMeanUnknownVarianceProblemVariants.workflow';

import { generateConfidenceIntervalProportionProblemVariantsWorkflow } from './workflows/generateConfidenceIntervalProportionProblemVariants.workflow';

import { generateHypothesisTestMeanKnownVarianceProblemVariantsWorkflow } from './workflows/generateHypothesisTestMeanKnownVarianceProblemVariants.workflow';

import { generateHypothesisTestMeanUnknownVarianceProblemVariantsWorkflow } from './workflows/generateHypothesisTestMeanUnknownVarianceProblemVariants.workflow';

import { generateHypothesisTestProportionProblemVariantsWorkflow } from './workflows/generateHypothesisTestProportionProblemVariants.workflow';

import { generateProbabilityRulesProblemVariantsWorkflow } from './workflows/generateProbabilityRulesProblemVariants.workflow';

export const mastra = new Mastra({
  agents: {
    languageVariantAgent,
    mathInvariantAgent,
    registerEvaluatorAgent,
  },

  workflows: {
    generateNormalProblemVariantsWorkflow,
    generateDiscreteRandomVariableProblemVariantsWorkflow,
    generateBinomialProblemVariantsWorkflow,
    generateProbabilityRulesProblemVariantsWorkflow,
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
