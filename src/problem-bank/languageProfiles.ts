export const languageProfiles = {
  beginner: {
    label: 'Beginner',
    pedagogicalPurpose:
      'Make the mathematical task transparent and accessible.',
    register: 'clear instructional language',
    approximateCEFR: 'B1/B1+',
    guidance: [
      'Use short sentences.',
      'Use familiar vocabulary.',
      'State quantities clearly.',
      'Repeat key nouns instead of relying on pronouns.',
      'Avoid dense noun phrases.',
      'Avoid unnecessary passive voice.',
      'Avoid idioms.',
      'Use required statistical vocabulary only when necessary.',
    ],
  },

  intermediate: {
    label: 'Intermediate',
    pedagogicalPurpose:
      'Prepare students for standard college-level statistics word problems.',
    register: 'college textbook language',
    approximateCEFR: 'B2',
    guidance: [
      'Use standard statistical vocabulary.',
      'Use moderate sentence length.',
      'Use some academic phrasing.',
      'Keep quantities clear but allow them to be integrated into paragraph form.',
      'Use terms such as random sample, mean, standard deviation, and probability naturally.',
    ],
  },

  advanced: {
    label: 'Advanced',
    pedagogicalPurpose: 'Model authentic scientific and statistical register.',
    register: 'academic/scientific statistical language',
    approximateCEFR: 'B2+/C1 academic',
    guidance: [
      'Use denser academic phrasing.',
      'Use varied sentence structure.',
      'Allow nominalizations where natural.',
      'Allow compact presentation of assumptions.',
      'Preserve clarity and mathematical precision.',
      'Do not make the problem artificially obscure.',
    ],
  },
};
