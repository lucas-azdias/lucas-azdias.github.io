import { Link as RouterLink } from "react-router-dom";
import { Box, Link } from "@mui/joy";

import LogoSVG from "!/public/assets/images/logo.svg?react";

export function Header() {
    const pages = ["ferramentas", "contato", "sobre"];

    return (
        <Box
            component="header"
            sx={{
                py: "15px",
                backgroundColor: "primary.solidBg",
                color: "primary.solidColor",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "3em",
                }}
            >
                <Link
                    component={RouterLink}
                    to="/"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <LogoSVG height="20px" />
                </Link>

                <Box
                    sx={{
                        display: "flex",
                        gap: "1.5em",
                    }}
                >
                    {pages.map((page) => (
                        <Link
                            key={page}
                            component={RouterLink}
                            to={`/${page.toLowerCase()}`}
                            sx={{
                                color: "inherit",
                                textDecoration: "none",
                                fontSize: "sm",
                                "&:hover": {
                                    textDecoration: "underline",
                                },
                            }}
                        >
                            {page}
                        </Link>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
