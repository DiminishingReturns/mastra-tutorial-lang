import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

const singleReadabilityMetricsSchema = z.object({
  wordCount: z.number(),
  sentenceCount: z.number(),
  averageSentenceLength: z.number(),
  longestSentenceLength: z.number(),

  characterCount: z.number(),
  syllableCount: z.number(),

  fleschReadingEase: z.number(),
  fleschKincaidGrade: z.number(),

  technicalTermCount: z.number(),
  quantityCount: z.number(),

  notes: z.array(z.string()),
});

const readabilityMetricsSchema = z.object({
  beginner: singleReadabilityMetricsSchema,
  intermediate: singleReadabilityMetricsSchema,
  advanced: singleReadabilityMetricsSchema,
});

const singleReadabilityTargetAssessmentSchema = z.object({
  targetLevel: z.enum(['beginner', 'intermediate', 'advanced']),

  status: z.enum(['passes', 'warning', 'needsRevision']),

  checks: z.object({
    averageSentenceLength: z.object({
      value: z.number(),
      target: z.string(),
      status: z.enum(['passes', 'warning', 'needsRevision']),
    }),

    longestSentenceLength: z.object({
      value: z.number(),
      target: z.string(),
      status: z.enum(['passes', 'warning', 'needsRevision']),
    }),

    fleschKincaidGrade: z.object({
      value: z.number(),
      target: z.string(),
      status: z.enum(['passes', 'warning', 'needsRevision']),
    }),

    technicalTermCount: z.object({
      value: z.number(),
      target: z.string(),
      status: z.enum(['passes', 'warning', 'needsRevision']),
    }),
  }),

  issues: z.array(z.string()),
  notes: z.array(z.string()),
});

const readabilityTargetAssessmentSchema = z.object({
  beginner: singleReadabilityTargetAssessmentSchema,
  intermediate: singleReadabilityTargetAssessmentSchema,
  advanced: singleReadabilityTargetAssessmentSchema,

  overallProgression: z.object({
    status: z.enum(['passes', 'warning', 'needsRevision']),
    issues: z.array(z.string()),
    notes: z.array(z.string()),
  }),
});

type Level = 'beginner' | 'intermediate' | 'advanced';
type Status = 'passes' | 'warning' | 'needsRevision';

type ReadabilityMetrics = z.infer<typeof singleReadabilityMetricsSchema>;
type ReadabilityTargetAssessment = z.infer<
  typeof singleReadabilityTargetAssessmentSchema
>;

const readabilityTargets = {
  beginner: {
    averageSentenceLength: { min: 6, max: 18 },
    longestSentenceLength: { max: 24 },
    fleschKincaidGrade: { min: 0, max: 8.5 },
    technicalTermCount: { min: 0, max: 11 },
  },

  intermediate: {
    averageSentenceLength: { min: 12, max: 25 },
    longestSentenceLength: { max: 32 },
    fleschKincaidGrade: { min: 6.5, max: 11.5 },
    technicalTermCount: { min: 2, max: 10 },
  },

  advanced: {
    averageSentenceLength: { min: 16, max: 42 }, // was 35
    longestSentenceLength: { max: 60 }, // was 42
    fleschKincaidGrade: { min: 8.5, max: 22 }, // was 16
    technicalTermCount: { min: 6, max: 14 }, // was 14
  },
} as const;

function combineStatuses(statuses: Status[]): Status {
  if (statuses.includes('needsRevision')) return 'needsRevision';
  if (statuses.includes('warning')) return 'warning';
  return 'passes';
}

function checkRange(
  value: number,
  min: number | undefined,
  max: number | undefined,
  target: string,
): {
  value: number;
  target: string;
  status: Status;
} {
  if (min !== undefined && value < min) {
    return {
      value,
      target,
      status: 'warning',
    };
  }

  if (max !== undefined && value > max) {
    const isSevere = value > max * 1.25;

    return {
      value,
      target,
      status: isSevere ? 'needsRevision' : 'warning',
    };
  }

  return {
    value,
    target,
    status: 'passes',
  };
}

