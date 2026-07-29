import {
  probabilityRulesProblemSchema,
  type ProbabilityRulesProblem,
  type ProbabilityRulesQuestionType,
} from '../schemas/probabilityRules.schema';
import {
  probabilityRulesContextSeeds,
  type ProbabilityRulesContextSeedUnion,
} from '../contextSeeds/probabilityRulesContexts';

type CreateProbabilityRulesProblemOptions = {
  contextId: string;
  questionType?: ProbabilityRulesQuestionType;
};

function getProbabilityRulesContextSeed(
  contextId: string,
): ProbabilityRulesContextSeedUnion {
  const seed = probabilityRulesContextSeeds.find(
    (contextSeed) => contextSeed.id === contextId,
  );

  if (!seed) {
    throw new Error(`Unknown probability rules context seed: ${contextId}`);
  }

  return seed;
}

function roundTo(value: number, decimalPlaces: number): number {
  const factor = 10 ** decimalPlaces;
  return Math.round(value * factor) / factor;
}

function getRuleFamily(
  questionType: ProbabilityRulesQuestionType,
): ProbabilityRulesProblem['method']['ruleFamily'] {
  switch (questionType) {
    case 'complement-rule':
      return 'complement';

    case 'union-rule':
    case 'only-a':
    case 'only-b':
      return 'addition';

    case 'intersection-rule':
      return 'multiplication';

    case 'conditional-probability':
      return 'conditional';

    case 'independence':
      return 'independence';

    case 'total-probability':
      return 'total-probability';

    case 'bayes-rule':
      return 'bayes';
  }
}

function getPrimaryFormula(questionType: ProbabilityRulesQuestionType): string {
  switch (questionType) {
    case 'complement-rule':
      return 'P(A^c) = 1 - P(A)';

    case 'union-rule':
      return 'P(A union B) = P(A) + P(B) - P(A and B)';

    case 'intersection-rule':
      return 'P(A and B) = P(A | B)P(B)';

    case 'conditional-probability':
      return 'P(A | B) = P(A and B) / P(B)';

    case 'independence':
      return 'A and B are independent if P(A and B) = P(A)P(B)';

    case 'only-a':
      return 'P(A and not B) = P(A) - P(A and B)';

    case 'only-b':
      return 'P(B and not A) = P(B) - P(A and B)';

    case 'total-probability':
      return 'P(B) = P(B | A)P(A) + P(B | A^c)P(A^c)';

    case 'bayes-rule':
      return 'P(A | B) = P(B | A)P(A) / P(B)';
  }
}

// Two helper functions that build the problem structure.

function buildTwoEventProblem({
  seed,
  questionType,
}: {
  seed: Extract<
    ProbabilityRulesContextSeedUnion,
    { structureType: 'two-event' }
  >;
  questionType: ProbabilityRulesQuestionType;
}): Pick<
  ProbabilityRulesProblem,
  'structure' | 'question' | 'solutionMetadata'
> {
  const probabilityA = seed.probabilities.probabilityA;
  const probabilityB = seed.probabilities.probabilityB;
  const probabilityAAndB = seed.probabilities.probabilityAAndB;

  const probabilityNotA = roundTo(1 - probabilityA, 4);
  const probabilityNotB = roundTo(1 - probabilityB, 4);

  const probabilityAOrB = roundTo(
    probabilityA + probabilityB - probabilityAAndB,
    4,
  );

  const probabilityAGivenB = roundTo(probabilityAAndB / probabilityB, 4);
  const probabilityBGivenA = roundTo(probabilityAAndB / probabilityA, 4);

  const probabilityAAndNotB = roundTo(probabilityA - probabilityAAndB, 4);
  const probabilityBAndNotA = roundTo(probabilityB - probabilityAAndB, 4);

  const isIndependent =
    seed.probabilities.isIndependent ??
    roundTo(probabilityA * probabilityB, 4) === probabilityAAndB;

  const isMutuallyExclusive =
    seed.probabilities.isMutuallyExclusive ?? probabilityAAndB === 0;

  const probabilities = {
    probabilityA,
    probabilityB,
    probabilityNotA,
    probabilityNotB,
    probabilityAAndB,
    probabilityAOrB,
    probabilityAGivenB,
    probabilityBGivenA,
    probabilityAAndNotB,
    probabilityBAndNotA,
    isIndependent,
    isMutuallyExclusive,
  };

  const targetByQuestionType = {
    'complement-rule': 'probabilityNotA',
    'union-rule': 'probabilityAOrB',
    'intersection-rule': 'probabilityAAndB',
    'conditional-probability': 'probabilityBGivenA',
    independence: 'isIndependent',
    'only-a': 'probabilityAAndNotB',
    'only-b': 'probabilityBAndNotA',
  } as const;

  if (questionType === 'total-probability' || questionType === 'bayes-rule') {
    throw new Error(
      `${questionType} requires a partition probability rules context seed.`,
    );
  }

  const target = targetByQuestionType[questionType];

  const targetValue =
    target === 'isIndependent' ? undefined : probabilities[target];

  const solutionMetadata =
    questionType === 'independence'
      ? {
          isIndependent,
          explanation: `Compare P(A and B) with P(A)P(B).`,
        }
      : {
          targetValue,
        };

  return {
    structure: {
      structureType: 'two-event',
      eventA: seed.eventA,
      eventB: seed.eventB,
      probabilities,
    },

    question: {
      structureType: 'two-event',
      type: questionType,
      target,
    },

    solutionMetadata,
  };
}

