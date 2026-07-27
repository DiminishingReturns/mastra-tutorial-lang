import type { HypothesisTestMeanUnknownVarianceProblem } from '../schemas/hypothesisTestMeanUnknownVariance.schema';

type HypothesisTestMeanUnknownVarianceContextSeed = {
  id: string;

  context: HypothesisTestMeanUnknownVarianceProblem['context'];

  parameterDescription: string;

  nullClaimValue: number;

  defaultSampleSize: number;
  defaultSampleMean: number;
  defaultSampleStandardDeviation: number;

  suggestedSignificanceLevels: {
    leftTailed: number;
    rightTailed: number;
    twoTailed: number;
  };
};

export const hypothesisTestMeanUnknownVarianceContexts: HypothesisTestMeanUnknownVarianceContextSeed[] =
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
            'sample standard deviation',
            'hypothesis test',
          ],
          seedPhraseInContext:
            'A testing lab studies the battery life of a particular battery model.',
          avoidPhrases: ['battery disaster', 'power drama'],
          contextDetails: [
            'Each observation is the battery life of one fully charged battery.',
            'The population standard deviation is not known.',
            'The sample standard deviation is calculated from the sample.',
            'The goal is to test a claim about the true mean battery life.',
          ],
        },
      },
      parameterDescription: 'the true mean battery life for this battery model',
      nullClaimValue: 10,
      defaultSampleSize: 24,
      defaultSampleMean: 9.4,
      defaultSampleStandardDeviation: 1.35,
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
            'sample standard deviation',
            't test',
          ],
          seedPhraseInContext:
            'A bakery monitors the mass of loaves produced on one production line.',
          avoidPhrases: ['bread crisis', 'bakery chaos'],
          contextDetails: [
            'Each observation is the mass of one loaf.',
            'The population standard deviation is not known.',
            'The sample standard deviation is calculated from the loaf sample.',
            'The goal is to test whether the true mean loaf mass differs from a target value.',
          ],
        },
      },
      parameterDescription:
        'the true mean loaf mass for loaves from this production line',
      nullClaimValue: 500,
      defaultSampleSize: 28,
      defaultSampleMean: 502,
      defaultSampleStandardDeviation: 21,
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
            'sample standard deviation',
            'significance level',
          ],
          seedPhraseInContext:
            'A college studies how long students take to commute to campus.',
          avoidPhrases: ['traffic nightmare', 'commuting chaos'],
          contextDetails: [
            'Each observation is one student commute time.',
            'The population standard deviation is not known.',
            'The sample standard deviation is calculated from the commute-time sample.',
            'The goal is to test a claim about the true mean commute time.',
          ],
        },
      },
      parameterDescription:
        'the true mean commute time for students at the college',
      nullClaimValue: 45,
      defaultSampleSize: 32,
      defaultSampleMean: 41.5,
      defaultSampleStandardDeviation: 13.2,
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
            'sample standard deviation',
            't test',
          ],
          seedPhraseInContext:
            'In a plant growth experiment, researchers measure height increase over four weeks.',
          avoidPhrases: ['plant miracle', 'growth explosion'],
          contextDetails: [
            'Each observation is the height increase for one plant.',
            'The population standard deviation is not known.',
            'The sample standard deviation is calculated from the plants in the sample.',
            'The goal is to test a claim about the true mean height increase.',
          ],
        },
      },
      parameterDescription:
        'the true mean height increase for plants grown under this standard condition',
      nullClaimValue: 16,
      defaultSampleSize: 18,
      defaultSampleMean: 17.6,
      defaultSampleStandardDeviation: 5.4,
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
            'sample standard deviation',
          ],
          seedPhraseInContext:
            'A marine biology team measures jellyfish bell diameters during a coastal survey.',
          avoidPhrases: ['jellyfish invasion', 'ocean mystery'],
          contextDetails: [
            'Each observation is the bell diameter of one jellyfish.',
            'The population standard deviation is not known.',
            'The sample standard deviation is calculated from the measured jellyfish.',
            'The goal is to test a claim about the true mean bell diameter.',
          ],
        },
      },
      parameterDescription:
        'the true mean bell diameter for jellyfish in the surveyed population',
      nullClaimValue: 25,
      defaultSampleSize: 22,
      defaultSampleMean: 23.4,
      defaultSampleStandardDeviation: 6.8,
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
            'sample standard deviation',
            'hypothesis test',
          ],
          seedPhraseInContext:
            'In a conservation monitoring project, researchers measure the mass of sea turtle hatchlings.',
          avoidPhrases: ['hero turtles', 'survival race'],
          contextDetails: [
            'Each observation is the mass of one hatchling.',
            'The population standard deviation is not known.',
            'The sample standard deviation is calculated from the hatchling sample.',
            'The goal is to test a claim about the true mean hatchling mass.',
          ],
        },
      },
      parameterDescription:
        'the true mean mass of sea turtle hatchlings at this nesting site',
      nullClaimValue: 22,
      defaultSampleSize: 26,
      defaultSampleMean: 21.8,
      defaultSampleStandardDeviation: 3.9,
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
            'sample standard deviation',
            'significance level',
          ],
          seedPhraseInContext:
            'In a reaction-time study, participants complete the same task under standard conditions.',
          avoidPhrases: ['lightning reflexes', 'brain speed contest'],
          contextDetails: [
            'Each observation is one participant’s reaction time.',
            'The population standard deviation is not known.',
            'The sample standard deviation is calculated from the participants in the study.',
            'The goal is to test a claim about the true mean reaction time.',
          ],
        },
      },
      parameterDescription:
        'the true mean reaction time for participants completing this task',
      nullClaimValue: 300,
      defaultSampleSize: 30,
      defaultSampleMean: 306,
      defaultSampleStandardDeviation: 48,
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
            'sample standard deviation',
            't test',
          ],
          seedPhraseInContext:
            'A student-life survey records daily phone screen time for students.',
          avoidPhrases: ['phone addiction', 'doomscrolling'],
          contextDetails: [
            'Each observation is one student’s daily screen time.',
            'The population standard deviation is not known.',
            'The sample standard deviation is calculated from the screen-time sample.',
            'The goal is to test a claim about the true mean daily screen time.',
          ],
        },
      },
      parameterDescription:
        'the true mean daily phone screen time for students',
      nullClaimValue: 5,
      defaultSampleSize: 35,
      defaultSampleMean: 5.4,
      defaultSampleStandardDeviation: 2.1,
      suggestedSignificanceLevels: {
        leftTailed: 0.05,
        rightTailed: 0.05,
        twoTailed: 0.05,
      },
    },

    // End of calibration contexts set. Start of course contexts.

    {
      id: 'mummy-illiad',
      context: {
        setting: 'archaeological discovery',
        individualDescription: 'one ancient Egyptian mummy',
        variableDescription: 'age of the mummy',
        unit: 'years',
        tone: 'historical applied context',
        variationProfile: {
          openingStyle: 'archaeological discovery scenario',
          toneGuidance:
            'focus on historical and archaeological language, avoiding modern-day references.',
          vocabularySuggestions: [],
          seedPhraseInContext:
            'Recently, archaeologists found a 2000-year-old Egyptian mummy buried with a fragment of ‘The Iliad’.',
          avoidPhrases: [],
          contextDetails: [
            'Each observation is the age of one mummy.',
            'The population standard deviation is not known.',
            'The sample standard deviation is calculated from the mummy sample.',
            'The goal is to test a claim about the true mean age of the mummy.',
          ],
        },
      },
      parameterDescription: 'the true mean age of the mummy',
      nullClaimValue: 2000,
      defaultSampleSize: 31,
      defaultSampleMean: 2005,
      defaultSampleStandardDeviation: 15,
      suggestedSignificanceLevels: {
        leftTailed: 0.05,
        rightTailed: 0.05,
        twoTailed: 0.05,
      },
    },

    {
      id: 'chennai-traffic-lights',
      context: {
        setting: 'urban traffic management',
        individualDescription: 'one red traffic light',
        variableDescription: 'time duration the light stays red',
        unit: 'seconds',
        tone: 'informative',
        variationProfile: {
          openingStyle: 'urban traffic management scenario',
          toneGuidance: 'focus on informative and practical language.',
          vocabularySuggestions: [],
          seedPhraseInContext:
            'In the Indian city of Chennai, many red traffic lights are heart-shaped. The idea is to reduce drivers’ stress and frustration.',
          avoidPhrases: [],
          contextDetails: [
            'Each observation is the time duration one red traffic light stays red.',
            'The population standard deviation is not known.',
            'The sample standard deviation is calculated from the traffic light sample.',
            'The goal is to test a claim about the true mean time duration the light stays red.',
          ],
        },
      },
      parameterDescription: 'the true mean time duration the light stays red',
      nullClaimValue: 60,
      defaultSampleSize: 41,
      defaultSampleMean: 62,
      defaultSampleStandardDeviation: 5,
      suggestedSignificanceLevels: {
        leftTailed: 0.01,
        rightTailed: 0.01,
        twoTailed: 0.01,
      },
    },

    {
      id: 'stress-blood-clotting',
      context: {
        setting: 'health research',
        individualDescription: 'one blood sample from a stressed individual',
        variableDescription: 'clotting time of the blood sample',
        unit: 'minutes',
        tone: 'informative',
        variationProfile: {
          openingStyle: 'health research scenario',
          toneGuidance: 'focus on informative and practical language.',
          vocabularySuggestions: [],
          seedPhraseInContext:
            'Feeling stressed can affect your blood, making it more prone to clotting. A study investigates whether stress increases the mean clotting time of blood samples.',
          avoidPhrases: [],
          contextDetails: [
            'Each observation is the clotting time of one blood sample from a stressed individual.',
            'The population standard deviation is not known.',
            'The sample standard deviation is calculated from the blood sample.',
            'The goal is to test a claim about the true mean clotting time of blood samples.',
          ],
        },
      },
      parameterDescription: 'the true mean clotting time of blood samples',
      nullClaimValue: 5,
      defaultSampleSize: 52,
      defaultSampleMean: 6,
      defaultSampleStandardDeviation: 1,
      suggestedSignificanceLevels: {
        leftTailed: 0.025,
        rightTailed: 0.025,
        twoTailed: 0.025,
      },
    },

    {
      id: 'pine-marten-euro',
      context: {
        setting: 'numismatics research',
        individualDescription: 'one Croatian Euro coin',
        variableDescription: 'weight of the coin',
        unit: 'grams',
        tone: 'informative',
        variationProfile: {
          openingStyle: 'numismatics research scenario',
          toneGuidance: 'focus on informative and practical language.',
          vocabularySuggestions: [],
          seedPhraseInContext:
            'In medieval Croatia, people bartered with pine marten furs. This was so prevalent, they eventually named their currency, the Kuna, after the Croatian word for pine marten. Today, pine martens appear on the Croatian Euro. A study investigates whether the weight of a Croatian Euro has changed over time.',
          avoidPhrases: [],
          contextDetails: [
            'Each observation is the weight of one Croatian Euro.',
            'The population standard deviation is not known.',
            'The sample standard deviation is calculated from the observed data.',
            'The goal is to test a claim about the true mean weight of a Croatian Euro.',
          ],
        },
      },
      parameterDescription: 'the true mean weight of a Croatian Euro',
      nullClaimValue: 7.5,
      defaultSampleSize: 43,
      defaultSampleMean: 7.6,
      defaultSampleStandardDeviation: 0.2,
      suggestedSignificanceLevels: {
        leftTailed: 0.005,
        rightTailed: 0.005,
        twoTailed: 0.005,
      },
    },

    {
      id: 'harry-potter-reading-time',
      context: {
        setting: 'a Catholic school in Tennessee',
        individualDescription:
          'one chapter of Harry Potter and the Sorcerer’s Stone',
        variableDescription:
          'average time spent reading one chapter of Harry Potter and the Sorcerer’s Stone',
        unit: 'minutes',
        tone: 'informative',
        variationProfile: {
          openingStyle: 'reading time study scenario',
          toneGuidance: 'focus on informative and practical language.',
          vocabularySuggestions: [],
          seedPhraseInContext:
            'After consulting an exorcist, a Catholic school in Tennessee has banned Harry Potter books because they contain ‘real’ curses and spells. ',
          avoidPhrases: [],
          contextDetails: [
            'Each observation is the average time spent reading one chapter of Harry Potter and the Sorcerer’s Stone.',
            'The population standard deviation is not known.',
            'The sample standard deviation is calculated from the observed data.',
            'The goal is to test a claim about the true mean reading time for one chapter of Harry Potter and the Sorcerer’s Stone.',
          ],
        },
      },
      parameterDescription:
        'the true mean reading time for one chapter of Harry Potter and the Sorcerer’s Stone',
      nullClaimValue: 45,
      defaultSampleSize: 51,
      defaultSampleMean: 46,
      defaultSampleStandardDeviation: 5,
      suggestedSignificanceLevels: {
        leftTailed: 0.05,
        rightTailed: 0.05,
        twoTailed: 0.05,
      },
    },

    {
      id: 'cockatoo-dancing-time',
      context: {
        setting: 'a tropical rainforest',
        individualDescription: 'one cockatoo',
        variableDescription: 'average time spent dancing',
        unit: 'minutes',
        tone: 'informative',
        variationProfile: {
          openingStyle: 'dancing time study scenario',
          toneGuidance: 'focus on informative and practical language.',
          vocabularySuggestions: [],
          seedPhraseInContext:
            'Cockatoos enjoy dancing. Popular moves include body rolls, the side step and headbanging.',
          avoidPhrases: [],

          contextDetails: [
            'Each observation is the average time spent dancing for one cockatoo.',
            'The population standard deviation is not known.',
            'The sample standard deviation is calculated from the observed data.',
            'The goal is to test a claim about the true mean dancing time for one cockatoo.',
          ],
        },
      },
      parameterDescription: 'the true mean dancing time for one cockatoo',
      nullClaimValue: 10,
      defaultSampleSize: 31,
      defaultSampleMean: 12,
      defaultSampleStandardDeviation: 3,
      suggestedSignificanceLevels: {
        leftTailed: 0.1,
        rightTailed: 0.1,
        twoTailed: 0.1,
      },
    },

    {
      id: 'ai-heart-test-prediction',
      context: {
        setting: 'a medical research lab',
        individualDescription: 'one patient',
        variableDescription: 'average heart rate',
        unit: 'beats per minute',
        tone: 'informative',
        variationProfile: {
          openingStyle: 'medical research scenario',
          toneGuidance: 'focus on informative and practical language.',
          vocabularySuggestions: [],
          seedPhraseInContext:
            "AI can assess heart test results and make a good prediction as to whether or not you will die in the next year, but we have no idea how it's making the predictions.",
          avoidPhrases: [],
          contextDetails: [
            'Each observation is the average heart rate for one patient.',
            'The population standard deviation is not known.',
            'The sample standard deviation is calculated from the observed data.',
            'The goal is to test a claim about the true mean heart rate for one patient.',
          ],
        },
      },
      parameterDescription: 'the true mean heart rate for one patient',
      nullClaimValue: 70,
      defaultSampleSize: 82,
      defaultSampleMean: 72,
      defaultSampleStandardDeviation: 5,
      suggestedSignificanceLevels: {
        leftTailed: 0.025,
        rightTailed: 0.025,
        twoTailed: 0.05,
      },
    },

    {
      id: 'bottled-water-freshness',
      context: {
        setting: 'a bottled water factory',
        individualDescription: 'one bottle of water',
        variableDescription: 'freshness of bottled water',
        unit: 'days',
        tone: 'informative',
        variationProfile: {
          openingStyle: '',
          toneGuidance: '',
          vocabularySuggestions: [],
          seedPhraseInContext:
            "The expiry date on bottled water is not for the water, it's for the bottle.",
          avoidPhrases: [],
          contextDetails: [
            'Each observation is the freshness of one bottle of water.',
            'The population standard deviation is not known.',
            'The sample standard deviation is calculated from the observed data.',
            'The goal is to test a claim about the true mean freshness of bottled water.',
          ],
        },
      },
      parameterDescription: 'the true mean freshness of bottled water',
      nullClaimValue: 60,
      defaultSampleSize: 92,
      defaultSampleMean: 62,
      defaultSampleStandardDeviation: 4,
      suggestedSignificanceLevels: {
        leftTailed: 0.01,
        rightTailed: 0.01,
        twoTailed: 0.01,
      },
    },

    {
      id: 'octopus-grudge',
      context: {
        setting: 'an octopus habitat',
        individualDescription: 'one octopus',
        variableDescription: 'grudge-holding duration',
        unit: 'days',
        tone: 'informative',
        variationProfile: {
          openingStyle: '',
          toneGuidance: '',
          vocabularySuggestions: [],
          seedPhraseInContext:
            'Octopuses can hold years long grudges against keepers that they don’t like, lying in wait to squirt them with water whenever they see them.',
          avoidPhrases: [],
          contextDetails: [
            'Each observation is the grudge-holding duration of one octopus.',
            'The population standard deviation is not known.',
            'The sample standard deviation is calculated from the observed data.',
            'The goal is to test a claim about the true mean grudge-holding duration of octopuses.',
          ],
        },
      },
      parameterDescription:
        'the true mean grudge-holding duration of octopuses',
      nullClaimValue: 365,
      defaultSampleSize: 21,
      defaultSampleMean: 400,
      defaultSampleStandardDeviation: 50,
      suggestedSignificanceLevels: {
        leftTailed: 0.005,
        rightTailed: 0.005,
        twoTailed: 0.005,
      },
    },

    {
      id: 'fork-weight',
      context: {
        setting: 'a cutlery factory',
        individualDescription: 'one fork',
        variableDescription: 'average weight of a fork',
        unit: 'grams',
        tone: 'informative',
        variationProfile: {
          openingStyle: 'cutlery factory scenario',
          toneGuidance:
            'Use practical technical language without making the context overly advanced.',
          vocabularySuggestions: [],
          seedPhraseInContext:
            'Forks were banned for sailors in the British Navy as late as the 1890s, because they were considered ‘unmanly’.',
          avoidPhrases: [],
          contextDetails: [
            'Each observation is the average weight of one fork.',
            'The population standard deviation is not known.',
            'The sample standard deviation is calculated from the observed data.',
            'The goal is to test a claim about the true mean average weight of forks.',
          ],
        },
      },
      parameterDescription: 'the true mean average weight of forks',
      nullClaimValue: 50,
      defaultSampleSize: 63,
      defaultSampleMean: 52,
      defaultSampleStandardDeviation: 5,
      suggestedSignificanceLevels: {
        leftTailed: 0.01,
        rightTailed: 0.01,
        twoTailed: 0.01,
      },
    },
  ];
