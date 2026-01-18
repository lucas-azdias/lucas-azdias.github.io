import { Button } from "@mui/joy";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

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
        <div
            className="w-[100dvw] h-[100dvh] flex justify-center items-center"
        >
            <div className="flex flex-col flex-wrap items-center">
                <h1 className="text-3xl text-center font-semibold text-600 mb-4">{title}</h1>
                <p className="text-center text-gray-700 mb-6">{message}</p>

                <Link to="/">
                    <Button>
                        Ir para home
                    </Button>
                </Link>
            </div>
        </div>
    );
}
