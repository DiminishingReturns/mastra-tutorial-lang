import type { ConfidenceIntervalMeanUnknownVarianceProblem } from '../schemas/confidenceIntervalMeanUnknownVariance.schema';

type ConfidenceIntervalMeanUnknownVarianceContextSeed = {
  id: string;

  context: ConfidenceIntervalMeanUnknownVarianceProblem['context'];

  parameterDescription: string;

  defaultSampleSize: number;
  defaultSampleMean: number;
  defaultSampleStandardDeviation: number;

  suggestedConfidenceLevels: {
    twoSided: number;
    lowerBound: number;
    upperBound: number;
  };
};

export const confidenceIntervalMeanUnknownVarianceContexts: ConfidenceIntervalMeanUnknownVarianceContextSeed[] =
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
            'sample mean',
            'sample standard deviation',
            'confidence interval',
            't method',
          ],
          seedPhraseInContext:
            'A testing lab studies the battery life of a particular battery model.',
          avoidPhrases: ['battery disaster', 'power drama'],
          contextDetails: [
            'Each observation is the battery life of one fully charged battery.',
            'The population standard deviation is not known.',
            'The sample standard deviation is calculated from the sample.',
            'The goal is to estimate the true mean battery life for this model.',
          ],
        },
      },
      parameterDescription: 'the true mean battery life for this battery model',
      defaultSampleSize: 24,
      defaultSampleMean: 9.4,
      defaultSampleStandardDeviation: 1.35,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 95,
        upperBound: 95,
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
            'Use workplace quality-control language while keeping the inference task clear.',
          vocabularySuggestions: [
            'loaf mass',
            'production line',
            'sample standard deviation',
            'confidence bound',
            'quality control',
          ],
          seedPhraseInContext:
            'A bakery monitors the mass of loaves produced on one production line.',
          avoidPhrases: ['bread crisis', 'bakery chaos'],
          contextDetails: [
            'Each observation is the mass of one loaf.',
            'The population standard deviation is not known.',
            'The sample standard deviation is used to estimate variability.',
            'The goal is to estimate the true mean loaf mass for the production line.',
          ],
        },
      },
      parameterDescription:
        'the true mean loaf mass for loaves from this production line',
      defaultSampleSize: 28,
      defaultSampleMean: 502,
      defaultSampleStandardDeviation: 21,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 95,
        upperBound: 95,
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
            'Use realistic student-life language while keeping the confidence interval task clear.',
          vocabularySuggestions: [
            'commute time',
            'sample mean',
            'sample standard deviation',
            'confidence interval',
            'students',
          ],
          seedPhraseInContext:
            'A college studies how long students take to commute to campus.',
          avoidPhrases: ['traffic nightmare', 'commuting chaos'],
          contextDetails: [
            'Each observation is one student commute time.',
            'The population standard deviation is not known.',
            'The sample standard deviation is calculated from the commute-time sample.',
            'The goal is to estimate the true mean commute time for students at the college.',
          ],
        },
      },
      parameterDescription:
        'the true mean commute time for students at the college',
      defaultSampleSize: 32,
      defaultSampleMean: 41.5,
      defaultSampleStandardDeviation: 13.2,
      suggestedConfidenceLevels: {
        twoSided: 90,
        lowerBound: 95,
        upperBound: 95,
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
            'sample mean',
            'sample standard deviation',
            't interval',
          ],
          seedPhraseInContext:
            'In a plant growth experiment, researchers measure height increase over four weeks.',
          avoidPhrases: ['plant miracle', 'growth explosion'],
          contextDetails: [
            'Each observation is the height increase for one plant.',
            'The population standard deviation is not known.',
            'The sample standard deviation is calculated from the plants in the sample.',
            'The goal is to estimate the true mean height increase under the standard condition.',
          ],
        },
      },
      parameterDescription:
        'the true mean height increase for plants grown under this standard condition',
      defaultSampleSize: 18,
      defaultSampleMean: 17.6,
      defaultSampleStandardDeviation: 5.4,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 90,
        upperBound: 90,
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
            'sample standard deviation',
            'confidence bound',
          ],
          seedPhraseInContext:
            'A marine biology team measures jellyfish bell diameters during a coastal survey.',
          avoidPhrases: ['jellyfish invasion', 'ocean mystery'],
          contextDetails: [
            'Each observation is the bell diameter of one jellyfish.',
            'The population standard deviation is not known.',
            'The sample standard deviation is calculated from the measured jellyfish.',
            'The goal is to estimate the true mean bell diameter in the surveyed population.',
          ],
        },
      },
      parameterDescription:
        'the true mean bell diameter for jellyfish in the surveyed population',
      defaultSampleSize: 22,
      defaultSampleMean: 23.4,
      defaultSampleStandardDeviation: 6.8,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 95,
        upperBound: 95,
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
            'sample mean',
            'sample standard deviation',
            'confidence interval',
          ],
          seedPhraseInContext:
            'In a conservation monitoring project, researchers measure the mass of sea turtle hatchlings.',
          avoidPhrases: ['hero turtles', 'survival race'],
          contextDetails: [
            'Each observation is the mass of one hatchling.',
            'The population standard deviation is not known.',
            'The sample standard deviation is calculated from the hatchling sample.',
            'The goal is to estimate the true mean hatchling mass for the nesting site.',
          ],
        },
      },
      parameterDescription:
        'the true mean mass of sea turtle hatchlings at this nesting site',
      defaultSampleSize: 26,
      defaultSampleMean: 21.8,
      defaultSampleStandardDeviation: 3.9,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 90,
        upperBound: 90,
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
            'sample standard deviation',
            'confidence interval',
          ],
          seedPhraseInContext:
            'In a reaction-time study, participants complete the same task under standard conditions.',
          avoidPhrases: ['lightning reflexes', 'brain speed contest'],
          contextDetails: [
            'Each observation is one participant’s reaction time.',
            'The population standard deviation is not known.',
            'The sample standard deviation is calculated from the participants in the study.',
            'The goal is to estimate the true mean reaction time under these conditions.',
          ],
        },
      },
      parameterDescription:
        'the true mean reaction time for participants completing this task',
      defaultSampleSize: 30,
      defaultSampleMean: 306,
      defaultSampleStandardDeviation: 48,
      suggestedConfidenceLevels: {
        twoSided: 99,
        lowerBound: 95,
        upperBound: 95,
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
            'sample mean',
            'sample standard deviation',
            'confidence bound',
          ],
          seedPhraseInContext:
            'A student-life survey records daily phone screen time for students.',
          avoidPhrases: ['phone addiction', 'doomscrolling'],
          contextDetails: [
            'Each observation is one student’s daily screen time.',
            'The population standard deviation is not known.',
            'The sample standard deviation is calculated from the screen-time sample.',
            'The goal is to estimate the true mean daily screen time for students.',
          ],
        },
      },
      parameterDescription:
        'the true mean daily phone screen time for students',
      defaultSampleSize: 35,
      defaultSampleMean: 5.4,
      defaultSampleStandardDeviation: 2.1,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 95,
        upperBound: 95,
      },
    },

    // End of calibration context seeds
    // Start of in class context seeds

    {
      id: 'dog-snack-theory',
      context: {
        setting: 'dog behavior study',
        individualDescription:
          'average weight of snacks consumed by one dog in a day',
        variableDescription: 'snack consumption',
        unit: 'grams',
        tone: 'playful',
        variationProfile: {
          openingStyle: 'anecdotal study scenario',
          toneGuidance: 'Use light-hearted and engaging language.',
          vocabularySuggestions: [
            'snack consumption',
            'sample mean',
            'sample standard deviation',
          ],
          seedPhraseInContext:
            'There’s a theory that dogs domesticated themselves because they really liked snacks.',
          avoidPhrases: [''],
          contextDetails: [
            ' Each observation is the average weight of snacks consumed by one dog in a day.',
            ' The population standard deviation is not known.',
            ' The sample standard deviation is calculated from the snack consumption sample.',
            ' The goal is to estimate the true mean daily snack consumption for dogs.',
          ],
        },
      },
      parameterDescription: 'the true mean daily snack consumption for dogs',
      defaultSampleSize: 24,
      defaultSampleMean: 50,
      defaultSampleStandardDeviation: 10,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 95,
        upperBound: 95,
      },
    },

    {
      id: 'lawyer-case-citations',
      context: {
        setting: 'legal research on AI-generated case law',
        individualDescription:
          'average number of AI-generated case citations per lawyer',
        variableDescription: 'AI-generated case citations',
        unit: 'citations',
        tone: 'serious',
        variationProfile: {
          openingStyle: 'analytical study scenario',
          toneGuidance: 'Use formal and precise language.',
          vocabularySuggestions: [
            'AI-generated case citations',
            'sample mean',
            'sample standard deviation',
            'confidence interval',
          ],
          seedPhraseInContext:
            'Lawyers are increasingly citing AI-hallucinated case law in courts. ',
          avoidPhrases: [''],
          contextDetails: [
            ' Each observation is the average number of AI-generated case citations per lawyer.',
            ' The population standard deviation is not known.',
            ' The sample standard deviation is calculated from the AI-generated case citations sample.',
            ' The goal is to estimate the true mean number of AI-generated case citations per lawyer.',
          ],
        },
      },
      parameterDescription:
        'the true mean number of AI-generated case citations per lawyer',
      defaultSampleSize: 12,
      defaultSampleMean: 45,
      defaultSampleStandardDeviation: 3,
      suggestedConfidenceLevels: {
        twoSided: 99,
        lowerBound: 99,
        upperBound: 99,
      },
    },

    {
      id: 'bumblebee-hive-temperature',
      context: {
        setting: 'bumblebee hive environment',
        individualDescription:
          'average temperature maintained by a bumblebee hive',
        variableDescription: 'hive temperature',
        unit: 'degrees Celsius',
        tone: 'informative',
        variationProfile: {
          openingStyle: 'descriptive study scenario',
          toneGuidance: 'Use clear and precise language.',
          vocabularySuggestions: [
            'hive temperature',
            'sample mean',
            'sample standard deviation',
            'confidence interval',
          ],
          seedPhraseInContext:
            'Bumblebees air condition their hives by bringing in water droplets and fanning cool air with their wings.',
          avoidPhrases: [''],
          contextDetails: [
            ' Each observation is the average temperature maintained by a bumblebee hive.',
            ' The population standard deviation is not known.',
            ' The sample standard deviation is calculated from the hive temperature sample.',
            ' The goal is to estimate the true mean temperature maintained by a bumblebee hive.',
          ],
        },
      },
      parameterDescription:
        'the true mean temperature maintained by a bumblebee hive',
      defaultSampleSize: 70,
      defaultSampleMean: 21.2,
      defaultSampleStandardDeviation: 1.5,
      suggestedConfidenceLevels: {
        twoSided: 98,
        lowerBound: 98,
        upperBound: 98,
      },
    },

    {
      id: 'tetris-boss-button',
      context: {
        setting: 'office environment',
        individualDescription:
          'average number of times the boss button is pressed',
        variableDescription: 'boss button presses',
        unit: 'times',
        tone: 'humorous office context',
        variationProfile: {
          openingStyle: 'descriptive study scenario',
          toneGuidance: 'Use clear and precise language.',
          vocabularySuggestions: [
            'boss button',
            'sample mean',
            'sample standard deviation',
            'confidence interval',
          ],
          seedPhraseInContext:
            'Early versions of Tetris included a ‘boss button’ which when pressed would replace the game with a fake spreadsheet if your boss walked by.',
          avoidPhrases: [''],
          contextDetails: [
            ' Each observation is the average number of times the boss button is pressed by an office worker in a day.',
            ' The population standard deviation is not known.',
            ' The sample standard deviation is calculated from the boss button presses sample.',
            ' The goal is to estimate the true mean number of boss button presses per office worker in a day.',
          ],
        },
      },
      parameterDescription:
        'the true mean number of boss button presses per office worker in a day',
      defaultSampleSize: 40,
      defaultSampleMean: 9,
      defaultSampleStandardDeviation: 2,
      suggestedConfidenceLevels: {
        twoSided: 90,
        lowerBound: 90,
        upperBound: 90,
      },
    },

    {
      id: 'fungi-rainfall',
      context: {
        setting: 'forest environment',
        individualDescription:
          'average number of ice crystals released by fungi',
        variableDescription: 'ice crystals released',
        unit: 'crystals',
        tone: 'scientific and intriguing',
        variationProfile: {
          openingStyle: 'descriptive study scenario',
          toneGuidance: 'Use clear and precise language.',
          vocabularySuggestions: [
            'ice crystals',
            'sample mean',
            'sample standard deviation',
            'confidence interval',
          ],
          seedPhraseInContext:
            'Some fungi release ice crystals into the air which can trigger rainfall.',
          avoidPhrases: [''],
          contextDetails: [
            ' Each observation is the average number of ice crystals released by fungi in a given area over a day.',
            ' The population standard deviation is not known.',
            ' The sample standard deviation is calculated from the ice crystals sample.',
            ' The goal is to estimate the true mean number of ice crystals released by fungi in a given area over a day.',
          ],
        },
      },
      parameterDescription:
        'the true mean number of ice crystals released by fungi in a given area over a day',
      defaultSampleSize: 44,
      defaultSampleMean: 150,
      defaultSampleStandardDeviation: 13,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 95,
        upperBound: 95,
      },
    },

    {
      id: 'vampire-hop-distance',
      context: {
        setting: 'ancient China',
        individualDescription: 'vampire',
        variableDescription: 'hop distance',
        unit: 'centimeters',
        tone: 'mysterious and folkloric',
        variationProfile: {
          openingStyle: 'folklore scenario',
          toneGuidance: 'Use a mysterious and folkloric tone.',
          vocabularySuggestions: [
            'hop distance',
            'sample mean',
            'sample standard deviation',
          ],
          seedPhraseInContext:
            'In Chinese folklore, vampires don’t walk, they hop.',
          avoidPhrases: [''],
          contextDetails: [
            ' Each observation is the hop distance of a vampire in a given area over a day.',
            ' The population standard deviation is not known.',
            ' The sample standard deviation is calculated from the hop distance sample.',
            ' The goal is to estimate the true mean hop distance of vampires in a given area over a day.',
          ],
        },
      },
      parameterDescription:
        'the true mean hop distance of vampires in a given area over a day',
      defaultSampleSize: 33,
      defaultSampleMean: 37,
      defaultSampleStandardDeviation: 7,
      suggestedConfidenceLevels: {
        twoSided: 80,
        lowerBound: 80,
        upperBound: 80,
      },
    },

    {
      id: 'cia-board-games',
      context: {
        setting: 'CIA training facility',
        individualDescription: 'CIA staff',
        variableDescription: 'intelligence gathering skills',
        unit: 'minutes spent playing board games',
        tone: 'funny and informative',
        variationProfile: {
          openingStyle: 'training scenario',
          toneGuidance: 'Use a funny and informative tone.',
          vocabularySuggestions: [
            'intelligence gathering',
            'board games',
            'training scenario',
          ],
          seedPhraseInContext:
            'The CIA trains its staff to gather intelligence using specially commissioned board games, such as Kingpin: The Hunt for El Chapo, in which two teams compete as law enforcement and drug dealers.',
          avoidPhrases: [''],
          contextDetails: [
            ' Each observation is the amount of time CIA staff spend playing intelligence-gathering board games in a week.',
            ' The population standard deviation is not known.',
            ' The sample standard deviation is calculated from the time spent playing board games.',
            ' The goal is to estimate the true mean time CIA staff spend playing intelligence-gathering board games in a week.',
          ],
        },
      },
      parameterDescription:
        'the true mean time CIA staff spend playing intelligence-gathering board games in a week',
      defaultSampleSize: 25,
      defaultSampleMean: 86,
      defaultSampleStandardDeviation: 12,
      suggestedConfidenceLevels: {
        twoSided: 99.5,
        lowerBound: 99.5,
        upperBound: 99.5,
      },
    },

    {
      id: 'paracetamol-pain-relief',
      context: {
        setting: 'medical treatment study',
        individualDescription: 'patients',
        variableDescription: 'pain relief',
        unit: 'minutes',
        tone: 'informative and accessible',
        variationProfile: {
          openingStyle: '',
          toneGuidance: '',
          vocabularySuggestions: [
            'pain relief',
            'paracetamol',
            'medical treatment',
          ],
          seedPhraseInContext:
            'Paracetamol not only reduces physical pain, it also significantly reduces hurt feelings.',
          avoidPhrases: [''],
          contextDetails: [
            ' Each observation is the amount of pain relief (in minutes) experienced by one patient after taking paracetamol.',
            ' The population standard deviation is not known.',
            ' The sample standard deviation is calculated from the amount of pain relief experienced by the patients.',
            ' The goal is to estimate the true mean amount of pain relief provided by paracetamol.',
          ],
        },
      },
      parameterDescription:
        'the true mean amount of pain relief provided by paracetamol',
      defaultSampleSize: 30,
      defaultSampleMean: 18,
      defaultSampleStandardDeviation: 5,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 95,
        upperBound: 95,
      },
    },

    {
      id: 'long-distance-chess',
      context: {
        setting: 'historical event',
        individualDescription: 'players in a long-distance chess match',
        variableDescription: 'chess moves',
        unit: 'minutes taken to make a move',

        tone: 'funny and historical',
        variationProfile: {
          openingStyle: 'historical anecdote',
          toneGuidance:
            'Use a funny and historical tone. Highlight the novelty of the long-distance chess match.',
          vocabularySuggestions: ['chess', 'telegraph', 'historical event'],
          seedPhraseInContext:
            'In 1897, the US Congress played the Houses of Parliament at long-distance chess, sending moves by telegraph. The match lasted two days and ended in a draw.',
          avoidPhrases: [''],
          contextDetails: [
            ' Each observation is the amount of time (in minutes) taken by a player to make a chess move in a modern game of long-distance chess.',
            ' The population standard deviation is not known.',
            ' The sample standard deviation is calculated from the time taken by the players to make their moves.',
            ' The goal is to estimate the true mean time taken by players to make a chess move in a modern game of long-distance chess.',
          ],
        },
      },
      parameterDescription:
        'the true mean time taken by players to make a chess move in a modern game of long-distance chess.',
      defaultSampleSize: 21,
      defaultSampleMean: 14.75,
      defaultSampleStandardDeviation: 3,
      suggestedConfidenceLevels: {
        twoSided: 98,
        lowerBound: 98,
        upperBound: 98,
      },
    },

    {
      id: 'handel-fireworks',
      context: {
        setting: 'historical event',
        individualDescription: 'time spent practicing Handel`s Messiah',
        variableDescription: 'practice time',
        unit: 'minutes',

        tone: 'historical and dramatic',
        variationProfile: {
          openingStyle: '',
          toneGuidance: '',
          vocabularySuggestions: [
            'Handel',
            'Messiah',
            'Royal Fireworks',
            'historical event',
          ],

          seedPhraseInContext:
            'When Handel’s Music for the Royal Fireworks was first performed in 1749, the fireworks burned down a pavilion, set fire to a woman’s clothes, and seriously injured three soldiers. The orchestra played on through the chaos.',
          avoidPhrases: [''],
          contextDetails: [
            ' Each observation is the amount of time (in minutes) spent practicing Handel’s Messiah by a musician preparing for a performance.',
            ' The population standard deviation is not known.',
            ' The sample standard deviation is calculated from the practice times of the musicians.',
            ' The goal is to estimate the true mean practice time for musicians preparing to perform Handel’s Messiah.',
          ],
        },
      },
      parameterDescription:
        'the true mean practice time for musicians preparing to perform Handel’s Messiah.',
      defaultSampleSize: 44,
      defaultSampleMean: 189,
      defaultSampleStandardDeviation: 30,
      suggestedConfidenceLevels: {
        twoSided: 90,
        lowerBound: 90,
        upperBound: 90,
      },
    },
  ];
