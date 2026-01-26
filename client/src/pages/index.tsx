import { Box, Typography, Sheet, IconButton, useColorScheme } from "@mui/joy";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ModeToggle() {
    const { mode, setMode } = useColorScheme();

    return (
        <IconButton
            variant="plain"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
            {mode === "light" ? <MdDarkMode /> : <MdLightMode />}
        </IconButton>
    );
}

export default function Webpage() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: 2,
            }}
        >
            <Sheet
                variant="plain"
                sx={{
                    maxWidth: 500,
                    minHeight: "100%",
                    padding: 5,
                    textAlign: "center",
                }}
            >
                {/* Title */}
                <Typography level="h1">
                    LUCAS DIAS
                </Typography>

                {/* Subtitle */}
                <Typography level="h2" sx={{ mt: 2 }}>
                    Desenvolvedor
                </Typography>

                <Sheet>
                    {/* Book summary */}
                    <Typography level="body-lg" sx={{ lineHeight: 1.8 }}>
                        This is a concise summary of the book. Replace this text with your
                        own writing. The goal is to keep the layout minimal and typographic,
                        similar to lynnandtonic.com—focused on readability, generous
                        whitespace, and a calm visual hierarchy.
                    </Typography>

                    {/* Footer */}
                    <Typography level="body-sm" sx={{ lineHeight: 1.8 }}>
                        This is a concise summary of the book. Replace this text with your
                        own writing. The goal is to keep the layout minimal and typographic,
                        similar to lynnandtonic.com—focused on readability, generous
                        whitespace, and a calm visual hierarchy.
                    </Typography>

                    {/* Mode toggle */}
                    <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
                        <ModeToggle />
                    </Box>
                </Sheet>
            </Sheet>
        </Box>
    );
}
