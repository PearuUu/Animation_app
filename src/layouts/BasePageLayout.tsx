import React, { ReactNode } from "react";

interface BaseLayoutProps {
  title: string;
  children: ReactNode;
}

const BasePageLayout: React.FC<BaseLayoutProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col h-full items-center flex-grow w-3/4 overflow-x-hidden py-10">
      <header>
        <h1 className="text-3xl font-bold pb-10">{title}</h1>
      </header>
      <main className="w-full">
        <div className="flex flex-col space-y-10 w-full">{children}</div>
      </main>
    </div>
  );
};

export default BasePageLayout;
