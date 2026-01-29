import { extendTheme, type Theme } from "@mui/joy";
import { type GlobalStylesProps } from "@mui/system";
import { type Mode } from "@mui/system/cssVars/useCurrentColorScheme";

import "@/theme/fonts.css";

export const defaultMode: Mode = "system";

export const theme = extendTheme(
    {
        fontFamily: {
            body: "\"IM Fell DW Pica\", \"Times New Roman\", serif",
            display: "\"Blackwood Castle\", \"Times New Roman\", serif",
            code: "\"Source Code Pro\", monospace",
        },
        typography: {
            h1: { fontSize: "6rem", fontWeight: 400 },
            h2: { fontSize: "3.8rem", fontWeight: 400 },
            h3: { fontSize: "2.5rem", fontWeight: 400 },
            h4: { fontSize: "1.5rem", fontWeight: 400 },
        },
    }
);

export const globalStyles: GlobalStylesProps<Theme>["styles"] = {
    "::selection": {
        backgroundColor: "var(--joy-palette-text-primary)",
        color: "var(--joy-palette-background-surface)",
    },
};
