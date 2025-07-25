import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import Menu from "../Menu";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/logo.svg"
          alt="simple"
          // width={348}
          // height={133}
          width={100}
          height={40}
          priority
        />
      </Link>
      <Menu/>
    </header>
  );
}