import 'dotenv/config';

import fs from 'node:fs';
import path from 'node:path';

type LanguageVariant = {
  problemText?: string;
  problemStatement?: string;
  linguisticNotes?: string[];
  notesOnRegister?: string[];
};

type VariantSet = {
  beginner?: LanguageVariant;
  intermediate?: LanguageVariant;
  advanced?: LanguageVariant;

  debutant?: LanguageVariant;
  intermediaire?: LanguageVariant;
  avance?: LanguageVariant;
};

type BatchItem = {
  problemId?: string;
  canonicalProblem?: {
    id?: string;
    question?: {
      type?: string;
    };
  };
  result?: any;
};

type ReviewTopic = {
  title: string;
  englishPath: string;
  frenchPath: string;
};

function readJson(filePath: string): BatchItem[] {
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  return JSON.parse(fs.readFileSync(filePath, 'utf8')) as BatchItem[];
}

function looksLikeVariantSet(value: unknown): value is VariantSet {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const object = value as Record<string, unknown>;

  return (
    'beginner' in object ||
    'intermediate' in object ||
    'advanced' in object ||
    'debutant' in object ||
    'intermediaire' in object ||
    'avance' in object
  );
}

function findVariantsDeep(value: unknown): VariantSet | undefined {
  if (!value || typeof value !== 'object') {
    return undefined;
  }

  if (looksLikeVariantSet(value)) {
    return value;
  }

  const object = value as Record<string, unknown>;

  if (looksLikeVariantSet(object.variants)) {
    return object.variants;
  }

  for (const child of Object.values(object)) {
    const found = findVariantsDeep(child);

    if (found) {
      return found;
    }
  }

  return undefined;
}

function getVariants(item: BatchItem): VariantSet {
  return findVariantsDeep(item) ?? {};
}

function getProblemId(item: BatchItem, index: number): string {
  return item.problemId ?? item.canonicalProblem?.id ?? `problem-${index + 1}`;
}

function getQuestionType(item: BatchItem): string {
  return item.canonicalProblem?.question?.type ?? 'unknown-question-type';
}

function normalizeProblemText(variant: LanguageVariant | undefined): string {
  return (
    variant?.problemText?.trim() ??
    variant?.problemStatement?.trim() ??
    '_Missing problem text._'
  );
}

function createTopicMarkdown(topic: ReviewTopic): string {
  const englishItems = readJson(topic.englishPath);
  const frenchItems = readJson(topic.frenchPath);

  const frenchById = new Map(
    frenchItems.map((item, index) => [getProblemId(item, index), item]),
  );

  let markdown = `# ${topic.title}\n\n`;

  markdown +=
    `This review section contains only the student-facing problem statements. ` +
    `Internal validation reports, readability reports, and solution metadata have been removed.\n\n`;

  englishItems.forEach((englishItem, index) => {
    const problemId = getProblemId(englishItem, index);
    const questionType = getQuestionType(englishItem);
    const frenchItem = frenchById.get(problemId);

    const englishVariants = getVariants(englishItem);
    const frenchVariants = frenchItem ? getVariants(frenchItem) : {};

    // Temporary diagnostic for the first problem in each topic.
    // You can delete this block after confirming the script works.
    if (index === 0) {
      console.log(`\nChecking topic: ${topic.title}`);
      console.log('English variants found:', Object.keys(englishVariants));
      console.log('French variants found:', Object.keys(frenchVariants));
      console.log(
        'First English beginner variant:',
        JSON.stringify(englishVariants.beginner, null, 2),
      );

      console.log(
        'First French debutant variant:',
        JSON.stringify(frenchVariants.debutant, null, 2),
      );
    }

    markdown += `---\n\n`;
    markdown += `# Problem ${index + 1}: ${problemId}\n\n`;
    markdown += `**Question type:** ${questionType}\n\n`;

    markdown += `## Beginner / Débutant\n\n`;
    markdown += `### English\n\n`;
    markdown += `${normalizeProblemText(englishVariants.beginner)}\n\n`;
    markdown += `### Français\n\n`;
    markdown += `${normalizeProblemText(frenchVariants.debutant)}\n\n`;

    markdown += `## Intermediate / Intermédiaire\n\n`;
    markdown += `### English\n\n`;
    markdown += `${normalizeProblemText(englishVariants.intermediate)}\n\n`;
    markdown += `### Français\n\n`;
    markdown += `${normalizeProblemText(frenchVariants.intermediaire)}\n\n`;

    markdown += `## Advanced / Avancé\n\n`;
    markdown += `### English\n\n`;
    markdown += `${normalizeProblemText(englishVariants.advanced)}\n\n`;
    markdown += `### Français\n\n`;
    markdown += `${normalizeProblemText(frenchVariants.avance)}\n\n`;
  });

  return markdown;
}

async function main() {
  const outputDir = path.join(process.cwd(), 'outputs', 'review');
  fs.mkdirSync(outputDir, { recursive: true });

  const topics: ReviewTopic[] = [
    {
      title: 'Normal Approximation to the Binomial Distribution',
      englishPath: path.join(
        process.cwd(),
        'outputs',
        // 'confidence-interval-mean-unknown-variance',
        '/normal-approximation-binomial-batch-results-every-9th.json',
      ),
      frenchPath: path.join(
        process.cwd(),
        'outputs',
        //   'confidence-interval-mean-unknown-variance-french',
        '/french-normal-approximation-binomial-batch-results-every-9th.json',
      ),
    },
  ];

  let fullMarkdown = `# Normal Approximation to the Binomial Distribution — Bilingual Review File\n\n`;

  fullMarkdown +=
    `This file is organized by topic, then by problem, then by register. ` +
    `It is intended for human review of French quality and English/French alignment.\n\n`;

  for (const topic of topics) {
    fullMarkdown += createTopicMarkdown(topic);
    fullMarkdown += `\n\n`;
  }

  const outputPath = path.join(
    outputDir,
    'normal-approximation-binomial-bilingual-review.md',
  );

  fs.writeFileSync(outputPath, fullMarkdown, 'utf8');

  console.log(`\nDone. Wrote bilingual review file to ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
