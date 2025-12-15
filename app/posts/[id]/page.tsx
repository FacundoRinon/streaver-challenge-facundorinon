"use client";

import useSWR from "swr";
import { useParams } from "next/navigation";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

import { Post } from "@/models/Post";
import { fetchPostById } from "@/lib/posts/api";
import SectionLoader from "@/components/utils/SectionLoader";

export default function PostDetailPage() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useSWR<Post>(
    id ? `post-${id}` : null,
    () => fetchPostById(id)
  );

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <article className="w-full min-h-[75vh] max-w-3xl bg-white rounded-xl border border-gray-200 shadow-sm px-8 py-10">
        <Link
          href="/posts"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4"
        >
          <HiArrowLeft className="mr-1" size={30} /> Volver a Posts
        </Link>

        {isLoading && (
          <div className="py-20 text-center text-gray-500">
            <SectionLoader size={150} />
          </div>
        )}

        {(error || !data) && !isLoading && (
          <div className="py-20 text-center text-red-500">
            Error al cargar el post
          </div>
        )}

        {data && !isLoading && !error && (
          <>
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">
              {data.title}
            </h1>

            <div className="my-4">
              <span className="inline-block text-sm text-gray-500">
                Author #{data.userId}
              </span>
            </div>

            <hr className="mb-6 border-gray-200" />

            <p className="text-lg text-gray-700 leading-relaxed text-justify whitespace-pre-line">
              {data.body}
            </p>
          </>
        )}
      </article>
    </main>
  );
}
