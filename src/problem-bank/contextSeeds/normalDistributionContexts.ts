export type NormalDistributionContextSeed = {
  id: string;

  setting: string;

  variableDescription: string;

  randomVariableDescription: string;

  unit: string;

  realisticMeanRange: [number, number];

  realisticStandardDeviationRange: [number, number];

  suggestedThresholdOffsetsInStandardDeviations: number[];

  tone:
    | 'academic'
    | 'applied'
    | 'absurdist'
    | 'conversational'
    | 'curiosity'
    | 'dry humor'
    | 'everyday'
    | 'historical'
    | 'humorous'
    | 'informative'
    | 'meta-textbook'
    | 'playful'
    | 'quality-control'
    | 'satirical'
    | 'scientific'
    | 'research'
    | 'technology';

  notes?: string[];

  variationProfile?: {
    openingStyle?:
      | 'direct'
      | 'conversational'
      | 'research'
      | 'quality-control'
      | 'curiosity';
    toneGuidance?: string;
    vocabularySuggestions?: string[];
    seedPhrasesInContext?: string[];
    avoidPhrases?: string[];
    contextDetails?: string[];
  };
};

export const normalDistributionContextSeeds: NormalDistributionContextSeed[] = [
  {
    id: 'cat-weight',
    setting: 'animal biology',
    variableDescription: 'weight of an adult cat',
    randomVariableDescription: 'the weight of a randomly selected adult cat',
    unit: 'kg',
    realisticMeanRange: [3.5, 6],
    realisticStandardDeviationRange: [0.4, 1.2],
    suggestedThresholdOffsetsInStandardDeviations: [-1.5, -1, 1, 1.5],
    tone: 'everyday',
    variationProfile: {
      openingStyle: 'conversational',
      toneGuidance: 'Friendly and engaging, as if discussing a common pet.',
      vocabularySuggestions: ['kitten', 'feline', 'purr'],
      seedPhrasesInContext: [
        'According to a study by the University of Liverpool and Liverpool John Moores University, all cats have "an element of psychopathy".',
      ],
      avoidPhrases: ['stray', 'feral'],
      contextDetails: ['Consider different breeds and their typical weights.'],
    },
    notes: [
      'Good introductory context.',
      'Use values that stay positive and realistic.',
    ],
  },

  {
    id: 'pineapple-height',
    setting: 'botany / food science',
    variableDescription: 'height of a mature pineapple',
    randomVariableDescription:
      'the height of a randomly selected mature pineapple',
    unit: 'cm',
    realisticMeanRange: [25, 35],
    realisticStandardDeviationRange: [3, 6],
    suggestedThresholdOffsetsInStandardDeviations: [-2, -1, 1, 2],
    tone: 'playful',
    variationProfile: {
      openingStyle: 'conversational',
      toneGuidance: 'Light-hearted and fun, suitable for playful contexts.',
      vocabularySuggestions: ['tropical', 'fruit', 'sweet'],
      seedPhrasesInContext: [
        'During WWII, some American soldiers made a pineapple drink known as “torpedo juice.”',
      ],
      avoidPhrases: ['rotten', 'spoiled'],
      contextDetails: [
        'The historical drink involved pineapple juice and alcohol connected to torpedoes, but keep this detail brief in generated problems.',
        'Consider different pineapple varieties and their typical heights.',
      ],
    },
    notes: [
      'Pairs well with humorous or unusual food-history contexts.',
      'Good for less-than, between, and percentile questions.',
    ],
  },

  {
    id: 'keyboard-battery-life',
    setting: 'consumer technology',
    variableDescription: 'battery life of a wireless keyboard',
    randomVariableDescription:
      'the battery life of a randomly selected wireless keyboard',
    unit: 'hours',
    realisticMeanRange: [30, 80],
    realisticStandardDeviationRange: [5, 15],
    suggestedThresholdOffsetsInStandardDeviations: [-1.5, -1, 1, 1.5],
    tone: 'technology',
    notes: [
      'Good applied technology context.',
      'Works well for greater-than and less-than probability questions.',
    ],
    variationProfile: {
      openingStyle: 'direct',
      toneGuidance: 'Clear and concise, suitable for technology contexts.',
      vocabularySuggestions: ['wireless', 'battery', 'keyboard'],
      seedPhrasesInContext: [
        'To HUNT AND PECK is to use only two fingers to type on a computer keyboard.',
      ],
      avoidPhrases: ['dead', 'broken'],
      contextDetails: [
        'Consider different brands and their typical battery life.',
      ],
    },
  },

  {
    id: 'sprinter-reaction-time',
    setting: 'social science / sports science',
    variableDescription: 'reaction time of a sprinter at the starting signal',
    randomVariableDescription:
      'the reaction time of a randomly selected sprinter at the starting signal',
    unit: 'seconds',
    realisticMeanRange: [0.12, 0.25],
    realisticStandardDeviationRange: [0.01, 0.04],
    suggestedThresholdOffsetsInStandardDeviations: [-1.5, -1, 1, 1.5],
    tone: 'scientific',
    variationProfile: {
      openingStyle: 'research',
      toneGuidance:
        'Objective and precise, as if reporting scientific findings.',
      vocabularySuggestions: ['athlete', 'performance', 'start'],
      avoidPhrases: ['slow', 'fast'],
      contextDetails: [
        'Consider different levels of athletes and their typical reaction times.',
      ],
    },
    notes: [
      'Use careful decimal values.',
      'Good for scientific register because the context is measurement-based.',
    ],
  },

  {
    id: 'plant-growth',
    setting: 'environmental science',
    variableDescription: 'weekly growth of a greenhouse plant',
    randomVariableDescription:
      'the weekly growth of a randomly selected greenhouse plant',
    unit: 'cm',
    realisticMeanRange: [4, 12],
    realisticStandardDeviationRange: [0.8, 2.5],
    suggestedThresholdOffsetsInStandardDeviations: [-1.5, -1, 1, 1.5],
    tone: 'scientific',
    variationProfile: {
      openingStyle: 'research',
      toneGuidance:
        'Objective and precise, as if reporting scientific findings.',
      vocabularySuggestions: ['plant', 'growth', 'greenhouse'],
      avoidPhrases: [
        'the weekly growth of a randomly selected plant in a wild environment',
      ],
      seedPhrasesInContext: [
        'Tomato plants emit distress signals when under attack. However, some caterpillars can use the chemicals in their saliva to ‘silence’ them.',
      ],
      contextDetails: [
        'Consider different plant species and their typical growth rates.',
      ],
    },
    notes: [
      'Good STEM context.',
      'Can be adapted for biology, agriculture, or environmental science.',
    ],
  },

  {
    id: 'commute-time',
    setting: 'urban transportation',
    variableDescription: 'morning commute time for students',
    randomVariableDescription:
      'the morning commute time of a randomly selected student',
    unit: 'minutes',
    realisticMeanRange: [25, 70],
    realisticStandardDeviationRange: [5, 18],
    suggestedThresholdOffsetsInStandardDeviations: [-1.5, -1, 1, 1.5],
    tone: 'everyday',
    notes: [
      'Relatable student context.',
      'Good for discussing interpretation in context.',
    ],
  },

  {
    id: 'coffee-temperature',
    setting: 'food science',
    variableDescription: 'serving temperature of a cup of coffee',
    randomVariableDescription:
      'the serving temperature of a randomly selected cup of coffee',
    unit: '°C',
    realisticMeanRange: [55, 75],
    realisticStandardDeviationRange: [3, 8],
    suggestedThresholdOffsetsInStandardDeviations: [-2, -1, 1, 2],
    tone: 'everyday',

    variationProfile: {
      openingStyle: 'conversational',
      toneGuidance: 'Friendly and engaging, suitable for everyday contexts.',
      vocabularySuggestions: ['coffee', 'temperature', 'hot'],
      seedPhrasesInContext: [
        'A barista serves coffee at varying temperatures depending on the type of drink and customer preference.',
      ],
    },
    notes: [
      'Works well for safety/comfort contexts.',
      'Avoid extreme thresholds that imply unsafe or unrealistic temperatures.',
    ],
  },

  {
    id: 'bird-wingspan',
    setting: 'wildlife biology',
    variableDescription: 'wingspan of an adult bird of a certain species',
    randomVariableDescription:
      'the wingspan of a randomly selected adult bird of that species',
    unit: 'cm',
    realisticMeanRange: [35, 120],
    realisticStandardDeviationRange: [4, 15],
    suggestedThresholdOffsetsInStandardDeviations: [-1.5, -1, 1, 1.5],
    tone: 'scientific',

    variationProfile: {
      openingStyle: 'conversational',
      toneGuidance: 'Friendly and engaging, suitable for everyday contexts.',
      vocabularySuggestions: ['bird', 'wingspan', 'species'],
      seedPhrasesInContext: [
        'Scientists hoping to track Australian magpies were foiled because the birds pecked each other’s tracking devices off.',
      ],
    },
    notes: [
      'Good for biology and environmental wildlife management contexts.',
      'Can be customized by species later.',
    ],
  },

  {
    id: 'bread-loaf-mass',
    setting: 'food production',
    variableDescription: 'mass of a loaf of bread from a bakery',
    randomVariableDescription:
      'the mass of a randomly selected loaf of bread from a bakery',
    unit: 'g',
    realisticMeanRange: [450, 900],
    realisticStandardDeviationRange: [20, 80],
    suggestedThresholdOffsetsInStandardDeviations: [-2, -1, 1, 2],
    tone: 'historical',
    variationProfile: {
      openingStyle: 'conversational',
      toneGuidance:
        'Informative and engaging, suitable for historical contexts.',
      vocabularySuggestions: ['bread', 'bakery', 'loaf'],
      seedPhrasesInContext: [
        'The winter of 1708 was so cold, loaves of bread froze and had to be cut with an axe.',
      ],
      avoidPhrases: ['stale', 'moldy'],
    },
    notes: [
      'Can be adapted to historical or playful food contexts.',
      'Good for less-than and quality-control examples.',
    ],
  },

  {
    id: 'phone-screen-time',
    setting: 'student life',
    variableDescription: 'daily screen time on a smartphone',
    randomVariableDescription:
      'the daily smartphone screen time of a randomly selected student',
    unit: 'hours',
    realisticMeanRange: [3, 8],
    realisticStandardDeviationRange: [0.8, 2],
    suggestedThresholdOffsetsInStandardDeviations: [-1.5, -1, 1, 1.5],
    tone: 'everyday',
    variationProfile: {
      openingStyle: 'conversational',
      toneGuidance: 'Relatable and casual, suitable for student life contexts.',
      vocabularySuggestions: ['screen time', 'smartphone', 'daily'],
      seedPhrasesInContext: [
        'In South Korea, there is a fake prison where overworked office workers and students can take a break for a day or two. ‘Inmates’ are not allowed to talk with each other or use mobile phones.',
      ],
      avoidPhrases: ['addiction', 'excessive'],
    },
    notes: [
      'Relatable but potentially sensitive; avoid judgmental wording.',
      'Good for probability interpretation.',
    ],
  },

  // End of calibration set.

  // Note: The following contexts are not part of the calibration set but are intended for use in course problems. They can be adapted to fit various problem types and difficulty levels.
  {
    id: 'Syria-yoyos-ban',
    setting: 'historical / cultural',
    variableDescription: 'annual rainfall in Syria',
    randomVariableDescription:
      'the annual rainfall in Syria in a randomly selected year',
    unit: 'millimeters',
    realisticMeanRange: [200, 600],
    realisticStandardDeviationRange: [50, 150],
    suggestedThresholdOffsetsInStandardDeviations: [-1.5, -1, 1, 1.5],
    tone: 'everyday',
    variationProfile: {
      openingStyle: 'conversational',
      toneGuidance: 'Relatable and casual, suitable for historical contexts.',
      vocabularySuggestions: ['rainfall', 'Syria', 'year'],
      seedPhrasesInContext: [
        'In 1933, Syria banned yo-yos after they were blamed for a severe drought. The day after the ban, it rained heavily.',
      ],
      avoidPhrases: [''],
    },
    notes: [
      'Interesting historical context.',
      'Good for less-than and greater-than probability questions.',
    ],
  },

  {
    id: 'intense-dreams',
    setting: 'psychological / health',
    variableDescription: 'intensity of dreams experienced by individuals',
    randomVariableDescription:
      'the intensity of dreams experienced by a randomly selected individual',
    unit: 'subjective intensity scale',
    realisticMeanRange: [0, 100],
    realisticStandardDeviationRange: [10, 30],
    suggestedThresholdOffsetsInStandardDeviations: [-1.5, -1, 1, 1.5],
    tone: 'everyday',
    variationProfile: {
      openingStyle: 'conversational',
      toneGuidance:
        'Relatable and casual, suitable for psychological contexts.',
      vocabularySuggestions: ['dreams', 'intensity', 'sleep'],
      seedPhrasesInContext: [
        'People who experience particularly intense dreams can wake up feeling exhausted and drained, even if they’ve slept through the night.',
      ],
      avoidPhrases: [''],
    },
    notes: [
      'Interesting psychological context.',
      'Good for less-than and greater-than probability questions, as well as discussions about subjective experiences.',
    ],
  },

  {
    id: 'wind-speed',
    setting: 'environmental / weather',
    variableDescription: 'wind speed experienced by individuals during a storm',
    randomVariableDescription:
      'the wind speed experienced by a randomly selected individual during a storm',
    unit: 'km/h',
    realisticMeanRange: [20, 100],
    realisticStandardDeviationRange: [5, 25],
    suggestedThresholdOffsetsInStandardDeviations: [-2.5, -1, 1, 2.5],
    tone: 'everyday',
    variationProfile: {
      openingStyle: 'conversational',
      toneGuidance:
        'Relatable and casual, suitable for environmental contexts.',
      vocabularySuggestions: ['wind', 'speed', 'weather'],
      seedPhrasesInContext: [
        'In the Great Storm of 1703, over 400 wooden windmills were destroyed, many of which caught fire because of friction caused by their blades turning so fast.',
      ],
      avoidPhrases: [''],
    },
    notes: [
      'Interesting environmental context.',
      'Good for less-than and greater-than probability questions, as well as discussions about subjective experiences.',
    ],
  },

  {
    id: 'weight-of-pigeon',
    setting: 'historical / unusual events',
    variableDescription: 'weight of a pigeon found in a chimney',
    randomVariableDescription:
      'the weight of a randomly selected pigeon found in a chimney',
    unit: 'grams',
    realisticMeanRange: [200, 500],
    realisticStandardDeviationRange: [10, 20],
    suggestedThresholdOffsetsInStandardDeviations: [-2.5, -1, 1, 2.5],
    tone: 'everyday',
    variationProfile: {
      openingStyle: 'conversational',
      toneGuidance: 'Relatable and casual, suitable for historical contexts.',
      vocabularySuggestions: ['pigeon', 'weight', 'chimney'],
      seedPhrasesInContext: [
        'In the 1980s, a man found the remains of a pigeon in his chimney. A coded message from World War Two was attached to its leg. To this day, no one has decoded it.',
      ],
      avoidPhrases: [''],
    },
    notes: [
      'Interesting historical context.',
      'Good for less-than and greater-than probability questions, as well as discussions about subjective experiences.',
    ],
  },

  {
    id: 'pigeon-coded-message',
    setting: 'historical / unusual events',
    variableDescription: 'time taken to decode a message found on a pigeon',
    randomVariableDescription:
      'the time taken to decode a message found on a randomly selected pigeon',
    unit: 'minutes',
    realisticMeanRange: [30, 120],
    realisticStandardDeviationRange: [10, 30],
    suggestedThresholdOffsetsInStandardDeviations: [-2.5, -1, 1, 2.5],
    tone: 'everyday',
    variationProfile: {
      openingStyle: 'conversational',
      toneGuidance: 'Relatable and casual, suitable for historical contexts.',
      vocabularySuggestions: ['pigeon', 'message', 'chimney'],
      seedPhrasesInContext: [
        'In the 1980s, a man found the remains of a pigeon in his chimney. A coded message from World War Two was attached to its leg. To this day, no one has decoded it.',
      ],
      avoidPhrases: [''],
    },
    notes: [
      'Interesting historical context.',
      'Good for less-than and greater-than probability questions, as well as discussions about subjective experiences.',
    ],
  },

  {
    id: 'marathon-completion-time',
    setting: 'historical / unusual events',
    variableDescription: 'time taken to complete a marathon',
    randomVariableDescription:
      'the time taken to complete a marathon by a randomly selected runner',
    unit: 'minutes',
    realisticMeanRange: [120, 240],
    realisticStandardDeviationRange: [15, 45],
    suggestedThresholdOffsetsInStandardDeviations: [-2.5, -1, 1, 2.5],
    tone: 'everyday',
    variationProfile: {
      openingStyle: 'conversational',
      toneGuidance: 'Relatable and casual, suitable for historical contexts.',
      vocabularySuggestions: ['marathon', 'runner', 'time'],
      seedPhrasesInContext: [
        'IThe slowest ever marathon was run by Japan’s Shizo Kanakuri, who began a race at the 1912 Olympics and finished it in 1967. It took him 54 years, eight months, six days, five hours, 32 minutes and 20.3 seconds.',
      ],
      avoidPhrases: [''],
    },
    notes: ['Interesting historical context.'],
  },

  {
    id: 'giraffes-neck-length',
    setting: 'historical / unusual events',
    variableDescription: "length of a giraffe's neck",
    randomVariableDescription:
      "the length of a giraffe's neck by a randomly selected giraffe",
    unit: 'meters',
    realisticMeanRange: [4, 6],
    realisticStandardDeviationRange: [0.5, 1.5],
    suggestedThresholdOffsetsInStandardDeviations: [-2.5, -1, 1, 2.5],
    tone: 'everyday',
    variationProfile: {
      openingStyle: 'conversational',
      toneGuidance:
        'Relatable and casual, suitable for animal health contexts.',
      vocabularySuggestions: ['giraffe', 'neck', 'length'],
      seedPhrasesInContext: [
        'There are four species of giraffe. Although you can’t tell them apart by looking at them, they are as different from each other as grizzly and polar bears are.',
      ],
      avoidPhrases: [''],
    },
    notes: ['Interesting animal health context.'],
  },

  {
    id: 'goffins-cockatoos-beak-length',
    setting: 'biological / animal health',
    variableDescription: "length of a Goffin’s cockatoo's beak",
    randomVariableDescription:
      "the length of a randomly selected Goffin’s cockatoo's beak",
    unit: 'mm',
    realisticMeanRange: [20, 40],
    realisticStandardDeviationRange: [2, 6],
    suggestedThresholdOffsetsInStandardDeviations: [-2.5, -1, 1, 2.5],
    tone: 'everyday',
    variationProfile: {
      openingStyle: 'conversational',
      toneGuidance:
        'Relatable and casual, suitable for animal health contexts.',
      vocabularySuggestions: ['Goffin’s cockatoo', 'beak', 'length'],
      seedPhrasesInContext: [
        'A study has shown that Goffin’s cockatoos can make and use three different wooden tools to extract seeds: a wedge to open a fruit; a ‘knife’ to cut through a layer around the seed; and a ‘spoon’ to get the seed matter.',
      ],
      avoidPhrases: [''],
    },
    notes: ['Interesting animal health context.'],
  },

  {
    id: 'delay-time-for-planes',
    setting: 'transportation / aviation',
    variableDescription: 'delay time for a flight',
    randomVariableDescription: 'the delay time for a randomly selected flight',
    unit: 'minutes',
    realisticMeanRange: [15, 60],
    realisticStandardDeviationRange: [5, 20],
    suggestedThresholdOffsetsInStandardDeviations: [-2.5, -1, 1, 2.5],
    tone: 'everyday',
    variationProfile: {
      openingStyle: 'conversational',
      toneGuidance:
        'Relatable and casual, suitable for transportation contexts.',
      vocabularySuggestions: ['flight', 'delay', 'time'],
      seedPhrasesInContext: [
        'Flights from JFK are often delayed to move turtles off the runways.',
      ],
      avoidPhrases: [''],
    },
    notes: ['Interesting transportation context.'],
  },

  {
    id: 'sleep-duration',
    setting: 'health / lifestyle',
    variableDescription: 'duration of sleep',
    randomVariableDescription:
      'the duration of sleep for a randomly selected individual',
    unit: 'hours',
    realisticMeanRange: [6, 9],
    realisticStandardDeviationRange: [1, 2],
    suggestedThresholdOffsetsInStandardDeviations: [-2.5, -1, 1, 2.5],
    tone: 'everyday',
    variationProfile: {
      openingStyle: 'conversational',
      toneGuidance:
        'Relatable and casual, suitable for health and lifestyle contexts.',
      vocabularySuggestions: ['sleep', 'duration', 'hours'],
      seedPhrasesInContext: [
        'The brand name of the insomnia drug ‘Ambien’ is a play on ‘a.m.’ and ‘bien’, morning and the French for ‘good’, because it is supposed to help you feel well-rested when you wake up.',
      ],
      avoidPhrases: [''],
    },
    notes: ['Interesting health and lifestyle context.'],
  },
];
