import { Box, Link, List, ListItem } from "@mui/joy";
import { Link as RouterLink } from "react-router";

import { PAGES } from "@/constants/pages";

export function BookSummary() {
    return (
        <Box
            sx={{
                paddingTop: 3,
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
                {PAGES.map(item => (
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
    );
}
