import Image from "next/image";
import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logoLink}>
        <Image
          src="/logo.svg"
          alt="simple"
          // width={348}
          // height={133}
          width={100}
          height={40}
          priority
        />
      </a>
    </header>
  );
}