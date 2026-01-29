import { Box, Typography, Button, Link } from "@mui/joy";
import {
    Link as RouterLink,
    useRouteError,
    isRouteErrorResponse,
} from "react-router-dom";

export function ErrorPage() {
    const error = useRouteError();

    let title = "Ocorreu um erro inesperado";

    if (isRouteErrorResponse(error)) {
        title = `Erro ${error.status}`;
    }

    return (
        <Box
            sx={{
                width: "100dvw",
                height: "100dvh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    maxWidth: 480,
                    px: 2,
                }}
            >
                <Typography
                    level="h3"
                    textAlign="center"
                    sx={{ mb: 1.5 }}
                >
                    {title}
                </Typography>

                <Link component={RouterLink} to="/" underline="none">
                    <Button
                        variant="solid"
                        color="neutral"
                        sx={{ fontWeight: "normal" }}
                    >
                        Página inicial
                    </Button>
                </Link>
            </Box>
        </Box>
    );
}
