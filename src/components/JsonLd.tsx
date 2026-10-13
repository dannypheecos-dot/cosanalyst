import { faqPageSchema, type FaqPair } from "@/lib/faq";
import { site } from "@/lib/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    sameAs: [site.xUrl],
    logo: `${site.url}/brand/fox-mark-arrow.png`,
    description: site.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function NewsArticleJsonLd({
  title,
  dek,
  date,
  modified,
  path,
  image,
}: {
  title: string;
  dek: string;
  date: string;
  modified?: string;
  path: string;
  image: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    description: dek,
    datePublished: date,
    dateModified: modified ?? date,
    mainEntityOfPage: `${site.url}${path}`,
    image: [`${site.url}${image}`],
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/brand/fox-mark-arrow.png`,
      },
    },
    isAccessibleForFree: true,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".lede", "h1"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqPageJsonLd({ pairs }: { pairs: FaqPair[] }) {
  if (pairs.length === 0) return null;

  const data = faqPageSchema(pairs);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
