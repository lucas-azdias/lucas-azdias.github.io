import { useLocation } from "react-router-dom";
import { Typography } from "@mui/joy";

import { PAGES } from "@/constants/pages";
import { RomanText } from "@/components/generics/roman-text";

export function ChapterNumber() {
    const location = useLocation();
    const pagePaths = PAGES.map(page => page.to);

    return (
        <Typography
            level="body-lg"
            component="div"
            textAlign="center"
            sx={{
                mb: 5,
            }}
        >
            <RomanText
                value={pagePaths.indexOf(location.pathname) + 1}
            />
        </Typography>
    );
}
