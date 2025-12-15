import Link from "next/link";

import { Post } from "@/models/Post";
import { capitalizeFirstLetter } from "@/lib/strings";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/posts/${post.id}`} className="block">
      <article
        className="
        dark:bg-zinc-900
      bg-white
      rounded-xl
      border border-gray-200
      dark:border-gray-700
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
        dark:text-white
      "
        >
          {capitalizeFirstLetter(post.title)}
        </h2>

        <div className="text-xs text-gray-500 dark:text-gray-100">
          Author #{post.userId}
        </div>

        <hr className="mb-6 border-gray-200 dark:border-gray-700" />

        <p
          className="
        text-sm
        w-full
        text-justify
        text-gray-600
        leading-relaxed
        line-clamp-5
        min-h-[8.125em]
        dark:text-gray-100
      "
        >
          {capitalizeFirstLetter(post.body)}
        </p>
      </article>
    </Link>
  );
}
