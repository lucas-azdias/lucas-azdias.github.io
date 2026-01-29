import { IconButton, Typography, useColorScheme, type IconButtonProps } from "@mui/joy";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export function ModeToggle(
    {
        onClick,
        ...props
    }: IconButtonProps
) {
    const { mode, setMode } = useColorScheme();

    return (
        <IconButton
            variant="plain"
            onClick={(event) => {
                // 1. Toggle color mode
                setMode(mode === "light" ? "dark" : "light");

                // 2. Call consumer handler if provided
                onClick?.(event);
            }}
            {...props}
        >
            <Typography sx={{ fontSize: "1.4rem" }}>
                {mode === "light" ? <MdLightMode /> : <MdDarkMode />}
            </Typography>
        </IconButton>
    );
}
