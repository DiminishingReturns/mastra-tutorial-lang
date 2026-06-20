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
  ];
