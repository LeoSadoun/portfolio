import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPosts } from '@/lib/blog';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.meta.title} | Leo Sadoun`,
    description: post.meta.description,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const { meta, content } = post;

  return (
    <main className="min-h-screen bg-nord-0 pt-24 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Back */}
        <Link
          href="/blog"
          className="text-xs text-nord-3 hover:text-nord-8 transition-colors mb-8 inline-block"
        >
          ← back to lab docs
        </Link>

        {/* Post header */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 border border-nord-8/25 text-nord-8 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-nord-6 text-2xl font-bold tracking-tight leading-snug">
            {meta.title}
          </h1>
          <div className="flex items-center gap-3 mt-3 text-xs text-nord-3">
            <span>{meta.date}</span>
            {meta.readingTime && (
              <>
                <span>·</span>
                <span>{meta.readingTime}</span>
              </>
            )}
          </div>
          <div className="mt-4 h-px bg-gradient-to-r from-nord-8/50 via-nord-3/30 to-transparent" />
        </div>

        {/* MDX content */}
        <article className="prose-nord">
          <MDXRemote source={content} />
        </article>

        {/* Footer nav */}
        <div className="mt-16 pt-6 border-t border-nord-3/15">
          <Link href="/blog" className="text-xs text-nord-3 hover:text-nord-8 transition-colors">
            ← all writeups
          </Link>
        </div>
      </div>
    </main>
  );
}
