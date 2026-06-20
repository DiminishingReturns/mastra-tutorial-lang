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
  ];
