import { useLocation, Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/joy";

import { PAGES } from "@/constants/pages";

export function ChapterTitle() {
    const location = useLocation();
    const currentPage = PAGES.find(page => page.to === location.pathname);

    return (
        <Link
            component={RouterLink}
            to="/"
            typography="h2"
            underline="hover"
            sx={{
                display: "inline-block",
                textDecorationStyle: "solid",
                textDecorationColor: "currentColor",
                mb: 8,
            }}
        >
            {currentPage?.label ?? ""}
        </Link>
    );
}
