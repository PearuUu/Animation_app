import React, { ReactNode } from "react";

interface BaseLayoutProps {
  title: string;
  children: ReactNode;
}

const BasePageLayout: React.FC<BaseLayoutProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col h-full items-center flex-grow w-3/4">
      <header>
        <h1 className="text-3xl font-bold py-5">{title}</h1>
      </header>
      <main className="w-full">{children}</main>
    </div>
  );
};

export default BasePageLayout;
