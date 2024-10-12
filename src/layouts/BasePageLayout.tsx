import React, { ReactNode } from "react";

interface BaseLayoutProps {
  title: string;
  children: ReactNode;
}

const BasePageLayout: React.FC<BaseLayoutProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col w-full h-full items-center flex-grow">
      <header>
        <h1 className="text-3xl font-bold">{title}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default BasePageLayout;
