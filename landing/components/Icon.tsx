import React, { CSSProperties } from "react";

const Icon = ({
  name,
  className,
  style,
}: {
  name: string;
  className?: string;
  style?: CSSProperties;
}) => {
  return (
    <img
      className={className}
      src={`/icons/${name}.svg`}
      alt={name}
      draggable="false"
      style={{
        userSelect: "none",
        ...style,
      }}
    />
  );
};

export default Icon;
