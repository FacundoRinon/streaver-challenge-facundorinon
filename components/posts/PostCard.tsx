import Link from "next/link";
import { Post } from "@/models/Post";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/posts/${post.id}`} className="block">
      <article
        className="
      bg-white
      rounded-xl
      border border-gray-200
      shadow-sm
      p-6
      flex flex-col gap-4
      cursor-pointer
      transition-all
      duration-200
      ease-out
      hover:-translate-y-1
      hover:shadow-md
    "
      >
        <h2
          className="
        text-lg
        font-semibold
        text-gray-900
        leading-snug
        line-clamp-2
        min-h-[2.75em]
      "
        >
          {post.title}
        </h2>

        <div className="text-xs text-gray-500">Author #{post.userId}</div>

        <hr className="mb-6 border-gray-200" />

        <p
          className="
        text-sm
        text-gray-600
        leading-relaxed
        line-clamp-5
        min-h-[8.125em]
      "
        >
          {post.body}
        </p>
      </article>
    </Link>
  );
}
