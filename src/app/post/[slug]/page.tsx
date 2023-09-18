import { BLOG_DATA } from "../../../blog";
import Container from "@/components/UI/Container/Container";
import PostBody from "@/components/Post/PostBody";
import PostHero from "@/components/Post/PostHero";
import { notFound } from "next/navigation";
import Pagination from "@/components/UI/Pagination/Pagination";

export const generateStaticParams = async () => {
  return BLOG_DATA.posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
};

const Page = ({ params }: { params: { slug: string } }) => {
  const post = BLOG_DATA.posts.find((post) => post.slug === params.slug);

  const currentPostIndex = BLOG_DATA.posts.findIndex(
    (post) => post.slug === params.slug
  );

  if (!post) {
    notFound();
  }

  const prevPostSlug =
    currentPostIndex - 1 >= 0
      ? BLOG_DATA.posts[currentPostIndex - 1].slug
      : null;

  const nextPostSlug =
    currentPostIndex + 1 < BLOG_DATA.posts.length
      ? BLOG_DATA.posts[currentPostIndex + 1].slug
      : null;

  return (
    <Container>
      <div className="space-y-10 mt-10 mb-10">
        <PostHero post={post} />
        <div className="flex flex-col md:flex-col gap-10">
          <PostBody body={post.excerpt} />
        </div>
        <Pagination prevPostSlug={prevPostSlug} nextPostSlug={nextPostSlug} />
      </div>
    </Container>
  );
};

export default Page;
