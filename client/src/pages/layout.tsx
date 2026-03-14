import { Outlet } from "react-router-dom";
import { Box, Sheet, Typography } from "@mui/joy";
import { alpha } from "@mui/system";

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

                overflowX: "hidden",
            }}
        >
            <Box
                sx={theme => ({
                    position: "fixed",
                    height: "100dvh",
                    inset: 0,
                    zIndex: 0,

                    backgroundImage: `
                        linear-gradient(
                            ${alpha(theme.palette.background.surface, 0.5)},
                            ${alpha(theme.palette.background.surface, 0.5)}
                        ),
                        url("${theme.palette.mode === "light"
                            ? "assets/images/ars et opera/John Constable - Wivenhoe Park.jpg"
                            : "assets/images/ars et opera/John Martin - Joshua Commanding the Sun to Stand Still.jpg"
                        }")
                        `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                })}
            />
            <Sheet
                sx={theme => ({
                    display: "flex",
                    flexDirection: "column",
                    width: 520,
                    minHeight: "100dvh",
                    padding: 5,
                    paddingTop: 7,
                    textAlign: "center",
                    zIndex: 1,

                    backgroundColor: "transparent",
                    backdropFilter: "blur(2px)",
                    borderInline: "2px solid",
                    borderColor: theme.vars.palette.neutral.solidBg,

                    transition: "border-color ease-out 0.2s, background-color ease-in-out 0.3s",
                    "&:hover": {
                        backgroundColor: alpha(theme.palette.background.surface, 0.5),
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
            </Sheet>
        </Sheet>
    );
}
