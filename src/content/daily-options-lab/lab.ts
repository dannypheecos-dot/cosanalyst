import book from "../../../public/0dte-challenge/lab.json";
import type { LabBook, LabEntry } from "./types";
import { LAB_BOOK_VERSION, LAB_ENTRY_LABEL, LAB_NAME } from "./types";

export const labBook = book as LabBook;

export function liveEntries(source: LabBook = labBook): LabEntry[] {
  return source.entries.filter((entry) => entry.label === LAB_ENTRY_LABEL);
}

export function assertLiveBook(source: LabBook = labBook): void {
  if (source.version !== LAB_BOOK_VERSION) {
    throw new Error(`Unsupported lab book version: ${source.version}`);
  }
  if (source.name !== LAB_NAME) {
    throw new Error("Lab book name mismatch");
  }
}

export function todaysEntry(source: LabBook = labBook): LabEntry | null {
  if (!source.today.entryId) return null;
  return source.entries.find((entry) => entry.id === source.today.entryId) ?? null;
}
