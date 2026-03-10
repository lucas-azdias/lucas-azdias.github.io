import { Box } from "@mui/joy";

export interface ImageProps {
    width?: string
    height?: string
    src: string
    alt: string
}

export function Image(
    {
        width = "100%",
        height = "100%",
        src,
        alt
    }: ImageProps
) {
    return (
        <Box
            sx={{
                width: width,
                height: height,

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
            }}
        >
            <img width="100%" height="100%" style={{ display: "block", objectFit: "cover" }} src={src} alt={alt} />
        </Box>
    );
}
