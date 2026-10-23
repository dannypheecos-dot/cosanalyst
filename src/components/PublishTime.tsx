import { formatEt } from "@/lib/format";

export function PublishTime({
  publishedAt,
  updatedAt,
  label,
}: {
  publishedAt: string;
  updatedAt?: string;
  label?: string;
}) {
  return (
    <span className="publish-time">
      <time dateTime={publishedAt}>{label ?? formatEt(publishedAt)}</time>
      {updatedAt && updatedAt !== publishedAt ? (
        <>
          {" · Updated "}
          <time dateTime={updatedAt}>{formatEt(updatedAt)}</time>
        </>
      ) : null}
    </span>
  );
}
