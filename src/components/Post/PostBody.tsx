import { FC } from "react";

interface PostBodyProps {
  body: string;
}

const PostBody: FC<PostBodyProps> = ({ body }) => {
  return <div>{body}</div>;
};

export default PostBody;
