import React, { ReactNode } from "react";

interface ComponentWrapperProps {
  children: ReactNode;
  styles?: string;
}

const ComponentWrapper: React.FC<ComponentWrapperProps> = ({ children, styles = "" }) => {
  return (
    <div className={`w-full  ${styles}`}>
      <div className="w-full max-w-[1400px] h-full mx-auto lg:px-8 px-4">
        {children}
      </div>
    </div>
  );
};

export default ComponentWrapper;