function assessSingleLevel(
  level: Level,
  metrics: ReadabilityMetrics,
): ReadabilityTargetAssessment {
  const target = readabilityTargets[level];

  const averageSentenceLength = checkRange(
    metrics.averageSentenceLength,
    target.averageSentenceLength.min,
    target.averageSentenceLength.max,
    `${target.averageSentenceLength.min}–${target.averageSentenceLength.max} words`,
  );

  const longestSentenceLength = checkRange(
    metrics.longestSentenceLength,
    undefined,
    target.longestSentenceLength.max,
    `maximum ${target.longestSentenceLength.max} words`,
  );

  const fleschKincaidGrade = checkRange(
    metrics.fleschKincaidGrade,
    target.fleschKincaidGrade.min,
    target.fleschKincaidGrade.max,
    `${target.fleschKincaidGrade.min}–${target.fleschKincaidGrade.max}`,
  );

  const technicalTermCount = checkRange(
    metrics.technicalTermCount,
    target.technicalTermCount.min,
    target.technicalTermCount.max,
    `${target.technicalTermCount.min}–${target.technicalTermCount.max} terms`,
  );

  const statuses = [
    averageSentenceLength.status,
    longestSentenceLength.status,
    fleschKincaidGrade.status,
    technicalTermCount.status,
  ];

  const status = combineStatuses(statuses);

  const issues: string[] = [];
  const notes: string[] = [];

  if (averageSentenceLength.status !== 'passes') {
    issues.push(
      `${level}: average sentence length is outside the target range.`,
    );
  }

  if (longestSentenceLength.status !== 'passes') {
    issues.push(`${level}: longest sentence may be too long.`);
  }

  if (fleschKincaidGrade.status !== 'passes') {
    issues.push(`${level}: Flesch-Kincaid grade is outside the target range.`);
  }

  if (technicalTermCount.status !== 'passes') {
    issues.push(`${level}: technical term count is outside the target range.`);
  }

  if (metrics.notes.length > 0) {
    notes.push(...metrics.notes);
  }

  if (status === 'passes') {
    notes.push(`${level}: readability metrics are within the target range.`);
  }

  return {
    targetLevel: level,
    status,
    checks: {
      averageSentenceLength,
      longestSentenceLength,
      fleschKincaidGrade,
      technicalTermCount,
    },
    issues,
    notes,
  };
}

export function assessReadabilityTargets(
  metrics: z.infer<typeof readabilityMetricsSchema>,
) {
  const beginner = assessSingleLevel('beginner', metrics.beginner);
  const intermediate = assessSingleLevel('intermediate', metrics.intermediate);
  const advanced = assessSingleLevel('advanced', metrics.advanced);

  const progressionIssues: string[] = [];
  const progressionNotes: string[] = [];

  if (
    metrics.beginner.averageSentenceLength >
    metrics.intermediate.averageSentenceLength
  ) {
    progressionIssues.push(
      'The beginner version has a higher average sentence length than the intermediate version.',
    );
  }

  if (
    metrics.intermediate.averageSentenceLength >
    metrics.advanced.averageSentenceLength
  ) {
    progressionIssues.push(
      'The intermediate version has a higher average sentence length than the advanced version.',
    );
  }

  if (
    metrics.advanced.fleschKincaidGrade < metrics.beginner.fleschKincaidGrade
  ) {
    progressionIssues.push(
      'The advanced version has a lower Flesch-Kincaid grade than the beginner version.',
    );
  }

  if (progressionIssues.length === 0) {
    progressionNotes.push(
      'The readability metrics show a reasonable progression across the three levels.',
    );
  }

  const overallProgressionStatus: Status =
    progressionIssues.length > 0 ? 'warning' : 'passes';

  return {
    beginner,
    intermediate,
    advanced,
    overallProgression: {
      status: overallProgressionStatus,
      issues: progressionIssues,
      notes: progressionNotes,
    },
  };
}

export const readabilityTargetTool = createTool({
  id: 'readability-target-assessment',
  description:
    'Assesses whether readability metrics fit the target bands for beginner, intermediate, and advanced statistics word problems.',

  inputSchema: readabilityMetricsSchema,

  outputSchema: readabilityTargetAssessmentSchema,

  execute: async (inputData) => {
    return assessReadabilityTargets(inputData);
  },
});
