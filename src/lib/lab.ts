import { CAPITAL_UNIT_USD } from "@/content/daily-options-lab/types";

export function contractQuantity(fillPremium: number): {
  quantity: number;
  capitalUnitException: boolean;
  debit: number;
} {
  if (!Number.isFinite(fillPremium) || fillPremium <= 0) {
    throw new Error("fillPremium must be a positive number");
  }
  const perContract = Math.round(fillPremium * 100);
  if (perContract > CAPITAL_UNIT_USD) {
    return {
      quantity: 1,
      capitalUnitException: true,
      debit: perContract,
    };
  }
  const quantity = Math.max(1, Math.floor(CAPITAL_UNIT_USD / perContract));
  return {
    quantity,
    capitalUnitException: false,
    debit: quantity * perContract,
  };
}

export function money(value: number | null | undefined, empty = "—"): string {
  if (value == null || !Number.isFinite(value)) return empty;
  const abs = Math.abs(value);
  const formatted = abs.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: abs >= 100 ? 0 : 2,
  });
  if (value < 0) return `−${formatted}`;
  if (value > 0) return `+${formatted}`;
  return formatted;
}

export function pct(value: number | null | undefined, empty = "—"): string {
  if (value == null || !Number.isFinite(value)) return empty;
  const body = `${Math.abs(value).toFixed(1)}%`;
  if (value < 0) return `−${body}`;
  if (value > 0) return `+${body}`;
  return body;
}

export function median(values: number[]): number | null {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid]! : (sorted[mid - 1]! + sorted[mid]!) / 2;
}

export function average(values: number[]): number | null {
  if (!values.length) return null;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}
