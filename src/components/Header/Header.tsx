import Image from "next/image"
import pianoIcon from "../../../public/piano-logo.svg"
import Link from "next/link"

import styles from "./Header.module.scss"

export default function Header() {
    return(
        <header className={styles["header"]}>
            <Image src={pianoIcon} width={59} height={22} alt="Piano"/>

            <nav className={styles["header__navbar"]}>
                <Link href="/">
                    Home
                </Link>
                <Link href="/demos">
                    Demos
                </Link>
                <Link href="/guides">
                    Guides
                </Link>
                <Link href="https://docs.piano.io/">
                    Docs site
                </Link>
            </nav>
        </header>
    )
}