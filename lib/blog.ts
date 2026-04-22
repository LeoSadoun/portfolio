import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readingTime?: string;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.(mdx|md)$/, '');
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8');
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? '',
        description: data.description ?? '',
        tags: data.tags ?? [],
        readingTime: data.readingTime,
      } as PostMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): { meta: PostMeta; content: string } | null {
  const tryPaths = [
    path.join(BLOG_DIR, `${slug}.mdx`),
    path.join(BLOG_DIR, `${slug}.md`),
  ];

  for (const filePath of tryPaths) {
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(raw);
      return {
        meta: {
          slug,
          title: data.title ?? slug,
          date: data.date ?? '',
          description: data.description ?? '',
          tags: data.tags ?? [],
          readingTime: data.readingTime,
        },
        content,
      };
    }
  }
  return null;
}
