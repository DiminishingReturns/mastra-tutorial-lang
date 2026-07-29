import type { ProbabilityRulesQuestionType } from '../schemas/probabilityRules.schema';

export type ProbabilityRulesContextSeed = {
  id: string;

  structureType: 'two-event' | 'partition';

  setting: string;
  story: string;
  populationOrProcess?: string;

  probabilityPresentation: {
    format: 'decimal' | 'fraction' | 'percentage' | 'count';
    sampleSpaceSize?: number;
    notes?: string;
  };

  defaultQuestionType: ProbabilityRulesQuestionType;
};

export type TwoEventProbabilityRulesContextSeed =
  ProbabilityRulesContextSeed & {
    structureType: 'two-event';

    eventA: {
      symbol: 'A';
      label: string;
      description: string;
    };

    eventB: {
      symbol: 'B';
      label: string;
      description: string;
    };

    probabilities: {
      probabilityA: number;
      probabilityB: number;
      probabilityAAndB: number;

      isIndependent?: boolean;
      isMutuallyExclusive?: boolean;
    };
  };

export type PartitionProbabilityRulesContextSeed =
  ProbabilityRulesContextSeed & {
    structureType: 'partition';

    conditionEvent: {
      symbol: 'A';
      label: string;
      description: string;
    };

    complementConditionEvent: {
      symbol: 'A^c';
      label: string;
      description: string;
    };

    targetEvent: {
      symbol: 'B';
      label: string;
      description: string;
    };

    probabilities: {
      probabilityA: number;
      probabilityNotA: number;
      probabilityBGivenA: number;
      probabilityBGivenNotA: number;
    };
  };

export type ProbabilityRulesContextSeedUnion =
  | TwoEventProbabilityRulesContextSeed
  | PartitionProbabilityRulesContextSeed;

