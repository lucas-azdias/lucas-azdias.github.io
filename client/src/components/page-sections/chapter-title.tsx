import { useLocation } from "react-router-dom";

import { PAGES } from "@/constants/pages";
import { Link } from "@/components/generics/link";

export function ChapterTitle() {
    const location = useLocation();
    const currentPage = PAGES.find(page => page.to === location.pathname);

    return (
        <Link
            to="/"
            typography="h2"
            sx={{
                display: "inline-block",
                mb: 8,
            }}
        >
            {currentPage?.label ?? ""}
        </Link>
    );
}
