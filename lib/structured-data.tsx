import React from 'react';

export function WebSiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TempMail Nova',
    url: 'https://tempmailnova.com',
    description: 'Fast, secure, and anonymous temporary disposable email service with real-time inbox updates.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://tempmailnova.com/blog?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TempMail Nova',
    url: 'https://tempmailnova.com',
    logo: 'https://tempmailnova.com/logo.png',
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQPageJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  authorName,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  authorName: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    author: {
      '@type': 'Organization',
      name: authorName || 'TempMail Nova Security Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TempMail Nova',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tempmailnova.com/logo.png',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
