import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-black p-4 text-3xl font-bold">From the Blog</h1>
      <p className="text-black p-4 text-sm">Lorem ipsum sit dolor amet</p>
    </div>
  );
};

export default Header;
