import { BLOG_DATA } from "@/blog";
import { Post } from "@/types/post";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const title = searchParams.get("title");

  if (!category && !title) {
    return NextResponse.json(BLOG_DATA.posts, { status: 200 });
  }

  if (category && title) {
    const categoryId = parseInt(category.toString(), 10);
    const filteredPosts: Post[] = BLOG_DATA.posts.filter(
      (post) =>
        post.categories.includes(categoryId) &&
        post.title.toLowerCase().includes(title.toString().toLowerCase())
    );
    return NextResponse.json(filteredPosts, { status: 200 });
  }

  if (category) {
    const categoryId = parseInt(category.toString(), 10);
    const filteredPosts: Post[] = BLOG_DATA.posts.filter((post) =>
      post.categories.includes(categoryId)
    );
    return NextResponse.json(filteredPosts, { status: 200 });
  }

  if (title) {
    const searchResults: Post[] = BLOG_DATA.posts.filter((post) =>
      post.title.toLowerCase().includes(title.toString().toLowerCase())
    );
    return NextResponse.json(searchResults, { status: 200 });
  }

  return NextResponse.json(
    {
      message: "Invalid query parameters",
    },
    { status: 400 }
  );
}