export const probabilityRulesContextSeeds: ProbabilityRulesContextSeedUnion[] =
  [
    {
      id: 'test-preparation',

      structureType: 'partition',

      setting: 'A student is preparing for a test.',

      story:
        'On days when the student studies, the probability of passing the test is higher than on days when the student does not study.',

      populationOrProcess: 'randomly selected test days for this student',

      probabilityPresentation: {
        format: 'percentage',
      },

      conditionEvent: {
        symbol: 'A',
        label: 'studies',
        description: 'the student studies for the test',
      },

      complementConditionEvent: {
        symbol: 'A^c',
        label: 'does not study',
        description: 'the student does not study for the test',
      },

      targetEvent: {
        symbol: 'B',
        label: 'passes',
        description: 'the student passes the test',
      },

      probabilities: {
        probabilityA: 0.7,
        probabilityNotA: 0.3,
        probabilityBGivenA: 0.9,
        probabilityBGivenNotA: 0.5,
      },

      defaultQuestionType: 'total-probability',
    },

    {
      id: 'app-feature-usability',

      structureType: 'partition',

      setting:
        'An AI system is monitoring user interactions with a new app feature.',

      story:
        'Some users receive an onboarding prompt before using the feature, while others do not. The probability of completing the intended task depends on whether the user received the prompt.',

      populationOrProcess:
        'randomly selected user interactions with the new app feature',

      probabilityPresentation: {
        format: 'decimal',
      },

      conditionEvent: {
        symbol: 'A',
        label: 'received prompt',
        description: 'the user received the onboarding prompt',
      },

      complementConditionEvent: {
        symbol: 'A^c',
        label: 'did not receive prompt',
        description: 'the user did not receive the onboarding prompt',
      },

      targetEvent: {
        symbol: 'B',
        label: 'completed task',
        description: 'the user completed the intended task',
      },

      probabilities: {
        probabilityA: 0.4,
        probabilityNotA: 0.6,
        probabilityBGivenA: 0.85,
        probabilityBGivenNotA: 0.55,
      },

      defaultQuestionType: 'bayes-rule',
    },

    {
      id: 'library-workshop',

      structureType: 'two-event',

      setting:
        'A college library surveys students about academic support services.',

      story:
        'Students are asked whether they attended a research-skills workshop and whether they used the citation help desk during the semester.',

      populationOrProcess:
        'randomly selected students who used college library services',

      probabilityPresentation: {
        format: 'percentage',
      },

      eventA: {
        symbol: 'A',
        label: 'attended workshop',
        description: 'the student attended a research-skills workshop',
      },

      eventB: {
        symbol: 'B',
        label: 'used citation help desk',
        description: 'the student used the citation help desk',
      },

      probabilities: {
        probabilityA: 0.45,
        probabilityB: 0.3,
        probabilityAAndB: 0.18,
        isIndependent: false,
        isMutuallyExclusive: false,
      },

      defaultQuestionType: 'union-rule',
    },

    {
      id: 'science-club-activities',

      structureType: 'two-event',

      setting:
        'A science club records participation in two optional activities.',

      story:
        'Members may attend a robotics session, a climate-data session, both sessions, or neither session.',

      populationOrProcess: 'randomly selected science club members',

      probabilityPresentation: {
        format: 'fraction',
      },

      eventA: {
        symbol: 'A',
        label: 'robotics session',
        description: 'the member attended the robotics session',
      },

      eventB: {
        symbol: 'B',
        label: 'climate-data session',
        description: 'the member attended the climate-data session',
      },

      probabilities: {
        probabilityA: 0.5,
        probabilityB: 0.4,
        probabilityAAndB: 0.2,
        isIndependent: true,
        isMutuallyExclusive: false,
      },

      defaultQuestionType: 'independence',
    },

    {
      id: 'campus-events',

      structureType: 'two-event',

      setting:
        'A campus life office tracks student attendance at two events during orientation week.',

      story:
        'Students may attend a welcome breakfast, a student-services fair, both events, or neither event.',

      populationOrProcess:
        'randomly selected students who attended orientation week',

      probabilityPresentation: {
        format: 'count',
        sampleSpaceSize: 200,
      },

      eventA: {
        symbol: 'A',
        label: 'welcome breakfast',
        description: 'the student attended the welcome breakfast',
      },

      eventB: {
        symbol: 'B',
        label: 'student-services fair',
        description: 'the student attended the student-services fair',
      },

      probabilities: {
        probabilityA: 0.55,
        probabilityB: 0.65,
        probabilityAAndB: 0.35,
        isIndependent: false,
        isMutuallyExclusive: false,
      },

      defaultQuestionType: 'only-a',
    },

    {
      id: 'equipment-checks',

      structureType: 'two-event',

      setting:
        'A lab technician records the results of routine equipment checks.',

      story:
        'During each check, a device may have a battery issue, a calibration issue, both issues, or neither issue.',

      populationOrProcess: 'randomly selected routine equipment checks',

      probabilityPresentation: {
        format: 'decimal',
      },

      eventA: {
        symbol: 'A',
        label: 'battery issue',
        description: 'the device has a battery issue',
      },

      eventB: {
        symbol: 'B',
        label: 'calibration issue',
        description: 'the device has a calibration issue',
      },

      probabilities: {
        probabilityA: 0.28,
        probabilityB: 0.22,
        probabilityAAndB: 0.08,
        isIndependent: false,
        isMutuallyExclusive: false,
      },

      defaultQuestionType: 'conditional-probability',
    },

    {
      id: 'student-course-platform',

      structureType: 'two-event',

      setting:
        'An online course platform tracks how students use optional learning tools.',

      story:
        'Students may use the practice quiz tool, the video review tool, both tools, or neither tool during a study week.',

      populationOrProcess:
        'randomly selected students using the online course platform during a study week',

      probabilityPresentation: {
        format: 'decimal',
      },

      eventA: {
        symbol: 'A',
        label: 'uses practice quizzes',
        description: 'the student uses the practice quiz tool',
      },

      eventB: {
        symbol: 'B',
        label: 'uses video review',
        description: 'the student uses the video review tool',
      },

      probabilities: {
        probabilityA: 0.62,
        probabilityB: 0.48,
        probabilityAAndB: 0.31,
        isIndependent: false,
        isMutuallyExclusive: false,
      },

      defaultQuestionType: 'conditional-probability',
    },

    {
      id: 'orientation-session-choice',

      structureType: 'two-event',

      setting:
        'During orientation, each new student chooses exactly one morning session to attend.',

      story:
        'Students may choose the academic advising session, the financial aid session, or another session. Since each student chooses only one morning session, a student cannot attend both the academic advising session and the financial aid session.',

      populationOrProcess:
        'randomly selected new students attending orientation',

      probabilityPresentation: {
        format: 'percentage',
      },

      eventA: {
        symbol: 'A',
        label: 'academic advising',
        description: 'the student attends the academic advising session',
      },

      eventB: {
        symbol: 'B',
        label: 'financial aid',
        description: 'the student attends the financial aid session',
      },

      probabilities: {
        probabilityA: 0.35,
        probabilityB: 0.25,
        probabilityAAndB: 0,
        isIndependent: false,
        isMutuallyExclusive: true,
      },

      defaultQuestionType: 'union-rule',
    },

    {
      id: 'campus-survey-counts',

      structureType: 'two-event',

      setting:
        'A student services office summarizes responses from a campus survey.',

      story:
        'Out of 120 students surveyed, some reported using peer tutoring, some reported using academic advising, and some reported using both services.',

      populationOrProcess:
        'students who responded to the campus services survey',

      probabilityPresentation: {
        format: 'count',
        sampleSpaceSize: 120,
      },

      eventA: {
        symbol: 'A',
        label: 'used peer tutoring',
        description: 'the student used peer tutoring',
      },

      eventB: {
        symbol: 'B',
        label: 'used academic advising',
        description: 'the student used academic advising',
      },

      probabilities: {
        probabilityA: 0.5,
        probabilityB: 0.4,
        probabilityAAndB: 0.2,
        isIndependent: true,
        isMutuallyExclusive: false,
      },

      defaultQuestionType: 'conditional-probability',
    },

    {
      id: 'medical-screening',

      structureType: 'partition',

      setting: 'A clinic uses a screening test for a certain condition.',

      story:
        'A person may have the condition or not have the condition. The screening test is more likely to be positive for someone who has the condition than for someone who does not.',

      populationOrProcess:
        'randomly selected patients from the clinic population',

      probabilityPresentation: {
        format: 'percentage',
      },

      conditionEvent: {
        symbol: 'A',
        label: 'has condition',
        description: 'the patient has the condition',
      },

      complementConditionEvent: {
        symbol: 'A^c',
        label: 'does not have condition',
        description: 'the patient does not have the condition',
      },

      targetEvent: {
        symbol: 'B',
        label: 'positive test',
        description: 'the screening test is positive',
      },

      probabilities: {
        probabilityA: 0.08,
        probabilityNotA: 0.92,
        probabilityBGivenA: 0.95,
        probabilityBGivenNotA: 0.12,
      },

      defaultQuestionType: 'bayes-rule',
    },

    {
      id: 'seed-germination',

      structureType: 'partition',

      setting:
        'A biological research lab studies seed germination under controlled conditions.',

      story:
        'Seeds come from either species A or species B. The probability of successful germination depends on the species.',

      populationOrProcess:
        'randomly selected seeds used in the controlled germination study',

      probabilityPresentation: {
        format: 'fraction',
      },

      conditionEvent: {
        symbol: 'A',
        label: 'species A',
        description: 'the seed is from species A',
      },

      complementConditionEvent: {
        symbol: 'A^c',
        label: 'species B',
        description: 'the seed is from species B',
      },

      targetEvent: {
        symbol: 'B',
        label: 'germinates',
        description: 'the seed germinates successfully',
      },

      probabilities: {
        probabilityA: 0.6,
        probabilityNotA: 0.4,
        probabilityBGivenA: 0.7,
        probabilityBGivenNotA: 0.8,
      },

      defaultQuestionType: 'total-probability',
    },

    {
      id: 'email-filter',

      structureType: 'partition',

      setting: 'An email system filters incoming messages.',

      story:
        'A message may be promotional or not promotional. The probability that a message is flagged depends on whether it is promotional.',

      populationOrProcess: 'randomly selected incoming email messages',

      probabilityPresentation: {
        format: 'decimal',
      },

      conditionEvent: {
        symbol: 'A',
        label: 'promotional',
        description: 'the message is promotional',
      },

      complementConditionEvent: {
        symbol: 'A^c',
        label: 'not promotional',
        description: 'the message is not promotional',
      },

      targetEvent: {
        symbol: 'B',
        label: 'flagged',
        description: 'the message is flagged by the email system',
      },

      probabilities: {
        probabilityA: 0.3,
        probabilityNotA: 0.7,
        probabilityBGivenA: 0.88,
        probabilityBGivenNotA: 0.14,
      },

      defaultQuestionType: 'bayes-rule',
    },

    // End of calibration contexts.  Start of course contexts.

    // Two event contexts.

    {
      id: 'histamine-study',

      structureType: 'two-event',

      setting: 'research lab studying histamines',

      story:
        'Histamine - the chemical which triggers allergic responses - also improves your memory.  In a study, some participants were given a histamine pill, while others were given a placebo.  All participants were then asked to memorize a list of words.  After a short break, they were asked to recall as many words as possible from the list.',

      populationOrProcess:
        'randomly selected participants in the histamine study',

      probabilityPresentation: {
        format: 'percentage',
      },

      eventA: {
        symbol: 'A',
        label: 'received histamine pill',
        description: 'the participant received a histamine pill',
      },

      eventB: {
        symbol: 'B',
        label: 'successfully recalled words',
        description:
          'the participant successfully recalled words from the list',
      },

      probabilities: {
        probabilityA: 0.5,
        probabilityB: 0.6,
        probabilityAAndB: 0.3,
        isIndependent: false,
        isMutuallyExclusive: false,
      },

      defaultQuestionType: 'union-rule',
    },

    {
      id: 'stress-study',

      structureType: 'two-event',

      setting: 'research lab studying stress and blood clotting',

      story:
        'Feeling stressed can affect your blood, making it more prone to clotting.  In a study, some participants were exposed to a stressful situation, while others were not.  All participants were then asked to complete a stressful task.  After the task, their blood was tested for clotting.',

      populationOrProcess: 'randomly selected participants in the stress study',

      probabilityPresentation: {
        format: 'percentage',
      },

      eventA: {
        symbol: 'A',
        label: 'exposed to stress',
        description: 'the participant was exposed to a stressful situation',
      },

      eventB: {
        symbol: 'B',
        label: 'blood clotted',
        description: "the participant's blood clotted after the stressful task",
      },

      probabilities: {
        probabilityA: 0.7,
        probabilityB: 0.3,
        probabilityAAndB: 0,
        isIndependent: false,
        isMutuallyExclusive: true,
      },

      defaultQuestionType: 'union-rule',
    },

    {
      id: 'extreme-heat-event',

      structureType: 'two-event',

      setting: 'London climate change event on adapting to extreme heat',

      story:
        'A London climate change event on adapting to extreme heat has been cancelled due to extreme heat.  The event organizers are interested in the relationship between two events:  whether the day was extremely hot and whether the event was cancelled.',

      populationOrProcess:
        'randomly selected participants in the extreme heat event',

      probabilityPresentation: {
        format: 'percentage',
      },

      eventA: {
        symbol: 'A',
        label: 'extremely hot day',
        description: 'the day was extremely hot',
      },

      eventB: {
        symbol: 'B',
        label: 'event cancelled',
        description:
          'the London climate change event was cancelled due to extreme heat',
      },

      probabilities: {
        probabilityA: 0.2,
        probabilityB: 0.1,
        probabilityAAndB: 0.02,
        isIndependent: true,
        isMutuallyExclusive: false,
      },

      defaultQuestionType: 'union-rule',
    },

    {
      id: 'bumblebee-morse-code',

      structureType: 'two-event',

      setting: 'Bumblebee study on learning Morse code',

      story:
        'Bumblebees can learn simple Morse code. In a study, some bumblebees were trained to associate a specific Morse code pattern with a sugar reward, while others were not.  All bumblebees were then tested to see if they could recognize the Morse code pattern and receive the sugar reward.',

      populationOrProcess: 'randomly selected bumblebees in the study',

      probabilityPresentation: {
        format: 'decimal',
      },

      eventA: {
        symbol: 'A',
        label: 'learned Morse code',
        description: 'the bumblebee learned the Morse code pattern',
      },

      eventB: {
        symbol: 'B',
        label: 'received sugar reward',
        description:
          'the bumblebee received the sugar reward after recognizing the Morse code pattern',
      },

      probabilities: {
        probabilityA: 0.5,
        probabilityB: 0.4,
        probabilityAAndB: 0.3,
        isIndependent: false,
        isMutuallyExclusive: false,
      },

      defaultQuestionType: 'union-rule',
    },

    {
      id: 'items-left-in-ubers',

      structureType: 'two-event',

      setting: 'Items left in American Ubers last year',

      story:
        'Items left in American Ubers last year include 420 donuts, a toboggan, 20 pounds of duck sausage and a child’s prosthetic eye. The Uber company is interested in the relationship between two events:  whether an item was a food item and whether the item was a donut.',

      populationOrProcess:
        'randomly selected items left in American Ubers last year',

      probabilityPresentation: {
        format: 'decimal',
      },

      eventA: {
        symbol: 'A',
        label: 'food item',
        description: 'the item was a food item',
      },

      eventB: {
        symbol: 'B',
        label: 'donut',
        description: 'the item was a donut',
      },

      probabilities: {
        probabilityA: 0.6,
        probabilityB: 0.3,
        probabilityAAndB: 0.18,
        isIndependent: false,
        isMutuallyExclusive: false,
      },

      defaultQuestionType: 'union-rule',
    },

    {
      id: 'speed-camera-offences',

      structureType: 'two-event',

      setting: 'Speed camera offences in the UK',

      story:
        '10% of offences recorded by speed cameras in the UK go unpunished because the cars are unregistered or stolen.  The UK government is interested in the relationship between two events:  whether a speeding offence was recorded by a speed camera and whether the offence went unpunished.',

      populationOrProcess:
        'randomly selected speeding offences recorded by speed cameras in the UK',

      probabilityPresentation: {
        format: 'decimal',
      },

      eventA: {
        symbol: 'A',
        label: 'recorded by a speed camera',
        description: 'the speeding offence was recorded by a speed camera',
      },

      eventB: {
        symbol: 'B',
        label: 'went unpunished',
        description: 'the offence went unpunished',
      },

      probabilities: {
        probabilityA: 0.9,
        probabilityB: 0.1,
        probabilityAAndB: 0.09,
        isIndependent: true,
        isMutuallyExclusive: false,
      },

      defaultQuestionType: 'union-rule',
    },

    {
      id: 'items-left-in-ubers',

      structureType: 'two-event',

      setting: 'Items left in American Ubers last year',

      story:
        'Items left in American Ubers last year include 420 donuts, a toboggan, 20 pounds of duck sausage and a child’s prosthetic eye. The Uber company is interested in the relationship between two events:  whether an item was a food item and whether the item was a donut.',

      populationOrProcess:
        'randomly selected items left in American Ubers last year',

      probabilityPresentation: {
        format: 'decimal',
      },

      eventA: {
        symbol: 'A',
        label: 'food item',
        description: 'the item was a food item',
      },

      eventB: {
        symbol: 'B',
        label: 'donut',
        description: 'the item was a donut',
      },

      probabilities: {
        probabilityA: 0.6,
        probabilityB: 0.3,
        probabilityAAndB: 0.18,
        isIndependent: false,
        isMutuallyExclusive: false,
      },

      defaultQuestionType: 'union-rule',
    },

    {
      id: 'aging-colleagues',

      structureType: 'two-event',

      setting: 'Aging due to difficult relatives or colleagues',

      story:
        'Having difficult relatives or colleagues could age you 1.5% faster.  Researchers are interested if having relationships with difficult relatives and colleagues affects aging.  Consider the events: an individual has difficult relatives and the individual has difficult colleagues.',

      populationOrProcess:
        'randomly selected individuals with difficult relatives or colleagues',

      probabilityPresentation: {
        format: 'decimal',
      },

      eventA: {
        symbol: 'A',
        label: 'has difficult relatives',
        description: 'the individual has difficult relatives',
      },

      eventB: {
        symbol: 'B',
        label: 'has difficult colleagues',
        description: 'the individual has difficult colleagues',
      },

      probabilities: {
        probabilityA: 0.3,
        probabilityB: 0.15,
        probabilityAAndB: 0.0,
        isIndependent: false,
        isMutuallyExclusive: true,
      },

      defaultQuestionType: 'union-rule',
    },

    {
      id: 'colon-or-semicolon',

      structureType: 'two-event',

      setting: 'Duel over punctuation',

      story:
        'In 1837, two Parisian law school professors had a duel because they couldn’t agree on whether a certain passage should end with a colon or a semicolon. Consider the events: the passage ends with a colon and the passage ends with a semicolon.',

      populationOrProcess:
        'randomly selected Parisian law school professors in 1837',

      probabilityPresentation: {
        format: 'decimal',
      },

      eventA: {
        symbol: 'A',
        label: 'ends with a colon',
        description: 'the passage ends with a colon',
      },

      eventB: {
        symbol: 'B',
        label: 'ends with a semicolon',
        description: 'the passage ends with a semicolon',
      },

      probabilities: {
        probabilityA: 0.55,
        probabilityB: 0.35,
        probabilityAAndB: 0.0,
        isIndependent: false,
        isMutuallyExclusive: true,
      },

      defaultQuestionType: 'union-rule',
    },

    {
      id: 'doorway-effect',

      structureType: 'two-event',

      setting: 'Doorway effect',

      story:
        'The ``doorway effect`` occurs when you walk into a room and forget what you went in for. It`s so powerful that just thinking about walking through a doorway makes you more likely to forget. Consider the events: an individual forgets what they went in for and an individual remembers what they went in for.',

      populationOrProcess:
        'randomly selected individuals experiencing the doorway effect',

      probabilityPresentation: {
        format: 'decimal',
      },

      eventA: {
        symbol: 'A',
        label: 'forgets what they went in for',
        description: 'the individual forgets what they went in for',
      },

      eventB: {
        symbol: 'B',
        label: 'remembers what they went in for',
        description: 'the individual remembers what they went in for',
      },

      probabilities: {
        probabilityA: 0.6,
        probabilityB: 0.2,
        probabilityAAndB: 0.12,
        isIndependent: true,
        isMutuallyExclusive: false,
      },

      defaultQuestionType: 'union-rule',
    },

    {
      id: 'parrot-video-call',
      structureType: 'two-event',

      setting: 'Parrot video-call study',

      story:
        'In 2023, scientists taught pet parrots to video-call each other. The birds who initiated the highest number of calls also received the highest number of calls from other birds.  Scientists are interested in the relationship between two events: a parrot initiates a call and a parrot receives a call.',

      populationOrProcess:
        'randomly selected parrots participating in the video-call study',

      probabilityPresentation: {
        format: 'decimal',
      },

      eventA: {
        symbol: 'A',
        label: 'initiates a call',
        description: 'the parrot initiates a call',
      },

      eventB: {
        symbol: 'B',
        label: 'receives a call',
        description: 'the parrot receives a call',
      },

      probabilities: {
        probabilityA: 0.45,
        probabilityB: 0.35,
        probabilityAAndB: 0.0,
        isIndependent: false,
        isMutuallyExclusive: true,
      },

      defaultQuestionType: 'union-rule',
    },

    // End of two-event contexts.  Start of partition contexts.

    {
      id: 'placebo-study',

      structureType: 'partition',

      setting: 'A placebo study',

      story:
        'Placebos are more than 30% more effective as an antidote for depression than either drugs or herbal remedies.  The probability of a patient recovering from depression depends on whether they received a placebo, a drug, or an herbal remedy.',

      populationOrProcess: 'randomly selected patients in the study',

      probabilityPresentation: {
        format: 'percentage',
      },

      conditionEvent: {
        symbol: 'A',
        label: 'receives a placebo',
        description: 'the patient receives a placebo',
      },

      complementConditionEvent: {
        symbol: 'A^c',
        label: 'does not receive a placebo',
        description: 'the patient does not receive a placebo',
      },

      targetEvent: {
        symbol: 'B',
        label: 'recovers',
        description: 'the patient recovers from depression',
      },

      probabilities: {
        probabilityA: 0.5,
        probabilityNotA: 0.5,
        probabilityBGivenA: 0.3,
        probabilityBGivenNotA: 0.7,
      },

      defaultQuestionType: 'total-probability',
    },

    {
      id: 'crying-study',

      structureType: 'partition',

      setting: 'A crying study',

      story:
        'In a survey, 15% of men said they were more likely to cry while watching a film on a flight than at home. Only 6% of women said the same.  The probability of a passenger crying while watching a film on a flight depends on whether they are male or female.',

      populationOrProcess: 'randomly selected passengers in the survey',

      probabilityPresentation: {
        format: 'percentage',
      },

      conditionEvent: {
        symbol: 'A',
        label: 'is male',
        description: 'the passenger is male',
      },

      complementConditionEvent: {
        symbol: 'A^c',
        label: 'is female',
        description: 'the passenger is female',
      },

      targetEvent: {
        symbol: 'B',
        label: 'cries',
        description: 'the passenger cries while watching a film on a flight',
      },

      probabilities: {
        probabilityA: 0.6,
        probabilityNotA: 0.4,
        probabilityBGivenA: 0.15,
        probabilityBGivenNotA: 0.06,
      },

      defaultQuestionType: 'total-probability',
    },

    {
      id: 'car-sickness-music',

      structureType: 'partition',

      setting: 'A car sickness study',

      story:
        'A recent study shows that listening to upbeat and joyful music can help with car sickness. Sad songs have no effect.',

      populationOrProcess: 'randomly selected passengers in the study',

      probabilityPresentation: {
        format: 'percentage',
      },

      conditionEvent: {
        symbol: 'A',
        label: 'listens to upbeat music',
        description: 'the passenger listens to upbeat music',
      },

      complementConditionEvent: {
        symbol: 'A^c',
        label: 'does not listen to upbeat music',
        description: 'the passenger does not listen to upbeat music',
      },

      targetEvent: {
        symbol: 'B',
        label: 'experiences car sickness',
        description: 'the passenger experiences car sickness',
      },

      probabilities: {
        probabilityA: 0.8,
        probabilityNotA: 0.2,
        probabilityBGivenA: 0.45,
        probabilityBGivenNotA: 0.15,
      },

      defaultQuestionType: 'total-probability',
    },

    {
      id: 'men-eating-study',

      structureType: 'partition',

      setting: 'A study on men eating behavior',

      story:
        'Men who eat in the company of women eat nearly twice as much as men who eat with other men. ',

      populationOrProcess: 'randomly selected men in the study',

      probabilityPresentation: {
        format: 'percentage',
      },

      conditionEvent: {
        symbol: 'A',
        label: 'eats in the company of women',
        description: 'the man eats in the company of women',
      },

      complementConditionEvent: {
        symbol: 'A^c',
        label: 'does not eat in the company of women',
        description: 'the man does not eat in the company of women',
      },

      targetEvent: {
        symbol: 'B',
        label: 'eats nearly twice as much',
        description: 'the man eats nearly twice as much',
      },

      probabilities: {
        probabilityA: 0.4,
        probabilityNotA: 0.6,
        probabilityBGivenA: 0.75,
        probabilityBGivenNotA: 0.1,
      },

      defaultQuestionType: 'total-probability',
    },

    {
      id: 'egyptian-priests',

      structureType: 'partition',

      setting: 'A study on ancient Egyptian priests',

      story:
        'Ancient Egyptian priests suffered from clogged arteries because they took home and ate all the calorific offerings to the gods. ',

      populationOrProcess:
        'randomly selected ancient Egyptian priests in the study',

      probabilityPresentation: {
        format: 'percentage',
      },

      conditionEvent: {
        symbol: 'A',
        label: 'eats the offerings to the gods',
        description:
          'the ancient Egyptian priest eats the offerings to the gods',
      },

      complementConditionEvent: {
        symbol: 'A^c',
        label: 'does not eat the offerings to the gods',
        description:
          'the ancient Egyptian priest does not eat the offerings to the gods',
      },

      targetEvent: {
        symbol: 'B',
        label: 'has clogged arteries',
        description: 'the ancient Egyptian priest has clogged arteries',
      },

      probabilities: {
        probabilityA: 0.55,
        probabilityNotA: 0.45,
        probabilityBGivenA: 0.85,
        probabilityBGivenNotA: 0.05,
      },

      defaultQuestionType: 'total-probability',
    },

    {
      id: 'water-bed-invention',

      structureType: 'partition',

      setting: 'A study on the invention of the water bed',

      story:
        'The man who invented the water bed was unable to patent it because it had already appeared in science-fiction novels. The probability that an invention appears in a science-fiction novel is 0.2, and the probability that an invention is patented given that it appears in a science-fiction novel is 0.05. The probability that an invention is patented given that it does not appear in a science-fiction novel is 0.15.',

      populationOrProcess: 'randomly selected inventions in the study',

      probabilityPresentation: {
        format: 'decimal',
      },

      conditionEvent: {
        symbol: 'A',
        label: 'appears in a science-fiction novel',
        description: 'the invention appears in a science-fiction novel',
      },

      complementConditionEvent: {
        symbol: 'A^c',
        label: 'does not appear in a science-fiction novel',
        description: 'the invention does not appear in a science-fiction novel',
      },

      targetEvent: {
        symbol: 'B',
        label: 'patent is awarded',
        description: 'the invention is patented',
      },

      probabilities: {
        probabilityA: 0.2,
        probabilityNotA: 0.8,
        probabilityBGivenA: 0.05,
        probabilityBGivenNotA: 0.15,
      },

      defaultQuestionType: 'total-probability',
    },

    {
      id: 'chip-bags',

      structureType: 'partition',

      setting: 'A study on Sun Chips packaging',

      story:
        'Frito-Lay had to withdraw their Sun Chips from sale because the noise made by crinkling the packaging could reach 95 decibels, as loud as a motorbike. The probability that a bag of Sun Chips is crinkly is 0.25, and the probability that a bag of Sun Chips is withdrawn from sale given that it is crinkly is 0.65. The probability that a bag of Sun Chips is withdrawn from sale given that it is not crinkly is 0.15.',

      populationOrProcess: 'randomly selected bags of Sun Chips in the study',

      probabilityPresentation: {
        format: 'decimal',
      },

      conditionEvent: {
        symbol: 'A',
        label: 'is crinkly',
        description: 'the bag of Sun Chips is crinkly',
      },

      complementConditionEvent: {
        symbol: 'A^c',
        label: 'is not crinkly',
        description: 'the bag of Sun Chips is not crinkly',
      },

      targetEvent: {
        symbol: 'B',
        label: 'withdrawn from sale',
        description: 'the bag of Sun Chips is withdrawn from sale',
      },

      probabilities: {
        probabilityA: 0.25,
        probabilityNotA: 0.75,
        probabilityBGivenA: 0.65,
        probabilityBGivenNotA: 0.15,
      },

      defaultQuestionType: 'total-probability',
    },

    {
      id: 'coffee-benefits',

      structureType: 'partition',

      setting: 'A study on the effects of coffee consumption',

      story:
        'People who drink coffee in the morning have a lower risk of dying of heart disease. Drinking it throughout the day cancels the benefit. The probability that a person drinks coffee in the morning is 0.85, and the probability that a person has a lower risk of dying of heart disease if they drink coffee in the morning is 0.80. The probability that a person has a lower risk of dying of heart disease if they do not drink coffee in the morning is 0.10.',

      populationOrProcess: 'randomly selected people in the study',

      probabilityPresentation: {
        format: 'decimal',
      },

      conditionEvent: {
        symbol: 'A',
        label: 'drinks coffee in the morning',
        description: 'the person drinks coffee in the morning',
      },

      complementConditionEvent: {
        symbol: 'A^c',
        label: 'does not drink coffee in the morning',
        description: 'the person does not drink coffee in the morning',
      },

      targetEvent: {
        symbol: 'B',
        label: 'has a lower risk of dying of heart disease',
        description: 'the person has a lower risk of dying of heart disease',
      },

      probabilities: {
        probabilityA: 0.85,
        probabilityNotA: 0.15,
        probabilityBGivenA: 0.8,
        probabilityBGivenNotA: 0.1,
      },

      defaultQuestionType: 'total-probability',
    },

    {
      id: 'witches-accusations',

      structureType: 'partition',

      setting: 'A study on accusations of witchcraft in 17th century Russia',

      story:
        'In 17th century Russia, three out of four people accused of being witches were men. Suppose that in a town of 2000 people, 1600 are men and 400 are women. The probability that a man who is accused of being a witch given that he is one is 0.05, and the probability that a woman who is accused of being a witch given that she is one is 0.10.',

      populationOrProcess: 'randomly selected people in the study',

      probabilityPresentation: {
        format: 'decimal',
      },

      conditionEvent: {
        symbol: 'A',
        label: 'is male',
        description: 'the person is male',
      },

      complementConditionEvent: {
        symbol: 'A^c',
        label: 'is female',
        description: 'the person is female',
      },

      targetEvent: {
        symbol: 'B',
        label: 'is a witch',
        description: 'the person is accused is a witch',
      },

      probabilities: {
        probabilityA: 0.8,
        probabilityNotA: 0.2,
        probabilityBGivenA: 0.05,
        probabilityBGivenNotA: 0.1,
      },

      defaultQuestionType: 'total-probability',
    },

    {
      id: 'sugar-study',

      structureType: 'partition',

      setting: 'A study on the effects of artificial sweeteners on hunger',

      story:
        'The artificial sweetener sucralose makes you three times hungrier than sugar does. In a study, some participants were given sucralose, while others were given sugar.  All participants were then asked to eat a meal.  After the meal, they were asked to rate how hungry they felt. ',

      populationOrProcess: 'randomly selected people in the study',

      probabilityPresentation: {
        format: 'decimal',
      },

      conditionEvent: {
        symbol: 'A',
        label: 'received sucralose',
        description: 'the person received sucralose',
      },

      complementConditionEvent: {
        symbol: 'A^c',
        label: 'received sugar',
        description: 'the person received sugar',
      },

      targetEvent: {
        symbol: 'B',
        label: 'is hungry',
        description: 'the person felt hungry after the meal',
      },

      probabilities: {
        probabilityA: 0.5,
        probabilityNotA: 0.5,
        probabilityBGivenA: 0.75,
        probabilityBGivenNotA: 0.1,
      },

      defaultQuestionType: 'total-probability',
    },
  ];
