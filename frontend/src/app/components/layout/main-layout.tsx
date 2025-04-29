import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return <main className="px-5 tablet:px-8">{children}</main>;
};
