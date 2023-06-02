import Link from "next/link";

export default function NotFound() {
    return (
        <div style={{color: "#000000"}}>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <p>
                View <Link href="/" style={{color: "blue"}}>Home page</Link>
            </p>
        </div>
    );
}