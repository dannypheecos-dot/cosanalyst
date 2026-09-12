import { RichText } from "@/components/RichText";
import type { Article, Block } from "@/content/types";
import { asset } from "@/lib/asset";

function BlockView({
  block,
  articleSlug,
}: {
  block: Block;
  articleSlug: string;
}) {
  switch (block.type) {
    case "lede":
      return (
        <p className="lede">
          <RichText text={block.text} />
        </p>
      );
    case "p":
      return (
        <p>
          <RichText text={block.text} />
        </p>
      );
    case "h2":
      return <h2>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "table":
      return (
        <div className="article-table-wrap">
          <table className="article-table">
            <thead>
              <tr>
                {block.columns.map((column, index) => (
                  <th key={`${column}-${index}`}>
                    <RichText text={column} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={`${articleSlug}-row-${rowIndex}`}>
                  {row.map((cell, cellIndex) => (
                    <td key={`${rowIndex}-${cellIndex}`}>
                      <RichText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {block.caption ? <p className="table-caption">{block.caption}</p> : null}
        </div>
      );
    case "stats":
      return (
        <div className="stats">
          {block.items.map((item) => (
            <div className="stat" key={`${item.label}-${item.value}`}>
              <div className="label">{item.label}</div>
              <div className="value">{item.value}</div>
              {item.note ? <div className="note">{item.note}</div> : null}
            </div>
          ))}
        </div>
      );
    case "figure":
      return (
        <figure className="shot">
          <img src={asset(block.src)} alt={block.alt} />
          {block.caption ? <figcaption>{block.caption}</figcaption> : null}
        </figure>
      );
    case "callout":
      return (
        <p className="callout">
          <RichText text={block.text} />
        </p>
      );
    case "list":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="quote">
          <p>
            <RichText text={block.text} />
          </p>
          {block.cite ? <cite>{block.cite}</cite> : null}
        </blockquote>
      );
    default:
      return null;
  }
}

export function ArticleBlocks({
  article,
  skipFirstFigure = false,
}: {
  article: Article;
  skipFirstFigure?: boolean;
}) {
  let skipped = !skipFirstFigure;
  return (
    <>
      {article.body.map((block, index) => {
        if (!skipped && block.type === "figure") {
          skipped = true;
          return null;
        }
        return (
          <BlockView
            key={`${article.slug}-${index}`}
            articleSlug={article.slug}
            block={block}
          />
        );
      })}
    </>
  );
}
