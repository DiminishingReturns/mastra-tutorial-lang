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
  ];
