import { FC } from "react";
import Image from "next/image";
import { Post } from "@/types/post";
import PostContent from "./PostContent";

interface PostHeroProps {
  post: Post;
}

const PostHero: FC<PostHeroProps> = ({ post }) => {
  return (
    <div>
      <PostContent isPostPage post={post} />
      <Image
        src={post.imageUrl}
        width={1280}
        height={500}
        alt={post.title}
        className="rounded-md object-cover object-center h-[300px] md:h-[500px] mt-6"
      />
    </div>
  );
};

export default PostHero;
