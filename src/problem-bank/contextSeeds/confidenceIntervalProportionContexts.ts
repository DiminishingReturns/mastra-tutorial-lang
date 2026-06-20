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
  ];
