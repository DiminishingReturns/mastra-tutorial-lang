import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

const textMetricsSchema = z.object({
  text: z.string(),
});

const readabilityResultSchema = z.object({
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

function splitIntoSentences(text: string): string[] {
  return text
    .replace(/\s+/g, ' ')
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function splitIntoWords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s.%<>≤≥=-]/g, ' ')
    .split(/\s+/)
    .map((word) => word.trim())
    .filter(Boolean);
}

function countSyllables(word: string): number {
  const cleaned = word.toLowerCase().replace(/[^a-z]/g, '');

  if (!cleaned) return 0;

  // Very simple English syllable heuristic.
  // Good enough for relative comparison, not linguistic research.
  const vowelGroups = cleaned.match(/[aeiouy]+/g);
  let count = vowelGroups ? vowelGroups.length : 1;

  if (cleaned.endsWith('e') && count > 1) {
    count -= 1;
  }

  return Math.max(count, 1);
}

function countTechnicalTerms(text: string): number {
  const lower = text.toLowerCase();

  const terms = [
    'normal distribution',
    'normally distributed',
    'mean',
    'standard deviation',
    'random variable',
    'randomly selected',
    'probability',
    'threshold',
    'z-score',
    'percentile',
    'population',
    'sample',
    'variance',
    'distribution',
  ];

  return terms.reduce((count, term) => {
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const matches = lower.match(new RegExp(`\\b${escaped}\\b`, 'g'));
    return count + (matches ? matches.length : 0);
  }, 0);
}

function countQuantities(text: string): number {
  const matches = text.match(
    /(?:\b\d+(?:\.\d+)?\b|\b\d+(?:\.\d+)?%|\b\d+(?:\.\d+)?\s?(?:kg|cm|m|minutes?|hours?|seconds?)\b)/gi,
  );

  return matches ? matches.length : 0;
}

function round(value: number, digits = 2): number {
  return Number(value.toFixed(digits));
}

export function computeReadabilityMetrics(text: string) {
  const sentences = splitIntoSentences(text);
  const words = splitIntoWords(text);

  const sentenceCount = Math.max(sentences.length, 1);
  const wordCount = Math.max(words.length, 1);

  const sentenceLengths = sentences.map(
    (sentence) => splitIntoWords(sentence).length,
  );

  const longestSentenceLength =
    sentenceLengths.length > 0 ? Math.max(...sentenceLengths) : wordCount;

  const characterCount = text.replace(/\s/g, '').length;

  const syllableCount = words.reduce(
    (total, word) => total + countSyllables(word),
    0,
  );

  const averageSentenceLength = wordCount / sentenceCount;
  const averageSyllablesPerWord = syllableCount / wordCount;

  const fleschReadingEase =
    206.835 - 1.015 * averageSentenceLength - 84.6 * averageSyllablesPerWord;

  const fleschKincaidGrade =
    0.39 * averageSentenceLength + 11.8 * averageSyllablesPerWord - 15.59;

  const notes: string[] = [];

  if (sentenceCount === 1) {
    notes.push('The text contains only one detected sentence.');
  }

  if (longestSentenceLength > 30) {
    notes.push('At least one sentence is longer than 30 words.');
  }

  return {
    wordCount,
    sentenceCount,
    averageSentenceLength: round(averageSentenceLength),
    longestSentenceLength,
    characterCount,
    syllableCount,
    fleschReadingEase: round(fleschReadingEase),
    fleschKincaidGrade: round(fleschKincaidGrade),
    technicalTermCount: countTechnicalTerms(text),
    quantityCount: countQuantities(text),
    notes,
  };
}

export const readabilityMetricsTool = createTool({
  id: 'readability-metrics',
  description:
    'Computes basic readability and surface-level linguistic metrics for generated statistics word problems.',

  inputSchema: textMetricsSchema,

  outputSchema: readabilityResultSchema,

  execute: async (inputData) => {
    return computeReadabilityMetrics(inputData.text);
  },
});
