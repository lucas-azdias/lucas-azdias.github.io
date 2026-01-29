import { Typography, type TypographyProps } from "@mui/joy";

export interface RomanTextProps extends TypographyProps {
    value: number;
    counterName?: string;
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
