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

                overflowX: "hidden",
            }}
        >
            <Box
                sx={theme => ({
                    position: "fixed",
                    height: "100dvh",
                    inset: 0,
                    zIndex: 0,

                    backgroundColor: theme.vars.palette.text.primary,
                    maskImage: "url(/assets/effects/obra-dinn.png)",
                    maskSize: "cover",
                    maskMode: "luminance",
                    maskRepeat: "repeat-x",
                    maskPosition: "top center", // "top right"
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
            </Sheet>
        </Sheet>
    );
}
