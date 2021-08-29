import React from "react";
import { Image as Img } from "theme-ui";

interface ImageProps {
  src: string;
}

export default function Image({ src, ...rest }: ImageProps) {
  return <Img src={src} {...rest} />;
}
