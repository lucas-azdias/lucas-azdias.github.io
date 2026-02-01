import {
    useRouteError,
    isRouteErrorResponse,
} from "react-router-dom";
import { Box, Typography, Button } from "@mui/joy";

import { Link } from "@/components/generics/link";

export function ErrorPage() {
    const error = useRouteError();

    let title = "Ocorreu um erro inesperado";

    if (isRouteErrorResponse(error)) {
        title = `Erro ${error.status.toString()}`;
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
                    level="h4"
                    textAlign="center"
                    sx={{ mb: 6 }}
                >
                    {title}
                </Typography>

                <Link to="/" underline="none">
                    <Button
                        variant="solid"
                        color="neutral"
                    >
                        Página inicial
                    </Button>
                </Link>
            </Box>
        </Box>
    );
}
