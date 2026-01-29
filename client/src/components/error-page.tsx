import { Box, Typography, Button, Link } from "@mui/joy";
import {
    Link as RouterLink,
    useRouteError,
    isRouteErrorResponse,
} from "react-router-dom";

export function ErrorPage() {
    const error = useRouteError();

    let title = "Algo deu errado 😢";
    let message = "Ocorreu um erro inesperado. Por favor, tente novamente.";

    if (isRouteErrorResponse(error)) {
        title = `Erro ${error.status.toString()}`;
        message = error.statusText || message;
    }
    else if (error instanceof Error) {
        message = error.message;
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
                    level="h2"
                    textAlign="center"
                    sx={{ mb: 1.5 }}
                >
                    {title}
                </Typography>

                <Typography
                    level="body-md"
                    textAlign="center"
                    textColor="neutral.600"
                    sx={{ mb: 3 }}
                >
                    {message}
                </Typography>

                <Link component={RouterLink} to="/" underline="none">
                    <Button variant="solid">
                        Ir para home
                    </Button>
                </Link>
            </Box>
        </Box>
    );
}
