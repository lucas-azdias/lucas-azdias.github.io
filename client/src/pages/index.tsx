import { Box, Typography, Sheet, Link, List, ListItem } from "@mui/joy";
import { Link as RouterLink } from "react-router";

import { ModeToggle } from "@/components/mode-toggle";

export default function Webpage() {
    return (
        <Sheet
            variant="plain"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
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
                    width: "500px",
                    height: "100%",
                    padding: 5,
                    textAlign: "center",

                    borderInline: "2px solid",
                    borderColor: "neutral.outlinedBorder",
                    transition: "border-color ease-out 0.2s",
                    "&:hover": {
                        borderColor: "neutral.solidBg",
                    },
                }}
            >
                {/* Title */}
                <Typography level="h1" sx={{ mt: 4, fontSize: "5rem", lineHeight: 1 }}>
                    LUCAS
                    <br />
                    DIAS
                </Typography>

                {/* Subtitle */}
                <Typography level="h3" sx={{ mt: 3, lineHeight: 1.2 }}>
                    Desenvolvedor
                </Typography>

                {/* Content */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        paddingTop: 3,
                    }}
                >
                    {/* Book summary */}
                    <Box
                        sx={{
                            paddingBottom: 4,
                        }}
                    >
                        <List
                            component="ol"
                            marker="none"
                            sx={{
                                display: "grid",
                                gap: 1,
                                counterReset: "counter",
                                p: 0,
                            }}
                        >
                            {[
                                { label: "SOBRE", to: "/sobre" },
                                { label: "PROJETOS", to: "/projetos" },
                                { label: "ARTIGOS", to: "/artigos" },
                                { label: "ARQUIVOS", to: "/arquivos" },
                                { label: "ARQUIVOS", to: "/arquivos" },
                                { label: "ARQUIVOS", to: "/arquivos" },
                                { label: "ARQUIVOS", to: "/arquivos" },
                                { label: "ARQUIVOS", to: "/arquivos" },
                                { label: "ARQUIVOS", to: "/arquivos" },
                                { label: "ARQUIVOS", to: "/arquivos" },
                                { label: "ARQUIVOS", to: "/arquivos" },
                                { label: "ARQUIVOS", to: "/arquivos" },
                                { label: "ARQUIVOS", to: "/arquivos" },
                                { label: "ARQUIVOS", to: "/arquivos" },
                            ].map(item => (
                                <Link
                                    key={item.label}
                                    typography="body-md"
                                    component={RouterLink}
                                    to={item.to}
                                    underline="none"
                                    color="neutral"
                                    sx={{
                                        position: "relative",
                                        color: "neutral.plainColor",
                                        fontWeight: "bold",

                                        "&::after": {
                                            content: "\"\"",
                                            position: "absolute",
                                            left: 0,
                                            bottom: -2,
                                            width: "0",
                                            height: "1px",
                                            backgroundColor: "currentColor",
                                            transition: "width ease-out 0.15s",
                                        },

                                        "&:hover": {

                                            "&::after": {
                                                width: "100%",
                                            },
                                        },
                                    }}
                                >
                                    <ListItem
                                        key={item.label}
                                        sx={{
                                            display: "flex",
                                            alignItems: "end",
                                            counterIncrement: "counter",
                                            py: 0.5,
                                            gap: 0.4,
                                            flex: 1,
                                            height: "100%",

                                            "&::before": {
                                                content: "\"\"",
                                                flex: 1,
                                                order: 2,
                                                mx: 1,
                                                height: "100%",

                                                backgroundRepeat: "space no-repeat",
                                                backgroundImage:
                                                    "radial-gradient(circle, currentColor 20%, transparent 21%)",
                                                backgroundSize: ".6em .6em",
                                                backgroundPosition: "0 70%",
                                            },

                                            "&::after": {
                                                content: "counter(counter, upper-roman)",
                                                order: 3,
                                            },
                                        }}
                                    >
                                        {item.label}
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </Box>

                    {/* Footer */}
                    <Typography
                        level="body-md"
                        sx={{
                            marginTop: "auto",
                            counterSet: `year ${new Date().getFullYear().toString()}`,

                            "&::after": {
                                content: "counter(year, upper-roman)",
                                fontWeight: "bold",
                            },
                        }}
                    >
                        <b>v. </b>
                    </Typography>

                    {/* Mode toggle */}
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                        <ModeToggle size="lg" sx={{ fontSize: "1.4rem" }} />
                    </Box>
                </Box>
            </Box>
        </Sheet>
    );
}
