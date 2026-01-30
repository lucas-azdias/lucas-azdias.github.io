import { Outlet } from "react-router-dom";

import { BookSummary } from "@/components/page-sections/book-summary";
import { ChapterHeader } from "@/components/page-sections/chapter-header";
import { ChapterLinks } from "@/components/page-sections/chapter-links";
import { ChapterTitle } from "@/components/page-sections/chapter-title";
import { ChapterNumber } from "@/components/page-sections/chapter-number";

export default function Layout() {
    return (
        <>
            {/* Header */}
            <ChapterHeader />
            <ChapterNumber />
            <ChapterTitle />

            <Outlet />

            {/* Footer */}
            <ChapterLinks/>
            <BookSummary />
        </>
    );
}
