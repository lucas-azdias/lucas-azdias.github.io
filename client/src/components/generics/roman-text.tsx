import { Typography, type TypographyProps, type Theme } from "@mui/joy";
import { type SystemStyleObject } from "@mui/system";

export interface RomanTextProps extends Omit<TypographyProps, "sx"> {
    value: number
    counterName?: string
    sx?: SystemStyleObject<Theme>
}

export function RomanText(
    {
        value,
        counterName = "counter",
        sx,
        ...props
    }: RomanTextProps
) {
    return (
        <Typography
            level="body-md"
            sx={{
                counterSet: `${counterName} ${value.toString()}`,

                "&::after": {
                    content: `counter(${counterName}, upper-roman)`,
                    fontWeight: "bold",
                },
                ...sx,
            }}
            {...props}
        />
    );
}
