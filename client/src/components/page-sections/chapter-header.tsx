import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/joy";

import { PAGES } from "@/constants/pages";
import { RomanText } from "@/components/generics/roman-text";

export function ChapterHeader() {
    const location = useLocation();
    const pagePaths = PAGES.map(page => page.to);

    return (
        <Typography level="body-lg" fontWeight="bold">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    mb: 5,
                }}
            >
                <RomanText
                    value={new Date().getFullYear()}
                />

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
