import { createWorkflow, createStep } from '@mastra/core/workflows';
import { z } from 'zod';

import { normalDistributionProblemSchema } from '../../problem-bank/schemas/normalDistribution.schema';

import { languageProfiles } from '../../problem-bank/languageProfiles';
import { languageVariantAgent } from '../agents/languageVariantAgent';

const generateLanguageVariantsStep = createStep({
  id: 'generate-language-variants',

  inputSchema: normalDistributionProblemSchema,

  outputSchema: z.object({
    beginner: z.object({
      problemText: z.string(),
      linguisticNotes: z.array(z.string()),
    }),
    intermediate: z.object({
      problemText: z.string(),
      linguisticNotes: z.array(z.string()),
    }),
    advanced: z.object({
      problemText: z.string(),
      linguisticNotes: z.array(z.string()),
    }),
  }),

  execute: async ({ inputData }) => {
    const prompt = `
const prompt = Create three language-level versions of this normal distribution problem.

Use the context tone and variation profile to make wording feel natural — avoid template repetition.

VARY across the three versions and across problem runs:
- The opening sentence structure
- How and when context is introduced relative to the parameters
- The verbs used to frame the task (e.g. "find" vs "determine" vs "compute")
- The phrasing of the statistical question
- The transition from narrative context to numerical setup
- The contextualPhrase from the seed is the source of the opening sentence 
  for all three variants
- Adapt it to match each level's register — do not invent a new scenario
- The adapted phrase must remain the first sentence of each variant, 
  before any mathematical content

USE vocabularySuggestions where appropriate for the target level.
AVOID phrases in avoidPhrases.

DO NOT vary:
- Numerical values
- Distribution type
- Inequality or tail direction
- Required mathematical task
- Threshold, bounds, or percentile targets
- The core meaning and real-world scenario of the contextualPhrase

SENTENCE LENGTH DISCIPLINE:
- Beginner: keep every sentence under 24 words. If a sentence exceeds this, split it.
- Intermediate: aim for 12–25 word average. One complex sentence per problem is acceptable.
- Advanced: longer sentences are expected, but each must have a single unambiguous main clause.

TECHNICAL TERM DISCIPLINE:
- Beginner: use at most 6 statistical/mathematical terms. Define any term that a high school student might not know.
- Intermediate: 2–10 terms. No inline definitions needed for standard intro-stats vocabulary.
- Advanced: 3–14 terms. Notation and field-specific vocabulary are appropriate.


Canonical problem:
${JSON.stringify(inputData, null, 2)}

Language profiles:
${JSON.stringify(languageProfiles, null, 2)}

Return JSON only.
`;

    const result = await languageVariantAgent.generate(prompt);

    return JSON.parse(result.text);
  },
});

export const generateNormalProblemVariantsWorkflow = createWorkflow({
  id: 'generate-normal-problem-variants',
  inputSchema: normalDistributionProblemSchema,
  outputSchema: generateLanguageVariantsStep.outputSchema,
})
  .then(generateLanguageVariantsStep)
  .commit();
