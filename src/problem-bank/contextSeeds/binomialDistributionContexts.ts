import type { BinomialDistributionProblem } from '../schemas/binomialDistribution.schema';

type BinomialContextSeed = {
  id: string;

  context: BinomialDistributionProblem['context'];

  randomVariableDescription: string;

  defaultNumberOfTrials: number;
  defaultProbabilityOfSuccess: number;

  suggestedSuccessCounts: {
    exactly?: number;
    lessThan?: number;
    atMost?: number;
    moreThan?: number;
    atLeast?: number;
    between?: {
      lower: number;
      upper: number;
    };
  };
};

export const binomialDistributionContexts: BinomialContextSeed[] = [
  {
    id: 'seed-germination',
    context: {
      setting: 'botany lab',
      trialDescription: 'planting one seed under controlled conditions',
      successDescription: 'the seed germinates',
      failureDescription: 'the seed does not germinate',
      unit: 'seeds',
      tone: 'scientific but accessible',
      variationProfile: {
        openingStyle: 'practical lab scenario',
        toneGuidance:
          'Use clear scientific language without making the context sound childish.',
        vocabularySuggestions: [
          'germinate',
          'controlled conditions',
          'success',
          'trial',
        ],
        seedPhraseInContext:
          'A botany class is testing seed germination under controlled conditions.',
        avoidPhrases: ['lucky seed', 'plant magic'],
        contextDetails: [
          'Each seed is planted under the same conditions.',
          'The germination result for each seed is recorded.',
        ],
      },
    },
    randomVariableDescription: 'the number of seeds that germinate',
    defaultNumberOfTrials: 20,
    defaultProbabilityOfSuccess: 0.75,
    suggestedSuccessCounts: {
      exactly: 16,
      lessThan: 14,
      atMost: 15,
      moreThan: 17,
      atLeast: 16,
      between: {
        lower: 14,
        upper: 18,
      },
    },
  },

  {
    id: 'free-throws',
    context: {
      setting: 'basketball practice',
      trialDescription: 'taking one free throw',
      successDescription: 'the player makes the free throw',
      failureDescription: 'the player misses the free throw',
      unit: 'free throws',
      tone: 'everyday sports context',
      variationProfile: {
        openingStyle: 'realistic practice scenario',
        toneGuidance:
          'Use familiar sports language while keeping the probability structure clear.',
        vocabularySuggestions: [
          'free throw',
          'made shot',
          'practice round',
          'success',
        ],
        seedPhraseInContext:
          'During practice, a basketball player takes a fixed number of free throws.',
        avoidPhrases: ['hot hand', 'clutch magic'],
        contextDetails: [
          'Each free throw is treated as having the same probability of being made.',
          'The outcome of one shot is treated as independent of the others.',
        ],
      },
    },
    randomVariableDescription: 'the number of free throws made',
    defaultNumberOfTrials: 12,
    defaultProbabilityOfSuccess: 0.68,
    suggestedSuccessCounts: {
      exactly: 8,
      lessThan: 7,
      atMost: 8,
      moreThan: 9,
      atLeast: 8,
      between: {
        lower: 7,
        upper: 10,
      },
    },
  },

  {
    id: 'quality-control-lightbulbs',
    context: {
      setting: 'quality-control inspection',
      trialDescription: 'inspecting one light bulb from a production batch',
      successDescription: 'the light bulb is defective',
      failureDescription: 'the light bulb passes inspection',
      unit: 'light bulbs',
      tone: 'technical workplace context',
      variationProfile: {
        openingStyle: 'quality-control scenario',
        toneGuidance:
          'Use precise workplace language. Make clear that “success” means detecting a defective item.',
        vocabularySuggestions: [
          'inspection',
          'defective',
          'production batch',
          'quality control',
        ],
        seedPhraseInContext:
          'A quality-control technician inspects light bulbs from a production batch.',
        avoidPhrases: ['bad bulb disaster', 'factory chaos'],
        contextDetails: [
          'Each inspected light bulb is classified as defective or not defective.',
          'The probability of a defective bulb is assumed to be the same for each inspection.',
        ],
      },
    },
    randomVariableDescription: 'the number of defective light bulbs found',
    defaultNumberOfTrials: 25,
    defaultProbabilityOfSuccess: 0.08,
    suggestedSuccessCounts: {
      exactly: 2,
      lessThan: 2,
      atMost: 3,
      moreThan: 4,
      atLeast: 3,
      between: {
        lower: 1,
        upper: 4,
      },
    },
  },

  {
    id: 'multiple-choice-guessing',
    context: {
      setting: 'multiple-choice quiz',
      trialDescription: 'answering one multiple-choice question by guessing',
      successDescription: 'the student guesses the correct answer',
      failureDescription: 'the student guesses incorrectly',
      unit: 'questions',
      tone: 'classroom context',
      variationProfile: {
        openingStyle: 'assessment scenario',
        toneGuidance:
          'Keep the context neutral and academic. Avoid implying that guessing is a recommended strategy.',
        vocabularySuggestions: [
          'multiple-choice',
          'guessing',
          'correct answer',
          'independent question',
        ],
        seedPhraseInContext:
          'A student guesses on several multiple-choice questions, each with the same number of answer choices.',
        avoidPhrases: ['randomly vibes', 'test hack'],
        contextDetails: [
          'Each question has one correct answer.',
          'The guesses are treated as independent.',
        ],
      },
    },
    randomVariableDescription: 'the number of questions answered correctly',
    defaultNumberOfTrials: 10,
    defaultProbabilityOfSuccess: 0.25,
    suggestedSuccessCounts: {
      exactly: 3,
      lessThan: 2,
      atMost: 4,
      moreThan: 5,
      atLeast: 3,
      between: {
        lower: 2,
        upper: 5,
      },
    },
  },

  {
    id: 'email-spam-filter',
    context: {
      setting: 'email filtering system',
      trialDescription: 'classifying one incoming email',
      successDescription: 'the email is correctly flagged as spam',
      failureDescription: 'the email is not correctly flagged as spam',
      unit: 'emails',
      tone: 'applied technology context',
      variationProfile: {
        openingStyle: 'technology application',
        toneGuidance:
          'Use applied technology language without introducing machine-learning details.',
        vocabularySuggestions: [
          'spam filter',
          'incoming email',
          'flagged',
          'classification',
        ],
        seedPhraseInContext:
          'An email filtering system checks incoming messages and flags some as spam.',
        avoidPhrases: ['AI magic', 'robot detective'],
        contextDetails: [
          'Each incoming email is treated as one trial.',
          'The probability of correctly flagging spam is assumed to be constant.',
        ],
      },
    },
    randomVariableDescription: 'the number of spam emails correctly flagged',
    defaultNumberOfTrials: 30,
    defaultProbabilityOfSuccess: 0.9,
    suggestedSuccessCounts: {
      exactly: 27,
      lessThan: 26,
      atMost: 28,
      moreThan: 28,
      atLeast: 27,
      between: {
        lower: 26,
        upper: 29,
      },
    },
  },

  {
    id: 'blood-test-screening',
    context: {
      setting: 'medical screening study',
      trialDescription: 'testing one person who has a specific condition',
      successDescription: 'the test correctly returns a positive result',
      failureDescription:
        'the test does not correctly return a positive result',
      unit: 'people',
      tone: 'careful health-context language',
      variationProfile: {
        openingStyle: 'screening study scenario',
        toneGuidance:
          'Use careful, neutral language. Avoid making diagnostic claims beyond the probability model.',
        vocabularySuggestions: [
          'screening test',
          'positive result',
          'sensitivity',
          'correctly identifies',
        ],
        seedPhraseInContext:
          'In a screening study, a test is applied to people known to have a particular condition.',
        avoidPhrases: ['guarantees diagnosis', 'proves disease'],
        contextDetails: [
          'Each person is tested once.',
          'The probability of a correct positive result is treated as constant.',
        ],
      },
    },
    randomVariableDescription:
      'the number of people who correctly receive a positive test result',
    defaultNumberOfTrials: 18,
    defaultProbabilityOfSuccess: 0.82,
    suggestedSuccessCounts: {
      exactly: 15,
      lessThan: 13,
      atMost: 14,
      moreThan: 16,
      atLeast: 15,
      between: {
        lower: 13,
        upper: 16,
      },
    },
  },

  {
    id: 'sunny-window-cats',
    context: {
      setting: 'animal behaviour observation',
      trialDescription: 'observing one cat choose a resting spot',
      successDescription: 'the cat chooses the sunny window spot',
      failureDescription: 'the cat chooses another resting spot',
      unit: 'cats',
      tone: 'light but still statistically clear',
      variationProfile: {
        openingStyle: 'observational study scenario',
        toneGuidance:
          'The context may be friendly, but the wording should still sound appropriate for a college statistics problem.',
        vocabularySuggestions: [
          'observation',
          'sunny window spot',
          'resting spot',
          'choice',
        ],
        seedPhraseInContext:
          'In an animal behaviour observation, several cats are observed choosing resting spots.',
        avoidPhrases: ['cat kingdom', 'sunbeam royalty'],
        contextDetails: [
          'Each cat is observed once.',
          'Choosing the sunny window spot is recorded as the success outcome.',
        ],
      },
    },
    randomVariableDescription:
      'the number of cats that choose the sunny window spot',
    defaultNumberOfTrials: 16,
    defaultProbabilityOfSuccess: 0.6,
    suggestedSuccessCounts: {
      exactly: 10,
      lessThan: 8,
      atMost: 9,
      moreThan: 11,
      atLeast: 10,
      between: {
        lower: 8,
        upper: 12,
      },
    },
  },

  {
    id: 'transit-card-tap-success',
    context: {
      setting: 'public transit station',
      trialDescription: 'one commuter tapping a transit card at the gate',
      successDescription: 'the card tap is accepted on the first try',
      failureDescription: 'the card tap is not accepted on the first try',
      unit: 'commuters',
      tone: 'everyday civic context',
      variationProfile: {
        openingStyle: 'public transit scenario',
        toneGuidance:
          'Use realistic everyday language while preserving the fixed-trial binomial structure.',
        vocabularySuggestions: [
          'transit card',
          'accepted on the first try',
          'commuter',
          'gate',
        ],
        seedPhraseInContext:
          'At a transit station, commuters tap their cards to pass through a gate.',
        avoidPhrases: ['commuter chaos', 'gate drama'],
        contextDetails: [
          'Each commuter makes one card tap.',
          'A first-try accepted tap is recorded as the success outcome.',
        ],
      },
    },
    randomVariableDescription:
      'the number of transit card taps accepted on the first try',
    defaultNumberOfTrials: 40,
    defaultProbabilityOfSuccess: 0.93,
    suggestedSuccessCounts: {
      exactly: 37,
      lessThan: 36,
      atMost: 38,
      moreThan: 38,
      atLeast: 37,
      between: {
        lower: 36,
        upper: 39,
      },
    },
  },
  {
    id: 'financiers-job-performance',
    context: {
      setting: 'financial firm performance review',
      trialDescription: 'evaluating one employee’s performance on a key task',
      successDescription: 'the employee successfully completes the task',
      failureDescription:
        'the employee does not successfully complete the task',
      unit: 'employees',
      tone: 'professional workplace context',
      variationProfile: {
        openingStyle: 'workplace performance review scenario',
        toneGuidance:
          'Use formal workplace language while maintaining clarity about the probability model.',
        vocabularySuggestions: [
          'performance review',
          'key task',
          'successfully completes',
          'employee evaluation',
        ],
        seedPhraseInContext:
          'According to researchers in 2016, financiers who drive fancy cars are worse at their jobs than those who drive minivans.',
        avoidPhrases: ['office drama', 'workplace chaos'],
        contextDetails: [
          'Each employee is evaluated on the same key task.',
          'The probability of successfully completing the task is treated as constant across employees.',
        ],
      },
    },
    randomVariableDescription:
      'the number of employees who successfully complete the task',
    defaultNumberOfTrials: 15,
    defaultProbabilityOfSuccess: 0.7,
    suggestedSuccessCounts: {
      exactly: 10,
      lessThan: 9,
      atMost: 10,
      moreThan: 11,
      atLeast: 10,
      between: {
        lower: 9,
        upper: 12,
      },
    },
  },
  {
    id: 'fancy-car-drivers',
    context: {
      setting: 'politeness of drivers of fancy cars',
      trialDescription:
        'observing the number of drivers who yield to pedestrians at a crosswalk',
      successDescription: 'a driver yields to a pedestrian',
      failureDescription: 'a driver does not yield to a pedestrian',
      unit: 'drivers',
      tone: 'light but still statistically clear',
      variationProfile: {
        openingStyle: 'observational study scenario',
        toneGuidance:
          'The context may be friendly, but the wording should still sound appropriate for a college statistics problem.',
        vocabularySuggestions: [
          'observational study',
          'yielding to pedestrians',
          'crosswalk',
          'driver behavior',
        ],
        seedPhraseInContext:
          'People who drive more expensive cars are less likely to yield to pedestrians. Increasing the cost of the car by just $1000 meant the driver was 3% less likely to yield.',
        avoidPhrases: ['road rage', 'car drama'],
        contextDetails: [
          'Each driver is observed at a crosswalk.',
          'Yielding to a pedestrian is recorded as the success outcome.',
        ],
      },
    },
    randomVariableDescription: 'the number of drivers who yield to pedestrians',
    defaultNumberOfTrials: 50,
    defaultProbabilityOfSuccess: 0.85,
    suggestedSuccessCounts: {
      exactly: 42,
      lessThan: 40,
      atMost: 41,
      moreThan: 43,
      atLeast: 42,
      between: {
        lower: 40,
        upper: 44,
      },
    },
  },

  // End of calibration contexts.
  // Beginning of course contexts.

  {
    id: 'male-parrot-fish',
    context: {
      setting: 'marine biology field study',
      trialDescription: 'observing the number of male parrotfish in a harem',
      successDescription:
        'a male parrotfish has more than 5 females in its harem',
      failureDescription:
        'a male parrotfish does not have more than 5 females in its harem',
      unit: 'parrotfish',
      tone: 'light but still statistically clear',
      variationProfile: {
        openingStyle: 'observational study scenario',
        toneGuidance:
          'The context may be friendly, but the wording should still sound appropriate for a college statistics problem.',
        vocabularySuggestions: [
          'observational study',
          'male parrotfish',
          'harem',
          'female parrotfish',
        ],
        seedPhraseInContext:
          'Some male parrotfish have harems of females. When they die, one of the females transforms into a male and takes over the harem.',
        avoidPhrases: [],
        contextDetails: [
          'Each male parrotfish is observed in a harem.',
          'Having more than 5 females in a harem is recorded as the success outcome.',
        ],
      },
    },
    randomVariableDescription:
      'the number of male parrotfish with more than 5 females in their harem',
    defaultNumberOfTrials: 10,
    defaultProbabilityOfSuccess: 0.3,
    suggestedSuccessCounts: {
      exactly: 3,
      lessThan: 3,
      atMost: 4,
      moreThan: 4,
      atLeast: 3,
      between: {
        lower: 2,
        upper: 5,
      },
    },
  },
  {
    id: 'overdue-books-cat-picture',
    context: {
      setting: 'library study',
      trialDescription:
        'observing the number of people who show a picture of a cat',
      successDescription: 'a person shows a picture of a cat.',
      failureDescription: 'a person does not show a picture of a cat.',
      unit: 'people',
      tone: 'light but still statistically clear',
      variationProfile: {
        openingStyle: 'observational study scenario',
        toneGuidance:
          'The context may be friendly, but the wording should still sound appropriate for a college statistics problem.',
        vocabularySuggestions: [
          'observational study',
          'overdue books',
          'library',
          'book return',
        ],
        seedPhraseInContext:
          'For one month in 2024, Worcester Public Library in Massachusetts waived fees for overdue and damaged books for anyone who showed staff a picture of a cat.',
        avoidPhrases: [],
        contextDetails: [
          'Each person is observed for showing a picture of a cat.',
          'Showing a picture of a cat is recorded as the success outcome.',
        ],
      },
    },
    randomVariableDescription:
      'the number of people who show a picture of a cat',
    defaultNumberOfTrials: 25,
    defaultProbabilityOfSuccess: 0.85,
    suggestedSuccessCounts: {
      exactly: 21,
      lessThan: 2,
      atMost: 3,
      moreThan: 23,
      atLeast: 23,
      between: {
        lower: 20,
        upper: 22,
      },
    },
  },
  {
    id: 'no-bad-photos',
    context: {
      setting: 'photography contest',
      trialDescription: 'number of contestants in a photography contest.',
      successDescription:
        'number of contestants who are really bad photographers',
      failureDescription:
        'number of contestants who are not really bad photographers',
      unit: 'contestants',
      tone: 'light but still statistically clear',
      variationProfile: {
        openingStyle: 'observational study scenario',
        toneGuidance:
          'The context may be friendly, but the wording should still sound appropriate for a college statistics problem.',
        vocabularySuggestions: [
          'observational study',
          'photography contest',
          'contestant',
          'photographer',
        ],
        seedPhraseInContext:
          'To prove that even bad photos can’t spoil the beauty of Iceland, the airline Icelandair is hiring a ‘really bad photographer’ who has ‘no special interest in learning photography.’ The successful candidate will go on a 10-day trip to Iceland with travel expenses covered.',
        avoidPhrases: [],
        contextDetails: [
          'Each contestant is observed in the photography contest.',
          'Being a really bad photographer is recorded as the success outcome.',
        ],
      },
    },
    randomVariableDescription:
      'the number of contestants who are really bad photographers',
    defaultNumberOfTrials: 12,
    defaultProbabilityOfSuccess: 0.7,
    suggestedSuccessCounts: {
      exactly: 8,
      lessThan: 10,
      atMost: 2,
      moreThan: 9,
      atLeast: 11,
      between: {
        lower: 7,
        upper: 11,
      },
    },
  },
  {
    id: 'bumblebees-morse-code',
    context: {
      setting: 'bumblebees learning Morse code',
      trialDescription:
        'number of bumblebees trained to associate a specific Morse code pattern with a food reward.',
      successDescription:
        'a bumblebee successfully associates the Morse code pattern with the food reward',
      failureDescription:
        'a bumblebee does not successfully associate the Morse code pattern with the food reward',
      unit: 'bumblebees',
      tone: 'light but still statistically clear',
      variationProfile: {
        openingStyle: 'observational study scenario',
        toneGuidance:
          'The context may be friendly, but the wording should still sound appropriate for a college statistics problem.',
        vocabularySuggestions: [
          'observational study',
          'Morse code',
          'bumblebee',
          'training',
        ],
        seedPhraseInContext: 'Bumblebees can learn simple Morse code.',
        avoidPhrases: [''],
        contextDetails: [
          'Each bumblebee is observed during the training.',
          'Successfully associating the Morse code pattern with the food reward is recorded as the success outcome.',
        ],
      },
    },
    randomVariableDescription:
      'the number of bumblebees who successfully associate the Morse code pattern with the food reward',
    defaultNumberOfTrials: 13,
    defaultProbabilityOfSuccess: 0.83,
    suggestedSuccessCounts: {
      exactly: 12,
      lessThan: 10,
      atMost: 11,
      moreThan: 11,
      atLeast: 2,
      between: {
        lower: 9,
        upper: 12,
      },
    },
  },
  {
    id: 'oak-trees-delayed-leaf-opening',
    context: {
      setting: 'oak trees and their leaf-opening behavior',
      trialDescription:
        'observing the number of oak trees that delay opening their leaves after being ravaged by caterpillars',
      successDescription: 'an oak tree delays opening its leaves',
      failureDescription: 'an oak tree does not delay opening its leaves',
      unit: 'oak trees',
      tone: 'light but still statistically clear',
      variationProfile: {
        openingStyle: 'observational study scenario',
        toneGuidance:
          'The context may be friendly, but the wording should still sound appropriate for a college statistics problem.',
        vocabularySuggestions: [
          'observational study',
          'oak tree',
          'leaf-opening behavior',
          'caterpillar damage',
        ],
        seedPhraseInContext:
          'If an oak tree has been ravaged by caterpillars, the following year it will delay opening its leaves in order to prevent a repeat occurrence.',
        avoidPhrases: [''],
        contextDetails: [
          'Each oak tree is observed after being ravaged by caterpillars.',
          'Delaying the opening of leaves is recorded as the success outcome.',
        ],
      },
    },
    randomVariableDescription:
      'the number of oak trees that delay opening their leaves',
    defaultNumberOfTrials: 11,
    defaultProbabilityOfSuccess: 0.65,
    suggestedSuccessCounts: {
      exactly: 9,
      lessThan: 2,
      atMost: 8,
      moreThan: 10,
      atLeast: 9,
      between: {
        lower: 7,
        upper: 10,
      },
    },
  },
  {
    id: 'united-airlines-men-flight',
    context: {
      setting:
        'number of men on a United Airlines flight who order steak dinners',
      trialDescription:
        'observing the number of male passengers who order steak dinners on a United Airlines flight',
      successDescription: 'number of male passengers who order steak dinners',
      failureDescription:
        'number of male passengers who do not order steak dinners',
      unit: 'passengers',
      tone: 'light but still statistically clear',
      variationProfile: {
        openingStyle: 'observational study scenario',
        toneGuidance:
          'The context may be friendly, but the wording should still sound appropriate for a college statistics problem.',
        vocabularySuggestions: [
          'observational study',
          'United Airlines',
          'men-only flights',
          'steak dinner',
        ],
        seedPhraseInContext:
          'Until 1970, United Airlines ran men-only flights. Slippers and a two-course steak dinner were provided to give the air of a private club.',
        avoidPhrases: [''],
        contextDetails: [
          'Each male passenger is observed on a United Airlines flight.',
          'Ordering a steak dinner is recorded as the success outcome.',
        ],
      },
    },
    randomVariableDescription:
      'the number of male passengers who order steak dinners',
    defaultNumberOfTrials: 10,
    defaultProbabilityOfSuccess: 0.75,
    suggestedSuccessCounts: {
      exactly: 7,
      lessThan: 3,
      atMost: 3,
      moreThan: 8,
      atLeast: 7,
      between: {
        lower: 6,
        upper: 8,
      },
    },
  },
  {
    id: 'hay-fever',
    context: {
      setting: 'hay fever and pollen exposure',
      trialDescription:
        'observing the number of Japanese citizens who suffer from moderate to severe hay fever',
      successDescription:
        'a Japanese citizen suffers from moderate to severe hay fever',
      failureDescription:
        'a Japanese citizen does not suffer from moderate to severe hay fever',
      unit: 'citizens',
      tone: 'light but still statistically clear',
      variationProfile: {
        openingStyle: 'observational study scenario',
        toneGuidance:
          'The context may be friendly, but the wording should still sound appropriate for a college statistics problem.',
        vocabularySuggestions: [
          'observational study',
          'hay fever',
          'pollen exposure',
          'Japanese citizens',
          'reforestation',
        ],
        seedPhraseInContext:
          '43% of Japanese citizens suffer from moderate to severe hay fever. The problem has been blamed on a vast reforestation program implemented by the Japanese government after World War II which created monocultures of high pollen producing trees.',
        avoidPhrases: [''],
        contextDetails: [
          'Each Japanese citizen is observed for hay fever symptoms.',
          'Suffering from moderate to severe hay fever is recorded as the success outcome.',
        ],
      },
    },
    randomVariableDescription:
      'the number of Japanese citizens who suffer from moderate to severe hay fever',
    defaultNumberOfTrials: 6,
    defaultProbabilityOfSuccess: 0.43,
    suggestedSuccessCounts: {
      exactly: 3,
      lessThan: 2,
      atMost: 2,
      moreThan: 4,
      atLeast: 3,
      between: {
        lower: 2,
        upper: 5,
      },
    },
  },
  {
    id: 'items-left-in-ubers',
    context: {
      setting: 'items left in American Ubers',
      trialDescription:
        'observing the number of items left in American Ubers last year',
      successDescription: 'an item is left in an Uber',
      failureDescription: 'an item is not left in an Uber',
      unit: 'items',
      tone: 'light but still statistically clear',
      variationProfile: {
        openingStyle: 'observational study scenario',
        toneGuidance:
          'The context may be friendly, but the wording should still sound appropriate for a college statistics problem.',
        vocabularySuggestions: [
          'observational study',
          'items left in Ubers',
          'American Ubers',
          'lost and found',
        ],
        seedPhraseInContext:
          'Items left in American Ubers last year include 420 donuts, a toboggan, 20 pounds of duck sausage and a child’s prosthetic eye.',
        avoidPhrases: ['road rage', 'car drama'],
        contextDetails: [
          'Each Uber ride is observed for items left behind.',
          'Leaving an item in an Uber is recorded as the success outcome.',
        ],
      },
    },
    randomVariableDescription: 'the number of items left in American Ubers',
    defaultNumberOfTrials: 20,
    defaultProbabilityOfSuccess: 0.15,
    suggestedSuccessCounts: {
      exactly: 3,
      lessThan: 3,
      atMost: 4,
      moreThan: 4,
      atLeast: 3,
      between: {
        lower: 3,
        upper: 6,
      },
    },
  },
  {
    id: 'driving-under-the-influence',
    context: {
      setting: 'drivers under the influence of the Northern Lights in Iceland',
      trialDescription:
        'number of drivers pulled over during a police operation in Iceland',
      successDescription:
        'a driver is pulled over for driving under the influence of the Northern Lights',
      failureDescription:
        'a driver is not pulled over for driving under the influence of the Northern Lights',
      unit: 'drivers',
      tone: 'light but still statistically clear',
      variationProfile: {
        openingStyle: 'observational study scenario',
        toneGuidance:
          'The context may be friendly, but the wording should still sound appropriate for a college statistics problem.',
        vocabularySuggestions: [
          'observational study',
          'driving under the influence of the Northern Lights',
          'Icelandic police',
          'driver behavior',
        ],
        seedPhraseInContext:
          'Icelandic police sometimes have to stop people for ‘driving under the influence of the Northern Lights’ – the drivers in swerving cars are not drunk, but mesmerised.',
        avoidPhrases: ['road rage', 'car drama'],
        contextDetails: [
          'Each driver is observed during a police operation in Iceland.',
          'Being pulled over for driving under the influence of the Northern Lights is recorded as the success outcome.',
        ],
      },
    },
    randomVariableDescription:
      'the number of drivers pulled over during a police operation in Iceland',
    defaultNumberOfTrials: 17,
    defaultProbabilityOfSuccess: 0.8,
    suggestedSuccessCounts: {
      exactly: 14,
      lessThan: 2,
      atMost: 16,
      moreThan: 14,
      atLeast: 1,
      between: {
        lower: 12,
        upper: 15,
      },
    },
  },
  {
    id: 'baby-behaviours',
    context: {
      setting: 'observing baby behaviours',
      trialDescription:
        'observing the number of baby chicks that match shapes to sounds',
      successDescription: 'a baby chick matches a shape to a sound',
      failureDescription: 'a baby chick does not match a shape to a sound',
      unit: 'baby chicks',
      tone: 'light but still statistically clear',
      variationProfile: {
        openingStyle: 'observational study scenario',
        toneGuidance:
          'The context may be friendly, but the wording should still sound appropriate for a college statistics problem.',
        vocabularySuggestions: [
          'observational study',
          'baby chicks',
          'shape-sound association',
          'bouba-kiki effect',
        ],
        seedPhraseInContext:
          'The bouba-kiki effect is when people associate a shape with a sound. It’s not confined to humans, baby chicks also match a spiky shape to a ‘kiki’ sound and a round shape to a ‘bouba’ sound.',
        avoidPhrases: [''],
        contextDetails: [
          'Each baby chick is observed during the experiment.',
          'Matching a shape to a sound is recorded as the success outcome.',
        ],
      },
    },
    randomVariableDescription:
      'the number of baby chicks that match shapes to sounds',
    defaultNumberOfTrials: 7,
    defaultProbabilityOfSuccess: 0.79,
    suggestedSuccessCounts: {
      exactly: 6,
      lessThan: 2,
      atMost: 5,
      moreThan: 6,
      atLeast: 1,
      between: {
        lower: 4,
        upper: 6,
      },
    },
  },

  // End of course contexts.
];
