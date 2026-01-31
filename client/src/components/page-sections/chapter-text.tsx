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
            sx={theme => ({
                mb: 7,

                "&::first-letter": {
                    textTransform: "capitalize",
                    fontSize: theme.vars.fontSize.xl2,
                    fontFamily: theme.vars.fontFamily.display,
                    lineHeight: 1,
                },
            })}
        >
            {children}
        </Typography>
    );
}
