import { NextResponse } from "next/server";
import { Post } from "@/models/Post";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  const url = userId ? `${BASE_URL}/?userId=${userId}` : BASE_URL;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      return NextResponse.json(
        { error: "Error fetching posts" },
        { status: res.status }
      );
    }

    const posts: Post[] = await res.json();
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching posts" },
      { status: 500 }
    );
  }
}
