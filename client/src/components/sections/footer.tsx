import { Box, Typography } from "@mui/joy";

import LogoSVG from "!/public/assets/images/logo.svg?react";

export function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: "15px",
                backgroundColor: "primary.solidBg",
                color: "primary.solidColor",
                fill: "primary.solidColor",
                fontSize: "sm",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "3em",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: { xs: "0.2em", md: "1.25em" },
                        alignItems: { md: "center" },
                    }}
                >
                    <LogoSVG width="60px" />

                    <Typography level="body-sm">
                        Copyright {new Date().getFullYear()} © AzDias
                    </Typography>
                </Box>

                <Box
                    sx={{
                        maxWidth: "350px",
                        textAlign: "right",
                    }}
                >
                    <Typography level="body-sm">
                        Col. 3:23 — Tudo o que fizerem, façam de todo o coração, como para o
                        Senhor, e não para os homens, ...
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
