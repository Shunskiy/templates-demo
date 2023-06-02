import { ICopyNavbar } from "@/components/CopyNavbar/CopyNavbar"

export const mainNavbar: ICopyNavbar["content"] = [
    {
        title: "Modal templates",
        href: "#modal_templates",
    },
    {
        title: "Inline templates",
        href: "#inline_templates",
    },
    {
        title: "Ribbons",
        href: "#ribbons"
    },
    {
        title: "Built-in",
        href: "#built_in"
    },
    {
        title: "Landing pages",
        href: "#landing_pages"
    },
    {
        title: "Other",
        href: "#other"
    }
]

export const modalNavbar: ICopyNavbar["content"] = [
    {
        title: "Alternative shape",
        href: "/modal-alternative-shape"
    },
    {
        title: "Dismissible",
        href: "/modal-dismissible"
    },
    {
        title: "Multistep",
        href: "/modal-multistep"
    },
    {
        title: "Non-dismissible",
        href: "/modal-non-dismissible"
    }
]

export const ribbonsNavbar: ICopyNavbar["content"] = [
    {
        title: "Basic",
        href: "/ribbon-basic"
    },
    {
        title: "Collapsible",
        href: "/ribbon-collapsible"
    },
    {
        title: "Disappearing/reappearing on scroll",
        href: "/ribbon-disappearing-reappearing-on-scroll"
    }
]

export const builtInNavbar: ICopyNavbar["content"] = [
    {
        title: "Basic",
        href: "/builtin-basic"
    },
    {
        title: "Content Lock",
        href: "/builtin-ribbon-collapsible"
    },
    {
        title: "Multiple content lock",
        href: "/builtin-disappearing-reappearing-on-scroll"
    }
]

export const landingNavbar: ICopyNavbar["content"] = [
    {
        title: "Full Page",
        href: "/landing-full-page"
    },
    {
        title: "Partial",
        href: "/landing-partial"
    }
]

export const otherNavbar: ICopyNavbar["content"] = [
    {
        title: "Full Page",
        href: "/other-full-page"
    },
    {
        title: "Partial",
        href: "/other-partial"
    }
]

export const contentItems = [...modalNavbar, ...ribbonsNavbar, ...builtInNavbar, ...landingNavbar, ...otherNavbar]