import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS, BlogPost } from '../../../lib/blog-posts';
import { ArticleJsonLd, FAQPageJsonLd } from '../../../lib/structured-data';
import { Clock, Calendar, User, ArrowLeft, ArrowRight, Shield, BookOpen, CheckCircle2 } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};

  const url = `https://tempmailnova.com/blog/${post.slug}`;

  return {
    title: `${post.title} | TempMail Nova Blog`,
    description: post.description,
    authors: [{ name: post.author }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      url: url,
      title: post.title,
      description: post.description,
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      siteName: 'TempMail Nova',
      images: [
        {
          url: 'https://tempmailnova.com/logo.png',
          width: 512,
          height: 512,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['https://tempmailnova.com/logo.png'],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => post.relatedSlugs.includes(p.slug));
  const articleUrl = `https://tempmailnova.com/blog/${post.slug}`;

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.description}
        url={articleUrl}
        datePublished={post.date}
        authorName={post.author}
      />

      {post.faqs && <FAQPageJsonLd faqs={post.faqs} />}

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 font-manrope">
        {/* Navigation Back Link */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition bg-white dark:bg-slate-900 px-4 py-2 rounded-xl border border-slate-200 dark:border-emerald-500/30"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Back to Blog Catalog</span>
          </Link>
        </div>

        {/* Header Block */}
        <header className="space-y-4 border-b border-slate-200 dark:border-emerald-500/20 pb-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-400 text-xs font-bold font-mono">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>{post.category.toUpperCase()}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {post.h1}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400 font-mono pt-2">
            <span className="flex items-center space-x-1.5">
              <User className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{post.author}</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{post.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{post.readTime}</span>
            </span>
          </div>
        </header>

        {/* Article Body Content */}
        <div className="bg-white dark:bg-[#080d16]/90 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-emerald-500/25 space-y-8 shadow-xl text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
          {/* Intro */}
          <div className="text-base sm:text-lg font-semibold text-slate-900 dark:text-emerald-300/90 leading-relaxed border-l-4 border-emerald-500 pl-4 py-1">
            {post.content.intro}
          </div>

          {/* Body Sections */}
          {post.content.sections.map((section, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-2">{section.title}</h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-slate-700 dark:text-slate-300">
                  {p}
                </p>
              ))}

              {section.listItems && (
                <ul className="space-y-2 pt-2">
                  {section.listItems.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Article Conclusion Banner */}
          <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/30 space-y-2">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-300 text-sm flex items-center space-x-2">
              <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Key Takeaway</span>
            </h4>
            <p className="text-xs text-emerald-800 dark:text-emerald-200/90 font-medium">
              {post.content.conclusion}
            </p>
          </div>

          {/* Embedded FAQ Section */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="pt-6 border-t border-slate-200 dark:border-emerald-500/20 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Article FAQ</h3>
              <div className="space-y-3">
                {post.faqs.map((faq, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-[#04070d] border border-slate-200 dark:border-emerald-500/20 space-y-1"
                  >
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs">{faq.question}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-emerald-500/20">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Related Privacy Guides</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.slug}
                  className="bg-white dark:bg-[#080d16]/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-200 dark:border-emerald-500/25 space-y-3 shadow-md"
                >
                  <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80">
                    {rel.category}
                  </span>
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">
                    <Link href={`/blog/${rel.slug}`} className="hover:text-emerald-500 transition">
                      {rel.title}
                    </Link>
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">{rel.excerpt}</p>
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline pt-1"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
