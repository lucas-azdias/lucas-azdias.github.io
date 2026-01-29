import { extendTheme } from "@mui/joy";
import { type Mode } from "@mui/system/cssVars/useCurrentColorScheme";

import "@/theme/fonts.css";

export const defaultMode: Mode = "system";

export const theme = extendTheme(
    {
        fontFamily: {
            body: "\"Sydonia Atramentiqua\", \"Times New Roman\", serif",
            display: "\"Sydonia Atramentiqua\", \"Times New Roman\", serif",
            code: "\"Source Code Pro\", monospace",
        },
    }
);
