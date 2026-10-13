import type { Block } from "@/content/types";

export type FaqPair = {
  question: string;
  answer: string;
};

/** Visible text for schema.org Answer.text: drop markup the page does not show. */
export function faqPlainText(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function answerText(block: Block): string | undefined {
  if (block.type === "p" || block.type === "lede" || block.type === "callout" || block.type === "quote") {
    return faqPlainText(block.text);
  }
  if (block.type === "list") {
    return block.items.map(faqPlainText).filter(Boolean).join(" ");
  }
  return undefined;
}

/**
 * Q/A pairs under an h2 titled "FAQ". Each h3 is a question; following
 * paragraphs and lists are its answer, until the next heading.
 */
export function faqPairs(body: Block[]): FaqPair[] {
  const start = body.findIndex(
    (block) => block.type === "h2" && block.text.trim().toLowerCase() === "faq",
  );
  if (start < 0) return [];

  const pairs: FaqPair[] = [];
  let question = "";
  const parts: string[] = [];

  const flush = () => {
    const answer = parts.join(" ").replace(/\s+/g, " ").trim();
    if (question && answer) pairs.push({ question, answer });
    question = "";
    parts.length = 0;
  };

  for (const block of body.slice(start + 1)) {
    if (block.type === "h2") break;
    if (block.type === "h3") {
      flush();
      question = faqPlainText(block.text);
      continue;
    }
    if (!question) continue;
    const text = answerText(block);
    if (text) parts.push(text);
  }
  flush();
  return pairs;
}

export type FaqPageSchema = {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
};

/** Google FAQ structured-data required properties. Throws when a pair would not validate. */
export function faqPageSchema(pairs: FaqPair[]): FaqPageSchema {
  if (pairs.length === 0) {
    throw new Error("FAQPage requires at least one Question");
  }

  const seen = new Set<string>();
  const mainEntity = pairs.map((pair) => {
    const name = pair.question.trim();
    const text = pair.answer.trim();
    if (!name) throw new Error("FAQPage Question.name is required");
    if (!text) throw new Error(`FAQPage Answer.text is required for "${name}"`);
    if (seen.has(name)) throw new Error(`FAQPage duplicate question: ${name}`);
    seen.add(name);
    return {
      "@type": "Question" as const,
      name,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text,
      },
    };
  });

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
}
