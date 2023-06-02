import CopyNavbar from "@/components/CopyNavbar/CopyNavbar"
import Title from "@/components/Title/Title"
import { builtInNavbar, landingNavbar, modalNavbar, otherNavbar, ribbonsNavbar } from "@/helpers/contentItems"

import styles from "./page.module.scss"

export default function page() {
    return (
        <main>
            <Title category="h2">
                Piano guides list
            </Title>
            <section className={styles["guides__section"]}>
                <Title category="h3">
                    Modal templates
                </Title>
                <CopyNavbar content={modalNavbar} direction="column" />
            </section>
            <section className={styles["demo__section"]}>
                <Title category="h3">
                    Inline templates: Ribbons
                </Title>
                <CopyNavbar content={ribbonsNavbar} direction="column" />
            </section>
            <section className={styles["demo__section"]}>
                <Title category="h3">
                    Inline templates: Built-in
                </Title>
                <CopyNavbar content={builtInNavbar} direction="column" />
            </section>
            <section className={styles["demo__section"]}>
                <Title category="h3">
                    Inline templates: Landing pages
                </Title>
                <CopyNavbar content={landingNavbar} direction="column" />
            </section>
            <section className={styles["demo__section"]}>
                <Title category="h3">
                    Inline templates: Other
                </Title>
                <CopyNavbar content={otherNavbar} direction="column" />
            </section>
        </main>
    )
}