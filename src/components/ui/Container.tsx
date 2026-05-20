import React from "react";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  narrow?: boolean;
  wide?: boolean;
}

export default function Container({ className = "", children, narrow, wide }: ContainerProps) {
  const maxWidth = narrow ? "max-w-4xl" : wide ? "max-w-8xl" : "max-w-7xl";
  return (
    <div className={`${maxWidth} mx-auto px-6 sm:px-10 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
