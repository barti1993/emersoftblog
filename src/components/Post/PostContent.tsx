import { FC } from "react";
import { Post } from "@/types/post";

interface PostContentProps {
  post: Post;
  isPostPage?: boolean;
}

const PostContent: FC<PostContentProps> = ({ post, isPostPage = false }) => {
  return (
    <div className="space-y-2">
      <div
        className={`flex items-center gap-2 flex-wrap text-neutral-400 ${
          isPostPage ? "text-sm" : "text-xs @md:text-sm"
        }`}
      ></div>
      <h2
        className={`${
          isPostPage
            ? "text-2xl md:text-3xl lg:text-4xl font-bold"
            : "font-medium text-xl @md:text-2xl @lg:text-3xl"
        }`}
      >
        {post.title}
      </h2>

      {!isPostPage && (
        <div className="flex items-center gap-2 mt-2 pt-3">Read More</div>
      )}
    </div>
  );
};

export default PostContent;
