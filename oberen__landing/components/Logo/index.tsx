import styles from "./Logo.module.css";
import Image from "next/image";

interface LogoProps {
  src: string;
  alt: string;
  draggable: boolean;
  onClick: any;
}

export default function Logo({ src, alt, draggable, ...props }: LogoProps) {
  return (
    <img
      src={src}
      alt={alt}
      draggable={draggable}
      className={styles.logo}
      {...props}
    />
  );
}
