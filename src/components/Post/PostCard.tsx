import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import PostContent from "./PostContent";
import { Post } from "@/types/post";

interface PostCardProps {
  post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <Link className="@container gap-10 h-[400px]" href={`/post/${post.slug}`}>
      <Image
        alt={post.title}
        src={decodeURIComponent(post.imageUrl)}
        width={600}
        height={300}
        sizes="100vw"
        className="rounded-md w-full object-cover object-center  h-auto"
      />
      <PostContent post={post} />
    </Link>
  );
};

export default PostCard;
