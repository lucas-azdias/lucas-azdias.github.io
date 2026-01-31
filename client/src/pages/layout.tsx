import { Outlet } from "react-router-dom";
import { Box, Sheet, Typography } from "@mui/joy";

import { ModeToggle } from "@/components/generics/mode-toggle";
import { RomanText } from "@/components/generics/roman-text";

export default function Layout() {
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
                sx={theme => ({
                    display: "flex",
                    flexDirection: "column",
                    width: 520,
                    minHeight: "100dvh",
                    padding: 5,
                    paddingTop: 7,
                    textAlign: "center",
                    zIndex: 1,

                    borderInline: "2px solid",
                    borderColor: theme.vars.palette.neutral.solidBg,
                    transition: "border-color ease-out 0.2s",
                    "&:hover": {
                        borderColor: theme.vars.palette.text.primary,
                    },
                })}
            >
                <Outlet />

                {/* Footer text */}
                <Typography
                    level="body-sm"
                    component="div"
                    sx={{
                        paddingTop: 3,
                        marginTop: "auto",
                    }}
                >
                    <RomanText
                        value={new Date().getFullYear()}
                    >
                        <strong>v. </strong>
                    </RomanText>
                </Typography>

                {/* Mode toggle */}
                <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                    <ModeToggle size="sm" />
                </Box>
            </Box>
        </Sheet>
    );
}
