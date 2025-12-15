import { NextResponse } from "next/server";

import { Post } from "@/models/Post";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const res = await fetch(`${BASE_URL}/${id}`);

    if (!res.ok) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const data: Post = await res.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error fetching post" }, { status: 500 });
  }
}
