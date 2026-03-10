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
        fontWeight: {
            xl: 400,
            lg: 400,
            md: 400,
            sm: 400,
            xs: 400,
        },
        typography: {
            h1: {
                WebkitTextStroke: "0.083rem var(--joy-palette-text-primary)",
                color: "var(--joy-palette-background-surface) !important",
                textShadow: "0 0.25rem 0 #00000089",
            },
            h2: {
                letterSpacing: "0.4rem",

                "@media (max-width:500px)": {
                    letterSpacing: "-0.025rem",
                },
            },
            h4: {
                letterSpacing: "0.1rem",

                "@media (max-width:500px)": {
                    letterSpacing: "-0.025rem",
                },
            },
        },
        colorSchemes: {
            // https://lospec.com/palette-list/1bit-monitor-glow
            // https://lospec.com/palette-list/obra-dinn-macintosh
            light: {
                palette: {
                    background: {
                        surface: "#F0F6F0",
                        body: "#F0F6F0",
                    },
                    text: {
                        primary: "#2D3037",
                        secondary: "var(--joy-palette-text-primary)",
                        tertiary: "var(--joy-palette-text-primary)",
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
                        surface: "#2D3037",
                        body: "#2D3037",
                    },
                    text: {
                        primary: "#F0F6F0",
                        secondary: "var(--joy-palette-text-primary)",
                        tertiary: "var(--joy-palette-text-primary)",
                    },
                    neutral: {
                        solidBg: "#484D58",
                        plainHoverBg: "#191B1F",
                    },
                },
            },
        },
    }
);

export const globalStyles: GlobalStylesProps<Theme>["styles"] = {
    "*": {
        color: "var(--joy-palette-text-primary) !important",
    },
    html: {
        fontSize: "18px",
    },
    "::selection": {
        backgroundColor: "var(--joy-palette-text-primary)",
        color: "var(--joy-palette-background-surface)",
    },
};
