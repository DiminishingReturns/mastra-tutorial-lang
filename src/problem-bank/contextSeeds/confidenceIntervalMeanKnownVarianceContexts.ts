import type { ConfidenceIntervalMeanKnownVarianceProblem } from '../schemas/confidenceIntervalMeanKnownVariance.schema';

type ConfidenceIntervalMeanKnownVarianceContextSeed = {
  id: string;

  context: ConfidenceIntervalMeanKnownVarianceProblem['context'];

  parameterDescription: string;

  knownPopulationStandardDeviation: number;

  defaultSampleSize: number;
  defaultSampleMean: number;
  defaultMarginOfError: number;

  suggestedConfidenceLevels: {
    twoSided: number;
    lowerBound: number;
    upperBound: number;
    sampleSize: number;
  };
};

export const confidenceIntervalMeanKnownVarianceContexts: ConfidenceIntervalMeanKnownVarianceContextSeed[] =
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
            'performance testing',
            'sample mean',
            'population standard deviation',
            'confidence interval',
          ],
          seedPhraseInContext:
            'A testing lab studies the battery life of a particular battery model.',
          avoidPhrases: ['battery disaster', 'power drama'],
          contextDetails: [
            'Each observation is the battery life of one fully charged battery.',
            'The population standard deviation is known from long-term testing.',
            'The goal is to estimate the true mean battery life for this model.',
          ],
        },
      },
      parameterDescription: 'the true mean battery life for this battery model',
      knownPopulationStandardDeviation: 1.2,
      defaultSampleSize: 36,
      defaultSampleMean: 9.4,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 95,
        upperBound: 95,
        sampleSize: 95,
      },
      defaultMarginOfError: 0.4,
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
            'Use workplace quality-control language while keeping the statistical task clear.',
          vocabularySuggestions: [
            'loaf mass',
            'production line',
            'quality control',
            'population standard deviation',
            'confidence bound',
          ],
          seedPhraseInContext:
            'A bakery monitors the mass of loaves produced on one production line.',
          avoidPhrases: ['bread crisis', 'bakery chaos'],
          contextDetails: [
            'Each observation is the mass of one loaf.',
            'The population standard deviation is known from historical production data.',
            'The goal is to estimate the true mean loaf mass for the production line.',
          ],
        },
      },
      parameterDescription:
        'the true mean loaf mass for loaves from this production line',
      knownPopulationStandardDeviation: 18,
      defaultSampleSize: 49,
      defaultSampleMean: 502,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 95,
        upperBound: 95,
        sampleSize: 90,
      },
      defaultMarginOfError: 10,
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
            'population standard deviation',
            'confidence interval',
            'students',
          ],
          seedPhraseInContext:
            'A college studies how long students take to commute to campus.',
          avoidPhrases: ['traffic nightmare', 'commuting chaos'],
          contextDetails: [
            'Each observation is one student commute time.',
            'The population standard deviation is assumed to be known from previous studies.',
            'The goal is to estimate the true mean commute time for students at the college.',
          ],
        },
      },
      parameterDescription:
        'the true mean commute time for students at the college',
      knownPopulationStandardDeviation: 12,
      defaultSampleSize: 64,
      defaultSampleMean: 41.5,
      suggestedConfidenceLevels: {
        twoSided: 90,
        lowerBound: 95,
        upperBound: 95,
        sampleSize: 90,
      },
      defaultMarginOfError: 5,
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
            'population standard deviation',
            'confidence interval',
          ],
          seedPhraseInContext:
            'In a plant growth experiment, researchers measure height increase over four weeks.',
          avoidPhrases: ['plant miracle', 'growth explosion'],
          contextDetails: [
            'Each observation is the height increase for one plant.',
            'The population standard deviation is known from earlier trials under the same conditions.',
            'The goal is to estimate the true mean height increase under the standard condition.',
          ],
        },
      },
      parameterDescription:
        'the true mean height increase for plants grown under this standard condition',
      knownPopulationStandardDeviation: 5,
      defaultSampleSize: 40,
      defaultSampleMean: 17.6,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 90,
        upperBound: 90,
        sampleSize: 90,
      },
      defaultMarginOfError: 2,
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
            'population standard deviation',
            'confidence bound',
          ],
          seedPhraseInContext:
            'A marine biology team measures jellyfish bell diameters during a coastal survey.',
          avoidPhrases: ['jellyfish invasion', 'ocean mystery'],
          contextDetails: [
            'Each observation is the bell diameter of one jellyfish.',
            'The population standard deviation is treated as known from previous surveys.',
            'The goal is to estimate the true mean bell diameter in the surveyed population.',
          ],
        },
      },
      parameterDescription:
        'the true mean bell diameter for jellyfish in the surveyed population',
      knownPopulationStandardDeviation: 6,
      defaultSampleSize: 50,
      defaultSampleMean: 23.4,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 95,
        upperBound: 95,
        sampleSize: 90,
      },
      defaultMarginOfError: 1.5,
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
            'population standard deviation',
            'confidence interval',
          ],
          seedPhraseInContext:
            'In a conservation monitoring project, researchers measure the mass of sea turtle hatchlings.',
          avoidPhrases: ['hero turtles', 'survival race'],
          contextDetails: [
            'Each observation is the mass of one hatchling.',
            'The population standard deviation is assumed to be known from long-term monitoring.',
            'The goal is to estimate the true mean hatchling mass for the nesting site.',
          ],
        },
      },
      parameterDescription:
        'the true mean mass of sea turtle hatchlings at this nesting site',
      knownPopulationStandardDeviation: 3.5,
      defaultSampleSize: 45,
      defaultSampleMean: 21.8,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 90,
        upperBound: 90,
        sampleSize: 90,
      },
      defaultMarginOfError: 0.8,
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
            'population standard deviation',
            'confidence interval',
          ],
          seedPhraseInContext:
            'In a reaction-time study, participants complete the same task under standard conditions.',
          avoidPhrases: ['lightning reflexes', 'brain speed contest'],
          contextDetails: [
            'Each observation is one participant’s reaction time.',
            'The population standard deviation is known from previous versions of the task.',
            'The goal is to estimate the true mean reaction time under these conditions.',
          ],
        },
      },
      parameterDescription:
        'the true mean reaction time for participants completing this task',
      knownPopulationStandardDeviation: 45,
      defaultSampleSize: 60,
      defaultSampleMean: 306,
      suggestedConfidenceLevels: {
        twoSided: 99,
        lowerBound: 95,
        upperBound: 95,
        sampleSize: 95,
      },
      defaultMarginOfError: 0.8,
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
            'population standard deviation',
            'confidence bound',
          ],
          seedPhraseInContext:
            'A student-life survey records daily phone screen time for students.',
          avoidPhrases: ['phone addiction', 'doomscrolling'],
          contextDetails: [
            'Each observation is one student’s daily screen time.',
            'The population standard deviation is assumed to be known from a previous large survey.',
            'The goal is to estimate the true mean daily screen time for students.',
          ],
        },
      },
      parameterDescription:
        'the true mean daily phone screen time for students',
      knownPopulationStandardDeviation: 1.8,
      defaultSampleSize: 81,
      defaultSampleMean: 5.4,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 95,
        upperBound: 95,
        sampleSize: 95,
      },
      defaultMarginOfError: 0.5,
    },

    // End of calibration set
    // Start of contexts for in class problems

    {
      id: 'ancient-toothpaste',
      context: {
        setting: 'historical health practices',
        individualDescription:
          'weight of a tube of toothpaste from an ancient recipe',
        variableDescription: 'weight of the toothpaste',
        unit: 'grams',
        tone: 'informative',
        variationProfile: {
          openingStyle: 'historical context',

          toneGuidance:
            'Use engaging and humorous language to bring the historical context to life while keeping the statistical task clear.',
          vocabularySuggestions: [
            'toothpaste',
            'ancient recipe',
            'sample mean',
            'population standard deviation',
            'confidence interval',
          ],
          seedPhraseInContext:
            'The oldest recorded toothpaste recipe was Ancient Egyptian. It was a powder made of ground salt, mint, dried iris flower and pepper, mixed together with saliva.',
          avoidPhrases: [''],
          contextDetails: [
            'Each observation is the weight of one tube of toothpaste made from the ancient recipe.',
            'The population standard deviation is estimated from a large batch of toothpaste made using the recipe.',
            'The goal is to estimate the true mean weight of toothpaste tubes made from this ancient recipe.',
          ],
        },
      },
      parameterDescription:
        'the true mean weight of toothpaste tubes made from the ancient recipe',
      knownPopulationStandardDeviation: 0.5,
      defaultSampleSize: 30,
      defaultSampleMean: 50,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 95,
        upperBound: 95,
        sampleSize: 50,
      },
      defaultMarginOfError: 0.2,
    },

    {
      id: 'solar-panel-dowry',
      context: {
        setting: 'cultural practice analysis',
        individualDescription:
          'a solar panel included in a marriage dowry in some parts of Pakistan',
        variableDescription: 'average power output of the solar panel',
        unit: 'watts',
        tone: 'informative',
        variationProfile: {
          openingStyle: 'cultural practice scenario',
          toneGuidance:
            'Use engaging language to explain the context of solar panels being included in marriage dowries in some parts of Pakistan, while keeping the statistical task clear.',
          vocabularySuggestions: [
            'solar panel',
            'marriage dowry',
            'sample mean',
            'population standard deviation',
            'confidence interval',
          ],
          seedPhraseInContext:
            'In some parts of Pakistan, a typical marriage dowry now includes a solar panel.',
          avoidPhrases: [''],
          contextDetails: [
            'Each observation is the power output of one solar panel included in a marriage dowry.',
            'The population standard deviation is estimated from a large batch of solar panels.',
            'The goal is to estimate the true mean power output of solar panels included in marriage dowries.',
          ],
        },
      },
      parameterDescription:
        'the true mean power output of solar panels included in marriage dowries',
      knownPopulationStandardDeviation: 5,
      defaultSampleSize: 30,
      defaultSampleMean: 100,
      suggestedConfidenceLevels: {
        twoSided: 99,
        lowerBound: 99,
        upperBound: 99,
        sampleSize: 50,
      },
      defaultMarginOfError: 1.0,
    },

    {
      id: 'goblin-mentions',
      context: {
        setting: 'language model behavior analysis',
        individualDescription:
          'the number of times a language model mentions goblins in its responses',
        variableDescription: 'mentions of goblins',
        unit: 'count',
        tone: 'informative',
        variationProfile: {
          openingStyle: 'language model analysis scenario',
          toneGuidance:
            'Use engaging and humorous language to explain the context of analyzing a language model’s mentions of goblins, while keeping the statistical task clear.',
          vocabularySuggestions: [
            'goblins',
            'language model',
            'sample mean',
            'population standard deviation',
            'confidence interval',
          ],
          seedPhraseInContext:
            'Since November 2025, the mentions of goblins in ChatGPT’s responses have risen by 175%. Because of this, its code now includes a specific instruction not to talk about goblins unless it is absolutely necessary.',
          avoidPhrases: [''],
          contextDetails: [
            'Each observation is the number of times the language model mentions goblins in a single response.',
            'The population standard deviation is estimated from a large sample of responses.',
            'The goal is to estimate the true mean number of goblin mentions per response.',
          ],
        },
      },
      parameterDescription:
        'the true mean number of goblin mentions per response',
      knownPopulationStandardDeviation: 5,
      defaultSampleSize: 30,
      defaultSampleMean: 10,
      suggestedConfidenceLevels: {
        twoSided: 90,
        lowerBound: 90,
        upperBound: 90,
        sampleSize: 100,
      },
      defaultMarginOfError: 2,
    },
    {
      id: 'average-nest-temperature',
      context: {
        setting: 'wildlife monitoring',
        individualDescription: 'the temperature of bird nests',
        variableDescription: 'nest temperature',
        unit: 'degrees Fahrenheit',
        tone: 'informative',
        variationProfile: {
          openingStyle: 'wildlife monitoring scenario',
          toneGuidance:
            'Use engaging language to explain the context of monitoring bird nest temperatures, while keeping the statistical task clear.',
          vocabularySuggestions: [
            'nest temperature',
            'wildlife monitoring',
            'sample mean',
            'population standard deviation',
            'confidence interval',
          ],
          seedPhraseInContext:
            'Many birds lay blue eggs because they absorb just the right amount of light to warm the eggs, but not enough to make them too hot.',
          avoidPhrases: [''],
          contextDetails: [
            'Each observation is the temperature of a single bird nest.',
          ],
        },
      },
      parameterDescription:
        'the true mean temperature of bird nests in the monitored area',
      knownPopulationStandardDeviation: 2,
      defaultSampleSize: 30,
      defaultSampleMean: 20,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 95,
        upperBound: 95,
        sampleSize: 30,
      },
      defaultMarginOfError: 1.5,
    },
    {
      id: 'cost-of-a-laser-printer',
      context: {
        setting: 'technology price analysis',
        individualDescription: 'the cost of a laser printer',
        variableDescription: 'laser printer cost',
        unit: 'dollars',
        tone: 'informative',
        variationProfile: {
          openingStyle: 'technology price analysis scenario',
          toneGuidance:
            'Use engaging language to explain the context of analyzing laser printer costs, while keeping the statistical task clear.',
          vocabularySuggestions: [
            'laser printer cost',
            'technology price analysis',
            'sample mean',
            'population standard deviation',
            'confidence interval',
          ],
          seedPhraseInContext:
            'In the 1980s, if you wanted to print a document in landscape rather than portrait mode, you had to buy a separate computer programme costing up to $100. This was because the laser printer’s hardware could only print in portrait mode, and the software had to break up the landscape image into sections and print each one separately.',
          avoidPhrases: [''],
          contextDetails: [
            'Each observation is the cost of one laser printer.',
            'The population standard deviation is estimated from a large sample of printer costs.',
            'The goal is to estimate the true mean cost of laser printers from that era.',
          ],
        },
      },
      parameterDescription:
        'the true mean cost of laser printers from that era',
      knownPopulationStandardDeviation: 50,
      defaultSampleSize: 30,
      defaultSampleMean: 200,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 95,
        upperBound: 95,
        sampleSize: 30,
      },
      defaultMarginOfError: 15,
    },
    {
      id: 'average-lifespan-of-swiss-male',
      context: {
        setting: 'historical health analysis',
        individualDescription: 'a Swiss male from the village of Grimentz',
        variableDescription: 'lifespan',
        unit: 'years',
        tone: 'informative',
        variationProfile: {
          openingStyle: 'historical health scenario',
          toneGuidance:
            'Use engaging and humorous language to explain the context of analyzing the average lifespan of a Swiss male from the village of Grimentz.',
          vocabularySuggestions: [
            'lifespan',
            'Grimentz',
            'historical health analysis',
          ],
          seedPhraseInContext:
            'In the Swiss village of Grimentz, there it was traditional to keep a cheese to be served at your funeral. The goal was to live long enough that the cheese needed cutting with an axe when it was served.',
          avoidPhrases: [''],
          contextDetails: [
            'Each observation is the lifespan of one Swiss male from the village of Grimentz.',
            'The population standard deviation is estimated from historical records.',
            'The goal is to estimate the true mean lifespan of Swiss men from the village of Grimentz.',
          ],
        },
      },
      parameterDescription:
        'the true mean lifespan of Swiss men from the village of Grimentz',
      knownPopulationStandardDeviation: 10,
      defaultSampleSize: 30,
      defaultSampleMean: 77,
      suggestedConfidenceLevels: {
        twoSided: 85,
        lowerBound: 85,
        upperBound: 85,
        sampleSize: 30,
      },
      defaultMarginOfError: 4,
    },
    {
      id: 'garbage-cafes-central-india',
      context: {
        setting: 'environmental sustainability',
        individualDescription:
          'the amount of plastic rubbish collected by one customer at a garbage cafe in Central India',
        variableDescription: 'plastic rubbish collected',
        unit: 'grams',
        tone: 'informative',
        variationProfile: {
          openingStyle: '',
          toneGuidance:
            'Use engaging language to explain the context of garbage cafes in Central India, while keeping the statistical task clear.',
          vocabularySuggestions: [
            'plastic rubbish collected',
            'plastic waste',
            'garbage cafe',
            'environmental sustainability',
          ],
          seedPhraseInContext:
            'In an attempt to reduce waste in the environment, Central India has introduced ‘garbage cafes’ where you can pay for meals with the plastic rubbish you’ve collected.',
          avoidPhrases: [''],
          contextDetails: [
            'Each observation is the amount of plastic rubbish collected by one customer.',
            'The population standard deviation is estimated from a large sample of customers.',
            'The goal is to estimate the true mean amount of plastic rubbish collected by customers at these garbage cafes.',
          ],
        },
      },
      parameterDescription:
        'the true mean amount of plastic rubbish collected by customers at these garbage cafes',
      knownPopulationStandardDeviation: 20,
      defaultSampleSize: 49,
      defaultSampleMean: 150,
      suggestedConfidenceLevels: {
        twoSided: 80,
        lowerBound: 80,
        upperBound: 80,
        sampleSize: 45,
      },
      defaultMarginOfError: 0.5,
    },
    {
      id: 'tree-lined-roads',
      context: {
        setting: 'urban planning and traffic safety',
        individualDescription:
          'the speed of one car driving on a tree-lined road',
        variableDescription: 'speed of the car',
        unit: 'km/h',
        tone: 'informative',
        variationProfile: {
          openingStyle: 'urban planning scenario',
          toneGuidance:
            'Use engaging language to explain the context of tree-lined roads and their impact on driving speed, while keeping the statistical task clear.',
          vocabularySuggestions: [
            'tree-lined roads',
            'driving speed',
            'urban planning',
            'traffic safety',
          ],
          seedPhraseInContext:
            'People drive more slowly if the road is lined with trees. Trees are known to create a calming effect and make the road feel narrower, which encourages safer driving.',
          avoidPhrases: [''],
          contextDetails: [
            'Each observation is the speed of one car driving on a tree-lined road.',
            'The population standard deviation is estimated from a large sample of cars.',
            'The goal is to estimate the true mean driving speed on tree-lined roads.',
          ],
        },
      },
      parameterDescription: 'the true mean driving speed on tree-lined roads',
      knownPopulationStandardDeviation: 10,
      defaultSampleSize: 36,
      defaultSampleMean: 60,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 95,
        upperBound: 95,
        sampleSize: 36,
      },
      defaultMarginOfError: 1.5,
    },
    {
      id: 'cats-learning-associations',
      context: {
        setting: 'animal behavior and learning',
        individualDescription:
          'the speed at which one cat learns to associate images with words',
        variableDescription: 'learning speed of the cat',
        unit: 'seconds',
        tone: 'informative',
        variationProfile: {
          openingStyle: 'animal learning scenario',
          toneGuidance:
            'Use engaging language to explain the context of cats learning to associate images with words, while keeping the statistical task clear.',
          vocabularySuggestions: [
            'learning speed',
            'cats',
            'associating images with words',
            'animal behavior',
            'learning studies',
          ],
          seedPhraseInContext:
            'Cats learn to associate images with words faster than human babies.',
          avoidPhrases: [''],
          contextDetails: [
            'Each observation is the speed at which one cat learns to associate images with words.',
            'The population standard deviation is estimated from a large sample of cats.',
            'The goal is to estimate the true mean learning speed for cats in this task.',
          ],
        },
      },
      parameterDescription:
        'the true mean learning speed for cats in this task',
      knownPopulationStandardDeviation: 5,
      defaultSampleSize: 55,
      defaultSampleMean: 12,
      suggestedConfidenceLevels: {
        twoSided: 99,
        lowerBound: 99,
        upperBound: 99,
        sampleSize: 55,
      },
      defaultMarginOfError: 1.5,
    },
    {
      id: 'price-of-dorm-room-art',
      context: {
        setting: 'online marketplace for dorm room decor',
        individualDescription:
          'the price of one piece of art sold as dorm room decor on an online marketplace',
        variableDescription: 'price of dorm room art',
        unit: 'dollars',
        tone: 'informative',
        variationProfile: {
          openingStyle: '',
          toneGuidance:
            'Use engaging and humorous language to explain the context of an online marketplace for dorm room decor, while keeping the statistical task clear.',
          vocabularySuggestions: [
            'price of dorm room art',
            'online marketplace',
            'dorm room decor',
            'student art',
            'e-commerce',
          ],
          seedPhraseInContext:
            'Students at Oberlin College in Ohio can rent an original Picasso to hang in their dorm room for $5 per semester.',
          avoidPhrases: [''],
          contextDetails: [
            'Each observation is the price of one piece of art sold as dorm room decor on an online marketplace.',
            'The population standard deviation is estimated from a large sample of dorm room art prices.',
            'The goal is to estimate the true mean price for dorm room art in this marketplace.',
          ],
        },
      },
      parameterDescription:
        'the true mean price for dorm room art in this marketplace',
      knownPopulationStandardDeviation: 5,
      defaultSampleSize: 55,
      defaultSampleMean: 80,
      suggestedConfidenceLevels: {
        twoSided: 99,
        lowerBound: 99,
        upperBound: 99,
        sampleSize: 55,
      },
      defaultMarginOfError: 10,
    },
  ];
