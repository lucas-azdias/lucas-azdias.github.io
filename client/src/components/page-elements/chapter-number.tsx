import { useLocation } from "react-router-dom";

import { PAGES } from "@/constants/pages";
import { RomanText } from "@/components/generics/roman-text";

export function ChapterNumber() {
    const location = useLocation();
    const pagePaths = PAGES.map(page => page.to);

    return (
        <RomanText
            value={pagePaths.indexOf(location.pathname) + 1}
        />
    );
}
