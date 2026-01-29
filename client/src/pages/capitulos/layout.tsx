import { Outlet } from "react-router-dom";

import { ChapterHeader } from "@/components/page-sections/chapter-header";

export default function Layout() {
    return (
        <>
            <ChapterHeader />

            <Outlet />
        </>
    );
}
