import type { DiscreteRandomVariableQuestionType } from '../schemas/discreteRandomVariable.schema';

export type DiscreteRandomVariableContextSeed = {
  id: string;
  seedPhrase?: string;
  setting: string;
  randomVariableDescription: string;
  valuesRepresent: string;
  unit?: string;
  populationOrProcess?: string;

  probabilityTable: {
    value: number;
    probability: number;
  }[];

  distributionPresentation?: {
    format: 'table' | 'verbal';
    verbalDescription?: string;
  };

  defaultQuestionType: DiscreteRandomVariableQuestionType;
};

export const discreteRandomVariableContextSeeds: DiscreteRandomVariableContextSeed[] =
  [
    {
      id: 'coffee-orders',
      setting:
        'A small campus café tracks the number of specialty coffees ordered by a student during a morning visit.',
      randomVariableDescription:
        'the number of specialty coffees ordered by one randomly selected student during a morning visit',
      valuesRepresent:
        'the number of specialty coffees ordered during the visit',
      unit: 'coffees',
      populationOrProcess:
        'randomly selected student visits to the campus café during the morning period',
      probabilityTable: [
        { value: 0, probability: 0.18 },
        { value: 1, probability: 0.42 },
        { value: 2, probability: 0.28 },
        { value: 3, probability: 0.12 },
      ],
      defaultQuestionType: 'compute-expected-value',
    },

    {
      id: 'printer-errors',
      setting: 'A department printer is monitored during short print jobs.',
      randomVariableDescription:
        'the number of paper jams during one randomly selected print job',
      valuesRepresent: 'the number of paper jams in the print job',
      unit: 'paper jams',
      populationOrProcess:
        'randomly selected print jobs sent to the department printer',
      probabilityTable: [
        { value: 0, probability: 0.72 },
        { value: 1, probability: 0.2 },
        { value: 2, probability: 0.06 },
        { value: 3, probability: 0.02 },
      ],
      defaultQuestionType: 'compute-variance',
    },

    {
      id: 'missed-buses',
      setting:
        'A transit office records how many buses a commuter misses before successfully boarding one.',
      randomVariableDescription:
        'the number of buses missed by one randomly selected commuter before boarding',
      valuesRepresent: 'the number of buses missed before the commuter boards',
      unit: 'buses',
      populationOrProcess:
        'randomly selected commuter trips during the morning rush',
      probabilityTable: [
        { value: 0, probability: 0.55 },
        { value: 1, probability: 0.3 },
        { value: 2, probability: 0.12 },
        { value: 3, probability: 0.03 },
      ],
      defaultQuestionType: 'compute-standard-deviation',
    },

    {
      id: 'defective-items',
      setting:
        'A quality-control team inspects small batches of electronic components.',
      randomVariableDescription:
        'the number of defective components in one randomly selected batch',
      valuesRepresent: 'the number of defective components in the batch',
      unit: 'defective components',
      populationOrProcess:
        'randomly selected batches from the same production process',
      probabilityTable: [
        { value: 0, probability: 0.64 },
        { value: 1, probability: 0.25 },
        { value: 2, probability: 0.09 },
        { value: 3, probability: 0.02 },
      ],
      defaultQuestionType: 'interpret-expected-value',
    },

    {
      id: 'library-renewals',
      setting:
        'A college library studies how often borrowed books are renewed.',
      randomVariableDescription:
        'the number of times one randomly selected borrowed book is renewed',
      valuesRepresent: 'the number of renewals for the borrowed book',
      unit: 'renewals',
      populationOrProcess:
        'randomly selected borrowed books from the college library',
      probabilityTable: [
        { value: 0, probability: 0.48 },
        { value: 1, probability: 0.34 },
        { value: 2, probability: 0.14 },
        { value: 3, probability: 0.04 },
      ],
      defaultQuestionType: 'validate-pmf',
    },

    {
      id: 'app-notifications',
      setting:
        'A study tracks the number of academic app notifications a student receives during one class period.',
      randomVariableDescription:
        'the number of academic app notifications received by one randomly selected student during a class period',
      valuesRepresent:
        'the number of academic app notifications received during the class period',
      unit: 'notifications',
      populationOrProcess: 'randomly selected student class periods',
      probabilityTable: [
        { value: 0, probability: 0.22 },
        { value: 1, probability: 0.36 },
        { value: 2, probability: 0.27 },
        { value: 3, probability: 0.15 },
      ],
      defaultQuestionType: 'find-missing-probability',
    },

    {
      id: 'app-feature-successes',

      setting:
        'An AI system is monitoring user interactions with a new app feature to evaluate its usability.',

      randomVariableDescription:
        'the number of successful interactions among two independently selected user interactions',

      valuesRepresent: '0, 1, or 2 successful interactions',

      unit: 'successful interactions',

      populationOrProcess:
        'pairs of independent user interactions with the new app feature',

      probabilityTable: [
        { value: 0, probability: 0.0225 },
        { value: 1, probability: 0.255 },
        { value: 2, probability: 0.7225 },
      ],

      distributionPresentation: {
        format: 'verbal',
        verbalDescription:
          'The probability that a single interaction is successful is 0.85. The two interactions are independent.',
      },

      defaultQuestionType: 'compute-expected-value',
    },

    // End of calibrated contexts.  Start of in class contexts.

    {
      id: 'james-bond-martinis',

      seedPhrase:
        "James Bond's excellent health may be due to his intake of shaken martinis, which are a highly effective antioxidant",
      setting:
        'On a spy mission for MI6, James Bond drinks several beverages in a day, including martinis.  The number of martinis he drinks in a day is a discrete random variable.',

      randomVariableDescription:
        'the number of martinis James Bond drinks in a day',

      valuesRepresent: '0, 1, 2, ... martinis',

      unit: 'martinis',

      populationOrProcess: "James Bond's daily beverage consumption",

      probabilityTable: [
        { value: 0, probability: 0.1 },
        { value: 1, probability: 0.3 },
        { value: 2, probability: 0.4 },
        { value: 3, probability: 0.15 },
        { value: 4, probability: 0.05 },
      ],

      distributionPresentation: {
        format: 'verbal',
        verbalDescription:
          'The probability that James Bond drinks a martini in a day is 0.9. The number of martinis he drinks in a day is a discrete random variable.',
      },

      defaultQuestionType: 'compute-expected-value',
    },

    {
      id: '',

      seedPhrase:
        'After the 2008 financial crisis, the Hubei province in China tried to boost the local economy by ordering their police officers and teachers to buy packets of cigarettes or face a fine.',

      setting:
        'The year after the 2008 financial crisis, the Hubei province in China tried to boost the local economy by ordering their police officers and teachers to buy packets of cigarettes or face a fine. The number of packets of cigarettes purchased by a randomly selected police officer or teacher is a discrete random variable.',

      randomVariableDescription:
        'the number of packets of cigarettes purchased by a randomly selected police officer or teacher in a week',

      valuesRepresent: '0, 1, 2, ... packets of cigarettes',

      unit: 'packets of cigarettes',

      populationOrProcess:
        'purchases of packets of cigarettes by police officers and teachers in Hubei province',

      probabilityTable: [
        { value: 0, probability: 0.2 },
        { value: 1, probability: 0.5 },
        { value: 2, probability: 0.2 },
        { value: 3, probability: 0.1 },
      ],

      distributionPresentation: {
        format: 'verbal',
        verbalDescription:
          'The probability that a randomly selected police officer or teacher in Hubei province purchases a packet of cigarettes in a week is 0.8. The number of packets of cigarettes purchased by a randomly selected police officer or teacher in a week is a discrete random variable.',
      },

      defaultQuestionType: 'compute-expected-value',
    },
    {
      id: 'rat-basketball',

      seedPhrase:
        'The Science Museum of Virginia has trained rats to play basketball. Daily matches can be watched by the public.',
      setting:
        'The Science Museum of Virginia has trained rats to play basketball. Daily matches can be watched by the public.',

      randomVariableDescription:
        'number of baskets made by a randomly selected rat in a single match',

      valuesRepresent: '0, 1, 2, ... baskets made by a rat in a match',

      unit: 'baskets',

      populationOrProcess:
        'baskets made by rats in the Science Museum of Virginia basketball matches',

      probabilityTable: [
        { value: 0, probability: 0.3 },
        { value: 1, probability: 0.4 },
        { value: 2, probability: 0.2 },
        { value: 3, probability: 0.1 },
      ],

      distributionPresentation: {
        format: 'verbal',
        verbalDescription:
          'The probability that a randomly selected rat in the Science Museum of Virginia makes a basket in a single match is 0.7. The number of baskets made by a randomly selected rat in a single match is a discrete random variable.',
      },

      defaultQuestionType: 'compute-expected-value',
    },
    {
      id: 'candy-crush',

      seedPhrase:
        'Over 9 million people play Candy Crush for more than 3 hours a day.',
      setting:
        'Over 9 million people play Candy Crush for more than 3 hours a day. The number of levels completed by a randomly selected player in a single day is a discrete random variable.',

      randomVariableDescription:
        'number of levels completed by a randomly selected Candy Crush player in a single day',

      valuesRepresent: '0, 1, 2, ... levels completed by a player in a day',

      unit: 'levels',

      populationOrProcess:
        'levels completed by Candy Crush players in a single day',

      probabilityTable: [
        { value: 0, probability: 0.05 },
        { value: 1, probability: 0.1 },
        { value: 2, probability: 0.15 },
        { value: 3, probability: 0.25 },
        { value: 4, probability: 0.2 },
        { value: 5, probability: 0.1 },
        { value: 6, probability: 0.05 },
        { value: 7, probability: 0.03 },
        { value: 8, probability: 0.03 },
        { value: 9, probability: 0.02 },
        { value: 10, probability: 0.02 },
      ],

      distributionPresentation: {
        format: 'verbal',
        verbalDescription:
          'The probability that a randomly selected Candy Crush player completes a certain number of levels in a single day is given by the probability table. The number of levels completed by a randomly selected player in a single day is a discrete random variable.',
      },

      defaultQuestionType: 'compute-expected-value',
    },
    // {
    //   id: '',

    //   setting: '',

    //   randomVariableDescription: '',

    //   valuesRepresent: '',

    //   unit: '',

    //   populationOrProcess: '',

    //   probabilityTable: [],

    //   distributionPresentation: {
    //     format: 'verbal',
    //     verbalDescription: '',
    //   },

    //   defaultQuestionType: '',
    // },
    // {
    //   id: '',

    //   setting: '',

    //   randomVariableDescription: '',

    //   valuesRepresent: '',

    //   unit: '',

    //   populationOrProcess: '',

    //   probabilityTable: [],

    //   distributionPresentation: {
    //     format: 'verbal',
    //     verbalDescription: '',
    //   },

    //   defaultQuestionType: '',
    // },
    // {
    //   id: '',

    //   setting: '',

    //   randomVariableDescription: '',

    //   valuesRepresent: '',

    //   unit: '',

    //   populationOrProcess: '',

    //   probabilityTable: [],

    //   distributionPresentation: {
    //     format: 'verbal',
    //     verbalDescription: '',
    //   },

    //   defaultQuestionType: '',
    // },
    // {
    //   id: '',

    //   setting: '',

    //   randomVariableDescription: '',

    //   valuesRepresent: '',

    //   unit: '',

    //   populationOrProcess: '',

    //   probabilityTable: [],

    //   distributionPresentation: {
    //     format: 'verbal',
    //     verbalDescription: '',
    //   },

    //   defaultQuestionType: '',
    // },
    // {
    //   id: '',

    //   setting: '',

    //   randomVariableDescription: '',

    //   valuesRepresent: '',

    //   unit: '',

    //   populationOrProcess: '',

    //   probabilityTable: [],

    //   distributionPresentation: {
    //     format: 'verbal',
    //     verbalDescription: '',
    //   },

    //   defaultQuestionType: '',
    // },
    // {
    //   id: '',

    //   setting: '',

    //   randomVariableDescription: '',

    //   valuesRepresent: '',

    //   unit: '',

    //   populationOrProcess: '',

    //   probabilityTable: [],

    //   distributionPresentation: {
    //     format: 'verbal',
    //     verbalDescription: '',
    //   },

    //   defaultQuestionType: '',
    // },
  ];
