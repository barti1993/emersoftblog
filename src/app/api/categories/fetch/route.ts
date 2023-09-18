import { BLOG_DATA } from "../../../../blog";
import { NextResponse } from "next/server";

export async function GET() {
  const categories = BLOG_DATA.categories;
  return NextResponse.json({ categories });
}
