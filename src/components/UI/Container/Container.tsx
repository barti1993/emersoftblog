import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="px-8 w-full max-w-7xl mx-auto">{children}</div>;
};

export default Container;
