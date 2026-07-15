import type { HypothesisTestMeanKnownVarianceProblem } from '../schemas/hypothesisTestMeanKnownVariance.schema';

type HypothesisTestMeanKnownVarianceContextSeed = {
  id: string;

  context: HypothesisTestMeanKnownVarianceProblem['context'];

  parameterDescription: string;

  nullClaimValue: number;
  knownPopulationStandardDeviation: number;

  defaultSampleSize: number;
  defaultSampleMean: number;

  suggestedSignificanceLevels: {
    leftTailed: number;
    rightTailed: number;
    twoTailed: number;
  };
};

export const hypothesisTestMeanKnownVarianceContexts: HypothesisTestMeanKnownVarianceContextSeed[] =
  [
    {
      id: 'battery-life',
      context: {
        setting: 'battery performance testing',
        individualDescription:
          'one fully charged battery of a particular model',
        variableDescription: 'battery life',
        unit: 'hours',
        tone: 'technical product-testing context',
        variationProfile: {
          openingStyle: 'product testing scenario',
          toneGuidance:
            'Use practical technical language without making the context overly advanced.',
          vocabularySuggestions: [
            'battery life',
            'manufacturer claim',
            'sample mean',
            'population standard deviation',
            'hypothesis test',
          ],
          seedPhraseInContext:
            'A testing lab studies the battery life of a particular battery model.',
          avoidPhrases: ['battery disaster', 'power drama'],
          contextDetails: [
            'Each observation is the battery life of one fully charged battery.',
            'The population standard deviation is known.',
            'The goal is to test a claim about the true mean battery life.',
          ],
        },
      },
      parameterDescription: 'the true mean battery life for this battery model',
      nullClaimValue: 10,
      knownPopulationStandardDeviation: 1.2,
      defaultSampleSize: 36,
      defaultSampleMean: 9.4,
      suggestedSignificanceLevels: {
        leftTailed: 0.05,
        rightTailed: 0.05,
        twoTailed: 0.05,
      },
    },

    {
      id: 'loaf-mass',
      context: {
        setting: 'bakery quality control',
        individualDescription: 'one loaf of bread from a production line',
        variableDescription: 'loaf mass',
        unit: 'grams',
        tone: 'quality-control context',
        variationProfile: {
          openingStyle: 'production monitoring scenario',
          toneGuidance:
            'Use workplace quality-control language while keeping the hypothesis test clear.',
          vocabularySuggestions: [
            'loaf mass',
            'production line',
            'target mean',
            'sample mean',
            'z test',
          ],
          seedPhraseInContext:
            'A bakery monitors the mass of loaves produced on one production line.',
          avoidPhrases: ['bread crisis', 'bakery chaos'],
          contextDetails: [
            'Each observation is the mass of one loaf.',
            'The population standard deviation is known from long-term production records.',
            'The goal is to test whether the true mean loaf mass differs from a target value.',
          ],
        },
      },
      parameterDescription:
        'the true mean loaf mass for loaves from this production line',
      nullClaimValue: 500,
      knownPopulationStandardDeviation: 18,
      defaultSampleSize: 49,
      defaultSampleMean: 502,
      suggestedSignificanceLevels: {
        leftTailed: 0.05,
        rightTailed: 0.05,
        twoTailed: 0.01,
      },
    },

    {
      id: 'commute-times',
      context: {
        setting: 'student commute times',
        individualDescription: 'one student commute to campus',
        variableDescription: 'commute time',
        unit: 'minutes',
        tone: 'everyday college context',
        variationProfile: {
          openingStyle: 'college routine scenario',
          toneGuidance:
            'Use realistic student-life language while keeping the hypothesis test clear.',
          vocabularySuggestions: [
            'commute time',
            'student sample',
            'population mean',
            'significance level',
            'hypothesis test',
          ],
          seedPhraseInContext:
            'A college studies how long students take to commute to campus.',
          avoidPhrases: ['traffic nightmare', 'commuting chaos'],
          contextDetails: [
            'Each observation is one student commute time.',
            'The population standard deviation is known from previous transportation surveys.',
            'The goal is to test a claim about the true mean commute time.',
          ],
        },
      },
      parameterDescription:
        'the true mean commute time for students at the college',
      nullClaimValue: 45,
      knownPopulationStandardDeviation: 12,
      defaultSampleSize: 64,
      defaultSampleMean: 41.5,
      suggestedSignificanceLevels: {
        leftTailed: 0.05,
        rightTailed: 0.05,
        twoTailed: 0.1,
      },
    },

    {
      id: 'plant-growth',
      context: {
        setting: 'plant growth experiment',
        individualDescription: 'one plant grown under a standard condition',
        variableDescription: 'height increase over four weeks',
        unit: 'cm',
        tone: 'scientific classroom context',
        variationProfile: {
          openingStyle: 'biology experiment scenario',
          toneGuidance:
            'Use clear scientific language suitable for introductory statistics.',
          vocabularySuggestions: [
            'plant growth',
            'height increase',
            'population mean',
            'known standard deviation',
            'significance level',
          ],
          seedPhraseInContext:
            'In a plant growth experiment, researchers measure height increase over four weeks.',
          avoidPhrases: ['plant miracle', 'growth explosion'],
          contextDetails: [
            'Each observation is the height increase for one plant.',
            'The population standard deviation is known from previous trials.',
            'The goal is to test a claim about the true mean height increase.',
          ],
        },
      },
      parameterDescription:
        'the true mean height increase for plants grown under this standard condition',
      nullClaimValue: 16,
      knownPopulationStandardDeviation: 5,
      defaultSampleSize: 40,
      defaultSampleMean: 17.6,
      suggestedSignificanceLevels: {
        leftTailed: 0.05,
        rightTailed: 0.05,
        twoTailed: 0.05,
      },
    },

    {
      id: 'jellyfish-diameter',
      context: {
        setting: 'marine biology survey',
        individualDescription: 'one jellyfish measured during a coastal survey',
        variableDescription: 'bell diameter',
        unit: 'cm',
        tone: 'scientific field-study context',
        variationProfile: {
          openingStyle: 'marine survey scenario',
          toneGuidance:
            'Use scientific field-study language while keeping the inference task understandable.',
          vocabularySuggestions: [
            'jellyfish',
            'bell diameter',
            'marine survey',
            'population mean',
            'z test',
          ],
          seedPhraseInContext:
            'A marine biology team measures jellyfish bell diameters during a coastal survey.',
          avoidPhrases: ['jellyfish invasion', 'ocean mystery'],
          contextDetails: [
            'Each observation is the bell diameter of one jellyfish.',
            'The population standard deviation is treated as known from previous survey records.',
            'The goal is to test a claim about the true mean bell diameter.',
          ],
        },
      },
      parameterDescription:
        'the true mean bell diameter for jellyfish in the surveyed population',
      nullClaimValue: 25,
      knownPopulationStandardDeviation: 6,
      defaultSampleSize: 50,
      defaultSampleMean: 23.4,
      suggestedSignificanceLevels: {
        leftTailed: 0.05,
        rightTailed: 0.05,
        twoTailed: 0.05,
      },
    },

    {
      id: 'turtle-hatchling-mass',
      context: {
        setting: 'sea turtle conservation monitoring',
        individualDescription: 'one hatchling measured after emergence',
        variableDescription: 'hatchling mass',
        unit: 'grams',
        tone: 'careful conservation context',
        variationProfile: {
          openingStyle: 'conservation monitoring scenario',
          toneGuidance:
            'Use careful ecological language. Avoid dramatizing the scenario.',
          vocabularySuggestions: [
            'hatchling mass',
            'conservation monitoring',
            'population mean',
            'sample mean',
            'hypothesis test',
          ],
          seedPhraseInContext:
            'In a conservation monitoring project, researchers measure the mass of sea turtle hatchlings.',
          avoidPhrases: ['hero turtles', 'survival race'],
          contextDetails: [
            'Each observation is the mass of one hatchling.',
            'The population standard deviation is known from long-term monitoring data.',
            'The goal is to test a claim about the true mean hatchling mass.',
          ],
        },
      },
      parameterDescription:
        'the true mean mass of sea turtle hatchlings at this nesting site',
      nullClaimValue: 22,
      knownPopulationStandardDeviation: 3.5,
      defaultSampleSize: 45,
      defaultSampleMean: 21.8,
      suggestedSignificanceLevels: {
        leftTailed: 0.1,
        rightTailed: 0.05,
        twoTailed: 0.05,
      },
    },

    {
      id: 'reaction-times',
      context: {
        setting: 'reaction-time study',
        individualDescription:
          'one participant completing a reaction-time task',
        variableDescription: 'reaction time',
        unit: 'milliseconds',
        tone: 'psychology lab context',
        variationProfile: {
          openingStyle: 'experimental study scenario',
          toneGuidance:
            'Use clear lab-study language and avoid unnecessary neuroscience detail.',
          vocabularySuggestions: [
            'reaction time',
            'participant',
            'sample mean',
            'known standard deviation',
            'significance level',
          ],
          seedPhraseInContext:
            'In a reaction-time study, participants complete the same task under standard conditions.',
          avoidPhrases: ['lightning reflexes', 'brain speed contest'],
          contextDetails: [
            'Each observation is one participant’s reaction time.',
            'The population standard deviation is known from previous studies using the same task.',
            'The goal is to test a claim about the true mean reaction time.',
          ],
        },
      },
      parameterDescription:
        'the true mean reaction time for participants completing this task',
      nullClaimValue: 300,
      knownPopulationStandardDeviation: 45,
      defaultSampleSize: 60,
      defaultSampleMean: 306,
      suggestedSignificanceLevels: {
        leftTailed: 0.05,
        rightTailed: 0.05,
        twoTailed: 0.01,
      },
    },

    {
      id: 'phone-screen-time',
      context: {
        setting: 'daily phone use study',
        individualDescription: 'one student’s daily phone use',
        variableDescription: 'daily screen time',
        unit: 'hours',
        tone: 'student-life applied context',
        variationProfile: {
          openingStyle: 'technology-use study scenario',
          toneGuidance:
            'Use accessible applied language. Avoid moralizing about phone use.',
          vocabularySuggestions: [
            'screen time',
            'daily phone use',
            'population mean',
            'sample mean',
            'z test',
          ],
          seedPhraseInContext:
            'A student-life survey records daily phone screen time for students.',
          avoidPhrases: ['phone addiction', 'doomscrolling'],
          contextDetails: [
            'Each observation is one student’s daily screen time.',
            'The population standard deviation is known from previous surveys.',
            'The goal is to test a claim about the true mean daily screen time.',
          ],
        },
      },
      parameterDescription:
        'the true mean daily phone screen time for students',
      nullClaimValue: 5,
      knownPopulationStandardDeviation: 1.8,
      defaultSampleSize: 81,
      defaultSampleMean: 5.4,
      suggestedSignificanceLevels: {
        leftTailed: 0.05,
        rightTailed: 0.05,
        twoTailed: 0.05,
      },
    },

    // End of calibration contexts.  Start of course contexts.

    {
      id: 'church-spritz',
      context: {
        setting: 'church hospitality study',
        individualDescription:
          'one parishioner’s experience with church hospitality',
        variableDescription: 'daytime temperature during heat wave',
        unit: 'degrees Celsius',
        tone: 'light-hearted applied context',
        variationProfile: {
          openingStyle: 'church hospitality scenario',
          toneGuidance: 'Use light-hearted and humorous language.',
          vocabularySuggestions: [
            'Aperol spritz',
            'church hospitality',
            'parishioner experience',
            'population mean',
            'sample mean',
            'hypothesis test',
          ],
          seedPhraseInContext:
            'In 2026, France experienced one of its hottest summers on record. To help their parishioners on an especially hot day recently, one Parisian church paired communion wafers not with traditional wine, but with ice-cold Aperol spritz.',
          avoidPhrases: [''],
          contextDetails: [
            'Each observation is one parishioner’s experience with church hospitality.',
            'The population standard deviation of daytime temperatures is known from historical weather data.',
            'The goal is to test a claim about the true mean daytime temperature during heat waves.',
          ],
        },
      },
      parameterDescription:
        'the true mean daytime temperature during heat waves in Paris',
      nullClaimValue: 30,
      knownPopulationStandardDeviation: 5,
      defaultSampleSize: 36,
      defaultSampleMean: 32,
      suggestedSignificanceLevels: {
        leftTailed: 0.05,
        rightTailed: 0.05,
        twoTailed: 0.05,
      },
    },

    {
      id: 'gruens-effect',
      context: {
        setting: 'shopping centre design study',
        individualDescription: 'one shopper’s experience in a shopping centre',
        variableDescription: 'amount of time spent in the shopping centre',
        unit: 'minutes',
        tone: 'neutral applied context',
        variationProfile: {
          openingStyle: 'shopping centre design scenario',
          toneGuidance:
            'Use funny and light-hearted language. Avoid making the context overly technical.',
          vocabularySuggestions: [
            'Gruen effect',
            'shopping centre design',
            'shopper experience',
            'population mean',
            'sample mean',
            'hypothesis test',
          ],
          seedPhraseInContext:
            'Shopping centres are often designed so that shoppers lose their spatial and or temporal orientation and end up spending more. This is known as the Gruen effect.',
          avoidPhrases: [''],
          contextDetails: [
            'Each observation is one shopper’s experience in a shopping centre.',
            'The population standard deviation of time spent in shopping centres is known from previous studies.',
            'The goal is to test a claim about the true mean amount of time shoppers spend in shopping centres.',
          ],
        },
      },
      parameterDescription:
        'the true mean amount of time shoppers spend in shopping centres',
      nullClaimValue: 60,
      knownPopulationStandardDeviation: 15,
      defaultSampleSize: 36,
      defaultSampleMean: 65,
      suggestedSignificanceLevels: {
        leftTailed: 0.01,
        rightTailed: 0.01,
        twoTailed: 0.01,
      },
    },

    {
      id: 'ant-seed-dispersal',
      context: {
        setting: 'ecology study on ant seed dispersal',
        individualDescription: 'one ant’s seed dispersal activity',
        variableDescription: 'number of seeds dispersed by the ant',
        unit: 'seeds',
        tone: 'neutral applied context',
        variationProfile: {
          openingStyle: 'ecology research scenario',
          toneGuidance:
            'Use clear and neutral scientific language. Avoid making the context overly technical.',
          vocabularySuggestions: [
            'ant seed dispersal',
            'ecology study',
            'ant activity',
            'population mean',
            'sample mean',
            'hypothesis test',
          ],
          seedPhraseInContext:
            'Some ant species are important for seed dispersal. However, in a recent study, they became distracted by Oreos and crisps and couldn’t properly complete the task.',
          avoidPhrases: [''],
          contextDetails: [
            'Each observation is one ant’s seed dispersal activity.',
            'The population standard deviation of seeds dispersed is known from previous studies.',
            'The goal is to test a claim about the true mean number of seeds dispersed by ants.',
          ],
        },
      },
      parameterDescription:
        'the true mean number of seeds dispersed by ants in the study area',
      nullClaimValue: 50,
      knownPopulationStandardDeviation: 10,
      defaultSampleSize: 30,
      defaultSampleMean: 55,
      suggestedSignificanceLevels: {
        leftTailed: 0.02,
        rightTailed: 0.02,
        twoTailed: 0.02,
      },
    },

    {
      id: 'pistols-pilates',
      context: {
        setting: 'fitness class study',
        individualDescription:
          'one participant’s heart rate in a fitness class',
        variableDescription: 'heart rate of the participant',
        unit: 'beats per minute',
        tone: 'neutral applied context',
        variationProfile: {
          openingStyle: 'fitness class scenario',
          toneGuidance:
            'Use clear and neutral scientific language. Avoid making the context overly technical.',
          vocabularySuggestions: [
            'Pistols and Pilates',
            'fitness class',
            'participant heart rate',
            'population mean',
            'sample mean',
            'hypothesis test',
          ],
          seedPhraseInContext:
            'A gym in Chicago is offering ‘Pistols and Pilates’ classes to women. First they do some pilates and then get lessons in how to shoot a pistol.',
          avoidPhrases: [''],
          contextDetails: [
            'Each observation is one participant’s heart rate in the fitness class.',
            'The population standard deviation of heart rates is known from previous studies.',
            'The goal is to test a claim about the true mean heart rate of participants in the class.',
          ],
        },
      },
      parameterDescription:
        'the true mean heart rate of participants in the fitness class',
      nullClaimValue: 120,
      knownPopulationStandardDeviation: 15,
      defaultSampleSize: 25,
      defaultSampleMean: 125,
      suggestedSignificanceLevels: {
        leftTailed: 0.1,
        rightTailed: 0.1,
        twoTailed: 0.1,
      },
    },

    {
      id: 'rice-growth',
      context: {
        setting: 'agricultural growth study',
        individualDescription: 'one rice plant in the study area',
        variableDescription: 'height of the rice plant',
        unit: 'centimeters',
        tone: 'neutral applied context',
        variationProfile: {
          openingStyle: 'agricultural research scenario',
          toneGuidance:
            'Use clear and neutral scientific language. Avoid making the context overly technical.',
          vocabularySuggestions: [
            'rice growth',
            'agricultural study',
            'plant height',
            'population mean',
            'sample mean',
            'hypothesis test',
          ],
          seedPhraseInContext:
            'Rice seeds can ‘hear’ rain. When played recordings of rain, they germinate quicker.',
          avoidPhrases: [''],
          contextDetails: [
            'Each observation is one rice plant in the study area.',
            'The population standard deviation of plant heights is known from previous studies.',
            'The goal is to test a claim about the true mean height of rice plants in the study area.',
          ],
        },
      },
      parameterDescription:
        'the true mean height of rice plants in the study area',
      nullClaimValue: 50,
      knownPopulationStandardDeviation: 5,
      defaultSampleSize: 30,
      defaultSampleMean: 52,
      suggestedSignificanceLevels: {
        leftTailed: 0.05,
        rightTailed: 0.05,
        twoTailed: 0.05,
      },
    },

    {
      id: 'secret-keeping',
      context: {
        setting: 'psychology study on secret-keeping',
        individualDescription: 'one participant in the study',
        variableDescription: 'length of time the participant can keep a secret',
        unit: 'hours',
        tone: 'neutral applied context',
        variationProfile: {
          openingStyle: 'psychology experiment scenario',
          toneGuidance:
            'Use funny and light hearted language. Avoid making the context overly technical.',
          vocabularySuggestions: [
            'secret-keeping',
            'psychology study',
            'participant behavior',
            'population mean',
          ],
          seedPhraseInContext:
            'A 2009 study found that the average length of time a woman can keep a secret is 47 hours and 15 minutes.',
          avoidPhrases: [''],
          contextDetails: [
            'Each observation is one participant in the study.',
            'The population standard deviation of secret-keeping times is known from previous studies.',
            'The goal is to test a claim about the true mean length of time participants can keep a secret.',
          ],
        },
      },
      parameterDescription:
        'the true mean length of time participants can keep a secret',
      nullClaimValue: 47.25,
      knownPopulationStandardDeviation: 5,
      defaultSampleSize: 30,
      defaultSampleMean: 50,
      suggestedSignificanceLevels: {
        leftTailed: 0.01,
        rightTailed: 0.01,
        twoTailed: 0.01,
      },
    },

    {
      id: 'expensive-christmas-tree',
      context: {
        setting: 'record-breaking Christmas tree exhibition',
        individualDescription: 'one Christmas tree in a US household',
        variableDescription: 'value of the Christmas tree',
        unit: 'dollars',
        tone: 'neutral applied context',
        variationProfile: {
          openingStyle: 'record-breaking Christmas tree exhibition',
          toneGuidance:
            'Use neutral and descriptive language. Avoid making the context overly technical.',
          vocabularySuggestions: [
            'expensive Christmas tree',
            'record-breaking exhibition',
            'tree value',
          ],
          seedPhraseInContext:
            'The most expensively decorated Christmas tree ever was erected in Abu Dhabi in 2010, was decorated with 181 pieces of jewellery and valued at $8,175,510 (USD).',
          avoidPhrases: [''],
          contextDetails: [
            'Each observation is one Christmas tree in a US household.',
            'The population standard deviation of Christmas tree values is known from previous exhibitions.',
            'The goal is to test a claim about the true mean value of Christmas trees in US households.',
          ],
        },
      },
      parameterDescription:
        'the true mean value of Christmas trees in US households',
      nullClaimValue: 250,
      knownPopulationStandardDeviation: 50,
      defaultSampleSize: 30,
      defaultSampleMean: 260,
      suggestedSignificanceLevels: {
        leftTailed: 0.02,
        rightTailed: 0.02,
        twoTailed: 0.02,
      },
    },

    {
      id: 'coffee-hand-wash',
      context: {
        setting: 'coffee consumption study',
        individualDescription:
          'average amount spent on daily coffee consumption of one person',
        variableDescription: 'average amount spent on daily coffee consumption',
        unit: 'dollars',
        tone: 'neutral applied context',
        variationProfile: {
          openingStyle: 'coffee consumption study scenario',
          toneGuidance:
            'Humorously highlight the surprising uses of coffee, while keeping the context clear and neutral.',
          vocabularySuggestions: [
            'coffee consumption',
            'daily spending',
            'population mean',
            'sample mean',
            'hypothesis test',
          ],
          seedPhraseInContext:
            'Before coffee was a drink, it was a hand wash and deodorant.',
          avoidPhrases: [''],
          contextDetails: [
            'Each observation is the average amount spent on daily coffee consumption of one person.',
            'The population standard deviation of daily coffee spending is known from previous studies.',
            'The goal is to test a claim about the true mean daily coffee spending.',
          ],
        },
      },
      parameterDescription:
        'the true mean daily coffee spending of individuals in the population',
      nullClaimValue: 9.8,
      knownPopulationStandardDeviation: 2.5,
      defaultSampleSize: 30,
      defaultSampleMean: 10.5,
      suggestedSignificanceLevels: {
        leftTailed: 0.05,
        rightTailed: 0.05,
        twoTailed: 0.05,
      },
    },

    {
      id: 'cheese-holes',
      context: {
        setting: 'cheese production study',
        individualDescription:
          'one piece of Swiss cheese from a production batch',
        variableDescription: 'diameter of holes in a piece of Swiss cheese',
        unit: 'millimeters',
        tone: 'neutral applied context',
        variationProfile: {
          openingStyle: 'cheese production study scenario',
          toneGuidance:
            'Humorously and light language, while keeping the context clear and neutral.',
          vocabularySuggestions: [
            'Swiss cheese',
            'cheese production',
            'population mean',
            'sample mean',
            'hypothesis test',
          ],
          seedPhraseInContext:
            'As food hygiene standards have improved, fewer holes are appearing naturally in Swiss cheeses. Dairies now have to artificially create them.',
          avoidPhrases: ['hole count'],
          contextDetails: [
            'Each observation is the diameter of holes in one piece of Swiss cheese from a production batch.',
            'The population standard deviation of hole diameters is known from previous production batches.',
            'The goal is to test a claim about the true mean diameter of holes in Swiss cheese.',
          ],
        },
      },
      parameterDescription:
        'the true mean diameter of holes in Swiss cheese from the production batch',
      nullClaimValue: 7.0,
      knownPopulationStandardDeviation: 1.5,
      defaultSampleSize: 25,
      defaultSampleMean: 6.5,
      suggestedSignificanceLevels: {
        leftTailed: 0.01,
        rightTailed: 0.01,
        twoTailed: 0.01,
      },
    },

    {
      id: 'teabag-insect-dna',
      context: {
        setting: 'teabag study',
        individualDescription: 'one teabag from a batch',
        variableDescription:
          'number of different kinds of insect DNA in a teabag',
        unit: 'kinds',
        tone: 'neutral applied context',
        variationProfile: {
          openingStyle: '',
          toneGuidance:
            'Funny and light-hearted language, while keeping the context clear and neutral.',
          vocabularySuggestions: [
            'teabag',
            'insect DNA',
            'population mean',
            'sample mean',
            'hypothesis test',
          ],
          seedPhraseInContext:
            'A teabag can contain up to 400 different kinds of insect DNA.',
          avoidPhrases: [''],
          contextDetails: [
            'Each observation is the number of different kinds of insect DNA in one teabag from a batch.',
            'The population standard deviation of insect DNA counts is known from previous batches.',
            'The goal is to test a claim about the true mean number of different kinds of insect DNA in teabags.',
          ],
        },
      },
      parameterDescription:
        'the true mean number of different kinds of insect DNA in teabags from the batch',
      nullClaimValue: 50,
      knownPopulationStandardDeviation: 10,
      defaultSampleSize: 30,
      defaultSampleMean: 55,
      suggestedSignificanceLevels: {
        leftTailed: 0.02,
        rightTailed: 0.02,
        twoTailed: 0.02,
      },
    },
  ];
