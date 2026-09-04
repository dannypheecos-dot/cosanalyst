import { FollowCosAnalyst } from "@/components/SiteChrome";
import { shareOnXUrl, site } from "@/lib/site";

export function FollowShare({
  title,
  path,
}: {
  title: string;
  path: string;
}) {
  return (
    <div className="follow-share">
      <div className="module">
        <h2>Follow the desk</h2>
        <p>Live notes land on X before they become a cadence.</p>
        <FollowCosAnalyst />
      </div>
      <div className="module">
        <h2>Share on X</h2>
        <p>Pass the note. Distinct from following {site.handle}.</p>
        <a
          className="btn btn-ghost"
          href={shareOnXUrl(title, path)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Share on X →
        </a>
      </div>
    </div>
  );
}
