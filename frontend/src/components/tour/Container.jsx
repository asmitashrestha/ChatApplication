import React from 'react';

export default function Container({children,className}) {
  return (
    <div className={"max-w-full mx-auto"+className}>{children}</div>

  );
}