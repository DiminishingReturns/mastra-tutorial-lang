import type { NormalApproximationBinomialProblem } from '../schemas/normalApproximationBinomial.schema';

type NormalApproximationBinomialContextSeed = {
  id: string;

  context: NormalApproximationBinomialProblem['context'];

  randomVariableDescription: string;

  defaultNumberOfTrials: number;
  defaultProbabilityOfSuccess: number;

  suggestedSuccessCounts: {
    lessThan?: number;
    atMost?: number;
    moreThan?: number;
    atLeast?: number;
    between?: {
      lower: number;
      upper: number;
      inclusivity?:
        | 'inclusive'
        | 'exclusive'
        | 'lower-inclusive-upper-exclusive'
        | 'lower-exclusive-upper-inclusive';
    };
  };
};

export const normalApproximationBinomialContexts: NormalApproximationBinomialContextSeed[] =
  [
    {
      id: 'cars-pass-emissions-test',
      context: {
        setting: 'vehicle emissions testing',
        trialDescription: 'testing one car at an emissions inspection station',
        successDescription: 'the car passes the emissions test',
        failureDescription: 'the car does not pass the emissions test',
        unit: 'cars',
        tone: 'applied civic context',
        variationProfile: {
          openingStyle: 'realistic public-service scenario',
          toneGuidance:
            'Use practical language about vehicle inspections. Keep the binomial structure clear.',
          vocabularySuggestions: [
            'emissions test',
            'inspection station',
            'passes',
            'fixed number of cars',
            'normal approximation',
          ],
          seedPhraseInContext:
            'At an emissions inspection station, a large number of cars are tested during the week.',
          avoidPhrases: ['car chaos', 'pollution panic'],
          contextDetails: [
            'Each car either passes or does not pass the test.',
            'The probability of passing is treated as the same for each car.',
            'The number of cars is large enough to consider a normal approximation.',
          ],
        },
      },
      randomVariableDescription:
        'the number of cars that pass the emissions test',
      defaultNumberOfTrials: 200,
      defaultProbabilityOfSuccess: 0.82,
      suggestedSuccessCounts: {
        lessThan: 155,
        atMost: 160,
        moreThan: 175,
        atLeast: 170,
        between: {
          lower: 155,
          upper: 175,
          inclusivity: 'inclusive',
        },
      },
    },

    {
      id: 'squirrels-visit-feeder',
      context: {
        setting: 'urban wildlife observation',
        trialDescription:
          'observing one squirrel during a scheduled observation period',
        successDescription: 'the squirrel visits the feeder',
        failureDescription: 'the squirrel does not visit the feeder',
        unit: 'squirrels',
        tone: 'friendly observational science context',
        variationProfile: {
          openingStyle: 'field observation scenario',
          toneGuidance:
            'The context may be approachable, but keep the language appropriate for a college statistics problem.',
          vocabularySuggestions: [
            'wildlife observation',
            'feeder',
            'scheduled observation period',
            'visits',
          ],
          seedPhraseInContext:
            'In an urban wildlife study, researchers observe squirrels during scheduled observation periods.',
          avoidPhrases: ['squirrel party', 'nut heist'],
          contextDetails: [
            'Each squirrel is recorded as visiting or not visiting the feeder.',
            'The probability of a visit is treated as constant across observations.',
            'A large number of observations makes a normal approximation reasonable.',
          ],
        },
      },
      randomVariableDescription:
        'the number of squirrels that visit the feeder',
      defaultNumberOfTrials: 120,
      defaultProbabilityOfSuccess: 0.35,
      suggestedSuccessCounts: {
        lessThan: 35,
        atMost: 40,
        moreThan: 50,
        atLeast: 45,
        between: {
          lower: 35,
          upper: 50,
          inclusivity: 'inclusive',
        },
      },
    },

    {
      id: 'cats-choose-sunny-window',
      context: {
        setting: 'animal behaviour observation',
        trialDescription: 'observing one cat choose a resting spot',
        successDescription: 'the cat chooses the sunny window spot',
        failureDescription: 'the cat chooses another resting spot',
        unit: 'cats',
        tone: 'light but statistically clear',
        variationProfile: {
          openingStyle: 'observational study scenario',
          toneGuidance:
            'Use friendly but not childish language. Preserve the binomial model and approximation task.',
          vocabularySuggestions: [
            'resting spot',
            'sunny window',
            'observation',
            'chooses',
          ],
          seedPhraseInContext:
            'In an animal behaviour observation, many cats are observed choosing resting spots.',
          avoidPhrases: ['sunbeam royalty', 'cat kingdom'],
          contextDetails: [
            'Each cat is observed once.',
            'Choosing the sunny window spot is recorded as the success outcome.',
            'The sample size is large enough to approximate the binomial distribution with a normal distribution.',
          ],
        },
      },
      randomVariableDescription:
        'the number of cats that choose the sunny window spot',
      defaultNumberOfTrials: 150,
      defaultProbabilityOfSuccess: 0.58,
      suggestedSuccessCounts: {
        lessThan: 80,
        atMost: 85,
        moreThan: 95,
        atLeast: 90,
        between: {
          lower: 80,
          upper: 95,
          inclusivity: 'inclusive',
        },
      },
    },

    {
      id: 'plants-survive-transplant',
      context: {
        setting: 'greenhouse transplant study',
        trialDescription: 'transplanting one young plant into a greenhouse bed',
        successDescription:
          'the plant survives the first month after transplanting',
        failureDescription:
          'the plant does not survive the first month after transplanting',
        unit: 'plants',
        tone: 'scientific but accessible',
        variationProfile: {
          openingStyle: 'greenhouse study scenario',
          toneGuidance:
            'Use clear scientific language without making the context overly technical.',
          vocabularySuggestions: [
            'transplant',
            'greenhouse',
            'survives',
            'first month',
            'binomial model',
          ],
          seedPhraseInContext:
            'A greenhouse study tracks whether young plants survive after being transplanted.',
          avoidPhrases: ['plant drama', 'greenhouse miracle'],
          contextDetails: [
            'Each plant either survives or does not survive the first month.',
            'The probability of survival is treated as constant.',
            'The number of plants is large enough for a normal approximation to the binomial distribution.',
          ],
        },
      },
      randomVariableDescription:
        'the number of plants that survive the first month after transplanting',
      defaultNumberOfTrials: 180,
      defaultProbabilityOfSuccess: 0.72,
      suggestedSuccessCounts: {
        lessThan: 120,
        atMost: 125,
        moreThan: 140,
        atLeast: 135,
        between: {
          lower: 120,
          upper: 140,
          inclusivity: 'inclusive',
        },
      },
    },

    {
      id: 'turtles-reach-water',
      context: {
        setting: 'sea turtle conservation monitoring',
        trialDescription: 'monitoring one hatchling released near the shore',
        successDescription: 'the hatchling reaches the water',
        failureDescription: 'the hatchling does not reach the water',
        unit: 'hatchlings',
        tone: 'careful conservation context',
        variationProfile: {
          openingStyle: 'conservation monitoring scenario',
          toneGuidance:
            'Use careful ecological language. Avoid dramatizing the scenario.',
          vocabularySuggestions: [
            'hatchling',
            'shore',
            'reaches the water',
            'conservation monitoring',
          ],
          seedPhraseInContext:
            'In a conservation monitoring project, sea turtle hatchlings are observed after release near the shore.',
          avoidPhrases: ['hero turtles', 'survival race'],
          contextDetails: [
            'Each hatchling is recorded as reaching or not reaching the water.',
            'The probability of reaching the water is treated as constant for the model.',
            'The number of hatchlings is large enough to use a normal approximation.',
          ],
        },
      },
      randomVariableDescription:
        'the number of hatchlings that reach the water',
      defaultNumberOfTrials: 240,
      defaultProbabilityOfSuccess: 0.64,
      suggestedSuccessCounts: {
        lessThan: 145,
        atMost: 150,
        moreThan: 165,
        atLeast: 160,
        between: {
          lower: 145,
          upper: 165,
          inclusivity: 'inclusive',
        },
      },
    },

    {
      id: 'jellyfish-detected-transect',
      context: {
        setting: 'marine biology survey',
        trialDescription: 'checking one survey location along a transect',
        successDescription: 'jellyfish are detected at the location',
        failureDescription: 'jellyfish are not detected at the location',
        unit: 'survey locations',
        tone: 'scientific field-study context',
        variationProfile: {
          openingStyle: 'marine survey scenario',
          toneGuidance:
            'Use scientific field-study language while keeping the probability model understandable.',
          vocabularySuggestions: [
            'marine survey',
            'transect',
            'detected',
            'survey location',
          ],
          seedPhraseInContext:
            'A marine biology team checks survey locations along a coastal transect for jellyfish.',
          avoidPhrases: ['jellyfish invasion', 'ocean mystery'],
          contextDetails: [
            'Each location is classified according to whether jellyfish are detected.',
            'The probability of detection is treated as the same at each location.',
            'The number of survey locations is large enough for a normal approximation.',
          ],
        },
      },
      randomVariableDescription:
        'the number of survey locations where jellyfish are detected',
      defaultNumberOfTrials: 100,
      defaultProbabilityOfSuccess: 0.42,
      suggestedSuccessCounts: {
        lessThan: 35,
        atMost: 38,
        moreThan: 50,
        atLeast: 48,
        between: {
          lower: 35,
          upper: 50,
          inclusivity: 'exclusive',
        },
      },
    },

    {
      id: 'cars-need-minor-repair',
      context: {
        setting: 'auto service inspection',
        trialDescription: 'inspecting one car during a routine service visit',
        successDescription: 'the car needs a minor repair',
        failureDescription: 'the car does not need a minor repair',
        unit: 'cars',
        tone: 'practical workplace context',
        variationProfile: {
          openingStyle: 'service inspection scenario',
          toneGuidance:
            'Use practical workplace language. Make clear that “success” means needing a minor repair.',
          vocabularySuggestions: [
            'routine service',
            'minor repair',
            'inspection',
            'service visit',
          ],
          seedPhraseInContext:
            'At an auto service centre, cars are inspected during routine service visits.',
          avoidPhrases: ['garage nightmare', 'car trouble lottery'],
          contextDetails: [
            'Each car either needs or does not need a minor repair.',
            'The probability of needing a minor repair is treated as constant.',
            'The sample size is large enough for a normal approximation to be considered.',
          ],
        },
      },
      randomVariableDescription: 'the number of cars that need a minor repair',
      defaultNumberOfTrials: 160,
      defaultProbabilityOfSuccess: 0.28,
      suggestedSuccessCounts: {
        lessThan: 35,
        atMost: 40,
        moreThan: 55,
        atLeast: 50,
        between: {
          lower: 35,
          upper: 55,
          inclusivity: 'lower-inclusive-upper-exclusive',
        },
      },
    },

    {
      id: 'plants-flower-by-week-six',
      context: {
        setting: 'plant growth experiment',
        trialDescription:
          'monitoring one plant during a six-week growth period',
        successDescription: 'the plant flowers by the end of week six',
        failureDescription: 'the plant does not flower by the end of week six',
        unit: 'plants',
        tone: 'scientific classroom context',
        variationProfile: {
          openingStyle: 'growth experiment scenario',
          toneGuidance:
            'Use accessible scientific language suitable for introductory statistics.',
          vocabularySuggestions: [
            'growth experiment',
            'flowers',
            'week six',
            'monitoring period',
          ],
          seedPhraseInContext:
            'In a plant growth experiment, researchers record whether plants flower by the end of week six.',
          avoidPhrases: ['flower explosion', 'plant celebration'],
          contextDetails: [
            'Each plant either flowers or does not flower by week six.',
            'The probability of flowering is treated as constant.',
            'The number of plants is large enough to approximate the binomial distribution using a normal model.',
          ],
        },
      },
      randomVariableDescription:
        'the number of plants that flower by the end of week six',
      defaultNumberOfTrials: 220,
      defaultProbabilityOfSuccess: 0.46,
      suggestedSuccessCounts: {
        lessThan: 90,
        atMost: 95,
        moreThan: 110,
        atLeast: 105,
        between: {
          lower: 90,
          upper: 110,
          inclusivity: 'lower-exclusive-upper-inclusive',
        },
      },
    },

    // End of calibration set of contexts.
    // Beginning of contexts intended for course use.

    {
      id: 'spiders-build-web',
      context: {
        setting: 'spider behavior observation',
        trialDescription: 'observing one spider during a web-building session',
        successDescription: 'the spider successfully builds a web',
        failureDescription: 'the spider does not successfully build a web',
        unit: 'spiders',
        tone: 'humorous historical context about a quirky belief',
        variationProfile: {
          openingStyle: 'spider behavior observation scenario',
          toneGuidance:
            'Use accessible scientific language suitable for introductory statistics.',
          vocabularySuggestions: [
            'spider behavior',
            'web-building',
            'observation period',
            'monitoring period',
          ],
          seedPhraseInContext:
            'Since spider silk is second only to copper in terms of thermal conductivity, scientists have proposed ‘recruiting’ spiders as living cooling devices for data centres.',
          avoidPhrases: ['flower explosion', 'plant celebration'],
          contextDetails: [
            'Each spider either successfully builds a web or does not during the observation period.',
            'The probability of successfully building a web is treated as constant.',
            'The number of spiders is large enough to approximate the binomial distribution using a normal model.',
          ],
        },
      },
      randomVariableDescription:
        'the number of spiders that successfully build a web',
      defaultNumberOfTrials: 200,
      defaultProbabilityOfSuccess: 0.45,
      suggestedSuccessCounts: {
        lessThan: 90,
        atMost: 95,
        moreThan: 110,
        atLeast: 105,
        between: {
          lower: 90,
          upper: 110,
          inclusivity: 'lower-exclusive-upper-inclusive',
        },
      },
    },

    {
      id: 'snake-bite-men',
      context: {
        setting: 'snake bite observation',
        trialDescription: 'observing one man during a snake bite incident',
        successDescription: 'the man survives the snake bite',
        failureDescription: 'the man does not survive the snake bite',
        unit: 'men',
        tone: 'funny but statistically clear context about a snake bite observation scenario',
        variationProfile: {
          openingStyle: 'snake bite observation scenario',
          toneGuidance:
            'Use accessible scientific language suitable for introductory statistics.',
          vocabularySuggestions: [
            'snake bite',
            'survival',
            'observation period',
            'monitoring period',
            'observation period',
            'monitoring period',
          ],
          seedPhraseInContext:
            'A study of venomous snakebites in the US has shown that most of the people bitten were deliberately interacting with snakes and 90% of those were men.',
          avoidPhrases: ['flower explosion', 'plant celebration'],
          contextDetails: [
            'Each man either survives the snake bite or does not during the observation period.',
            'The probability of surviving the snake bite is treated as constant.',
            'The number of men is large enough to approximate the binomial distribution using a normal model.',
          ],
        },
      },
      randomVariableDescription: 'the number of men who survive the snake bite',
      defaultNumberOfTrials: 150,
      defaultProbabilityOfSuccess: 0.35,
      suggestedSuccessCounts: {
        lessThan: 40,
        atMost: 45,
        moreThan: 60,
        atLeast: 55,
        between: {
          lower: 40,
          upper: 60,
          inclusivity: 'lower-exclusive-upper-inclusive',
        },
      },
    },

    {
      id: 'conspiracy-theories',
      context: {
        setting: 'conspiracy theory study',
        trialDescription:
          'observing one respondent during a conspiracy theory study',
        successDescription: 'the respondent believes in the conspiracy theory',
        failureDescription:
          'the respondent does not believe in the conspiracy theory',
        unit: 'respondents',
        tone: 'satirical historical context about a quirky belief',
        variationProfile: {
          openingStyle: 'conspiracy theory observation scenario',
          toneGuidance:
            'Use accessible scientific language suitable for introductory statistics.',
          vocabularySuggestions: [
            'conspiracy theory',
            'belief',
            'observation period',
          ],
          seedPhraseInContext:
            'In a conspiracy theory study, 10% of respondents claimed to believe that the Canadian Armed Forces were secretly developing an army of super intelligent giant racoons to invade neighbouring countries.',
          avoidPhrases: ['flower explosion', 'plant celebration'],
          contextDetails: [
            'Each respondent either believes in the conspiracy theory or does not during the observation period.',
            'The probability of believing in the conspiracy theory is treated as constant.',
            'The number of respondents is large enough to approximate the binomial distribution using a normal model.',
          ],
        },
      },
      randomVariableDescription:
        'the number of respondents who believe in the conspiracy theory',
      defaultNumberOfTrials: 300,
      defaultProbabilityOfSuccess: 0.1,
      suggestedSuccessCounts: {
        lessThan: 25,
        atMost: 30,
        moreThan: 40,
        atLeast: 35,
        between: {
          lower: 25,
          upper: 40,
          inclusivity: 'lower-exclusive-upper-inclusive',
        },
      },
    },

    {
      id: 'dragonflies-success-rate',
      context: {
        setting: 'dragonfly study',
        trialDescription: 'observing one dragonfly during a dragonfly study',
        successDescription: 'the dragonfly successfully catches its prey',
        failureDescription: 'the dragonfly fails to catch its prey',
        unit: 'dragonflies',
        tone: 'scientific classroom context',
        variationProfile: {
          openingStyle: 'dragonfly study scenario',
          toneGuidance:
            'Use accessible scientific language suitable for introductory statistics.',
          vocabularySuggestions: [
            'dragonfly',
            'prey',
            'observation period',
            'trajectory',
          ],
          seedPhraseInContext:
            'Dragonflies catch 95% of the prey their target, as they can calculate their trajectory within 50 milliseconds and intercept it in midair. Military scientists have been looking into the dragonfly brain in order to improve missile defence systems.',
          avoidPhrases: [''],
          contextDetails: [
            'Each dragonfly either catches its prey or does not during the observation period.',
            'The probability of catching the prey is treated as constant.',
            'The number of dragonflies is large enough to approximate the binomial distribution using a normal model.',
          ],
        },
      },
      randomVariableDescription:
        'the number of dragonflies that catch their prey',
      defaultNumberOfTrials: 250,
      defaultProbabilityOfSuccess: 0.95,
      suggestedSuccessCounts: {
        lessThan: 230,
        atMost: 235,
        moreThan: 240,
        atLeast: 238,
        between: {
          lower: 230,
          upper: 240,
          inclusivity: 'lower-exclusive-upper-inclusive',
        },
      },
    },

    {
      id: 'bubblegum-broccoli',
      context: {
        setting: 'quirky scientific claim study',
        trialDescription: 'number of kids during a school lunch period',
        successDescription: 'number of kids who like broccoli',
        failureDescription: 'number of kids who do not like broccoli',
        unit: 'respondents',
        tone: 'conversational scenario about a quirky scientific claim',
        variationProfile: {
          openingStyle:
            'conversational scenario about a quirky scientific claim',
          toneGuidance:
            'Use accessible scientific language suitable for introductory statistics.',
          vocabularySuggestions: [
            'broccoli',
            'bubblegum flavour',
            'scientific claim',
            'school lunch period',
          ],
          seedPhraseInContext:
            'In 2014, a McDonalds CEO said the company had unsuccessfully tried to develop bubblegum flavoured broccoli so that children would eat more vegetables.',
          avoidPhrases: [''],
          contextDetails: [
            'Each kid either likes broccoli or does not during the school lunch period.',
            'The probability of liking broccoli is treated as constant.',
            'The number of kids is large enough to approximate the binomial distribution using a normal model.',
          ],
        },
      },
      randomVariableDescription: 'the number of kids who like broccoli',
      defaultNumberOfTrials: 200,
      defaultProbabilityOfSuccess: 0.4,
      suggestedSuccessCounts: {
        lessThan: 70,
        atMost: 80,
        moreThan: 90,
        atLeast: 85,
        between: {
          lower: 70,
          upper: 90,
          inclusivity: 'lower-exclusive-upper-inclusive',
        },
      },
    },

    {
      id: 'lost-luggage',
      context: {
        setting: 'airline lost luggage study',
        trialDescription:
          'observing one respondent during an airline lost luggage study',
        successDescription: 'the respondent reports lost luggage',
        failureDescription: 'the respondent does not report lost luggage',
        unit: 'respondents',
        tone: 'quirky but statistically clear',
        variationProfile: {
          openingStyle:
            'quirky but statistically clear scenario about airline luggage',
          toneGuidance:
            'Use accessible scientific language suitable for introductory statistics.',
          vocabularySuggestions: [],
          seedPhraseInContext:
            'In the 30 years since Japan’s Kansai Airport opened, it has never lost a single piece of luggage.',
          avoidPhrases: [],
          contextDetails: [
            'Each respondent either reports lost luggage or does not during the observation period.',
            'The probability of reporting lost luggage is treated as constant.',
            'The number of respondents is large enough to approximate the binomial distribution using a normal model.',
          ],
        },
      },
      randomVariableDescription:
        'the number of respondents who report lost luggage',
      defaultNumberOfTrials: 300,
      defaultProbabilityOfSuccess: 0.05,
      suggestedSuccessCounts: {
        lessThan: 10,
        atMost: 15,
        moreThan: 20,
        atLeast: 18,
        between: {
          lower: 10,
          upper: 20,
          inclusivity: 'lower-exclusive-upper-inclusive',
        },
      },
    },

    {
      id: 'speeding-offences',
      context: {
        setting: 'speeding offences study',
        trialDescription:
          'number of offences recorded by speed cameras in the UK during a certain period',
        successDescription:
          'the offence goes unpunished because the car is unregistered or stolen',
        failureDescription: 'the offence is punished',
        unit: 'offences',
        tone: 'social science classroom context',
        variationProfile: {
          openingStyle: 'conspiracy theory observation scenario',
          toneGuidance:
            'Use accessible scientific language suitable for introductory statistics.',
          vocabularySuggestions: ['speeding offence', 'speed camera'],
          seedPhraseInContext:
            '10% of offences recorded by speed cameras in the UK go unpunished because the cars are unregistered or stolen.',
          avoidPhrases: [],
          contextDetails: [
            'Each offence either goes unpunished or is punished during the observation period.',
            'The probability of an offence going unpunished is treated as constant.',
            'The number of offences is large enough to approximate the binomial distribution using a normal model.',
          ],
        },
      },
      randomVariableDescription: 'the number of offences that go unpunished',
      defaultNumberOfTrials: 500,
      defaultProbabilityOfSuccess: 0.1,
      suggestedSuccessCounts: {
        lessThan: 40,
        atMost: 50,
        moreThan: 60,
        atLeast: 55,
        between: {
          lower: 40,
          upper: 60,
          inclusivity: 'lower-exclusive-upper-inclusive',
        },
      },
    },
    {
      id: 'car-blessings',
      context: {
        setting: 'car blessing at a religious festival',
        trialDescription:
          'observing one respondent during a car blessing study',
        successDescription:
          'the respondent believes in the car blessing is important for their safety',
        failureDescription:
          'the respondent does not believe in the car blessing is important for their safety',
        unit: 'respondents',
        tone: 'humorous historical context about a quirky belief',
        variationProfile: {
          openingStyle: 'conspiracy theory observation scenario',
          toneGuidance:
            'Use accessible scientific language suitable for introductory statistics.',
          vocabularySuggestions: [
            'car blessing',
            'belief',
            'observation period',
          ],
          seedPhraseInContext:
            'In the 1950s in the USA, it was common to ask a priest to bless your car.Sometimes churches would hold events where thousands of people would all bring their cars in for a mass blessing.',
          avoidPhrases: [''],
          contextDetails: [
            'Each respondent either believes in the car blessing or does not during the observation period.',
            'The probability of believing in the car blessing is treated as constant.',
            'The number of respondents is large enough to approximate the binomial distribution using a normal model.',
          ],
        },
      },
      randomVariableDescription:
        'the number of respondents who believe that the car blessing is important for their safety',
      defaultNumberOfTrials: 510,
      defaultProbabilityOfSuccess: 0.8,
      suggestedSuccessCounts: {
        lessThan: 380,
        atMost: 450,
        moreThan: 420,
        atLeast: 400,
        between: {
          lower: 380,
          upper: 450,
          inclusivity: 'lower-exclusive-upper-inclusive',
        },
      },
    },

    {
      id: 'portugese-employers',
      context: {
        setting: 'study of Portuguese labour laws',
        trialDescription:
          'number of employees observed during a study of Portuguese labour laws',
        successDescription:
          'the employee reports that their employer contacts them outside of working hours',
        failureDescription:
          'the employee reports that their employer does not contact them outside of working hours',
        unit: 'employees',
        tone: 'social science classroom context',
        variationProfile: {
          openingStyle: 'scenario about a study of Portuguese labour laws',
          toneGuidance:
            'Use accessible scientific language suitable for introductory statistics.',
          vocabularySuggestions: [
            'labour laws',
            'employee',
            'employer',

            'observation period',
          ],
          seedPhraseInContext:
            'In Portugal, it’s illegal for your employer to contact you outside of working hours.',
          avoidPhrases: [],
          contextDetails: [
            'Each employee either reports being contacted outside of working hours or not during the observation period.',
            'The probability of being contacted outside of working hours is treated as constant.',
            'The number of employees is large enough to approximate the binomial distribution using a normal model.',
          ],
        },
      },
      randomVariableDescription:
        'the number of employees who report being contacted outside of working hours',
      defaultNumberOfTrials: 400,
      defaultProbabilityOfSuccess: 0.15,
      suggestedSuccessCounts: {
        lessThan: 50,
        atMost: 60,
        moreThan: 80,
        atLeast: 70,
        between: {
          lower: 50,
          upper: 80,
          inclusivity: 'lower-exclusive-upper-inclusive',
        },
      },
    },
    {
      id: 'the-curse-of-knowledge',
      context: {
        setting: 'study of the curse of knowledge cognitive bias',
        trialDescription:
          'observing one respondent during a study of the curse of knowledge cognitive bias',
        successDescription:
          'the respondent exhibits the curse of knowledge cognitive bias',
        failureDescription:
          'the respondent does not exhibit the curse of knowledge cognitive bias',
        unit: 'respondents',
        tone: 'scientific classroom context',
        variationProfile: {
          openingStyle:
            'scenario about a study of the curse of knowledge cognitive bias',
          toneGuidance:
            'Use accessible scientific language suitable for introductory statistics.',
          vocabularySuggestions: [
            'curse of knowledge',
            'belief',
            'observation period',
          ],
          seedPhraseInContext:
            'The ‘Curse of Knowledge’ is the habit of assuming other people understand a difficult or specialist subject as deeply as you do.',
          avoidPhrases: [''],
          contextDetails: [
            'Each respondent either exhibits the curse of knowledge cognitive bias or does not during the observation period.',
            'The probability of exhibiting the curse of knowledge cognitive bias is treated as constant.',
            'The number of respondents is large enough to approximate the binomial distribution using a normal model.',
          ],
        },
      },
      randomVariableDescription:
        'the number of respondents who exhibit the curse of knowledge cognitive bias',
      defaultNumberOfTrials: 350,
      defaultProbabilityOfSuccess: 0.25,
      suggestedSuccessCounts: {
        lessThan: 70,
        atMost: 80,
        moreThan: 100,
        atLeast: 90,
        between: {
          lower: 70,
          upper: 100,
          inclusivity: 'lower-exclusive-upper-inclusive',
        },
      },
    },

    // End of course contexts.
  ];
