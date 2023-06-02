import Link from "next/link"
import styles from "./CopyNavbar.module.scss"

export interface ICopyNavbar {
    content: {
        title: string,
        href: string,
    }[],
    direction?: "row" | "column",
    hardLink?: boolean
}

export default function CopyNavbar({ content, direction = "row", hardLink = false }: ICopyNavbar) {
    const navStyle = direction === "column" ? `${styles["navbar"]} ${styles["navbar--flex"]}` : styles["navbar"]

    return (
        <nav className={navStyle}>
            {content.map((item, index) => {
                if (hardLink) {
                    return (
                        <a className={styles.navbar__item} href={item.href} key={index} >
                            {item.title}
                        </a>
                    )
                } else {
                    return (
                        <Link className={styles.navbar__item} href={item.href} prefetch={false} key={index} >
                            {item.title}
                        </Link>
                    )
                }
            })}
        </nav >
    )
}