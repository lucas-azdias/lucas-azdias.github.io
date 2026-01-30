import { type ReactNode } from "react";
import { Typography } from "@mui/joy";

interface ChapterTextProps {
    children: ReactNode
}

export function ChapterText({ children }: ChapterTextProps) {
    return (
        <Typography
            level="body-md"
            textAlign="left"
            sx={{
                mb: 7,

                "&::first-letter": {
                    textTransform: "capitalize",
                    fontSize: "var(--joy-fontSize-xl2)",
                    fontFamily: "var(--joy-fontFamily-display)",
                    lineHeight: 1,
                },
            }}
        >
            {children}
        </Typography>
    );
}
