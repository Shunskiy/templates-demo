import styles from "./Title.module.scss"

interface TitleProps {
    children: React.ReactNode,
    category: "h1" | "h2" | "h3"
}

export default function Title({ children, category }: TitleProps) {
    const renderItem = () => {
        switch (category) {
            case "h1":
                return (
                    <h1 className={styles["pn-title"]}>
                        {children}
                    </h1>
                )
                break;
            case "h2":
                return (
                    <h2 className={styles["pn-subtitle"]}>
                        {children}
                    </h2>
                )
            case "h3": {
                return (
                    <h3 className={styles["pn-section-title"]}>
                        {children}
                    </h3>
                )
            }
            default:
                break;
        }
    }

    return (
        <>
            {renderItem()}
        </>
    )
}