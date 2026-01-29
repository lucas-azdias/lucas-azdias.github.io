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
            // Perfect Fourth (1.333)
            h1: { fontSize: "4.20rem", fontWeight: 400 },
            h2: { fontSize: "3.15rem", fontWeight: 400 },
            h3: { fontSize: "2.36rem", fontWeight: 400 },
            h4: { fontSize: "1.77rem", fontWeight: 400 },
            "body-lg": { fontSize: "1.33rem", color: "var(--joy-palette-text-primary)" },
            "body-md": { color: "var(--joy-palette-text-primary)" },
            "body-sm": { color: "var(--joy-palette-text-primary)" },
            "body-xs": { color: "var(--joy-palette-text-primary)" },
        },
    }
);

export const globalStyles: GlobalStylesProps<Theme>["styles"] = {
    html: {
        fontSize: "18px",
    },
    "::selection": {
        backgroundColor: "var(--joy-palette-text-primary)",
        color: "var(--joy-palette-background-surface)",
    },
};
