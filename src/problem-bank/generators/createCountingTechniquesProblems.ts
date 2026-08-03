import {
  countingTechniquesProblemSchema,
  type CountingTechniqueQuestionType,
  type CountingTechniquesProblem,
} from '../schemas/countingTechniques.schema';
import {
  countingTechniquesContextSeeds,
  type CountingTechniquesContextSeed,
} from '../contextSeeds/countingTechniquesContexts';

type CreateCountingTechniquesProblemOptions = {
  contextId: string;
  questionType?: CountingTechniqueQuestionType;
};

function getCountingTechniquesContextSeed(
  contextId: string,
): CountingTechniquesContextSeed {
  const seed = countingTechniquesContextSeeds.find(
    (contextSeed) => contextSeed.id === contextId,
  );

  if (!seed) {
    throw new Error(`Unknown counting techniques context seed: ${contextId}`);
  }

  return seed;
}

function factorial(n: number): number {
  if (n < 0) {
    throw new Error('Factorial is not defined for negative numbers.');
  }

  let product = 1;

  for (let value = 2; value <= n; value += 1) {
    product *= value;
  }

  return product;
}

function permutation(n: number, r: number): number {
  return factorial(n) / factorial(n - r);
}

function combination(n: number, r: number): number {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

function roundTo(value: number, decimalPlaces: number): number {
  const factor = 10 ** decimalPlaces;
  return Math.round(value * factor) / factor;
}

function getCountAnswer(
  seed: CountingTechniquesContextSeed,
): number | undefined {
  const { countingSetup, method } = seed;

  switch (method.countingMethod) {
    case 'product-rule':
      return countingSetup.stages?.reduce(
        (product, stage) => product * stage.numberOfChoices,
        1,
      );

    case 'sum-rule':
      return countingSetup.groups?.reduce((sum, group) => sum + group.count, 0);

    case 'factorial':
      if (countingSetup.totalItems === undefined) return undefined;
      return factorial(countingSetup.totalItems);

    case 'permutation-without-repetition':
      if (
        countingSetup.totalItems === undefined ||
        countingSetup.selectedItems === undefined
      ) {
        return undefined;
      }

      return permutation(countingSetup.totalItems, countingSetup.selectedItems);

    case 'combination-without-repetition':
      if (
        countingSetup.totalItems === undefined ||
        countingSetup.selectedItems === undefined
      ) {
        return undefined;
      }

      return combination(countingSetup.totalItems, countingSetup.selectedItems);

    case 'identical-items-arrangement':
      if (
        countingSetup.totalItems === undefined ||
        !countingSetup.repeatedItemGroups
      ) {
        return undefined;
      }

      return (
        factorial(countingSetup.totalItems) /
        countingSetup.repeatedItemGroups.reduce(
          (denominator, group) => denominator * factorial(group.count),
          1,
        )
      );

    case 'restriction-casework':
    case 'complement-counting':
      // For first version, use explicit formula/carry answer manually if needed.
      // The access-code example can still be computed from stages.
      if (countingSetup.stages) {
        return countingSetup.stages.reduce(
          (product, stage) => product * stage.numberOfChoices,
          1,
        );
      }

      return undefined;
  }
}

function getRequiredTasks(
  questionType: CountingTechniqueQuestionType,
): string[] {
  switch (questionType) {
    case 'product-rule':
      return [
        'Identify the separate stages of the choice process.',
        'Determine the number of choices at each stage.',
        'Multiply the number of choices across stages.',
      ];

    case 'sum-rule':
      return [
        'Identify the non-overlapping categories of choices.',
        'Add the number of choices across the categories.',
      ];

    case 'factorial-arrangement':
      return [
        'Recognize that all items are being arranged.',
        'Use a factorial count for the number of possible arrangements.',
      ];

    case 'permutation-without-repetition':
      return [
        'Recognize that only some items are selected.',
        'Recognize that order matters.',
        'Count ordered selections without repetition.',
      ];

    case 'combination-without-repetition':
      return [
        'Recognize that only some items are selected.',
        'Recognize that order does not matter.',
        'Count unordered selections without repetition.',
      ];

    case 'arrangements-with-identical-items':
      return [
        'Recognize that all items are being arranged.',
        'Account for repeated identical items.',
        'Count distinct arrangements.',
      ];

    case 'counting-with-restriction':
      return [
        'Identify the restriction in the context.',
        'Choose a direct, casework, slot-based, or complement-counting strategy.',
        'Count only the outcomes that satisfy the restriction.',
      ];

    case 'probability-with-counting':
      return [
        'Count the total number of possible outcomes.',
        'Count the number of favorable outcomes.',
        'Compute the probability as favorable outcomes divided by total outcomes.',
      ];
  }
}

export function createCountingTechniquesProblem(
  options: CreateCountingTechniquesProblemOptions,
): CountingTechniquesProblem {
  const seed = getCountingTechniquesContextSeed(options.contextId);

  const questionType = options.questionType ?? seed.defaultQuestionType;

  const countAnswer =
    seed.questionMode === 'counting-only'
      ? (seed.answerCount ?? getCountAnswer(seed))
      : undefined;

  const probabilityAnswer =
    seed.probabilitySetup?.probability !== undefined
      ? roundTo(seed.probabilitySetup.probability, 10)
      : undefined;

  const problem: CountingTechniquesProblem = {
    id: `counting-techniques-${seed.id}-${questionType}`,

    topic: 'counting-techniques',

    subtopic: questionType,

    questionMode: seed.questionMode,

    context: {
      setting: seed.setting,
      story: seed.story,
      populationOrProcess: seed.populationOrProcess,
    },

    countingSetup: seed.countingSetup,

    question: {
      type: questionType,
      promptGoal: seed.promptGoal,
    },

    method: seed.method,

    probabilitySetup: seed.probabilitySetup,

    solutionMetadata: {
      countAnswer,
      sampleSpaceCount: seed.probabilitySetup?.sampleSpaceCount,
      favorableOutcomeCount: seed.probabilitySetup?.favorableOutcomeCount,
      probabilityAnswer,
      explanation: seed.method.methodNotes,
    },

    learningGoals: [
      'Translate a worded counting context into a counting structure.',
      'Decide whether order matters and whether repetition is allowed.',
      'Choose an appropriate counting technique.',
    ],

    invariantFacts: [
      `The setting is: ${seed.setting}`,
      `The story is: ${seed.story}`,
      `The question mode is ${seed.questionMode}.`,
      `The question type is ${questionType}.`,
      `Order matters: ${seed.countingSetup.orderMatters}.`,
      `Repetition is allowed: ${seed.countingSetup.repetitionAllowed}.`,
    ],

    requiredTasks: getRequiredTasks(questionType),
  };

  return countingTechniquesProblemSchema.parse(problem);
}
