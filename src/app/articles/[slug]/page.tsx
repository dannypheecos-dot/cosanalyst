import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleBlocks } from "@/components/ArticleBlocks";
import { FollowShare } from "@/components/FollowShare";
import { BreadcrumbJsonLd, FaqPageJsonLd, NewsArticleJsonLd } from "@/components/JsonLd";
import { JoinTelegram } from "@/components/SiteChrome";
import { SectorSelectorModule } from "@/components/SectorSelectorModule";
import { TelegramPromo } from "@/components/TelegramPromo";
import { articles, getArticle, isSectorRelevant } from "@/content/articles";
import type { Block } from "@/content/types";
import { asset } from "@/lib/asset";
import { faqPairs } from "@/lib/faq";
import { PublishTime } from "@/components/PublishTime";
import { sectionLabel } from "@/lib/format";
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
  const title = article.titleTag ?? article.title;
  const description = article.dek;

  return {
    title: article.titleTag ? { absolute: article.titleTag } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title,
      description,
      url: path,
      publishedTime: article.publishedAt ?? article.date,
      modifiedTime: article.updatedAt ?? article.publishedAt ?? article.date,
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
        date={article.publishedAt ?? article.date}
        modified={article.updatedAt ?? article.publishedAt}
        path={path}
        image={article.ogImage}
        section={sectionLabel(article.section)}
      />
      <BreadcrumbJsonLd title={article.title} path={path} />
      <FaqPageJsonLd pairs={faqPairs(article.body)} />
      <div className="article-art">
        <img src={asset(artSrc)} alt={artAlt} />
      </div>
      <article className="article article-layout">
        <header className="article-intro">
          <p className="kicker">
            {sectionLabel(article.section)} · {article.kicker ?? "desk note"}
          </p>
          <h1>{article.title}</h1>
          <p className="dek">{article.dek}</p>
          <p className="byline">
            <PublishTime
              publishedAt={article.publishedAt ?? article.date}
              updatedAt={article.updatedAt}
              label={article.displayTime}
            />
            {article.asOf ? <> · {article.asOf}</> : null} · {site.name} ·{" "}
            {site.publisherLine} · {site.tagline}
          </p>
        </header>
        <aside className="article-promo">
          <TelegramPromo titleId="article-telegram-promo-title" />
        </aside>
        <div className="article-body">
          <ArticleBlocks article={article} skipFirstFigure={Boolean(figure)} />
          {isSectorRelevant(article.slug) ? <SectorSelectorModule /> : null}
          <div className="article-end">
            <FollowShare title={article.title} path={path} />
            <JoinTelegram />
          </div>
        </div>
      </article>
    </>
  );
}
