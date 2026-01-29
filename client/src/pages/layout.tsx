import { Outlet } from "react-router-dom";
import { Box, Sheet } from "@mui/joy";

import { ModeToggle } from "@/components/generics/mode-toggle";
import { RomanText } from "@/components/generics/roman-text";

export default function LayoutPage() {
    return (
        <Sheet
            variant="plain"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100dvh",
                px: 2,
            }}
        >
            <Box
                sx={theme => ({
                    position: "fixed",
                    width: "100dvh",
                    height: "100dvh",
                    borderRadius: "50%",
                    background:
                        theme.palette.mode === "light"
                            ? "none"
                            : "radial-gradient(circle, rgba(69, 69, 69, 0.35), transparent 70%)",
                    filter: "blur(40px)",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 0,
                    pointerEvents: "none",
                })}
            />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: 520,
                    minHeight: "100dvh",
                    padding: 5,
                    paddingTop: 7,
                    textAlign: "center",

                    borderInline: "2px solid",
                    borderColor: "neutral.outlinedBorder",
                    transition: "border-color ease-out 0.2s",
                    "&:hover": {
                        borderColor: "neutral.solidBg",
                    },
                }}
            >
                <Outlet />

                {/* Footer text */}
                <RomanText
                    value={new Date().getFullYear()}
                    sx={{
                        marginTop: "auto",
                    }}
                >
                    <b>v. </b>
                </RomanText>

                {/* Mode toggle */}
                <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                    <ModeToggle size="sm" sx={{ fontSize: "1.4rem" }} />
                </Box>
            </Box>
        </Sheet>
    );
}
