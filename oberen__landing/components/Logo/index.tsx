import styles from "./Logo.module.css";
import Image from "next/image";

interface LogoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  draggable: boolean;
}

export default function Logo({
  src,
  alt,
  width,
  height,
  draggable,
  ...props
}: LogoProps) {
  return (
    <div className={styles.logo__wrapper}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        draggable={draggable}
        className={styles.logo}
        {...props}
      />
    </div>
  );
}
