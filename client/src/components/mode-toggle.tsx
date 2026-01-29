import { IconButton, useColorScheme, type IconButtonProps } from "@mui/joy";
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
            {...props}
            variant="plain"
            onClick={(event) => {
                // 1. Call consumer handler if provided
                onClick?.(event);

                // 2. Toggle color mode
                setMode(mode === "light" ? "dark" : "light");
            }}
        >
            {mode === "light" ? <MdLightMode /> : <MdDarkMode />}
        </IconButton>
    );
}
