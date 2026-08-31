import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleBlocks } from "@/components/ArticleBlocks";
import { NewsArticleJsonLd } from "@/components/JsonLd";
import { articles, getArticle } from "@/content/articles";
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

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const path = `/articles/${article.slug}/`;

  return (
    <article className="wrap article">
      <NewsArticleJsonLd
        title={article.title}
        dek={article.dek}
        date={article.date}
        path={path}
        image={article.ogImage}
      />
      <p className="kicker">{article.section} · desk note</p>
      <h1>{article.title}</h1>
      <p className="byline">
        {article.date} · {site.name} · {site.publisherLine} · {site.tagline}
      </p>
      <ArticleBlocks article={article} />
    </article>
  );
}
