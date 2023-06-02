import CopyNavbar from "@/components/CopyNavbar/CopyNavbar"
import Title from "@/components/Title/Title"
import { builtInNavbar, landingNavbar, modalNavbar, otherNavbar, ribbonsNavbar } from "@/helpers/contentItems"

import styles from "./page.module.scss"
import addPrefixToHref from "@/helpers/addPrefixToHref"

export default function page() {
    return (
        <main>
            <Title category="h2">
                Piano demos list
            </Title>
            <section className={styles["demo__section"]}>
                <Title category="h3">
                    Modal templates
                </Title>
                <CopyNavbar content={addPrefixToHref(modalNavbar, "/demos")} direction="column" hardLink={true}/>
            </section>
            <section className={styles["demo__section"]}>
                <Title category="h3">
                    Inline templates: Ribbons
                </Title>
                <CopyNavbar content={addPrefixToHref(ribbonsNavbar, "/demos")} direction="column" hardLink={true}/>
            </section>
            <section className={styles["demo__section"]}>
                <Title category="h3">
                    Inline templates: Built-in
                </Title>
                <CopyNavbar content={addPrefixToHref(builtInNavbar, "/demos")} direction="column" hardLink={true}/>
            </section>
            <section className={styles["demo__section"]}>
                <Title category="h3">
                    Inline templates: Landing pages
                </Title>
                <CopyNavbar content={addPrefixToHref(landingNavbar, "/demos")} direction="column" hardLink={true}/>
            </section>
            <section className={styles["demo__section"]}>
                <Title category="h3">
                    Inline templates: Other
                </Title>
                <CopyNavbar content={addPrefixToHref(otherNavbar, "/demos")} direction="column" hardLink={true}/>
            </section>
        </main>
    )
}