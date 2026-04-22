import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-nord-0 pt-24 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-xs text-nord-3 hover:text-nord-8 transition-colors mb-6 inline-block">
            ← back to portfolio
          </Link>
          <p className="text-nord-3 text-xs mb-2 font-mono">// LAB_WRITEUPS</p>
          <h1 className="text-nord-6 text-2xl font-bold tracking-tight">Blog & Lab Docs</h1>
          <p className="text-nord-3 text-sm mt-2">
            Technical write-ups from the homelab — SIEM configs, detection rules, SOAR playbooks.
          </p>
          <div className="mt-4 h-px bg-gradient-to-r from-nord-8/50 via-nord-3/30 to-transparent" />
        </div>

        {posts.length === 0 ? (
          <div className="bg-nord-1/40 border border-nord-3/20 rounded-lg p-8 text-center">
            <p className="text-nord-3 text-sm font-mono">
              <span className="text-nord-14">$</span> ls content/blog/
            </p>
            <p className="text-nord-3 text-xs mt-2 opacity-60">
              No posts yet. Drop .mdx files in content/blog/ to get started.
            </p>
            <p className="text-xs text-nord-3/50 mt-4 font-mono">
              # Example: content/blog/wazuh-splunk-integration.mdx
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-nord-1/40 border border-nord-3/20 rounded-lg p-5 hover:border-nord-8/40 hover:bg-nord-1/60 transition-all duration-200 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-nord-5 text-sm font-semibold group-hover:text-nord-8 transition-colors">
                      {post.title}
                    </h2>
                    {post.description && (
                      <p className="text-nord-3 text-xs mt-1 leading-relaxed">{post.description}</p>
                    )}
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-1.5 py-0.5 border border-nord-3/20 text-nord-3 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-nord-3 text-xs">{post.date}</p>
                    {post.readingTime && (
                      <p className="text-nord-3/50 text-xs mt-0.5">{post.readingTime}</p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
