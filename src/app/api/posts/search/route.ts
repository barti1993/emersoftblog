import { Post } from "@/types/post";
import { BLOG_DATA } from "../../../../blog";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");
  if (!title) {
    return NextResponse.json(
      {
        message: 'Query parameter "title" is required',
      },
      { status: 400 }
    );
  }
  const searchResults: Post[] = BLOG_DATA.posts.filter((post) =>
    post.title.toLowerCase().includes(title.toString().toLowerCase())
  );

  return NextResponse.json(searchResults, { status: 200 });
}
