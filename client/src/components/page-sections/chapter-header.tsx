import { Box, Typography } from "@mui/joy";

import { RomanText } from "@/components/generics/roman-text";

export function ChapterHeader() {
    return (
        <Typography
            level="body-sm"
            component="div"
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <RomanText
                    value={new Date().getFullYear()}
                />

                Lucas Dias
            </Box>
        </Typography>
    );
}
