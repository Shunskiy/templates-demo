import Copy from "@/components/Copy/Copy";
import Title from "@/components/Title/Title";
import CopyNavbar from "@/components/CopyNavbar/CopyNavbar";
import { builtInNavbar, landingNavbar, mainNavbar, modalNavbar, otherNavbar, ribbonsNavbar } from "@/helpers/contentItems";

import styles from "./page.module.scss"
import addPrefixToHref from "@/helpers/addPrefixToHref";

export default function Home() {
  return (
    <main>
      <Title category="h1">
        Piano offer templates
      </Title>
      <div className={styles["pn-main__subtitle-text"]}>
        <Copy>
          what you can do about them
          <br />
          and how
        </Copy>
      </div>
      <section className={styles["pn-main__section"]}>
        <div className={styles["pn-main__copy-section"]}>
          <Copy>
            Welcome to Piano offer templates! What one needs to know in the first place is that there're 2 main types of templates: modal and inline. Modals are basically pop-ups overlapping the whole page and blocking its content. Inline templates are widgets which can be built in any block on your website — they can appear between article paragraphs, slide up from the very bottom, or be standalone landing pages. In these documents you will find tons of examples of using our templates, both modal and inline, and guidelines on how to implemet every particular case. Please bear in mind they are only examples, and you can figure out your own custom variant! Don't hesitate to come up with ideas, address them to the Piano guys you communicate with, we're always happy to help.
          </Copy>
          <CopyNavbar content={mainNavbar} />
        </div>
      </section>

      <section id="modal_templates" className={styles["pn-main__section"]}>
        <div className={styles["pn-main__copy-section"]}>
          <Title category="h3">
            Modal templates
          </Title>
          <Copy>
            The modal format is a dominant format, commonly used for locking the content, presenting subscriptions or registration offers. A layer "over" the content, it can be either a hard lock or a dismissible window. Modal can open checkout, or the call-to-action (CTA) buttons may lead, for example, to a subscription landing page. Also it's a common use case to intercept ad blockers. The backdrop "under" the modal can have any color and opacity, here is how.
          </Copy>
          <CopyNavbar content={addPrefixToHref(modalNavbar, "/guides")}/>
        </div>
      </section>

      <section id="inline_templates" className={styles["pn-main__section"]}>
        <div className={styles["pn-main__copy-section"]}>
          <Title category="h3">
            Inline templates
          </Title>
          <Copy>
            While a modal is a pop-up which creates its context (backdrop and position) itself, an inline template requires a client to specify a container where it will "live". In terms of HTML, it could be a simple empty <code>&lt;div&gt;</code>. The position and dimensions of the container, as well as the optional surrounding styling options, such as shadows or animations, should be added by the client. All you need is CSS and probably JavaScript. There're tons of ways of using inline templates. Here we give you some examples and general instructions.
          </Copy>
        </div>
      </section>

      <section id="ribbons" className={styles["pn-main__section"]}>
        <div className={styles["pn-main__copy-section"]}>
          <Title category="h3">
            Inline templates: Ribbons
          </Title>
          <CopyNavbar content={addPrefixToHref(ribbonsNavbar, "/guides")} />
          <Copy>
            Sticky ribbons are communication templates often used for presenting the subscription product or short messages in the context of a use case (e.g. displaying an offer when a certain number of free articles remains in a metered paywall or offering a special discount to a special targeted group of site visitors). Ribbons can be stuck to the bottom or to the top of the page, their position is being customized on the client's end with the help of CSS.
          </Copy>
        </div>
      </section>

      <section id="built_in" className={styles["pn-main__section"]}>
        <div className={styles["pn-main__copy-section"]}>
          <Title category="h3">
            Inline templates: Built-in
          </Title>
          <CopyNavbar content={addPrefixToHref(builtInNavbar, "/guides")} />
          <Copy>
            Inline templates serve for the same purpose as modal formats: locking the content and presenting subscription or registration offers. They are also often used for displaying a newsletter or app download offers based on the targeting in Piano Composer. Unlike modal formats covering the whole page, an inline element is determined by the position of a container (which is set up on the client's end) within the page. Also they are not hiding ads, so the revenue from viewed or clicked ads kepps flowing. If inline is used for content locking, a semitransparent layer on top of them with a fade-out effect, indicating that the article is cropped and there is more text "behind", is recommended.
          </Copy>
        </div>
      </section>

      <section id="landing_pages" className={styles["pn-main__section"]}>
        <div className={styles["pn-main__copy-section"]}>
          <Title category="h3">
            Inline templates: Landing pages
          </Title>
          <CopyNavbar content={addPrefixToHref(landingNavbar, "/guides")} />
          <Copy>
            The best place to purchase a subscription, landing page can be either built within Piano templates completely or combined of a Piano template (only the central part with CTA buttons and pricing) and the client's front end. Such pages usually have higher conversion rates than subscriptions on articles because the motivation of coming there is different from "just" reading an article. To build a properly functioning subscription landing page is not easy: take your time, study public sources —or purchase Optimization
            services for it. Use A/B tesing for improving them.
          </Copy>
        </div>
      </section>

      <section id="other" className={styles["pn-main__section"]}>
        <div className={styles["pn-main__copy-section"]}>
          <Title category="h3">
          Inline templates: Other
          </Title>
          <CopyNavbar content={addPrefixToHref(otherNavbar, "/guides")} />
          <Copy>
          Other, less dominant formats (sticky square, firing a modal etc.), are technically inline templates being inserted into containers created on the client's end. Sometimes they look like modals (sticky square) because they overlap the page (though partially) and cannot be scrolled away, but still they are built as inlines. Such inline widgets are used for similar use cases as "built-in inlines", such as newsletter subscription offers, app downloads and targeted messaging to selected visitor segments. In some cases, experimenting with the design and UX of these formats can significantly improve results. Your creativity is the only limit (usually).
          </Copy>
        </div>
      </section>
    </main>
  )
}
