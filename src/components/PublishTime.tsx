import { formatEt } from "@/lib/format";

export function PublishTime({ publishedAt, updatedAt }: { publishedAt: string; updatedAt?: string }) {
  return (
    <span className="publish-time">
      <time dateTime={publishedAt}>{formatEt(publishedAt)}</time>
      {updatedAt && updatedAt !== publishedAt ? (
        <>
          {" · Updated "}
          <time dateTime={updatedAt}>{formatEt(updatedAt)}</time>
        </>
      ) : null}
    </span>
  );
}
