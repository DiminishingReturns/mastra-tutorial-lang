import { Mastra } from '@mastra/core';

import { languageVariantAgent } from './agents/languageVariantAgent';
import { countingTechniquesLanguageVariantAgent } from './agents/countingTechniquesLanguageVariantAgent';

import { mathInvariantAgent } from './agents/mathInvariantAgent';
import { registerEvaluatorAgent } from './agents/registerEvaluatorAgent';
import { readabilityMetricsTool } from './tools/readabilityMetrics.tool';
import { readabilityTargetTool } from './tools/readabilityTarget.tool';
//
//

import { generateCountingTechniquesProblemVariantsWorkflow } from './workflows/generateCountingTechniquesProblemVariants.workflow';
import { generateProbabilityRulesProblemVariantsWorkflow } from './workflows/generateProbabilityRulesProblemVariants.workflow';

import { generateBinomialProblemVariantsWorkflow } from './workflows/generateBinomialProblemVariants.workflow';

import { generateDiscreteRandomVariableProblemVariantsWorkflow } from './workflows/generateDiscreteRandomVariableVariants.workflow';

import { generateNormalProblemVariantsWorkflow } from './workflows/generateNormalProblemVariants.workflow';

import { generateNormalApproximationBinomialProblemVariantsWorkflow } from './workflows/generateNormalApproximationBinomialProblemVariants.workflow';

import { generateCentralLimitTheoremProblemVariantsWorkflow } from './workflows/generateCentralLimitTheoremProblemVariants.workflow';

import { generateConfidenceIntervalMeanKnownVarianceProblemVariantsWorkflow } from './workflows/generateConfidenceIntervalMeanKnownVarianceProblemVariants.workflow';

import { generateConfidenceIntervalMeanUnknownVarianceProblemVariantsWorkflow } from './workflows/generateConfidenceIntervalMeanUnknownVarianceProblemVariants.workflow';

import { generateConfidenceIntervalProportionProblemVariantsWorkflow } from './workflows/generateConfidenceIntervalProportionProblemVariants.workflow';

import { generateHypothesisTestMeanKnownVarianceProblemVariantsWorkflow } from './workflows/generateHypothesisTestMeanKnownVarianceProblemVariants.workflow';

import { generateHypothesisTestMeanUnknownVarianceProblemVariantsWorkflow } from './workflows/generateHypothesisTestMeanUnknownVarianceProblemVariants.workflow';

import { generateHypothesisTestProportionProblemVariantsWorkflow } from './workflows/generateHypothesisTestProportionProblemVariants.workflow';

// French variants workflows

import { generateCountingTechniquesFrenchVariantsWorkflow } from './workflows/generateCountingTechniquesProblemFrenchVariants.workflow';

import { generateProbabilityRulesFrenchVariantsWorkflow } from './workflows/generateProbabilityRulesProblemFrenchVariants.workflow';

import { generateDiscreteRandomVariableFrenchVariantsWorkflow } from './workflows/generateDiscreteRandomVariableFrenchVariants.workflow';

import { generateNormalDistributionFrenchVariantsWorkflow } from './workflows/generateNormalProblemFrenchVariants.workflow';

import { generateBinomialDistributionFrenchVariantsWorkflow } from './workflows/generateBinomialProblemFrenchVariants.workflow';

import { generateNormalApproximationBinomialFrenchVariantsWorkflow } from './workflows/generateNormalApproximationBinomialFrenchVariants.workflow';

import { generateConfidenceIntervalMeanKnownVarianceFrenchVariantsWorkflow } from './workflows/generateConfidenceIntervalMeanKnownVarianceFrenchVariants.workflow';

import { generateConfidenceIntervalMeanUnknownVarianceFrenchVariantsWorkflow } from './workflows/generateConfidenceIntervalMeanUnknownVarianceFrenchVariant.workflow';

import { generateConfidenceIntervalProportionFrenchVariantsWorkflow } from './workflows/generateConfidenceIntervalProportionFrenchVariants.workflow';

export const mastra = new Mastra({
  agents: {
    languageVariantAgent,
    mathInvariantAgent,
    registerEvaluatorAgent,
    countingTechniquesLanguageVariantAgent,
  },

  workflows: {
    generateNormalProblemVariantsWorkflow,
    generateCountingTechniquesProblemVariantsWorkflow,
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
    generateCountingTechniquesFrenchVariantsWorkflow,
    generateProbabilityRulesFrenchVariantsWorkflow,
    generateDiscreteRandomVariableFrenchVariantsWorkflow,
    generateNormalDistributionFrenchVariantsWorkflow,
    generateBinomialDistributionFrenchVariantsWorkflow,
    generateNormalApproximationBinomialFrenchVariantsWorkflow,
    generateConfidenceIntervalMeanKnownVarianceFrenchVariantsWorkflow,
    generateConfidenceIntervalMeanUnknownVarianceFrenchVariantsWorkflow,
    generateConfidenceIntervalProportionFrenchVariantsWorkflow,
  },
  tools: {
    readabilityMetricsTool,
    readabilityTargetTool,
    // normalDistributionSolutionTool,
  },
});
