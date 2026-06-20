import type { CentralLimitTheoremProblem } from '../schemas/centralLimitTheorem.schema';

type CentralLimitTheoremContextSeed = {
  id: string;

  context: CentralLimitTheoremProblem['context'];

  individualRandomVariableDescription: string;

  populationMean: number;
  populationStandardDeviation: number;
  populationShape?:
    | 'normal'
    | 'approximately-normal'
    | 'skewed-right'
    | 'skewed-left'
    | 'unknown';

  defaultSampleSize: number;

  suggestedSampleMeanThresholds: {
    lessThan?: number;
    greaterThan?: number;
    between?: {
      lower: number;
      upper: number;
    };
  };
};

export const centralLimitTheoremContexts: CentralLimitTheoremContextSeed[] = [
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
          'Use realistic student-life language while keeping the distinction between an individual commute and a sample mean clear.',
        vocabularySuggestions: [
          'commute time',
          'sample mean',
          'students',
          'minutes',
          'central limit theorem',
        ],
        seedPhraseInContext:
          'A college is studying how long students take to commute to campus.',
        avoidPhrases: ['traffic nightmare', 'commuting chaos'],
        contextDetails: [
          'Each observation is one student commute time.',
          'The sample statistic is the mean commute time for a sample of students.',
          'The problem should focus on the sampling distribution of the sample mean.',
        ],
      },
    },
    individualRandomVariableDescription:
      'the commute time for one randomly selected student',
    populationMean: 42,
    populationStandardDeviation: 12,
    populationShape: 'skewed-right',
    defaultSampleSize: 36,
    suggestedSampleMeanThresholds: {
      lessThan: 39,
      greaterThan: 45,
      between: {
        lower: 39,
        upper: 45,
      },
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
          'students',
          'hours',
        ],
        seedPhraseInContext:
          'A student-life survey records daily phone screen time for many students.',
        avoidPhrases: ['phone addiction', 'doomscrolling'],
        contextDetails: [
          'Each value is one student’s daily screen time.',
          'The sample mean is calculated from a group of students.',
          'The individual distribution may be skewed, so the sample size matters.',
        ],
      },
    },
    individualRandomVariableDescription:
      'the daily phone screen time for one randomly selected student',
    populationMean: 5.2,
    populationStandardDeviation: 1.8,
    populationShape: 'skewed-right',
    defaultSampleSize: 49,
    suggestedSampleMeanThresholds: {
      lessThan: 4.8,
      greaterThan: 5.6,
      between: {
        lower: 4.8,
        upper: 5.6,
      },
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
          'standard condition',
          'centimetres',
        ],
        seedPhraseInContext:
          'In a plant growth experiment, researchers measure height increase over four weeks.',
        avoidPhrases: ['plant miracle', 'growth explosion'],
        contextDetails: [
          'Each observation is the height increase for one plant.',
          'The sample mean is calculated from several plants.',
          'The problem should distinguish individual plant growth from average growth in a sample.',
        ],
      },
    },
    individualRandomVariableDescription:
      'the height increase over four weeks for one randomly selected plant',
    populationMean: 18,
    populationStandardDeviation: 5,
    populationShape: 'approximately-normal',
    defaultSampleSize: 25,
    suggestedSampleMeanThresholds: {
      lessThan: 16,
      greaterThan: 20,
      between: {
        lower: 16,
        upper: 20,
      },
    },
  },

  {
    id: 'battery-life',
    context: {
      setting: 'battery performance testing',
      individualDescription: 'one fully charged battery of a particular model',
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
          'fully charged battery',
          'hours',
        ],
        seedPhraseInContext:
          'A testing lab measures the battery life of a particular battery model.',
        avoidPhrases: ['battery disaster', 'power drama'],
        contextDetails: [
          'Each observation is the battery life of one fully charged battery.',
          'The sample mean is based on a sample of batteries.',
          'The goal is to model the average battery life in repeated samples.',
        ],
      },
    },
    individualRandomVariableDescription:
      'the battery life of one randomly selected fully charged battery',
    populationMean: 9.5,
    populationStandardDeviation: 1.2,
    populationShape: 'normal',
    defaultSampleSize: 16,
    suggestedSampleMeanThresholds: {
      lessThan: 9.1,
      greaterThan: 9.9,
      between: {
        lower: 9.1,
        upper: 9.9,
      },
    },
  },

  {
    id: 'reaction-times',
    context: {
      setting: 'reaction-time study',
      individualDescription: 'one participant completing a reaction-time task',
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
          'milliseconds',
          'task',
        ],
        seedPhraseInContext:
          'In a reaction-time study, participants complete the same task under standard conditions.',
        avoidPhrases: ['lightning reflexes', 'brain speed contest'],
        contextDetails: [
          'Each observation is one participant’s reaction time.',
          'The sample mean is calculated for a sample of participants.',
          'Reaction times are often skewed, but the sample mean can be modeled using the central limit theorem when the sample is large enough.',
        ],
      },
    },
    individualRandomVariableDescription:
      'the reaction time for one randomly selected participant',
    populationMean: 310,
    populationStandardDeviation: 45,
    populationShape: 'skewed-right',
    defaultSampleSize: 64,
    suggestedSampleMeanThresholds: {
      lessThan: 300,
      greaterThan: 320,
      between: {
        lower: 300,
        upper: 320,
      },
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
          'Use workplace quality-control language while keeping the statistical task clear.',
        vocabularySuggestions: [
          'loaf mass',
          'production line',
          'sample mean',
          'quality control',
          'grams',
        ],
        seedPhraseInContext:
          'A bakery monitors the mass of loaves produced on one production line.',
        avoidPhrases: ['bread crisis', 'bakery chaos'],
        contextDetails: [
          'Each observation is the mass of one loaf.',
          'The sample mean is calculated from a sample of loaves.',
          'The context should keep the unit grams visible.',
        ],
      },
    },
    individualRandomVariableDescription:
      'the mass of one randomly selected loaf of bread',
    populationMean: 500,
    populationStandardDeviation: 18,
    populationShape: 'approximately-normal',
    defaultSampleSize: 36,
    suggestedSampleMeanThresholds: {
      lessThan: 495,
      greaterThan: 505,
      between: {
        lower: 495,
        upper: 505,
      },
    },
  },

  {
    id: 'jellyfish-diameter',
    context: {
      setting: 'marine biology survey',
      individualDescription: 'one jellyfish measured during a survey',
      variableDescription: 'bell diameter',
      unit: 'cm',
      tone: 'scientific field-study context',
      variationProfile: {
        openingStyle: 'marine survey scenario',
        toneGuidance:
          'Use scientific field-study language while keeping the CLT structure understandable.',
        vocabularySuggestions: [
          'jellyfish',
          'bell diameter',
          'marine survey',
          'sample mean',
          'centimetres',
        ],
        seedPhraseInContext:
          'A marine biology team measures jellyfish bell diameters during a coastal survey.',
        avoidPhrases: ['ocean mystery', 'jellyfish invasion'],
        contextDetails: [
          'Each observation is the bell diameter of one jellyfish.',
          'The sample mean is calculated from a sample of measured jellyfish.',
          'The problem should distinguish one jellyfish diameter from the mean diameter in a sample.',
        ],
      },
    },
    individualRandomVariableDescription:
      'the bell diameter of one randomly selected jellyfish',
    populationMean: 24,
    populationStandardDeviation: 6,
    populationShape: 'skewed-right',
    defaultSampleSize: 49,
    suggestedSampleMeanThresholds: {
      lessThan: 22.5,
      greaterThan: 25.5,
      between: {
        lower: 22.5,
        upper: 25.5,
      },
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
          'emergence',
          'grams',
        ],
        seedPhraseInContext:
          'In a conservation monitoring project, researchers measure the mass of sea turtle hatchlings.',
        avoidPhrases: ['hero turtles', 'survival race'],
        contextDetails: [
          'Each observation is the mass of one hatchling.',
          'The sample mean is calculated from a group of hatchlings.',
          'The context should preserve the ecological setting without adding emotional claims.',
        ],
      },
    },
    individualRandomVariableDescription:
      'the mass of one randomly selected sea turtle hatchling',
    populationMean: 22,
    populationStandardDeviation: 3.5,
    populationShape: 'unknown',
    defaultSampleSize: 50,
    suggestedSampleMeanThresholds: {
      lessThan: 21,
      greaterThan: 23,
      between: {
        lower: 21,
        upper: 23,
      },
    },
  },

  // End of calibration contexts.
  // Beginning of context seeds for course problems.

  {
    id: 'barnacle-geese-chick-mass',
    context: {
      setting: 'barnacle geese conservation monitoring',
      individualDescription: 'one chick measured after hatching',
      variableDescription: 'chick mass',
      unit: 'grams',
      tone: 'careful conservation context',
      variationProfile: {
        openingStyle: 'conservation monitoring scenario',
        toneGuidance:
          'Use careful ecological language. Avoid dramatizing the scenario.',
        vocabularySuggestions: [
          'weight of chicks',
          'conservation monitoring',
          'sample mean',
          'hatching',
          'grams',
        ],
        seedPhraseInContext:
          'Barnacle geese lay their eggs on cliff ledges. Within 24 hours of hatching the chicks must leap off the cliff, up to 400ft to the ground below, in order to avoid being eaten by predators. Researchers monitor the mass of the chicks to understand their health and survival prospects.',
        avoidPhrases: ['hero chicks', 'survival race'],
        contextDetails: [
          'Each observation is the mass of one chick.',
          'The sample mean is calculated from a group of chicks.',
          'The context should preserve the ecological setting without adding emotional claims.',
        ],
      },
    },
    individualRandomVariableDescription:
      'the mass of one randomly selected barnacle geese chick',
    populationMean: 150,
    populationStandardDeviation: 20,
    populationShape: 'unknown',
    defaultSampleSize: 40,
    suggestedSampleMeanThresholds: {
      lessThan: 145,
      greaterThan: 155,
      between: {
        lower: 145,
        upper: 155,
      },
    },
  },

  {
    id: 'trained-ferrets',
    context: {
      setting: 'trained ferrets monitoring in cable-laying operations',
      individualDescription:
        'one trained ferret completing a cable-laying task',
      variableDescription:
        'time taken for a trained ferret to complete a cable-laying task',
      unit: 'minutes',
      tone: 'careful monitoring context',
      variationProfile: {
        openingStyle: 'monitoring scenario',
        toneGuidance:
          'Use a conversational tone that emphasizes the monitoring aspect without sensationalizing the use of trained ferrets.',
        vocabularySuggestions: [
          'time taken',
          'trained ferrets',
          'sample mean',
          'cable-laying task',
          'minutes',
        ],
        seedPhraseInContext:
          'Construction companies often lay cables in hard to reach places using trained ferrets.',
        avoidPhrases: [''],
        contextDetails: [
          'Each observation is the time taken for one trained ferret to complete a cable-laying task.',
          'The sample mean is calculated from a group of trained ferrets.',
          'The context should preserve the monitoring setting without adding sensational claims.',
        ],
      },
    },
    individualRandomVariableDescription:
      'the time taken for one randomly selected trained ferret to complete a cable-laying task',
    populationMean: 15,
    populationStandardDeviation: 4,
    populationShape: 'normal',
    defaultSampleSize: 19,
    suggestedSampleMeanThresholds: {
      lessThan: 13,
      greaterThan: 17,
      between: {
        lower: 13,
        upper: 17,
      },
    },
  },

  {
    id: 'medication-absorption-time',
    context: {
      setting: 'clinical trial monitoring',
      individualDescription:
        'one patient measured after medication administration',
      variableDescription: 'time taken for medication to be absorbed',
      unit: 'minutes',
      tone: 'careful clinical context',
      variationProfile: {
        openingStyle: 'clinical trial monitoring scenario',
        toneGuidance:
          'Use careful clinical language. Avoid dramatizing the scenario.',
        vocabularySuggestions: [
          'medication absorption',
          'clinical trial',
          'sample mean',
          'time taken',
          'minutes',
        ],
        seedPhraseInContext:
          'Paracetamol (Tylenol) not only reduces physical pain, it also significantly reduces hurt feelings.',
        avoidPhrases: [''],
        contextDetails: [
          'Each observation is the time taken for one patient to absorb the medication.',
          'The sample mean is calculated from a group of patients.',
          'The context should preserve the clinical setting without adding sensational claims.',
        ],
      },
    },
    individualRandomVariableDescription:
      'the time taken for one randomly selected patient to absorb the medication',
    populationMean: 30,
    populationStandardDeviation: 5,
    populationShape: 'normal',
    defaultSampleSize: 18,
    suggestedSampleMeanThresholds: {
      lessThan: 27,
      greaterThan: 33,
      between: {
        lower: 27,
        upper: 33,
      },
    },
  },

  {
    id: 'fees-for-subscription-services',
    context: {
      setting: 'subscription service monitoring',
      individualDescription: 'one user measured after subscribing',
      variableDescription: 'subscription fee',
      unit: 'dollars',
      tone: 'careful financial context',
      variationProfile: {
        openingStyle: 'financial monitoring scenario',
        toneGuidance:
          'Use careful financial language. Avoid dramatizing the scenario.',
        vocabularySuggestions: [
          'subscription fee',
          'financial monitoring',
          'sample mean',
          'subscription',
        ],
        seedPhraseInContext:
          'There are so many subscription services that there are now services that you can subscribe to in order to manage your subscriptions.',
        avoidPhrases: [''],
        contextDetails: [
          'Each observation is the subscription fee paid by one user.',
          'The sample mean is calculated from a group of users.',
          'The context should preserve the financial setting without adding emotional claims.',
        ],
      },
    },
    individualRandomVariableDescription:
      'the subscription fee paid by one randomly selected user',
    populationMean: 60,
    populationStandardDeviation: 8,
    populationShape: 'skewed-right',
    defaultSampleSize: 50,
    suggestedSampleMeanThresholds: {
      lessThan: 57,
      greaterThan: 62,
      between: {
        lower: 57,
        upper: 62,
      },
    },
  },

  {
    id: 'time-spent-in-sauna',
    context: {
      setting: 'sauna usage monitoring',
      individualDescription: 'one user measured after a sauna session',
      variableDescription: 'time spent in sauna',
      unit: 'minutes',
      tone: 'careful wellness context',
      variationProfile: {
        openingStyle: 'wellness monitoring scenario',
        toneGuidance:
          'Use careful wellness language. Avoid dramatizing the scenario.',
        vocabularySuggestions: [
          'time spent in sauna',
          'wellness monitoring',
          'sample mean',
          'emergence',
          'grams',
        ],
        seedPhraseInContext: 'Finland has more saunas than cars..',
        avoidPhrases: [''],
        contextDetails: [
          'Each observation is the time spent in the sauna by one user.',
          'The sample mean is calculated from a group of users.',
          'The context should preserve the wellness setting without adding emotional claims.',
        ],
      },
    },
    individualRandomVariableDescription:
      'the time spent in the sauna by one randomly selected user',
    populationMean: 75,
    populationStandardDeviation: 10,
    populationShape: 'skewed-right',
    defaultSampleSize: 56,
    suggestedSampleMeanThresholds: {
      lessThan: 70,
      greaterThan: 74,
      between: {
        lower: 70,
        upper: 74,
      },
    },
  },

  {
    id: 'number-of-texts-sent-per-day',
    context: {
      setting: 'daily communication monitoring',
      individualDescription: 'one user measured after a day',
      variableDescription: 'number of texts sent',
      unit: 'texts',
      tone: 'careful communication context',
      variationProfile: {
        openingStyle: 'communication monitoring scenario',
        toneGuidance:
          'Use careful communication language. Avoid dramatizing the scenario.',
        vocabularySuggestions: [
          'number of texts sent',
          'communication monitoring',
          'sample mean',
          'daily activity',
          'texts',
        ],
        seedPhraseInContext:
          'During the 2013 papal election, it was reported that the Vatican fitted the Sistine Chapel with a signal-blocking Faraday cage to stop cardinals leaking details to the press.',
        avoidPhrases: [''],
        contextDetails: [
          'Each observation is the number of texts sent by one user.',
          'The sample mean is calculated from a group of users.',
          'The context should preserve the communication setting.',
        ],
      },
    },
    individualRandomVariableDescription:
      'the number of texts sent by one randomly selected user',
    populationMean: 20,
    populationStandardDeviation: 5,
    populationShape: 'normal',
    defaultSampleSize: 20,
    suggestedSampleMeanThresholds: {
      lessThan: 18,
      greaterThan: 23,
      between: {
        lower: 18,
        upper: 23,
      },
    },
  },

  {
    id: 'time-spent-on-apps-per-day',
    context: {
      setting: 'daily app usage monitoring',
      individualDescription: 'one user measured after a day',
      variableDescription: 'time spent on apps',
      unit: 'minutes',
      tone: 'careful usage context',
      variationProfile: {
        openingStyle: 'usage monitoring scenario',
        toneGuidance:
          'Use careful usage language. Use some dry-wittedness if appropriate, but avoid dramatizing the scenario.',
        vocabularySuggestions: [
          'time spent on apps',
          'usage monitoring',
          'sample mean',
          'daily activity',
          'minutes',
        ],
        seedPhraseInContext:
          'Text With Jesus is an AI app whose users can ‘chat’ with different figures from the Bible. Premium users can chat with Satan.',
        avoidPhrases: [''],
        contextDetails: [
          'Each observation is the time spent on apps by one user.',
          'The sample mean is calculated from a group of users.',
          'The context should preserve the usage monitoring setting without adding emotional claims.',
        ],
      },
    },
    individualRandomVariableDescription:
      'the time spent on apps by one randomly selected user',
    populationMean: 120,
    populationStandardDeviation: 30,
    populationShape: 'skewed-right',
    defaultSampleSize: 50,
    suggestedSampleMeanThresholds: {
      lessThan: 110,
      greaterThan: 129,
      between: {
        lower: 110,
        upper: 129,
      },
    },
  },

  {
    id: 'jellyfish-naptime',
    context: {
      setting: 'jellyfish sleep monitoring',
      individualDescription: 'one jellyfish observed during a nap',
      variableDescription: 'nap duration',
      unit: 'hours',
      tone: 'careful ecological context',
      variationProfile: {
        openingStyle: 'conservation monitoring scenario',
        toneGuidance:
          'Use careful ecological language. Avoid dramatizing the scenario.',
        vocabularySuggestions: [
          'nap duration',
          'jellyfish sleep monitoring',
          'sample mean',
          'hours',
          'ecological context',
        ],
        seedPhraseInContext:
          'Just like people, jellyfish sleep for around eight hours a day, and take more naps after a bad night’s sleep.',
        avoidPhrases: ['hero turtles', 'survival race'],
        contextDetails: [
          'Each observation is the duration of one jellyfish nap.',
          'The sample mean is calculated from a group of jellyfish naps.',
          'The context should preserve the ecological setting without adding emotional claims.',
        ],
      },
    },
    individualRandomVariableDescription:
      'the duration of one randomly selected jellyfish nap',
    populationMean: 8,
    populationStandardDeviation: 1.5,
    populationShape: 'unknown',
    defaultSampleSize: 61,
    suggestedSampleMeanThresholds: {
      lessThan: 7.5,
      greaterThan: 8.2,
      between: {
        lower: 7.5,
        upper: 8.2,
      },
    },
  },

  {
    id: 'weed-eating-donkeys',
    context: {
      setting: 'donkey grazing behavior monitoring',
      individualDescription: 'one donkey observed while grazing',
      variableDescription: 'amount of gardenweeds eaten',
      unit: 'grams',
      tone: 'careful conservation context',
      variationProfile: {
        openingStyle: 'conservation monitoring scenario',
        toneGuidance:
          'Use careful ecological language. Avoid dramatizing the scenario.',
        vocabularySuggestions: [
          'gardenweed consumption',
          'invasive plants',
          'conservation monitoring',
          'sample mean',
          'grazing behavior',
          'grams',
        ],
        seedPhraseInContext:
          'Doñana National Park in Spain has a ‘Firefighting Donkey Battalion’. By eating weeds, the donkeys cut down the risk of forest fires. They haven’t had a wildfire for nine years.',
        avoidPhrases: [''],
        contextDetails: [
          'Each observation is the amount of gardenweed eaten by one donkey during a grazing session.',
          'The sample mean is calculated from a group of donkeys.',
          'The context should preserve the conservation setting.',
        ],
      },
    },
    individualRandomVariableDescription:
      'the amount of gardenweed eaten by one randomly selected donkey during a grazing session',
    populationMean: 1100,
    populationStandardDeviation: 100,
    populationShape: 'normal',
    defaultSampleSize: 22,
    suggestedSampleMeanThresholds: {
      lessThan: 1080,
      greaterThan: 1144,
      between: {
        lower: 1080,
        upper: 1144,
      },
    },
  },

  {
    id: 'number-of-words-in-a-will',
    context: {
      setting: 'French literary context',
      individualDescription: 'one will analyzed',
      variableDescription: 'number of words in the will',
      unit: 'words',
      tone: 'careful literary context',
      variationProfile: {
        openingStyle: 'literary analysis scenario',
        toneGuidance:
          'Use careful literary language. Avoid dramatizing the scenario.',
        vocabularySuggestions: [
          'will',
          'literary analysis',
          'sample mean',
          'words',
          'French literature',
        ],
        seedPhraseInContext:
          'The French satirist Francois Rabelais wrote a will that consisted of one line. It reportedly said: ‘I have no available property, I owe a great deal; the rest I give to the poor’.',
        avoidPhrases: [''],
        contextDetails: [
          'Each observation is the number of words in one will.',
          'The sample mean is calculated from a group of wills.',
          'The context should preserve the literary setting without adding emotional claims.',
        ],
      },
    },
    individualRandomVariableDescription:
      'the number of words in one randomly selected will',
    populationMean: 2500,
    populationStandardDeviation: 100,
    populationShape: 'skewed-right',
    defaultSampleSize: 54,
    suggestedSampleMeanThresholds: {
      lessThan: 2531,
      greaterThan: 2542,
      between: {
        lower: 2531,
        upper: 2542,
      },
    },
  },
];
