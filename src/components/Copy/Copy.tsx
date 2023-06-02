import styles from "./Copy.module.scss"

interface ICopy {
    children: React.ReactNode
}

export default function Copy({children}: ICopy) {
    return (
        <p className={styles["pn-copy"]}>
            {children}
        </p>
    )
}