import { Link as RouterLink } from "react-router-dom";
import { Link as JoyLink, type LinkProps as JoyLinkProps, type Theme } from "@mui/joy";
import { type SystemStyleObject } from "@mui/system";

interface LinkProps extends Omit<JoyLinkProps<typeof RouterLink>, "sx"> {
    sx?: SystemStyleObject<Theme> | ((_theme: Theme) => SystemStyleObject<Theme>)
}

export function Link(
    {
        sx,
        ...props
    }: LinkProps
) {
    const defaultSx = {
        textDecorationStyle: "solid",
        textDecorationColor: "currentColor",
    };

    return (
        <JoyLink
            component={RouterLink}
            underline="hover"
            sx={
                sx
                    ? [defaultSx, sx]
                    : defaultSx
            }
            {...props}
        >
        </JoyLink>
    );
}
