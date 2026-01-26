import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Link } from "@mui/joy";

export default function Webpage() {
    return (
        <Box
            sx={{
                bgcolor: "primary.500",
                p: 3,
                display: "flex",
                flexDirection: "column",
                gap: 2,
            }}
        >
            <Typography level="body-lg" textColor="common.white">
                Bom dia!
            </Typography>

            <Link
                component={RouterLink}
                to="/login"
                textColor="common.white"
                underline="hover"
            >
                Logar
            </Link>

            <Link
                component={RouterLink}
                to="/painel"
                textColor="common.white"
                underline="hover"
            >
                Acessar
            </Link>
        </Box>
    );
}
