import Link from "next/link";
import type { ReactNode } from "react";

const TOKEN = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g;

function renderChunk(chunk: string, key: number): ReactNode {
  if (chunk.startsWith("**") && chunk.endsWith("**")) {
    return <strong key={key}>{chunk.slice(2, -2)}</strong>;
  }

  const link = chunk.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
  if (link) {
    const href = link[2];
    const label = link[1];
    const external = href.startsWith("http");
    if (external) {
      return (
        <a key={key} href={href} rel="noopener noreferrer">
          {label}
        </a>
      );
    }
    return (
      <Link key={key} href={href}>
        {label}
      </Link>
    );
  }

  return chunk;
}

export function RichText({ text }: { text: string }) {
  const parts = text.split(TOKEN).filter(Boolean);
  return <>{parts.map((part, index) => renderChunk(part, index))}</>;
}
