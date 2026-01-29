import { Outlet } from "react-router-dom";

import { ChapterHeader } from "@/components/page-sections/chapter-header";
import { ChapterTitle } from "@/components/page-sections/chapter-title";

export default function Layout() {
    return (
        <>
            <ChapterHeader />

            <ChapterTitle />

            <Outlet />
        </>
    );
}
