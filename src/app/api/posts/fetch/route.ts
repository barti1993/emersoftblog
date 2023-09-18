import { BLOG_DATA } from "../../../../blog";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = BLOG_DATA.posts;
  return NextResponse.json({ posts });
}