// Function to build a partition probability rules problem.

function buildPartitionProblem({
  seed,
  questionType,
}: {
  seed: Extract<
    ProbabilityRulesContextSeedUnion,
    { structureType: 'partition' }
  >;
  questionType: ProbabilityRulesQuestionType;
}): Pick<
  ProbabilityRulesProblem,
  'structure' | 'question' | 'solutionMetadata'
> {
  if (questionType !== 'total-probability' && questionType !== 'bayes-rule') {
    throw new Error(
      `${questionType} requires a two-event probability rules context seed.`,
    );
  }

  const probabilityA = seed.probabilities.probabilityA;
  const probabilityNotA = seed.probabilities.probabilityNotA;
  const probabilityBGivenA = seed.probabilities.probabilityBGivenA;
  const probabilityBGivenNotA = seed.probabilities.probabilityBGivenNotA;

  const probabilityB = roundTo(
    probabilityBGivenA * probabilityA + probabilityBGivenNotA * probabilityNotA,
    4,
  );

  const probabilityAGivenB = roundTo(
    (probabilityBGivenA * probabilityA) / probabilityB,
    4,
  );

  const probabilityNotAGivenB = roundTo(
    (probabilityBGivenNotA * probabilityNotA) / probabilityB,
    4,
  );

  const probabilities = {
    probabilityA,
    probabilityNotA,
    probabilityBGivenA,
    probabilityBGivenNotA,
    probabilityB,
    probabilityAGivenB,
    probabilityNotAGivenB,
  };

  const target =
    questionType === 'total-probability'
      ? 'probabilityB'
      : 'probabilityAGivenB';

  return {
    structure: {
      structureType: 'partition',
      conditionEvent: seed.conditionEvent,
      complementConditionEvent: seed.complementConditionEvent,
      targetEvent: seed.targetEvent,
      probabilities,
    },

    question: {
      structureType: 'partition',
      type: questionType,
      target,
    },

    solutionMetadata: {
      targetValue: probabilities[target],
    },
  };
}

// Exported generator function to create a probability rules problem.

export function createProbabilityRulesProblem(
  options: CreateProbabilityRulesProblemOptions,
): ProbabilityRulesProblem {
  const seed = getProbabilityRulesContextSeed(options.contextId);

  const questionType = options.questionType ?? seed.defaultQuestionType;

  const structureAndQuestion =
    seed.structureType === 'two-event'
      ? buildTwoEventProblem({
          seed,
          questionType,
        })
      : buildPartitionProblem({
          seed,
          questionType,
        });

  const problem: ProbabilityRulesProblem = {
    id: `probability-rules-${seed.id}-${questionType}`,

    topic: 'probability-rules',

    subtopic: questionType,

    context: {
      setting: seed.setting,
      story: seed.story,
      populationOrProcess: seed.populationOrProcess,
    },

    probabilityPresentation: seed.probabilityPresentation,

    structure: structureAndQuestion.structure,

    question: structureAndQuestion.question,

    method: {
      ruleFamily: getRuleFamily(questionType),
      primaryFormula: getPrimaryFormula(questionType),
    },

    solutionMetadata: structureAndQuestion.solutionMetadata,

    learningGoals: [
      'Translate a worded probability context into events and probabilities.',
      'Apply an appropriate rule of probability.',
      'Interpret the result in the context of the problem.',
    ],

    invariantFacts: [
      `The setting is: ${seed.setting}`,
      `The story is: ${seed.story}`,
      `The structure type is ${seed.structureType}.`,
      `The question type is ${questionType}.`,
    ],

    requiredTasks: getRequiredTasks(questionType),
  };

  return probabilityRulesProblemSchema.parse(problem);
}

function getRequiredTasks(
  questionType: ProbabilityRulesQuestionType,
): string[] {
  switch (questionType) {
    case 'complement-rule':
      return [
        'Identify the event and its complement.',
        'Use the complement rule to compute the requested probability.',
      ];

    case 'union-rule':
      return [
        'Identify the two events and their overlap.',
        'Use the addition rule to compute the probability that at least one event occurs.',
      ];

    case 'intersection-rule':
      return [
        'Identify the relevant conditional probability and base event probability.',
        'Use the multiplication rule to compute the intersection probability.',
      ];

    case 'conditional-probability':
      return [
        'Identify the given condition.',
        'Use the definition of conditional probability.',
      ];

    case 'independence':
      return [
        'Compare the observed intersection probability with the product of the individual probabilities.',
        'Decide whether the events are independent.',
      ];

    case 'only-a':
      return [
        'Identify the probability of event A.',
        'Subtract the probability that both events occur.',
        'Compute the probability that A occurs without B.',
      ];

    case 'only-b':
      return [
        'Identify the probability of event B.',
        'Subtract the probability that both events occur.',
        'Compute the probability that B occurs without A.',
      ];

    case 'total-probability':
      return [
        'Identify the partition events.',
        'Use the conditional probabilities within each partition.',
        'Apply the rule of total probability.',
      ];

    case 'bayes-rule':
      return [
        'Compute or use the total probability of the evidence event.',
        'Apply Bayes’ rule to reverse the conditioning.',
      ];
  }
}
