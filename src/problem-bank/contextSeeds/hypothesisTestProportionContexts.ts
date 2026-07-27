import type { HypothesisTestProportionProblem } from '../schemas/hypothesisTestProportion.schema';

type HypothesisTestProportionContextSeed = {
  id: string;

  context: HypothesisTestProportionProblem['context'];

  parameterDescription: string;

  nullClaimValue: number;

  defaultSampleSize: number;
  defaultSuccessCount: number;

  suggestedSignificanceLevels: {
    leftTailed: number;
    rightTailed: number;
    twoTailed: number;
  };
};

export const hypothesisTestProportionContexts: HypothesisTestProportionContextSeed[] =
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
            'Use realistic student-life language while keeping the population proportion test clear.',
          vocabularySuggestions: [
            'student survey',
            'public transit',
            'population proportion',
            'sample proportion',
            'hypothesis test',
          ],
          seedPhraseInContext:
            'A college surveys students about how they usually travel to campus.',
          avoidPhrases: ['commuting chaos', 'traffic nightmare'],
          contextDetails: [
            'Each student either usually uses public transit or does not.',
            'The goal is to test a claim about the true proportion of students who usually use public transit.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of students who usually use public transit to get to campus',
      nullClaimValue: 0.6,
      defaultSampleSize: 240,
      defaultSuccessCount: 138,
      suggestedSignificanceLevels: {
        leftTailed: 0.05,
        rightTailed: 0.05,
        twoTailed: 0.05,
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
            'The goal is to test a claim about the true proportion of residents who support the proposal.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of residents who support adding protected bike lanes',
      nullClaimValue: 0.5,
      defaultSampleSize: 500,
      defaultSuccessCount: 285,
      suggestedSignificanceLevels: {
        leftTailed: 0.05,
        rightTailed: 0.05,
        twoTailed: 0.1,
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
            'hypothesis test',
          ],
          seedPhraseInContext:
            'A botany lab studies seed germination under controlled conditions.',
          avoidPhrases: ['plant magic', 'lucky seed'],
          contextDetails: [
            'Each seed either germinates or does not germinate.',
            'The goal is to test a claim about the true germination proportion under these conditions.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of seeds that germinate under these conditions',
      nullClaimValue: 0.8,
      defaultSampleSize: 180,
      defaultSuccessCount: 139,
      suggestedSignificanceLevels: {
        leftTailed: 0.05,
        rightTailed: 0.05,
        twoTailed: 0.05,
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
            'Use friendly but not childish language. Preserve the population proportion test.',
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
            'The goal is to test a claim about the true proportion of cats that choose the sunny window spot.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of cats that choose the sunny window spot',
      nullClaimValue: 0.5,
      defaultSampleSize: 150,
      defaultSuccessCount: 87,
      suggestedSignificanceLevels: {
        leftTailed: 0.05,
        rightTailed: 0.05,
        twoTailed: 0.05,
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
            'hypothesis test',
          ],
          seedPhraseInContext:
            'An organization evaluates how often its email filter correctly flags spam messages.',
          avoidPhrases: ['AI magic', 'robot detective'],
          contextDetails: [
            'Each incoming email is classified as correctly flagged or not correctly flagged.',
            'The goal is to test a claim about the true proportion of spam emails correctly flagged by the system.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of spam emails correctly flagged by the filtering system',
      nullClaimValue: 0.9,
      defaultSampleSize: 320,
      defaultSuccessCount: 291,
      suggestedSignificanceLevels: {
        leftTailed: 0.05,
        rightTailed: 0.05,
        twoTailed: 0.05,
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
            'z test',
          ],
          seedPhraseInContext:
            'An emissions inspection station records whether cars pass their tests.',
          avoidPhrases: ['pollution panic', 'car chaos'],
          contextDetails: [
            'Each car either passes the emissions test or does not.',
            'The goal is to test a claim about the true proportion of cars that pass the test.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of cars that pass the emissions test',
      nullClaimValue: 0.75,
      defaultSampleSize: 260,
      defaultSuccessCount: 211,
      suggestedSignificanceLevels: {
        leftTailed: 0.05,
        rightTailed: 0.05,
        twoTailed: 0.05,
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
            'hypothesis test',
          ],
          seedPhraseInContext:
            'In a conservation monitoring project, sea turtle hatchlings are observed after release near the shore.',
          avoidPhrases: ['hero turtles', 'survival race'],
          contextDetails: [
            'Each hatchling either reaches the water or does not.',
            'The goal is to test a claim about the true proportion of hatchlings that reach the water.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of hatchlings that reach the water',
      nullClaimValue: 0.7,
      defaultSampleSize: 240,
      defaultSuccessCount: 154,
      suggestedSignificanceLevels: {
        leftTailed: 0.1,
        rightTailed: 0.05,
        twoTailed: 0.05,
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
            'population proportion',
          ],
          seedPhraseInContext:
            'A marine biology team checks survey locations along a coastal transect for jellyfish.',
          avoidPhrases: ['jellyfish invasion', 'ocean mystery'],
          contextDetails: [
            'Each survey location is classified according to whether jellyfish are detected.',
            'The goal is to test a claim about the true proportion of survey locations where jellyfish are detected.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of survey locations where jellyfish are detected',
      nullClaimValue: 0.4,
      defaultSampleSize: 140,
      defaultSuccessCount: 59,
      suggestedSignificanceLevels: {
        leftTailed: 0.05,
        rightTailed: 0.05,
        twoTailed: 0.1,
      },
    },
    // End of context seeds for calibration set. Start of course contexts.

    {
      id: 'godzilla-movie',
      context: {
        setting: 'entertainment survey',
        individualDescription: 'one person surveyed',
        successDescription: 'number of people who have seen a Godzilla movie',
        failureDescription:
          'number of people who have not seen a Godzilla movie',
        tone: 'entertainment survey context',
        variationProfile: {
          openingStyle: 'entertainment survey scenario',
          toneGuidance:
            'Use casual entertainment survey language while keeping the inference task understandable.',
          vocabularySuggestions: [
            'Godzilla movie',
            'survey',
            'sample proportion',
            'population proportion',
          ],
          seedPhraseInContext:
            'In 2015, Godzilla was recruited as the tourism ambassador for the Shinjuku suburb of Tokyo, despite having flattened the area in three separate films.',
          avoidPhrases: [],
          contextDetails: [
            'The goal is to test a claim about the true proportion of people who have seen a Godzilla movie.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of people who have seen a Godzilla movie',
      nullClaimValue: 0.3,
      defaultSampleSize: 150,
      defaultSuccessCount: 45,
      suggestedSignificanceLevels: {
        leftTailed: 0.05,
        rightTailed: 0.05,
        twoTailed: 0.05,
      },
    },

    {
      id: 'funeral-crying',
      context: {
        setting: 'social behavior survey',
        individualDescription: 'one person surveyed',
        successDescription: 'number of people who cry at funerals',
        failureDescription: 'number of people who do not cry at funerals',
        tone: 'social behavior survey context',
        variationProfile: {
          openingStyle: 'social behavior survey scenario',
          toneGuidance:
            'Use casual social behavior survey language while keeping the inference task understandable.',
          vocabularySuggestions: [
            'funeral',
            'crying',
            'survey',
            'sample proportion',
            'population proportion',
          ],
          seedPhraseInContext:
            'Timothy Dexter was an 18th century American businessman who faked his own funeral to see who would turn up. Afterwards, he accused his wife of not crying enough.',
          avoidPhrases: [],
          contextDetails: [
            'The goal is to test a claim about the true proportion of people who cry at funerals.',
          ],
        },
      },
      parameterDescription: 'the true proportion of people who cry at funerals',
      nullClaimValue: 0.4,
      defaultSampleSize: 100,
      defaultSuccessCount: 40,
      suggestedSignificanceLevels: {
        leftTailed: 0.025,
        rightTailed: 0.025,
        twoTailed: 0.05,
      },
    },

    {
      id: 'fake-online-stores',
      context: {
        setting: 'online shopping behavior survey',
        individualDescription: 'one person surveyed',
        successDescription:
          'number of people who have shopped at fake online stores',
        failureDescription:
          'number of people who have not shopped at fake online stores',
        tone: '',
        variationProfile: {
          openingStyle: '',
          toneGuidance:
            'Use casual online shopping behavior survey language while keeping the inference task understandable.',
          vocabularySuggestions: [
            'fake online stores',
            'dopamine sites',
            'online shopping',
          ],
          seedPhraseInContext:
            'Fake online stores called ‘dopamine sites’ have been gaining popularity in South Korea, allowing shopping addicts to replicate the experience of buying items online without spending any money. You can even track the imaginary items you’ve bought.',
          avoidPhrases: [],
          contextDetails: [
            'The goal is to test a claim about the true proportion of people who have shopped at fake online stores.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of people who have shopped at fake online stores',
      nullClaimValue: 0.3,
      defaultSampleSize: 120,
      defaultSuccessCount: 36,
      suggestedSignificanceLevels: {
        leftTailed: 0.01,
        rightTailed: 0.01,
        twoTailed: 0.01,
      },
    },

    {
      id: 'dog-snack-liking',
      context: {
        setting: 'dog behavior study',
        individualDescription: 'one dog being observed',
        successDescription: 'number of dogs who like snacks',
        failureDescription: 'number of dogs who do not like snacks',
        tone: '',
        variationProfile: {
          openingStyle: '',
          toneGuidance: '',
          vocabularySuggestions: [],
          seedPhraseInContext:
            'There’s a theory that dogs domesticated themselves because they really liked snacks.',
          avoidPhrases: [],
          contextDetails: [],
        },
      },
      parameterDescription: 'the true proportion of dogs who like snacks',
      nullClaimValue: 0.95,
      defaultSampleSize: 50,
      defaultSuccessCount: 48,
      suggestedSignificanceLevels: {
        leftTailed: 0.005,
        rightTailed: 0.005,
        twoTailed: 0.01,
      },
    },

    {
      id: 'rat-basketball-playing',
      context: {
        setting: 'Science Museum of Virginia',
        individualDescription: 'one rat being observed',
        successDescription: 'number of rats who can play basketball',
        failureDescription: 'number of rats who cannot play basketball',
        tone: 'casual science museum context',
        variationProfile: {
          openingStyle: '',
          toneGuidance:
            'Use casual science museum context language while keeping the inference task understandable.',
          vocabularySuggestions: [],
          seedPhraseInContext:
            'The Science Museum of Virginia has trained rats to play basketball. Daily matches can be watched by the public.',
          avoidPhrases: [],
          contextDetails: [
            'The goal is to test a claim about the true proportion of rats who can play basketball.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of rats who can play basketball',
      nullClaimValue: 0.5,
      defaultSampleSize: 20,
      defaultSuccessCount: 10,
      suggestedSignificanceLevels: {
        leftTailed: 0.05,
        rightTailed: 0.05,
        twoTailed: 0.05,
      },
    },

    {
      id: 'luxury-car-drivers',
      context: {
        setting: 'city streets',
        individualDescription: 'one driver of a luxury car',
        successDescription:
          'number of drivers of luxury cars who cut off other drivers',
        failureDescription:
          'number of drivers of luxury cars who do not cut off other drivers',
        tone: 'informal urban context',
        variationProfile: {
          openingStyle: '',
          toneGuidance:
            'Use informal urban context language while keeping the inference task understandable.',
          vocabularySuggestions: [],
          seedPhraseInContext:
            'Drivers of luxury cars are more likely to cut off other drivers.',
          avoidPhrases: [],
          contextDetails: [
            'The goal is to test a claim about the true proportion of drivers of luxury cars who cut off other drivers.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of drivers of luxury cars who cut off other drivers',
      nullClaimValue: 0.8,
      defaultSampleSize: 40,
      defaultSuccessCount: 32,
      suggestedSignificanceLevels: {
        leftTailed: 0.025,
        rightTailed: 0.025,
        twoTailed: 0.05,
      },
    },

    {
      id: 'paris-syndrome',
      context: {
        setting: 'Paris, France',
        individualDescription: 'one Japanese traveller',
        successDescription:
          'number of Japanese travellers who experience Paris syndrome',
        failureDescription:
          'number of Japanese travellers who do not experience Paris syndrome',
        tone: '',
        variationProfile: {
          openingStyle: '',
          toneGuidance: '',
          vocabularySuggestions: [
            'Paris syndrome',
            'Japanese travellers',
            'cultural shock',
            'population proportion',
            'hypothesis test',
          ],
          seedPhraseInContext:
            'Japanese travellers sometimes experience `Paris syndrome`, which occurs as a result of extreme shock at discovering that Paris is different than expected. Symptoms may include acute delusional states, hallucinations, feelings of persecution, dizziness, and vomiting.',
          avoidPhrases: [],
          contextDetails: [
            'The goal is to test a claim about the true proportion of Japanese travellers who experience Paris syndrome.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of Japanese travellers who experience Paris syndrome',
      nullClaimValue: 0.05,
      defaultSampleSize: 150,
      defaultSuccessCount: 8,
      suggestedSignificanceLevels: {
        leftTailed: 0.01,
        rightTailed: 0.01,
        twoTailed: 0.01,
      },
    },

    {
      id: 'cat-wiggle',
      context: {
        setting: 'cat behavior observation',
        individualDescription: 'a cat being observed before pouncing',
        successDescription:
          'number of cats who wiggle their bottoms before pouncing',
        failureDescription:
          'number of cats who do not wiggle their bottoms before pouncing',
        tone: 'informal animal behavior context',
        variationProfile: {
          openingStyle: '',
          toneGuidance:
            'Use informal animal behavior context language while keeping the inference task understandable.',
          vocabularySuggestions: [
            'cat behavior',
            'pouncing',
            'population proportion',
            'hypothesis test',
          ],
          seedPhraseInContext:
            'Nobody knows why cats wiggle their bottoms before they pounce.',
          avoidPhrases: [],
          contextDetails: [
            'The goal is to test a claim about the true proportion of cats who wiggle their bottoms before pouncing.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of cats who wiggle their bottoms before pouncing',
      nullClaimValue: 0.3,
      defaultSampleSize: 50,
      defaultSuccessCount: 15,
      suggestedSignificanceLevels: {
        leftTailed: 0.005,
        rightTailed: 0.005,
        twoTailed: 0.01,
      },
    },

    {
      id: 'jean-pocket-size',
      context: {
        setting: 'fashion study',
        individualDescription: 'a woman trying on jeans',
        successDescription:
          'number of women whose jean front pockets are big enough to fit an average woman`s hand',
        failureDescription:
          'number of women whose jean front pockets are not big enough to fit an average woman`s hand',
        tone: 'informal fashion context',
        variationProfile: {
          openingStyle: '',
          toneGuidance:
            'Use informal fashion context language while keeping the inference task understandable.',
          vocabularySuggestions: [],
          seedPhraseInContext:
            'A recent study of jean front pockets found that only 10% of women`s pockets are big enough to fit an average woman`s hand. 100% of men`s pockets could fit an average man`s hand.',
          avoidPhrases: [],
          contextDetails: [
            'The goal is to test a claim about the true proportion of women whose jean front pockets are big enough to fit an average woman`s hand.',
          ],
        },
      },
      parameterDescription:
        'the true proportion of women whose jean front pockets are big enough to fit an average woman`s hand',
      nullClaimValue: 0.1,
      defaultSampleSize: 150,
      defaultSuccessCount: 15,
      suggestedSignificanceLevels: {
        leftTailed: 0.05,
        rightTailed: 0.05,
        twoTailed: 0.005,
      },
    },

    {
      id: 'moth-pollination',
      context: {
        setting: 'ecology study',
        individualDescription: 'a moth being observed for pollination behavior',
        successDescription: 'number of moths that carry pollen',
        failureDescription: 'number of moths that do not carry pollen',
        tone: 'informal ecology study context',
        variationProfile: {
          openingStyle: '',
          toneGuidance:
            'Use informal ecology study context language while keeping the inference task understandable.',
          vocabularySuggestions: [
            'moth',
            'pollination',
            'population proportion',
            'hypothesis test',
          ],
          seedPhraseInContext:
            'Moths are crucial pollinators. 45% of moths carry pollen, generally taking the night shift while bees and other insects are resting.',
          avoidPhrases: [],
          contextDetails: [
            'The goal is to test a claim about the true proportion of moths that carry pollen.',
          ],
        },
      },
      parameterDescription: 'the true proportion of moths that carry pollen',
      nullClaimValue: 0.45,
      defaultSampleSize: 100,
      defaultSuccessCount: 45,
      suggestedSignificanceLevels: {
        leftTailed: 0.05,
        rightTailed: 0.05,
        twoTailed: 0.005,
      },
    },
  ];
