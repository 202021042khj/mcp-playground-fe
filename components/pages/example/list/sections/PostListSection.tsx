import Link from "next/link";
import { Post } from "@/types/post";
import Badge from "@/components/common/Badge";
import { formatDate } from "@/lib/formatDate";

interface PostListSectionProps {
  posts: Post[];
}

export default function PostListSection({ posts }: PostListSectionProps) {
  if (posts.length === 0) {
    return (
      <div className="px-4 py-10 text-center text-sm text-muted-foreground md:px-8">
        No posts match your search.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 px-4 py-6 md:grid-cols-2 md:gap-6 md:px-8 md:py-10 lg:grid-cols-3">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/example/${post.id}`}
          className="flex flex-col gap-2 rounded-lg border border-border p-4 transition hover:border-indigo-300 hover:shadow-sm"
        >
          <Badge label={post.category} />
          <h2 className="text-base font-semibold text-foreground">
            {post.title}
          </h2>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {post.excerpt}
          </p>
          <span className="mt-auto text-xs text-muted-foreground">
            {formatDate(post.publishedAt)}
          </span>
        </Link>
      ))}
    </div>
  );
}
