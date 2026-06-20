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
  ];
