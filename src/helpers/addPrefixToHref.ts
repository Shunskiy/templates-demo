import { ICopyNavbar } from "@/components/CopyNavbar/CopyNavbar"

export default function addPrefixToHref(navbar: ICopyNavbar["content"], prefix: string) {
    return navbar.map(item => ({ ...item, href: prefix + item.href }));
}