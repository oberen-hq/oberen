import React from "react";
import Image from "next/image";
import styles from "./Image.module.css";

interface ImageProps {
  src: string;
  width: number;
  height: number;
  className: any;
}

export default function Img({ src, ...rest }: ImageProps) {
  return <Image src={src} {...rest} />;
}
