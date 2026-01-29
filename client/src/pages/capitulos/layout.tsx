import { Outlet } from "react-router-dom";

import { ChapterHeader } from "@/components/page-sections/chapter-header";
import { ChapterTitle } from "@/components/page-sections/chapter-title";
import { ChapterNumber } from "@/components/page-sections/chapter-number";

export default function Layout() {
    return (
        <>
            <ChapterHeader />

            <ChapterNumber />

            <ChapterTitle />

            <Outlet />
        </>
    );
}
