import type {
  CountingMethod,
  CountingQuestionMode,
  CountingTechniqueQuestionType,
} from '../schemas/countingTechniques.schema';

export type CountingTechniquesContextSeed = {
  id: string;

  questionMode: CountingQuestionMode;
  defaultQuestionType: CountingTechniqueQuestionType;

  setting: string;
  story: string;
  populationOrProcess?: string;

  countingSetup: {
    totalItems?: number;
    selectedItems?: number;

    stages?: {
      label: string;
      numberOfChoices: number;
    }[];

    groups?: {
      label: string;
      count: number;
    }[];

    repeatedItemGroups?: {
      label: string;
      count: number;
    }[];

    orderMatters: boolean;
    repetitionAllowed: boolean;

    restriction?: {
      description: string;
      strategy: 'direct-count' | 'casework' | 'complement' | 'slot-restriction';
    };
  };

  method: {
    countingMethod: CountingMethod;
    primaryFormula: string;
    methodNotes?: string;
  };

  probabilitySetup?: {
    sampleSpaceDescription: string;
    favorableOutcomeDescription: string;

    sampleSpaceCount: number;
    favorableOutcomeCount: number;

    probability: number;
  };

  promptGoal: string;

  answerCount?: number;
};

export const countingTechniquesContextSeeds: CountingTechniquesContextSeed[] = [
  {
    id: 'course-schedule-options',

    questionMode: 'counting-only',
    defaultQuestionType: 'product-rule',

    setting: 'A student is building a course schedule for the next semester.',

    story:
      'The student must choose one mathematics course, one science course, and one humanities course from the available options.',

    populationOrProcess:
      'possible course schedules formed from the available course options',

    countingSetup: {
      stages: [
        { label: 'mathematics course', numberOfChoices: 4 },
        { label: 'science course', numberOfChoices: 5 },
        { label: 'humanities course', numberOfChoices: 3 },
      ],
      orderMatters: true,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'product-rule',
      primaryFormula: 'm * n * p',
      methodNotes:
        'Choose one option from each independent stage and multiply the number of choices.',
    },

    promptGoal: 'Determine how many different course schedules are possible.',
  },

  {
    id: 'club-activity-choice',

    questionMode: 'counting-only',
    defaultQuestionType: 'sum-rule',

    setting: 'A student club is offering optional weekend activities.',

    story:
      'A student may choose exactly one activity: either one of several outdoor activities or one of several indoor activities.',

    populationOrProcess: 'possible activity choices for one student',

    countingSetup: {
      groups: [
        { label: 'outdoor activities', count: 6 },
        { label: 'indoor activities', count: 4 },
      ],
      orderMatters: false,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'sum-rule',
      primaryFormula: 'm + n',
      methodNotes:
        'The choices come from non-overlapping categories, and exactly one option is selected.',
    },

    promptGoal: 'Determine how many activity choices are available in total.',
  },

  {
    id: 'photo-lineup',

    questionMode: 'counting-only',
    defaultQuestionType: 'factorial-arrangement',

    setting: 'A group of students is arranging themselves for a photo.',

    story: 'Six students will stand in a single row for a group photo.',

    populationOrProcess: 'possible lineups of the six students',

    countingSetup: {
      totalItems: 6,
      selectedItems: 6,
      orderMatters: true,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'factorial',
      primaryFormula: 'n!',
      methodNotes: 'All items are arranged, and order matters.',
    },

    promptGoal: 'Determine how many different lineups are possible.',
  },

  {
    id: 'award-rankings',

    questionMode: 'counting-only',
    defaultQuestionType: 'permutation-without-repetition',

    setting: 'A science fair committee is assigning awards.',

    story:
      'There are 12 finalists. The committee will award first place, second place, and third place to three different finalists.',

    populationOrProcess: 'possible ordered award outcomes among the finalists',

    countingSetup: {
      totalItems: 12,
      selectedItems: 3,
      orderMatters: true,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'permutation-without-repetition',
      primaryFormula: 'nPr = n! / (n-r)!',
      methodNotes:
        'A fixed number of items is selected from a larger group, and order matters.',
    },

    promptGoal: 'Determine how many different award rankings are possible.',
  },

  {
    id: 'student-committee',

    questionMode: 'counting-only',
    defaultQuestionType: 'combination-without-repetition',

    setting: 'A department is forming a student advisory committee.',

    story:
      'There are 14 eligible students, and 4 of them will be chosen to serve on the committee.',

    populationOrProcess:
      'possible committees formed from the eligible students',

    countingSetup: {
      totalItems: 14,
      selectedItems: 4,
      orderMatters: false,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'combination-without-repetition',
      primaryFormula: 'nCr = n! / [r!(n-r)!]',
      methodNotes:
        'A fixed number of items is selected from a larger group, and order does not matter.',
    },

    promptGoal: 'Determine how many different committees are possible.',
  },

  {
    id: 'arrange-statistics-word',

    questionMode: 'counting-only',
    defaultQuestionType: 'arrangements-with-identical-items',

    setting: 'A teacher creates a classroom display using letter tiles.',

    story:
      'The teacher wants to arrange all the letters in the word STATISTICS in a row.',

    populationOrProcess:
      'possible distinct arrangements of the letters in the word STATISTICS',

    countingSetup: {
      totalItems: 10,
      selectedItems: 10,
      repeatedItemGroups: [
        { label: 'S', count: 3 },
        { label: 'T', count: 3 },
        { label: 'A', count: 1 },
        { label: 'I', count: 2 },
        { label: 'C', count: 1 },
      ],
      orderMatters: true,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'identical-items-arrangement',
      primaryFormula: 'n! / (n1! n2! ... nk!)',
      methodNotes: 'All items are arranged, but some items are identical.',
    },

    promptGoal: 'Determine how many distinct letter arrangements are possible.',
  },

  {
    id: 'access-code-first-digit',

    questionMode: 'counting-only',
    defaultQuestionType: 'counting-with-restriction',

    setting:
      'A college lab creates numeric access codes for equipment lockers.',

    story:
      'Each access code has 4 digits. Digits may repeat, but the first digit cannot be 0.',

    populationOrProcess:
      'possible 4-digit access codes for the equipment lockers',

    countingSetup: {
      totalItems: 10,
      selectedItems: 4,
      stages: [
        { label: 'first digit', numberOfChoices: 9 },
        { label: 'second digit', numberOfChoices: 10 },
        { label: 'third digit', numberOfChoices: 10 },
        { label: 'fourth digit', numberOfChoices: 10 },
      ],
      orderMatters: true,
      repetitionAllowed: true,
      restriction: {
        description: 'The first digit cannot be 0.',
        strategy: 'slot-restriction',
      },
    },

    method: {
      countingMethod: 'restriction-casework',
      primaryFormula: '9 * 10 * 10 * 10',
      methodNotes:
        'The first slot has fewer choices than the remaining slots because of the restriction.',
    },

    promptGoal: 'Determine how many access codes are possible.',
  },

  {
    id: 'committee-at-least-one-science',

    questionMode: 'counting-only',
    defaultQuestionType: 'counting-with-restriction',

    setting:
      'A school is forming a student panel for an interdisciplinary event.',

    story:
      'The panel must have 4 students chosen from 8 science students and 6 arts students. The panel must include at least one science student.',

    populationOrProcess: 'possible student panels satisfying the requirement',

    countingSetup: {
      totalItems: 14,
      selectedItems: 4,
      groups: [
        { label: 'science students', count: 8 },
        { label: 'arts students', count: 6 },
      ],
      orderMatters: false,
      repetitionAllowed: false,
      restriction: {
        description: 'The panel must include at least one science student.',
        strategy: 'complement',
      },
    },

    method: {
      countingMethod: 'complement-counting',

      primaryFormula: 'C(14,4) - C(6,4)',

      methodNotes:
        'Count all possible panels, then subtract panels with no science students.',
    },

    promptGoal: 'Determine how many valid panels are possible.',
    answerCount: 986,
  },

  {
    id: 'card-hand-all-hearts',

    questionMode: 'probability-with-counting',
    defaultQuestionType: 'probability-with-counting',

    setting:
      'A standard deck of playing cards is used in a probability activity.',

    story:
      'A 5-card hand is dealt from a standard 52-card deck. The order of the cards in the hand does not matter.',

    populationOrProcess: 'possible 5-card hands from a standard deck',

    countingSetup: {
      totalItems: 52,
      selectedItems: 5,
      groups: [
        { label: 'hearts', count: 13 },
        { label: 'non-hearts', count: 39 },
      ],
      orderMatters: false,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'combination-without-repetition',
      primaryFormula: 'C(13,5) / C(52,5)',
      methodNotes: 'Use combinations to count favorable hands and total hands.',
    },

    probabilitySetup: {
      sampleSpaceDescription:
        'all possible 5-card hands from a standard 52-card deck',
      favorableOutcomeDescription:
        '5-card hands in which all 5 cards are hearts',
      sampleSpaceCount: 2598960,
      favorableOutcomeCount: 1287,
      probability: 0.0005,
    },

    promptGoal: 'Determine the probability that all 5 cards are hearts.',
  },

  {
    id: 'committee-probability-two-science',

    questionMode: 'probability-with-counting',
    defaultQuestionType: 'probability-with-counting',

    setting:
      'A college committee is selected at random from a pool of volunteers.',

    story:
      'There are 7 science students and 5 arts students in the volunteer pool. A committee of 4 students is selected at random.',

    populationOrProcess:
      'possible 4-student committees from the volunteer pool',

    countingSetup: {
      totalItems: 12,
      selectedItems: 4,
      groups: [
        { label: 'science students', count: 7 },
        { label: 'arts students', count: 5 },
      ],
      orderMatters: false,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'combination-without-repetition',
      primaryFormula: '[C(7,2)C(5,2)] / C(12,4)',
      methodNotes:
        'Use combinations to count committees with exactly two science students and all possible committees.',
    },

    probabilitySetup: {
      sampleSpaceDescription:
        'all possible 4-student committees from the 12 volunteers',
      favorableOutcomeDescription:
        'committees with exactly 2 science students and 2 arts students',
      sampleSpaceCount: 495,
      favorableOutcomeCount: 210,
      probability: 0.4242,
    },

    promptGoal:
      'Determine the probability that the committee has exactly 2 science students.',
  },

  {
    id: 'lab-station-assignments',

    questionMode: 'counting-only',
    defaultQuestionType: 'product-rule',

    setting: 'A biology lab is preparing stations for a practical activity.',

    story:
      'A student group must choose one microscope station, one specimen slide, and one data-recording template for the activity.',

    populationOrProcess: 'possible lab activity setups for one student group',

    countingSetup: {
      stages: [
        { label: 'microscope station', numberOfChoices: 5 },
        { label: 'specimen slide', numberOfChoices: 8 },
        { label: 'data-recording template', numberOfChoices: 4 },
      ],
      orderMatters: true,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'product-rule',
      primaryFormula: '5 * 8 * 4',
      methodNotes:
        'Choose one option from each stage and multiply the number of choices.',
    },

    promptGoal:
      'Determine how many different lab activity setups are possible.',
  },

  {
    id: 'conference-session-choice',

    questionMode: 'counting-only',
    defaultQuestionType: 'sum-rule',

    setting: 'A student is attending a one-hour conference block.',

    story:
      'During this block, the student may attend exactly one session. There are sessions in mathematics, physics, computer science, and biology, and the sessions do not overlap by category.',

    populationOrProcess: 'possible session choices during one conference block',

    countingSetup: {
      groups: [
        { label: 'mathematics sessions', count: 3 },
        { label: 'physics sessions', count: 4 },
        { label: 'computer science sessions', count: 5 },
        { label: 'biology sessions', count: 2 },
      ],
      orderMatters: false,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'sum-rule',
      primaryFormula: '3 + 4 + 5 + 2',
      methodNotes:
        'The categories are non-overlapping, and exactly one session is selected.',
    },

    promptGoal: 'Determine how many session choices are available in total.',
  },

  {
    id: 'presentation-order',

    questionMode: 'counting-only',
    defaultQuestionType: 'factorial-arrangement',

    setting: 'A class is organizing student presentations.',

    story:
      'Eight students are scheduled to present during the same class period. The teacher needs to decide the order in which the eight students will present.',

    populationOrProcess: 'possible presentation orders for the eight students',

    countingSetup: {
      totalItems: 8,
      selectedItems: 8,
      orderMatters: true,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'factorial',
      primaryFormula: '8!',
      methodNotes:
        'All students are arranged in an order, so a factorial count applies.',
    },

    promptGoal:
      'Determine how many different presentation orders are possible.',
  },

  {
    id: 'podium-finalists',

    questionMode: 'counting-only',
    defaultQuestionType: 'permutation-without-repetition',

    setting: 'A robotics competition is assigning final rankings.',

    story:
      'There are 15 teams in the final round. The judges will assign gold, silver, and bronze rankings to three different teams.',

    populationOrProcess:
      'possible ordered podium outcomes among the finalist teams',

    countingSetup: {
      totalItems: 15,
      selectedItems: 3,
      orderMatters: true,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'permutation-without-repetition',
      primaryFormula: '15P3 = 15! / (15-3)!',
      methodNotes:
        'A fixed number of teams is selected from a larger group, and the ranking order matters.',
    },

    promptGoal: 'Determine how many different podium rankings are possible.',
  },

  {
    id: 'lab-team-selection',

    questionMode: 'counting-only',
    defaultQuestionType: 'combination-without-repetition',

    setting: 'A chemistry teacher is forming a small lab team.',

    story:
      'There are 18 students available, and 5 of them will be selected to form one lab team. The roles within the team will be assigned later.',

    populationOrProcess: 'possible 5-student lab teams selected from the class',

    countingSetup: {
      totalItems: 18,
      selectedItems: 5,
      orderMatters: false,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'combination-without-repetition',
      primaryFormula: '18C5 = 18! / [5!(18-5)!]',
      methodNotes:
        'A fixed number of students is selected, and the order of selection does not matter.',
    },

    promptGoal: 'Determine how many different lab teams are possible.',
  },

  {
    id: 'arrange-probability-word',

    questionMode: 'counting-only',
    defaultQuestionType: 'arrangements-with-identical-items',

    setting: 'A teacher creates a bulletin-board title using letter cards.',

    story:
      'The teacher wants to arrange all the letters in the word PROBABILITY in a row.',

    populationOrProcess:
      'possible distinct arrangements of the letters in the word PROBABILITY',

    countingSetup: {
      totalItems: 11,
      selectedItems: 11,
      repeatedItemGroups: [
        { label: 'P', count: 1 },
        { label: 'R', count: 1 },
        { label: 'O', count: 1 },
        { label: 'B', count: 2 },
        { label: 'A', count: 1 },
        { label: 'I', count: 2 },
        { label: 'L', count: 1 },
        { label: 'T', count: 1 },
        { label: 'Y', count: 1 },
      ],
      orderMatters: true,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'identical-items-arrangement',
      primaryFormula: '11! / (2!2!)',
      methodNotes: 'All letters are arranged, but B and I each appear twice.',
    },

    promptGoal: 'Determine how many distinct letter arrangements are possible.',
  },

  {
    id: 'password-with-required-letter',

    questionMode: 'counting-only',
    defaultQuestionType: 'counting-with-restriction',

    setting: 'A website asks users to create short access passwords.',

    story:
      'Each password has 3 characters. Each character must be a capital letter. Repetition is allowed, but the password must contain at least one vowel. Use the vowels A, E, I, O, and U.',

    populationOrProcess:
      'possible 3-character capital-letter passwords satisfying the requirement',

    countingSetup: {
      totalItems: 26,
      selectedItems: 3,
      groups: [
        { label: 'capital letters', count: 26 },
        { label: 'vowels', count: 5 },
        { label: 'non-vowels', count: 21 },
      ],
      orderMatters: true,
      repetitionAllowed: true,
      restriction: {
        description: 'The password must contain at least one vowel.',
        strategy: 'complement',
      },
    },

    method: {
      countingMethod: 'complement-counting',
      primaryFormula: '26^3 - 21^3',
      methodNotes:
        'Count all possible passwords, then subtract passwords with no vowels.',
    },

    promptGoal: 'Determine how many valid passwords are possible.',

    answerCount: 8315,
  },

  {
    id: 'seating-two-friends-together',

    questionMode: 'counting-only',
    defaultQuestionType: 'counting-with-restriction',

    setting: 'A teacher is arranging students in a row for a class photo.',

    story:
      'Seven students will stand in a row. Two particular students, Maya and Leo, want to stand next to each other.',

    populationOrProcess:
      'possible lineups of the seven students where Maya and Leo are adjacent',

    countingSetup: {
      totalItems: 7,
      selectedItems: 7,
      orderMatters: true,
      repetitionAllowed: false,
      restriction: {
        description: 'Maya and Leo must stand next to each other.',
        strategy: 'direct-count',
      },
    },

    method: {
      countingMethod: 'restriction-casework',
      primaryFormula: '2! * 6!',
      methodNotes:
        'Treat the two adjacent students as one block, then arrange the block with the remaining students.',
    },

    promptGoal: 'Determine how many valid lineups are possible.',

    answerCount: 1440,
  },

  {
    id: 'committee-with-specific-role',

    questionMode: 'counting-only',
    defaultQuestionType: 'counting-with-restriction',

    setting: 'A student association is forming a small planning group.',

    story:
      'There are 10 students available. A group of 4 students will be selected, and then one of the selected students will be chosen as the coordinator.',

    populationOrProcess:
      'possible planning groups together with a chosen coordinator',

    countingSetup: {
      totalItems: 10,
      selectedItems: 4,
      orderMatters: false,
      repetitionAllowed: false,
      restriction: {
        description:
          'After the group is selected, one member of the group is chosen as coordinator.',
        strategy: 'direct-count',
      },
    },

    method: {
      countingMethod: 'restriction-casework',
      primaryFormula: 'C(10,4) * 4',
      methodNotes:
        'First choose the group, then choose one coordinator from within the group.',
    },

    promptGoal:
      'Determine how many planning-group-and-coordinator outcomes are possible.',

    answerCount: 840,
  },

  {
    id: 'card-hand-exactly-two-aces',

    questionMode: 'probability-with-counting',
    defaultQuestionType: 'probability-with-counting',

    setting:
      'A standard deck of playing cards is used in a probability activity.',

    story:
      'A 5-card hand is dealt from a standard 52-card deck. The order of the cards in the hand does not matter.',

    populationOrProcess: 'possible 5-card hands from a standard deck',

    countingSetup: {
      totalItems: 52,
      selectedItems: 5,
      groups: [
        { label: 'aces', count: 4 },
        { label: 'non-aces', count: 48 },
      ],
      orderMatters: false,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'combination-without-repetition',
      primaryFormula: '[C(4,2)C(48,3)] / C(52,5)',
      methodNotes:
        'Use combinations to count hands with exactly two aces and all possible 5-card hands.',
    },

    probabilitySetup: {
      sampleSpaceDescription:
        'all possible 5-card hands from a standard 52-card deck',
      favorableOutcomeDescription: '5-card hands with exactly 2 aces',
      sampleSpaceCount: 2598960,
      favorableOutcomeCount: 103776,
      probability: 0.0399,
    },

    promptGoal:
      'Determine the probability that the hand contains exactly 2 aces.',
  },

  {
    id: 'lottery-code-exactly-one-even',

    questionMode: 'probability-with-counting',
    defaultQuestionType: 'probability-with-counting',

    setting: 'A simple lottery uses three-digit codes.',

    story:
      'A code is formed by choosing 3 digits. Digits may repeat. A code is selected at random from all possible three-digit codes, including codes that begin with 0.',

    populationOrProcess: 'possible three-digit lottery codes',

    countingSetup: {
      totalItems: 10,
      selectedItems: 3,
      groups: [
        { label: 'even digits', count: 5 },
        { label: 'odd digits', count: 5 },
      ],
      orderMatters: true,
      repetitionAllowed: true,
    },

    method: {
      countingMethod: 'restriction-casework',
      primaryFormula: '[C(3,1)(5)(5^2)] / 10^3',
      methodNotes:
        'Choose which position contains the even digit, then choose the even digit and the two odd digits.',
    },

    probabilitySetup: {
      sampleSpaceDescription:
        'all possible three-digit codes when digits may repeat',
      favorableOutcomeDescription: 'codes with exactly one even digit',
      sampleSpaceCount: 1000,
      favorableOutcomeCount: 375,
      probability: 0.375,
    },

    promptGoal:
      'Determine the probability that the code contains exactly one even digit.',
  },

  {
    id: 'cafeteria-meal-combo',

    questionMode: 'counting-only',
    defaultQuestionType: 'product-rule',

    setting: 'A college cafeteria lets students build a lunch combo.',

    story:
      'A student chooses one main dish, one side dish, one drink, and one dessert from the available options.',

    populationOrProcess: 'possible lunch combos that a student can build',

    countingSetup: {
      stages: [
        { label: 'main dish', numberOfChoices: 5 },
        { label: 'side dish', numberOfChoices: 4 },
        { label: 'drink', numberOfChoices: 6 },
        { label: 'dessert', numberOfChoices: 3 },
      ],
      orderMatters: true,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'product-rule',
      primaryFormula: '5 * 4 * 6 * 3',
      methodNotes:
        'Choose one option from each stage and multiply the number of choices.',
    },

    promptGoal: 'Determine how many different lunch combos are possible.',

    answerCount: 360,
  },

  {
    id: 'optional-review-session',

    questionMode: 'counting-only',
    defaultQuestionType: 'sum-rule',

    setting: 'A department offers optional review sessions before final exams.',

    story:
      'A student may attend exactly one review session. The available sessions are grouped by subject area: mathematics, biology, chemistry, physics, and psychology.',

    populationOrProcess: 'possible review-session choices for one student',

    countingSetup: {
      groups: [
        { label: 'mathematics sessions', count: 4 },
        { label: 'biology sessions', count: 3 },
        { label: 'chemistry sessions', count: 2 },
        { label: 'physics sessions', count: 3 },
        { label: 'psychology sessions', count: 2 },
      ],
      orderMatters: false,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'sum-rule',
      primaryFormula: '4 + 3 + 2 + 3 + 2',
      methodNotes:
        'The choices come from non-overlapping categories, and exactly one option is selected.',
    },

    promptGoal:
      'Determine how many review-session choices are available in total.',

    answerCount: 14,
  },

  {
    id: 'research-poster-display-order',

    questionMode: 'counting-only',
    defaultQuestionType: 'permutation-without-repetition',

    setting: 'A research fair is arranging posters in a featured display area.',

    story:
      'There are 9 eligible student posters. The organizers will choose 4 of them and place them in a left-to-right display order.',

    populationOrProcess: 'possible ordered poster displays',

    countingSetup: {
      totalItems: 9,
      selectedItems: 4,
      orderMatters: true,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'permutation-without-repetition',
      primaryFormula: '9P4 = 9! / (9-4)!',
      methodNotes:
        'Some items are selected from a larger group, and their order matters.',
    },

    promptGoal:
      'Determine how many different ordered poster displays are possible.',

    answerCount: 3024,
  },

  {
    id: 'scholarship-review-panel',

    questionMode: 'counting-only',
    defaultQuestionType: 'combination-without-repetition',

    setting: 'A college committee is forming a scholarship review panel.',

    story:
      'There are 16 faculty members available, and 5 of them will be selected to serve on the panel. All selected members have the same role.',

    populationOrProcess: 'possible scholarship review panels',

    countingSetup: {
      totalItems: 16,
      selectedItems: 5,
      orderMatters: false,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'combination-without-repetition',
      primaryFormula: '16C5 = 16! / [5!(16-5)!]',
      methodNotes:
        'A fixed number of people is selected, and order does not matter.',
    },

    promptGoal: 'Determine how many different review panels are possible.',

    answerCount: 4368,
  },

  {
    id: 'arrange-mississippi-word',

    questionMode: 'counting-only',
    defaultQuestionType: 'arrangements-with-identical-items',

    setting:
      'A teacher is preparing a probability activity using letter tiles.',

    story:
      'The teacher wants to arrange all the letters in the word MISSISSIPPI in a row.',

    populationOrProcess:
      'possible distinct arrangements of the letters in the word MISSISSIPPI',

    countingSetup: {
      totalItems: 11,
      selectedItems: 11,
      repeatedItemGroups: [
        { label: 'M', count: 1 },
        { label: 'I', count: 4 },
        { label: 'S', count: 4 },
        { label: 'P', count: 2 },
      ],
      orderMatters: true,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'identical-items-arrangement',
      primaryFormula: '11! / (4!4!2!)',
      methodNotes: 'All letters are arranged, but some letters are identical.',
    },

    promptGoal: 'Determine how many distinct letter arrangements are possible.',

    answerCount: 34650,
  },

  {
    id: 'password-starts-with-vowel',

    questionMode: 'counting-only',
    defaultQuestionType: 'counting-with-restriction',

    setting: 'A website creates temporary access codes using capital letters.',

    story:
      'Each access code has 4 capital letters. No letter may be repeated, and the first letter must be a vowel. Use A, E, I, O, and U as the vowels.',

    populationOrProcess:
      'possible temporary access codes satisfying the requirement',

    countingSetup: {
      totalItems: 26,
      selectedItems: 4,
      groups: [
        { label: 'vowels', count: 5 },
        { label: 'capital letters', count: 26 },
      ],
      orderMatters: true,
      repetitionAllowed: false,
      restriction: {
        description:
          'The first letter must be a vowel, and no letter may be repeated.',
        strategy: 'slot-restriction',
      },
    },

    method: {
      countingMethod: 'restriction-casework',
      primaryFormula: '5 * 25 * 24 * 23',
      methodNotes:
        'The first slot is restricted to vowels, and the remaining slots use unused capital letters.',
    },

    promptGoal: 'Determine how many valid access codes are possible.',

    answerCount: 69000,
  },

  {
    id: 'seating-two-students-not-together',

    questionMode: 'counting-only',
    defaultQuestionType: 'counting-with-restriction',

    setting:
      'A teacher is arranging students in a row for a classroom activity.',

    story:
      'Eight students will sit in a row. Two particular students, Noor and Elias, should not sit next to each other.',

    populationOrProcess:
      'possible seating arrangements of the eight students satisfying the restriction',

    countingSetup: {
      totalItems: 8,
      selectedItems: 8,
      orderMatters: true,
      repetitionAllowed: false,
      restriction: {
        description: 'Noor and Elias should not sit next to each other.',
        strategy: 'complement',
      },
    },

    method: {
      countingMethod: 'complement-counting',
      primaryFormula: '8! - 2! * 7!',
      methodNotes:
        'Count all arrangements, then subtract the arrangements where the two specified students are adjacent.',
    },

    promptGoal: 'Determine how many valid seating arrangements are possible.',

    answerCount: 30240,
  },

  {
    id: 'committee-exactly-two-science',

    questionMode: 'counting-only',
    defaultQuestionType: 'counting-with-restriction',

    setting: 'A student panel is being formed for a STEM outreach event.',

    story:
      'The panel must have 5 students chosen from 9 science students and 7 arts students. The panel must include exactly 2 science students.',

    populationOrProcess: 'possible student panels satisfying the requirement',

    countingSetup: {
      totalItems: 16,
      selectedItems: 5,
      groups: [
        { label: 'science students', count: 9 },
        { label: 'arts students', count: 7 },
      ],
      orderMatters: false,
      repetitionAllowed: false,
      restriction: {
        description: 'The panel must include exactly 2 science students.',
        strategy: 'direct-count',
      },
    },

    method: {
      countingMethod: 'restriction-casework',
      primaryFormula: 'C(9,2) * C(7,3)',
      methodNotes:
        'Choose the science students and the arts students separately.',
    },

    promptGoal: 'Determine how many valid student panels are possible.',

    answerCount: 1260,
  },

  {
    id: 'card-hand-exactly-one-ace',

    questionMode: 'probability-with-counting',
    defaultQuestionType: 'probability-with-counting',

    setting:
      'A standard deck of playing cards is used in a probability activity.',

    story:
      'A 4-card hand is dealt from a standard 52-card deck. The order of the cards in the hand does not matter.',

    populationOrProcess: 'possible 4-card hands from a standard deck',

    countingSetup: {
      totalItems: 52,
      selectedItems: 4,
      groups: [
        { label: 'aces', count: 4 },
        { label: 'non-aces', count: 48 },
      ],
      orderMatters: false,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'combination-without-repetition',
      primaryFormula: '[C(4,1)C(48,3)] / C(52,4)',
      methodNotes:
        'Use combinations to count hands with exactly one ace and all possible 4-card hands.',
    },

    probabilitySetup: {
      sampleSpaceDescription:
        'all possible 4-card hands from a standard 52-card deck',
      favorableOutcomeDescription: '4-card hands with exactly 1 ace',
      sampleSpaceCount: 270725,
      favorableOutcomeCount: 69184,
      probability: 0.2555,
    },

    promptGoal:
      'Determine the probability that the hand contains exactly 1 ace.',
  },

  {
    id: 'committee-probability-at-least-one-first-year',

    questionMode: 'probability-with-counting',
    defaultQuestionType: 'probability-with-counting',

    setting:
      'A student committee is selected at random from a pool of volunteers.',

    story:
      'There are 6 first-year students and 8 upper-year students in the volunteer pool. A committee of 5 students is selected at random.',

    populationOrProcess:
      'possible 5-student committees from the volunteer pool',

    countingSetup: {
      totalItems: 14,
      selectedItems: 5,
      groups: [
        { label: 'first-year students', count: 6 },
        { label: 'upper-year students', count: 8 },
      ],
      orderMatters: false,
      repetitionAllowed: false,
      restriction: {
        description:
          'The committee must include at least one first-year student.',
        strategy: 'complement',
      },
    },

    method: {
      countingMethod: 'complement-counting',
      primaryFormula: '[C(14,5) - C(8,5)] / C(14,5)',
      methodNotes:
        'Count all committees, then subtract committees with no first-year students.',
    },

    probabilitySetup: {
      sampleSpaceDescription:
        'all possible 5-student committees from the 14 volunteers',
      favorableOutcomeDescription:
        'committees with at least one first-year student',
      sampleSpaceCount: 2002,
      favorableOutcomeCount: 1946,
      probability: 0.972,
    },

    promptGoal:
      'Determine the probability that the committee includes at least one first-year student.',
  },

  {
    id: 'poker-hand-full-house',

    questionMode: 'probability-with-counting',
    defaultQuestionType: 'probability-with-counting',

    setting:
      'A standard deck of playing cards is used in a poker probability activity.',

    story:
      'A 5-card poker hand is dealt from a standard 52-card deck. The order in which the cards are dealt does not matter. A full house consists of three cards of one rank and two cards of another rank.',

    populationOrProcess: 'possible 5-card poker hands from a standard deck',

    countingSetup: {
      totalItems: 52,
      selectedItems: 5,
      groups: [
        { label: 'card ranks', count: 13 },
        { label: 'cards in each rank', count: 4 },
      ],
      orderMatters: false,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'combination-without-repetition',
      primaryFormula: '[C(13,1)C(4,3)C(12,1)C(4,2)] / C(52,5)',
      methodNotes:
        'Choose the rank for the three-of-a-kind, choose the cards of that rank, choose a different rank for the pair, and choose the cards of that rank.',
    },

    probabilitySetup: {
      sampleSpaceDescription:
        'all possible 5-card poker hands from a standard 52-card deck',
      favorableOutcomeDescription: '5-card hands that form a full house',
      sampleSpaceCount: 2598960,
      favorableOutcomeCount: 3744,
      probability: 0.0014405762,
    },

    promptGoal:
      'Determine the probability that the poker hand is a full house.',
  },

  {
    id: 'poker-hand-exactly-one-pair',

    questionMode: 'probability-with-counting',
    defaultQuestionType: 'probability-with-counting',

    setting:
      'A standard deck of playing cards is used in a poker probability activity.',

    story:
      'A 5-card poker hand is dealt from a standard 52-card deck. The order of the cards in the hand does not matter. The hand has exactly one pair if it contains two cards of one rank and three other cards with three different ranks.',

    populationOrProcess: 'possible 5-card poker hands from a standard deck',

    countingSetup: {
      totalItems: 52,
      selectedItems: 5,
      groups: [
        { label: 'card ranks', count: 13 },
        { label: 'cards in each rank', count: 4 },
      ],
      orderMatters: false,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'combination-without-repetition',
      primaryFormula: '[C(13,1)C(4,2)C(12,3)4^3] / C(52,5)',
      methodNotes:
        'Choose the rank of the pair, choose two cards from that rank, choose three other ranks, and choose one card from each of those ranks.',
    },

    probabilitySetup: {
      sampleSpaceDescription:
        'all possible 5-card poker hands from a standard 52-card deck',
      favorableOutcomeDescription: '5-card hands with exactly one pair',
      sampleSpaceCount: 2598960,
      favorableOutcomeCount: 1098240,
      probability: 0.4225690276,
    },

    promptGoal:
      'Determine the probability that the poker hand contains exactly one pair.',
  },

  {
    id: 'yahtzee-all-five-same',

    questionMode: 'probability-with-counting',
    defaultQuestionType: 'probability-with-counting',

    setting: 'A player rolls five fair dice in a Yahtzee-style game.',

    story:
      'The five dice are rolled at the same time. For counting outcomes, think of the dice as distinguishable, such as five dice in different positions. A Yahtzee occurs when all five dice show the same number.',

    populationOrProcess:
      'possible ordered outcomes when five fair dice are rolled',

    countingSetup: {
      totalItems: 6,
      selectedItems: 5,
      groups: [
        { label: 'possible die faces', count: 6 },
        { label: 'dice rolled', count: 5 },
      ],
      orderMatters: true,
      repetitionAllowed: true,
    },

    method: {
      countingMethod: 'product-rule',
      primaryFormula: '6 / 6^5',
      methodNotes:
        'There are six favorable outcomes where all five dice match, out of all ordered outcomes for five dice.',
    },

    probabilitySetup: {
      sampleSpaceDescription:
        'all ordered outcomes from rolling five fair dice',
      favorableOutcomeDescription:
        'outcomes where all five dice show the same number',
      sampleSpaceCount: 7776,
      favorableOutcomeCount: 6,
      probability: 0.0007716049,
    },

    promptGoal:
      'Determine the probability of rolling a Yahtzee in one roll of five dice.',
  },

  {
    id: 'yahtzee-distinct-result-patterns',

    questionMode: 'counting-only',
    defaultQuestionType: 'arrangements-with-identical-items',

    setting: 'A player rolls five fair dice in a Yahtzee-style game.',

    story:
      'Instead of tracking which physical die shows which number, suppose we only care about the final pattern of face values. For example, rolling 1, 1, 3, 5, 6 is treated the same pattern no matter which die shows each value.',

    populationOrProcess:
      'distinct unordered face-value patterns from rolling five dice',

    countingSetup: {
      totalItems: 10,
      selectedItems: 5,
      groups: [
        { label: 'possible die faces', count: 6 },
        { label: 'dice rolled', count: 5 },
      ],
      orderMatters: false,
      repetitionAllowed: true,
    },

    method: {
      countingMethod: 'combination-without-repetition',
      primaryFormula: 'C(6+5-1,5)',
      methodNotes:
        'This is a combinations-with-repetition situation, represented here as a hard-wired context.',
    },

    promptGoal:
      'Determine how many distinct unordered dice-result patterns are possible.',

    answerCount: 252,
  },

  {
    id: 'monopoly-roll-sum-seven',

    questionMode: 'probability-with-counting',
    defaultQuestionType: 'probability-with-counting',

    setting:
      'A player rolls two fair six-sided dice in a Monopoly-style board game.',

    story:
      'The two dice are rolled together. For counting outcomes, treat the dice as distinguishable, such as a first die and a second die. The player is interested in rolling a total of 7.',

    populationOrProcess: 'possible ordered outcomes from rolling two fair dice',

    countingSetup: {
      totalItems: 6,
      selectedItems: 2,
      groups: [
        { label: 'possible values on the first die', count: 6 },
        { label: 'possible values on the second die', count: 6 },
      ],
      orderMatters: true,
      repetitionAllowed: true,
    },

    method: {
      countingMethod: 'product-rule',
      primaryFormula: '6 / 36',
      methodNotes:
        'The dice are distinguishable for counting ordered outcomes.',
    },

    probabilitySetup: {
      sampleSpaceDescription: 'all ordered outcomes from rolling two fair dice',
      favorableOutcomeDescription:
        'ordered outcomes where the sum of the two dice is 7',
      sampleSpaceCount: 36,
      favorableOutcomeCount: 6,
      probability: 0.1666666667,
    },

    promptGoal: 'Determine the probability that the two dice have a sum of 7.',
  },

  {
    id: 'monopoly-roll-doubles',

    questionMode: 'probability-with-counting',
    defaultQuestionType: 'probability-with-counting',

    setting:
      'A player rolls two fair six-sided dice in a Monopoly-style board game.',

    story:
      'The two dice are rolled together. For counting outcomes, treat the dice as distinguishable. The player is interested in rolling doubles, meaning both dice show the same number.',

    populationOrProcess: 'possible ordered outcomes from rolling two fair dice',

    countingSetup: {
      totalItems: 6,
      selectedItems: 2,
      groups: [
        { label: 'possible values on the first die', count: 6 },
        { label: 'possible values on the second die', count: 6 },
      ],
      orderMatters: true,
      repetitionAllowed: true,
    },

    method: {
      countingMethod: 'product-rule',
      primaryFormula: '6 / 36',
      methodNotes:
        'There are six doubles among the thirty-six ordered outcomes.',
    },

    probabilitySetup: {
      sampleSpaceDescription: 'all ordered outcomes from rolling two fair dice',
      favorableOutcomeDescription:
        'ordered outcomes where both dice show the same number',
      sampleSpaceCount: 36,
      favorableOutcomeCount: 6,
      probability: 0.1666666667,
    },

    promptGoal: 'Determine the probability of rolling doubles.',
  },

  {
    id: 'lotto-649-ticket-count',

    questionMode: 'counting-only',
    defaultQuestionType: 'combination-without-repetition',

    setting:
      'A lottery ticket asks a player to choose numbers for a 6/49 draw.',

    story:
      'The player chooses 6 different numbers from the numbers 1 through 49. The order in which the numbers are chosen does not matter.',

    populationOrProcess: 'possible 6-number lottery selections from 49 numbers',

    countingSetup: {
      totalItems: 49,
      selectedItems: 6,
      orderMatters: false,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'combination-without-repetition',
      primaryFormula: 'C(49,6)',
      methodNotes:
        'Six different numbers are selected, and order does not matter.',
    },

    promptGoal: 'Determine how many different lottery selections are possible.',

    answerCount: 13983816,
  },

  {
    id: 'lotto-649-jackpot-probability',

    questionMode: 'probability-with-counting',
    defaultQuestionType: 'probability-with-counting',

    setting:
      'A lottery ticket asks a player to choose numbers for a 6/49 draw.',

    story:
      'The player chooses 6 different numbers from the numbers 1 through 49. The order in which the numbers are chosen does not matter. A jackpot ticket matches all 6 winning numbers.',

    populationOrProcess: 'possible 6-number lottery selections from 49 numbers',

    countingSetup: {
      totalItems: 49,
      selectedItems: 6,
      orderMatters: false,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'combination-without-repetition',
      primaryFormula: '1 / C(49,6)',
      methodNotes:
        'There is one jackpot selection among all possible 6-number selections.',
    },

    probabilitySetup: {
      sampleSpaceDescription:
        'all possible 6-number selections from 49 numbers',
      favorableOutcomeDescription:
        'the one selection that matches all 6 winning numbers',
      sampleSpaceCount: 13983816,
      favorableOutcomeCount: 1,
      probability: 0.0000000715,
    },

    promptGoal: 'Determine the probability of matching all 6 winning numbers.',
  },

  {
    id: 'lotto-5-35-ticket-count',

    questionMode: 'counting-only',
    defaultQuestionType: 'combination-without-repetition',

    setting: 'A small lottery asks a player to choose numbers for a 5/35 draw.',

    story:
      'The player chooses 5 different numbers from the numbers 1 through 35. The order in which the numbers are chosen does not matter.',

    populationOrProcess: 'possible 5-number lottery selections from 35 numbers',

    countingSetup: {
      totalItems: 35,
      selectedItems: 5,
      orderMatters: false,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'combination-without-repetition',
      primaryFormula: 'C(35,5)',
      methodNotes:
        'Five different numbers are selected, and order does not matter.',
    },

    promptGoal: 'Determine how many different lottery selections are possible.',

    answerCount: 324632,
  },

  {
    id: 'lotto-5-35-jackpot-probability',

    questionMode: 'probability-with-counting',
    defaultQuestionType: 'probability-with-counting',

    setting: 'A small lottery asks a player to choose numbers for a 5/35 draw.',

    story:
      'The player chooses 5 different numbers from the numbers 1 through 35. The order in which the numbers are chosen does not matter. A jackpot ticket matches all 5 winning numbers.',

    populationOrProcess: 'possible 5-number lottery selections from 35 numbers',

    countingSetup: {
      totalItems: 35,
      selectedItems: 5,
      orderMatters: false,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'combination-without-repetition',
      primaryFormula: '1 / C(35,5)',
      methodNotes:
        'There is one jackpot selection among all possible 5-number selections.',
    },

    probabilitySetup: {
      sampleSpaceDescription:
        'all possible 5-number selections from 35 numbers',
      favorableOutcomeDescription:
        'the one selection that matches all 5 winning numbers',
      sampleSpaceCount: 324632,
      favorableOutcomeCount: 1,
      probability: 0.0000030804,
    },

    promptGoal: 'Determine the probability of matching all 5 winning numbers.',
  },

  {
    id: 'student-executive-roles',

    questionMode: 'counting-only',
    defaultQuestionType: 'permutation-without-repetition',

    setting: 'A student association is choosing students for executive roles.',

    story:
      'There are 11 students running for the executive team. Four different roles must be filled: president, vice-president, secretary, and treasurer. A student can hold only one role.',

    populationOrProcess:
      'possible executive-role assignments among the candidates',

    countingSetup: {
      totalItems: 11,
      selectedItems: 4,
      orderMatters: true,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'permutation-without-repetition',
      primaryFormula: '11P4 = 11! / (11-4)!',
      methodNotes:
        'Four students are selected from a larger group, and the role assigned to each student matters.',
    },

    promptGoal:
      'Determine how many different executive-role assignments are possible.',

    answerCount: 7920,
  },

  {
    id: 'field-trip-chaperones',

    questionMode: 'counting-only',
    defaultQuestionType: 'combination-without-repetition',

    setting: 'A department is organizing a field trip for students.',

    story:
      'There are 13 faculty members available to help supervise the trip. The organizers need to choose 3 faculty members to act as chaperones. All selected chaperones will have the same role.',

    populationOrProcess: 'possible chaperone groups for the field trip',

    countingSetup: {
      totalItems: 13,
      selectedItems: 3,
      orderMatters: false,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'combination-without-repetition',
      primaryFormula: '13C3 = 13! / [3!(13-3)!]',
      methodNotes:
        'A group is selected from a larger set, and the order of selection does not matter.',
    },

    promptGoal: 'Determine how many different chaperone groups are possible.',

    answerCount: 286,
  },

  {
    id: 'license-plate-no-repetition',

    questionMode: 'counting-only',
    defaultQuestionType: 'counting-with-restriction',

    setting:
      'A parking office creates temporary license-plate codes for campus vehicles.',

    story:
      'Each temporary code has 2 capital letters followed by 3 digits. Letters cannot repeat within the code, and digits cannot repeat within the code.',

    populationOrProcess:
      'possible temporary license-plate codes satisfying the restrictions',

    countingSetup: {
      totalItems: 36,
      selectedItems: 5,
      groups: [
        { label: 'capital letters', count: 26 },
        { label: 'digits', count: 10 },
      ],
      orderMatters: true,
      repetitionAllowed: false,
      restriction: {
        description:
          'The first two characters must be capital letters, the last three characters must be digits, and no letter or digit may repeat within its part of the code.',
        strategy: 'slot-restriction',
      },
    },

    method: {
      countingMethod: 'restriction-casework',
      primaryFormula: '26 * 25 * 10 * 9 * 8',
      methodNotes:
        'Count the choices for each restricted slot, accounting for no repetition within the letter slots and digit slots.',
    },

    promptGoal:
      'Determine how many temporary license-plate codes are possible.',

    answerCount: 468000,
  },

  {
    id: 'card-hand-exactly-two-hearts',

    questionMode: 'probability-with-counting',
    defaultQuestionType: 'probability-with-counting',

    setting:
      'A standard deck of playing cards is used in a probability activity.',

    story:
      'A 3-card hand is dealt from a standard 52-card deck. The order of the cards in the hand does not matter.',

    populationOrProcess: 'possible 3-card hands from a standard deck',

    countingSetup: {
      totalItems: 52,
      selectedItems: 3,
      groups: [
        { label: 'hearts', count: 13 },
        { label: 'non-hearts', count: 39 },
      ],
      orderMatters: false,
      repetitionAllowed: false,
    },

    method: {
      countingMethod: 'combination-without-repetition',
      primaryFormula: '[C(13,2)C(39,1)] / C(52,3)',
      methodNotes:
        'Use combinations to count hands with exactly two hearts and all possible 3-card hands.',
    },

    probabilitySetup: {
      sampleSpaceDescription:
        'all possible 3-card hands from a standard 52-card deck',
      favorableOutcomeDescription: '3-card hands with exactly 2 hearts',
      sampleSpaceCount: 22100,
      favorableOutcomeCount: 3042,
      probability: 0.1376470588,
    },

    promptGoal:
      'Determine the probability that the hand contains exactly 2 hearts.',
  },
];
