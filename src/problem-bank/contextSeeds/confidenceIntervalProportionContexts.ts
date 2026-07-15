import type { ConfidenceIntervalProportionProblem } from '../schemas/confidenceIntervalProportion.schema';

type ConfidenceIntervalProportionContextSeed = {
  id: string;

  context: ConfidenceIntervalProportionProblem['context'];

  parameterDescription: string;

  defaultSampleSize: number;
  defaultSuccessCount: number;

  defaultMarginOfError: number;
  defaultPreliminaryEstimate: number;

  suggestedConfidenceLevels: {
    twoSided: number;
    lowerBound: number;
    upperBound: number;
    sampleSizeWithPreliminaryEstimate: number;
    sampleSizeNoPreliminaryEstimate: number;
  };
};

export const confidenceIntervalProportionContexts: ConfidenceIntervalProportionContextSeed[] =
  [
    {
      id: 'students-use-transit',
      context: {
        setting: 'student transportation survey',
        individualDescription:
          'one student responding to a transportation survey',
        successDescription:
          'the student usually uses public transit to get to campus',
        failureDescription:
          'the student does not usually use public transit to get to campus',
        tone: 'everyday college context',
        variationProfile: {
          openingStyle: 'student survey scenario',
          toneGuidance:
            'Use realistic student-life language while keeping the population proportion task clear.',
          vocabularySuggestions: [
            'student survey',
            'public transit',
            'sample proportion',
            'confidence interval',
            'population proportion',
          ],
          seedPhraseInContext:
            'A college surveys students about how they usually travel to campus.',
          avoidPhrases: ['commuting chaos', 'traffic nightmare'],
          contextDetails: [
            'Each student either usually uses public transit or does not.',
            'The goal is to estimate the true proportion of students who usually use public transit.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of students who usually use public transit to get to campus',
      defaultSampleSize: 240,
      defaultSuccessCount: 138,
      defaultMarginOfError: 0.04,
      defaultPreliminaryEstimate: 0.58,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 95,
        upperBound: 95,
        sampleSizeWithPreliminaryEstimate: 95,
        sampleSizeNoPreliminaryEstimate: 95,
      },
    },

    {
      id: 'voters-support-bike-lanes',
      context: {
        setting: 'municipal opinion poll',
        individualDescription: 'one resident responding to a municipal survey',
        successDescription: 'the resident supports adding protected bike lanes',
        failureDescription:
          'the resident does not support adding protected bike lanes',
        tone: 'civic survey context',
        variationProfile: {
          openingStyle: 'public opinion survey scenario',
          toneGuidance:
            'Use neutral civic language. Do not imply that one response is better than the other.',
          vocabularySuggestions: [
            'municipal survey',
            'resident',
            'protected bike lanes',
            'support',
            'population proportion',
          ],
          seedPhraseInContext:
            'A municipality surveys residents about a proposed bike-lane project.',
          avoidPhrases: ['bike-lane war', 'angry drivers'],
          contextDetails: [
            'Each resident either supports the proposal or does not.',
            'The goal is to estimate the true proportion of residents who support the proposal.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of residents who support adding protected bike lanes',
      defaultSampleSize: 500,
      defaultSuccessCount: 285,
      defaultMarginOfError: 0.035,
      defaultPreliminaryEstimate: 0.55,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 90,
        upperBound: 90,
        sampleSizeWithPreliminaryEstimate: 95,
        sampleSizeNoPreliminaryEstimate: 95,
      },
    },

    {
      id: 'plants-germinate',
      context: {
        setting: 'botany germination study',
        individualDescription: 'one seed planted under controlled conditions',
        successDescription: 'the seed germinates',
        failureDescription: 'the seed does not germinate',
        tone: 'scientific but accessible',
        variationProfile: {
          openingStyle: 'biology lab scenario',
          toneGuidance:
            'Use clear scientific language without making the context overly technical.',
          vocabularySuggestions: [
            'germination',
            'controlled conditions',
            'seed',
            'sample proportion',
            'confidence bound',
          ],
          seedPhraseInContext:
            'A botany lab studies seed germination under controlled conditions.',
          avoidPhrases: ['plant magic', 'lucky seed'],
          contextDetails: [
            'Each seed either germinates or does not germinate.',
            'The goal is to estimate the true germination proportion under these conditions.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of seeds that germinate under these conditions',
      defaultSampleSize: 180,
      defaultSuccessCount: 139,
      defaultMarginOfError: 0.05,
      defaultPreliminaryEstimate: 0.75,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 95,
        upperBound: 95,
        sampleSizeWithPreliminaryEstimate: 90,
        sampleSizeNoPreliminaryEstimate: 95,
      },
    },

    {
      id: 'cats-choose-sunny-window',
      context: {
        setting: 'animal behaviour observation',
        individualDescription: 'one cat observed while choosing a resting spot',
        successDescription: 'the cat chooses the sunny window spot',
        failureDescription: 'the cat chooses another resting spot',
        tone: 'light but statistically clear',
        variationProfile: {
          openingStyle: 'observational study scenario',
          toneGuidance:
            'Use friendly but not childish language. Preserve the population proportion task.',
          vocabularySuggestions: [
            'cat',
            'sunny window spot',
            'observation',
            'sample proportion',
            'population proportion',
          ],
          seedPhraseInContext:
            'In an animal behaviour study, cats are observed choosing resting spots.',
          avoidPhrases: ['cat kingdom', 'sunbeam royalty'],
          contextDetails: [
            'Each cat either chooses the sunny window spot or does not.',
            'The goal is to estimate the true proportion of cats that choose the sunny window spot.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of cats that choose the sunny window spot',
      defaultSampleSize: 150,
      defaultSuccessCount: 87,
      defaultMarginOfError: 0.06,
      defaultPreliminaryEstimate: 0.6,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 90,
        upperBound: 90,
        sampleSizeWithPreliminaryEstimate: 95,
        sampleSizeNoPreliminaryEstimate: 95,
      },
    },

    {
      id: 'emails-flagged-spam',
      context: {
        setting: 'email filtering evaluation',
        individualDescription:
          'one incoming email checked by a filtering system',
        successDescription: 'the email is correctly flagged as spam',
        failureDescription: 'the email is not correctly flagged as spam',
        tone: 'applied technology context',
        variationProfile: {
          openingStyle: 'technology evaluation scenario',
          toneGuidance:
            'Use applied technology language without introducing machine-learning details.',
          vocabularySuggestions: [
            'email filter',
            'flagged as spam',
            'incoming email',
            'classification',
            'confidence interval',
          ],
          seedPhraseInContext:
            'An organization evaluates how often its email filter correctly flags spam messages.',
          avoidPhrases: ['AI magic', 'robot detective'],
          contextDetails: [
            'Each incoming email is classified as correctly flagged or not.',
            'The goal is to estimate the true proportion of spam emails correctly flagged by the system.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of spam emails correctly flagged by the filtering system',
      defaultSampleSize: 320,
      defaultSuccessCount: 291,
      defaultMarginOfError: 0.03,
      defaultPreliminaryEstimate: 0.9,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 95,
        upperBound: 95,
        sampleSizeWithPreliminaryEstimate: 95,
        sampleSizeNoPreliminaryEstimate: 95,
      },
    },

    {
      id: 'cars-pass-emissions-test',
      context: {
        setting: 'vehicle emissions testing',
        individualDescription:
          'one car tested at an emissions inspection station',
        successDescription: 'the car passes the emissions test',
        failureDescription: 'the car does not pass the emissions test',
        tone: 'applied civic context',
        variationProfile: {
          openingStyle: 'inspection scenario',
          toneGuidance:
            'Use practical public-service language while preserving the population proportion structure.',
          vocabularySuggestions: [
            'emissions test',
            'inspection station',
            'passes',
            'sample proportion',
            'confidence bound',
          ],
          seedPhraseInContext:
            'An emissions inspection station records whether cars pass their tests.',
          avoidPhrases: ['pollution panic', 'car chaos'],
          contextDetails: [
            'Each car either passes the emissions test or does not.',
            'The goal is to estimate the true proportion of cars that pass the test.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of cars that pass the emissions test',
      defaultSampleSize: 260,
      defaultSuccessCount: 211,
      defaultMarginOfError: 0.04,
      defaultPreliminaryEstimate: 0.8,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 95,
        upperBound: 95,
        sampleSizeWithPreliminaryEstimate: 90,
        sampleSizeNoPreliminaryEstimate: 95,
      },
    },

    {
      id: 'turtles-reach-water',
      context: {
        setting: 'sea turtle conservation monitoring',
        individualDescription: 'one hatchling released near the shore',
        successDescription: 'the hatchling reaches the water',
        failureDescription: 'the hatchling does not reach the water',
        tone: 'careful conservation context',
        variationProfile: {
          openingStyle: 'conservation monitoring scenario',
          toneGuidance:
            'Use careful ecological language. Avoid dramatizing the scenario.',
          vocabularySuggestions: [
            'hatchling',
            'reaches the water',
            'conservation monitoring',
            'sample proportion',
            'confidence interval',
          ],
          seedPhraseInContext:
            'In a conservation monitoring project, sea turtle hatchlings are observed after release near the shore.',
          avoidPhrases: ['hero turtles', 'survival race'],
          contextDetails: [
            'Each hatchling either reaches the water or does not.',
            'The goal is to estimate the true proportion of hatchlings that reach the water.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of hatchlings that reach the water',
      defaultSampleSize: 240,
      defaultSuccessCount: 154,
      defaultMarginOfError: 0.05,
      defaultPreliminaryEstimate: 0.65,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 90,
        upperBound: 90,
        sampleSizeWithPreliminaryEstimate: 95,
        sampleSizeNoPreliminaryEstimate: 95,
      },
    },

    {
      id: 'jellyfish-detected',
      context: {
        setting: 'marine biology survey',
        individualDescription:
          'one survey location checked along a coastal transect',
        successDescription: 'jellyfish are detected at the survey location',
        failureDescription: 'jellyfish are not detected at the survey location',
        tone: 'scientific field-study context',
        variationProfile: {
          openingStyle: 'marine survey scenario',
          toneGuidance:
            'Use scientific field-study language while keeping the inference task understandable.',
          vocabularySuggestions: [
            'marine survey',
            'transect',
            'jellyfish detected',
            'sample proportion',
            'confidence interval',
          ],
          seedPhraseInContext:
            'A marine biology team checks survey locations along a coastal transect for jellyfish.',
          avoidPhrases: ['jellyfish invasion', 'ocean mystery'],
          contextDetails: [
            'Each survey location is classified according to whether jellyfish are detected.',
            'The goal is to estimate the true proportion of survey locations where jellyfish are detected.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of survey locations where jellyfish are detected',
      defaultSampleSize: 140,
      defaultSuccessCount: 59,
      defaultMarginOfError: 0.07,
      defaultPreliminaryEstimate: 0.42,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 95,
        upperBound: 95,
        sampleSizeWithPreliminaryEstimate: 90,
        sampleSizeNoPreliminaryEstimate: 95,
      },
    },

    // End of context seeds for testing.  Start of contexts for course content.

    {
      id: 'tears-contain-natural-painkiller',
      context: {
        setting: 'scientific research on human tears',
        individualDescription: 'one person experiencing emotional crying',
        successDescription: "the person's tears contain a natural painkiller",
        failureDescription:
          "the person's tears do not contain a natural painkiller",
        tone: 'scientific research context',
        variationProfile: {
          openingStyle: 'research study scenario',
          toneGuidance:
            'Use scientific research language while keeping the inference task understandable.',
          vocabularySuggestions: [
            'human tears',
            'natural painkiller',
            'emotional crying',
            'sample proportion',
            'confidence interval',
          ],
          seedPhraseInContext:
            'When you cry as a result of emotion, your tears contain a natural painkiller.',
          avoidPhrases: [''],
          contextDetails: [
            'Each person either has tears that contain a natural painkiller or does not.',
            'The goal is to estimate the true proportion of people whose tears contain a natural painkiller.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of people whose tears contain a natural painkiller',
      defaultSampleSize: 100,
      defaultSuccessCount: 30,
      defaultMarginOfError: 0.05,
      defaultPreliminaryEstimate: 0.3,
      suggestedConfidenceLevels: {
        twoSided: 80,
        lowerBound: 80,
        upperBound: 80,
        sampleSizeWithPreliminaryEstimate: 85,
        sampleSizeNoPreliminaryEstimate: 70,
      },
    },

    {
      id: 'ice-cream-victory',
      context: {
        setting: 'personal experience of eating ice cream after a victory',
        individualDescription: 'one person who has just experienced a victory',
        successDescription: 'the ice cream tastes sweeter to the person',
        failureDescription:
          'the ice cream does not taste sweeter to the person',
        tone: 'casual observation',
        variationProfile: {
          openingStyle: '',
          toneGuidance:
            'Use casual, everyday language to describe the experience of eating ice cream after a victory.',
          vocabularySuggestions: [
            'ice cream',
            'victory',
            'taste perception',
            'sample proportion',
            'confidence interval',
          ],
          seedPhraseInContext:
            'If you’ve just experienced a victory and eat an ice cream, it will taste sweeter.',
          avoidPhrases: [''],
          contextDetails: [
            'Each person either perceives the ice cream as tasting sweeter or does not.',
            'The goal is to estimate the true proportion of people who perceive ice cream as tasting sweeter after a victory.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of people who perceive ice cream as tasting sweeter after a victory',
      defaultSampleSize: 140,
      defaultSuccessCount: 42,
      defaultMarginOfError: 0.1,
      defaultPreliminaryEstimate: 0.4,
      suggestedConfidenceLevels: {
        twoSided: 85,
        lowerBound: 85,
        upperBound: 85,
        sampleSizeWithPreliminaryEstimate: 95,
        sampleSizeNoPreliminaryEstimate: 80,
      },
    },

    {
      id: 'seatbelt-estonia',
      context: {
        setting: 'ice roads in Estonia',
        individualDescription: 'one driver on the ice roads in Estonia',
        successDescription:
          'the driver is not wearing a seatbelt in case they need to escape their car quickly',
        failureDescription: 'the driver is wearing a seatbelt',
        tone: 'informative',
        variationProfile: {
          openingStyle: '',
          toneGuidance:
            'Use informative language to describe the unique driving conditions on the ice roads in Estonia.',
          vocabularySuggestions: ['ice roads', 'Estonia', 'seatbelt'],
          seedPhraseInContext:
            'There are ice roads in Estonia where it’s illegal to wear a seatbelt in case you need to escape your car quickly.',
          avoidPhrases: [''],
          contextDetails: [
            'Each driver either wears a seatbelt or does not while driving on the ice roads in Estonia.',
            'The goal is to estimate the true proportion of drivers who do not wear a seatbelt on the ice roads in Estonia.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of drivers who do not wear a seatbelt on the ice roads in Estonia',
      defaultSampleSize: 200,
      defaultSuccessCount: 50,
      defaultMarginOfError: 0.05,
      defaultPreliminaryEstimate: 0.25,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 95,
        upperBound: 95,
        sampleSizeWithPreliminaryEstimate: 95,
        sampleSizeNoPreliminaryEstimate: 90,
      },
    },

    {
      id: 'official-languages-new-zealand',
      context: {
        setting: 'New Zealand',
        individualDescription: 'one resident of New Zealand',
        successDescription:
          'the resident speaks both of the official languages',
        failureDescription:
          'the resident does not speak both of the official languages',
        tone: 'informative',
        variationProfile: {
          openingStyle: '',
          toneGuidance:
            'Use informative language to describe the official languages of New Zealand.',
          vocabularySuggestions: [
            'official languages',
            'New Zealand',
            'Te Reo Māori',
            'New Zealand Sign Language',
          ],
          seedPhraseInContext:
            'The only two legally recognised official languages of New Zealand are Te Reo Māori and New Zealand Sign Language.',
          avoidPhrases: [''],
          contextDetails: [
            'Each resident either speaks both of the official languages or does not.',
            'The goal is to estimate the true proportion of residents who speak both of the official languages in New Zealand.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of residents who speak both of the official languages in New Zealand',
      defaultSampleSize: 60,
      defaultSuccessCount: 15,
      defaultMarginOfError: 0.1,
      defaultPreliminaryEstimate: 0.25,
      suggestedConfidenceLevels: {
        twoSided: 99,
        lowerBound: 99,
        upperBound: 99,
        sampleSizeWithPreliminaryEstimate: 99,
        sampleSizeNoPreliminaryEstimate: 99,
      },
    },

    {
      id: 'swiss-cheese-funeral',
      context: {
        setting: 'Swiss village of Grimentz',
        individualDescription: 'one resident of the Swiss village of Grimentz',
        successDescription:
          'the resident keeps a cheese to be served at their funeral',
        failureDescription:
          'the resident does not keep a cheese to be served at their funeral',
        tone: 'funny and lighthearted',
        variationProfile: {
          openingStyle: '',
          toneGuidance:
            'Use humorous and lighthearted language to describe the unique tradition in the Swiss village of Grimentz.',
          vocabularySuggestions: [
            'Swiss village',
            'Grimentz',
            'cheese',
            'funeral tradition',
          ],
          seedPhraseInContext:
            'In the Swiss village of Grimentz, there it was traditional to keep a cheese to be served at your funeral. The goal was to live long enough that the cheese needed cutting with an axe when it was served.',
          avoidPhrases: [''],
          contextDetails: [
            'In Grimentz, it was customary for residents to keep a cheese to be served at their funeral.',
            'The tradition was meant to ensure that the cheese would be properly aged and ready for the funeral feast.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of residents in Grimentz who keep a cheese to be served at their funeral',
      defaultSampleSize: 80,
      defaultSuccessCount: 20,
      defaultMarginOfError: 0.09,
      defaultPreliminaryEstimate: 0.24,
      suggestedConfidenceLevels: {
        twoSided: 98,
        lowerBound: 98,
        upperBound: 98,
        sampleSizeWithPreliminaryEstimate: 98,
        sampleSizeNoPreliminaryEstimate: 98,
      },
    },

    {
      id: 'ai-romantic-partner',
      context: {
        setting: 'United States',
        individualDescription: 'young American men',
        successDescription:
          'the individual has chatted with an AI bot designed to simulate a romantic partner',
        failureDescription:
          'the individual has not chatted with an AI bot designed to simulate a romantic partner',
        tone: 'fun and lighthearted',
        variationProfile: {
          openingStyle: '',
          toneGuidance:
            'Use fun and lighthearted language to describe the phenomenon of young American men chatting with AI bots designed to simulate romantic partners.',
          vocabularySuggestions: [
            'AI bot',
            'romantic partner simulation',
            'chatting with AI',
            'young American men',
          ],
          seedPhraseInContext:
            'Nearly one in three young American men have chatted with an AI bot designed to simulate a romantic partner.',
          avoidPhrases: [''],
          contextDetails: [
            'The goal is to estimate the true proportion of young American men who have chatted with an AI bot designed to simulate a romantic partner.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of young American men who have chatted with an AI bot designed to simulate a romantic partner',
      defaultSampleSize: 150,
      defaultSuccessCount: 58,
      defaultMarginOfError: 0.2,
      defaultPreliminaryEstimate: 0.33,
      suggestedConfidenceLevels: {
        twoSided: 90,
        lowerBound: 90,
        upperBound: 90,
        sampleSizeWithPreliminaryEstimate: 90,
        sampleSizeNoPreliminaryEstimate: 90,
      },
    },

    {
      id: 'female-dragonflies-fake-death',
      context: {
        setting: 'in the wild',
        individualDescription: 'one female dragonfly',
        successDescription:
          'the female dragonfly fakes sudden death to avoid an unwanted male suitor',
        failureDescription:
          'the female dragonfly does not fake sudden death and may be approached by an unwanted male suitor',
        tone: 'informative and funny',
        variationProfile: {
          openingStyle: '',
          toneGuidance:
            'Use informative and funny language to describe the behavior of female dragonflies faking sudden death.',
          vocabularySuggestions: [
            'female dragonfly',
            'sudden death feigning',
            'unwanted male suitors',
          ],
          seedPhraseInContext:
            'Female dragonflies fake sudden death to avoid unwanted male suitors.',
          avoidPhrases: [''],
          contextDetails: [
            'The goal is to estimate the true proportion of female dragonflies that fake sudden death to avoid unwanted male suitors.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of female dragonflies that fake sudden death to avoid unwanted male suitors',
      defaultSampleSize: 200,
      defaultSuccessCount: 50,
      defaultMarginOfError: 0.1,
      defaultPreliminaryEstimate: 0.25,
      suggestedConfidenceLevels: {
        twoSided: 95,
        lowerBound: 95,
        upperBound: 95,
        sampleSizeWithPreliminaryEstimate: 95,
        sampleSizeNoPreliminaryEstimate: 95,
      },
    },

    {
      id: 'fire-alarm-wasabi',
      context: {
        setting: 'in a bedroom',
        individualDescription: 'one person who cannot hear a fire alarm',
        successDescription: 'the person wakes up when the fire alarm goes off',
        failureDescription:
          'the person does not wake up when the fire alarm goes off',
        tone: 'informative and practical',
        variationProfile: {
          openingStyle: '',
          toneGuidance:
            'Use informative and practical language to describe the device that wakes up people who cannot hear a fire alarm with the smell of wasabi.',
          vocabularySuggestions: [
            'fire alarm',
            'wasabi',
            'wake up device',
            'hearing impairment',
          ],
          seedPhraseInContext:
            'For people who cannot hear a fire alarm, Japanese researchers have created a device that wakes them up with the smell of wasabi.',
          avoidPhrases: [''],
          contextDetails: [
            'The goal is to estimate the true proportion of people who cannot hear a fire alarm and wake up when the device with the smell of wasabi goes off.',
          ],
        },
      },
      parameterDescription: '',
      defaultSampleSize: 250,
      defaultSuccessCount: 80,
      defaultMarginOfError: 0.1,
      defaultPreliminaryEstimate: 0.25,
      suggestedConfidenceLevels: {
        twoSided: 85,
        lowerBound: 85,
        upperBound: 85,
        sampleSizeWithPreliminaryEstimate: 85,
        sampleSizeNoPreliminaryEstimate: 85,
      },
    },

    {
      id: 'flamingoes-migrate-slow-aging',
      context: {
        setting: 'in the wild',
        individualDescription:
          'flamingoes that migrate to spend their winters in the sun',
        successDescription: 'the flamingoes age more slowly',
        failureDescription: 'the flamingoes do not age more slowly',
        tone: 'informative and factual',
        variationProfile: {
          openingStyle: '',
          toneGuidance:
            'Use informative and factual language to describe the observation that flamingoes that migrate to spend their winters in the sun age more slowly than those that stay put.',
          vocabularySuggestions: [
            'flamingoes',
            'migration',
            'aging',
            'sun exposure',
          ],
          seedPhraseInContext:
            'Flamingoes that migrate to spend their winters in the sun age more slowly than the ones that stay put.',
          avoidPhrases: [''],
          contextDetails: [
            'The goal is to estimate the true proportion of flamingoes that migrate to spend their winters in the sun and age more slowly than those that stay put.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of flamingoes that migrate to spend their winters in the sun and age more slowly than those that stay put',
      defaultSampleSize: 30,
      defaultSuccessCount: 26,
      defaultMarginOfError: 0.05,
      defaultPreliminaryEstimate: 0.87,
      suggestedConfidenceLevels: {
        twoSided: 98,
        lowerBound: 98,
        upperBound: 98,
        sampleSizeWithPreliminaryEstimate: 98,
        sampleSizeNoPreliminaryEstimate: 98,
      },
    },

    {
      id: 'music-anhedonia',
      context: {
        setting: 'in the general population',
        individualDescription: 'one person in the general population',
        successDescription:
          'the person has music anhedonia and is emotionally unaffected by music',
        failureDescription:
          'the person does not have music anhedonia and is emotionally affected by music',
        tone: 'informative and factual',
        variationProfile: {
          openingStyle: '',
          toneGuidance:
            'Use informative and factual language to describe the phenomenon of music anhedonia, where some people are emotionally unaffected by music.',
          vocabularySuggestions: [
            'music anhedonia',
            'emotional response to music',
            'general population',
          ],
          seedPhraseInContext:
            '5-10% of people have ‘music anhedonia’ - they are emotionally unaffected by music.',
          avoidPhrases: [''],
          contextDetails: [
            'The goal is to estimate the true proportion of people in the general population who have music anhedonia and are emotionally unaffected by music.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of people in the general population who have music anhedonia and are emotionally unaffected by music',
      defaultSampleSize: 60,
      defaultSuccessCount: 6,
      defaultMarginOfError: 0.05,
      defaultPreliminaryEstimate: 0.1,
      suggestedConfidenceLevels: {
        twoSided: 90,
        lowerBound: 90,
        upperBound: 90,
        sampleSizeWithPreliminaryEstimate: 90,
        sampleSizeNoPreliminaryEstimate: 90,
      },
    },
  ];
