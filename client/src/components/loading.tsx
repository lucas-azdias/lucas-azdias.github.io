import { Box } from "@mui/joy";

import { usePageLevel } from "@/components/page-level-provider";

export function Loading(
    {
        isFixed,
        isFilled,
    }: {
        isFixed?: boolean | undefined
        isFilled?: boolean | undefined
    }
) {
    const level = usePageLevel();
    const isRoot = level === 0;

    return (
        <Box
            sx={theme => ({
                position: isFixed ?? isRoot ? "fixed" : "relative",
                inset: isFixed ?? isRoot ? 0 : undefined,
                width: isFixed ?? isRoot ? "100dvw" : "100%",
                height: isFixed ?? isRoot ? "100dvh" : "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 100,
                backgroundColor:
                    isFilled ?? isRoot
                        ? theme.vars.palette.background.body
                        : "transparent",
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
