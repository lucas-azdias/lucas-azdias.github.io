import { type ReactNode } from "react";

import { Box } from "@mui/joy";

export interface RomanTextProps {
    value: number
    counterName?: string
    children?: ReactNode
}

export function RomanText(
    {
        value,
        counterName = "counter",
        children,
    }: RomanTextProps
) {
    return (
        <Box
            sx={{
                counterSet: `${counterName} ${value.toString()}`,

                "&::after": {
                    content: `counter(${counterName}, upper-roman)`,
                    color: "inherit",
                },
            }}
        >
            {children}
        </Box>
    );
}
