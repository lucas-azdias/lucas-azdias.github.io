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
            // Perfect Fourth (1.333) - 16px
            xl4: "4.20rem",
            xl3: "3.15rem",
            xl2: "2.36rem",
            xl: "1.77rem",
            lg: "1.33rem",
            md: "1rem",
            sm: "0.85rem",
            xs: "0.60rem",
        },
        typography: {
            h1: { fontWeight: 400 },
            h2: { fontWeight: 400 },
            h3: { fontWeight: 400 },
            h4: { fontWeight: 400 },
        },
        colorSchemes: {
            light: {
                palette: {
                    background: {
                        surface: "#F0F6F0",
                        body: "#F0F6F0",
                    },
                    text: {
                        primary: "#333319",
                        secondary: "text.primary",
                        tertiary: "text.primary",
                    },
                    neutral: {
                        solidBg: "#B5B9B5",
                        plainHoverBg: "#E0E5E0",
                    },
                },
            },
            dark: {
                palette: {
                    background: {
                        surface: "#333319",
                        body: "#333319",
                    },
                    text: {
                        primary: "#E5FFFF",
                        secondary: "text.primary",
                        tertiary: "text.primary",
                    },
                    neutral: {
                        solidBg: "#505029",
                        plainHoverBg: "#2D2D17",
                    },
                },
            },
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
