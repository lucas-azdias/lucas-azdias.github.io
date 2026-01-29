import { useLocation, Link as RouterLink } from "react-router-dom";
import { Box, Link, Typography } from "@mui/joy";

import { PAGES } from "@/constants/pages";
import { RomanText } from "@/components/generics/roman-text";

export function ChapterHeader() {
    const location = useLocation();
    const pagePaths = PAGES.map(page => page.to);
    const currentPage = PAGES.find(page => page.to === location.pathname);

    return (
        <Typography level="body-lg" fontWeight="bold">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Link
                    component={RouterLink}
                    to={"/"}
                    typography="body-md"
                    underline="hover"
                    sx={{
                        textDecorationStyle: "solid",
                        textDecorationColor: "currentColor",
                    }}
                >
                    {currentPage?.label ?? ""}
                </Link>

                <Box
                    sx={{
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                    }}
                >
                    <RomanText
                        value={pagePaths.indexOf(location.pathname) + 1}
                    />
                </Box>

                Lucas Dias
            </Box>
        </Typography>
    );
}
