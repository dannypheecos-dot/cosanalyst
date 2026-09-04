import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleBlocks } from "@/components/ArticleBlocks";
import { FollowShare } from "@/components/FollowShare";
import { NewsArticleJsonLd } from "@/components/JsonLd";
import { SectorSelectorModule } from "@/components/SectorSelectorModule";
import { articles, getArticle, isSectorRelevant } from "@/content/articles";
import type { Block } from "@/content/types";
import { asset } from "@/lib/asset";
import { formatDate, sectionLabel } from "@/lib/format";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const path = `/articles/${article.slug}/`;
  const title = article.title;
  const description = article.dek;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title,
      description,
      url: path,
      publishedTime: article.date,
      modifiedTime: article.date,
      siteName: site.name,
      images: [
        {
          url: article.ogImage,
          width: 1200,
          height: 630,
          alt: article.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [article.ogImage],
    },
  };
}

function firstFigure(body: Block[]): Extract<Block, { type: "figure" }> | undefined {
  return body.find((block): block is Extract<Block, { type: "figure" }> => block.type === "figure");
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const path = `/articles/${article.slug}/`;
  const figure = firstFigure(article.body);
  const artSrc = figure?.src ?? article.ogImage;
  const artAlt = figure?.alt ?? article.ogAlt;

  return (
    <>
      <NewsArticleJsonLd
        title={article.title}
        dek={article.dek}
        date={article.date}
        path={path}
        image={article.ogImage}
      />
      <div className="article-art">
        <img src={asset(artSrc)} alt={artAlt} />
      </div>
      <article className="wrap article">
        <p className="kicker">
          {sectionLabel(article.section)} · desk note
        </p>
        <h1>{article.title}</h1>
        <p className="dek">{article.dek}</p>
        <p className="byline">
          {formatDate(article.date)} · {site.name} · {site.publisherLine} ·{" "}
          {site.tagline}
        </p>
        <ArticleBlocks article={article} skipFirstFigure={Boolean(figure)} />
        {isSectorRelevant(article.slug) ? <SectorSelectorModule /> : null}
        <div className="article-end">
          <FollowShare title={article.title} path={path} />
        </div>
      </article>
    </>
  );
}
