import { Box } from "@mui/joy";

export function Loading({ isFixed = false }: { isFixed?: boolean }) {
    return (
        <Box
            sx={theme => ({
                position: isFixed ? "fixed" : "relative",
                inset: isFixed ? 0 : undefined,
                width: isFixed ? "100vw" : "100%",
                height: isFixed ? "100vh" : "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 100,
                bgcolor: theme.vars.palette.background.body,
            })}
        >
            <Box
                sx={{
                    width: 32,
                    height: 32,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    component="span"
                    sx={theme => ({
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        border: "3.5px solid",
                        borderColor: `color-mix(in srgb, ${theme.vars.palette.text.primary} 65%, transparent)`,
                        borderBottomColor: "transparent",
                        animation: "spin 0.4s linear infinite",
                    })}
                />
            </Box>

            <style>
                {`
                    @keyframes spin {
                        to {
                            transform: rotate(360deg);
                        }
                    }
                `}
            </style>
        </Box>
    );
}
