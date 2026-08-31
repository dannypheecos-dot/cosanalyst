export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${clean}`;
}
