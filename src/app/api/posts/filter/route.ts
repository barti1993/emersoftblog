import { NextResponse } from "next/server";
import { Post } from "@/types/post";
import { BLOG_DATA } from "../../../../blog";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  if (!category) {
    return NextResponse.json(
      {
        message: 'Query parameter "category" is required',
      },
      { status: 400 }
    );
  }
  const categoryId = parseInt(category.toString(), 10);
  const filteredPosts: Post[] = BLOG_DATA.posts.filter((post) =>
    post.categories.includes(categoryId)
  );

  return NextResponse.json(filteredPosts, { status: 200 });
}
