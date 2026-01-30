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
        fontSize: {
            // Perfect Fourth (1.333)
            xl4: "4.20rem",
            xl3: "3.15rem",
            xl2: "2.36rem",
            xl: "1.77rem",
            lg: "1.33rem",
            md: "1rem",
            sm: "0.875rem",
            xs: "0.75rem",
        },
        typography: {
            h1: { fontWeight: 400 },
            h2: { fontWeight: 400 },
            h3: { fontWeight: 400 },
            h4: { fontWeight: 400 },
            "body-lg": { color: "var(--joy-palette-text-primary)" },
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
