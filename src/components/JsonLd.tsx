import { faqPageSchema, type FaqPair } from "@/lib/faq";
import { site } from "@/lib/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    sameAs: [site.xUrl, site.facebookUrl],
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
  section,
}: {
  title: string;
  dek: string;
  date: string;
  modified?: string;
  path: string;
  image: string | string[];
  section?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    description: dek,
    datePublished: date,
    dateModified: modified ?? date,
    mainEntityOfPage: `${site.url}${path}`,
    ...(section ? { articleSection: section } : {}),
    image: (Array.isArray(image) ? image : [image]).map((src) => `${site.url}${src}`),
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

export function BreadcrumbJsonLd({ title, path }: { title: string; path: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Research", item: `${site.url}/research/` },
      { "@type": "ListItem", position: 3, name: title, item: `${site.url}${path}` },
    ],
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

export type ImageObjectInput = {
  src: string;
  caption?: string;
  credit?: string;
  license?: string;
  licenseUrl?: string;
  sourcePage?: string;
  width?: number;
  height?: number;
};

/** Body-photo ImageObject schema (only figures that carry credit metadata). */
export function ImageObjectsJsonLd({ images }: { images: ImageObjectInput[] }) {
  if (images.length === 0) return null;
  const strip = (text?: string) => text?.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  const data = images.map((img) => ({
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: `${site.url}${img.src}`,
    ...(img.caption ? { caption: strip(img.caption) } : {}),
    ...(img.credit ? { creditText: img.credit } : {}),
    ...(img.licenseUrl ? { license: img.licenseUrl, acquireLicensePage: img.sourcePage ?? img.licenseUrl } : {}),
    ...(img.width ? { width: img.width } : {}),
    ...(img.height ? { height: img.height } : {}),
  }));
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
