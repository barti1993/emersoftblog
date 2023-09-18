import { FC } from "react";
import Link from "next/link";

interface PaginationProps {
  prevPostSlug?: string | null;
  nextPostSlug?: string | null;
}

const Pagination: FC<PaginationProps> = ({ prevPostSlug, nextPostSlug }) => {
  return (
    <nav>
      <ul className="w-full flex items-start justify-between">
        {prevPostSlug && (
          <li className="text-neutral-50 bg-black p-3">
            <Link href={`/post/${prevPostSlug}`}>Previous Post</Link>
          </li>
        )}
        {nextPostSlug && (
          <li className="text-neutral-50 bg-black p-3">
            <Link href={`/post/${nextPostSlug}`}>Next Post</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
