import { Typography } from "@mui/joy";

interface ChapterTextProps {
    children: string
}

export function ChapterText({ children }: ChapterTextProps) {
    const firstLetter = children[0];
    const rest = children.slice(1);

    return (
        <Typography
            component="div"
            textAlign="left"
            sx={{ display: "flex", alignItems: "baseline", gap: 1 }}
        >
            {/* First letter */}
            <Typography
                component="span"
                level="h2"
                sx={{
                    lineHeight: 1,
                    textTransform: "capitalize",
                }}
            >
                {firstLetter}
            </Typography>

            {/* Rest of the text */}
            <Typography
                component="span"
                level="body-md"
                sx={{
                    lineHeight: 1.2,
                }}
            >
                {rest}
            </Typography>
        </Typography>
    );
}
