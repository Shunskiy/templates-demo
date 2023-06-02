import Copy from "@/components/Copy/Copy"
import Title from "@/components/Title/Title"
import Script from "next/script";

import styles from "./page.module.scss"
import { builtInNavbar, contentItems, modalNavbar, ribbonsNavbar } from "@/helpers/contentItems";

interface IParams {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    const piano = contentItems;

    return piano.map((post) => ({
        slug: (post.href).substring(1),
    }));
}

export default function Page({ params }: IParams) {
    return (
        <>
            <main className={styles["demo__main"]}>
                <Title category="h1">
                    Cat's Sofa Adventure Goes Viral
                </Title>
                <Copy>
                    In an unprecedented event that shook the world, a domestic feline suffered a catastrophic fall from a sofa in its owner's living room. It was a scene straight out of an action movie – the cat gracefully leapt onto the plush sofa cushions and then promptly lost its balance and tumbled down to the floor with a loud thud.
                </Copy>
                <Copy>
                    Eye-witnesses report that the cat appeared to be in shock after the incident, and was seen scurrying away to hide in shame under a nearby armchair. The owner of the cat, who wishes to remain anonymous, expressed her disbelief at what had just happened.
                </Copy>
                <Copy>
                    "I couldn't believe it," she said, "My cat is usually such a graceful creature. I guess even the most agile of us can have our moments of clumsiness."
                </Copy>
                <Copy>
                    The incident has sparked widespread debate among the veterinary community, with some experts questioning the impact of excessive sofa cushion fluffiness on pet safety.
                </Copy>
                <Copy>
                    "It's clear that we need to reconsider the design of sofas to make them more pet-friendly," said Dr. Whiskers, a veterinarian known for his outspoken views on animal welfare, "We simply cannot continue to put our furry friends at risk like this."
                </Copy>
                <Copy>
                    Meanwhile, social media has been awash with memes and jokes about the hapless cat's misfortune. Some users have even started a Twitter hashtag – #SofaCatFalls – to document other instances of felines taking falls from furniture.
                </Copy>
                <Copy>
                    The good news is, the cat is said to be recovering well and has since regained its confidence in jumping up onto the sofa. It's a reminder that even in the face of adversity, our feline friends always manage to bounce back with their characteristic grace and resilience.
                </Copy>
                <Copy>
                    As for the sofa in question, it remains unchanged – a testament to the fact that sometimes, the best design is one that embraces chaos and imperfection.
                </Copy>
            </main>
        </>
    )
}