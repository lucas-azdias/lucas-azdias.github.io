import {
    Box,
    Divider,
    Typography,
    Stack,
    Button,
    FormControl,
    FormLabel,
    Input,
    Link as RefLink,
} from "@mui/joy";
import { z } from "zod";

interface FormElements extends HTMLFormControlsCollection {
    email: HTMLInputElement
    password: HTMLInputElement
    persistent: HTMLInputElement
}

interface SignInFormElement extends HTMLFormElement {
    readonly elements: FormElements
}

const LoginResponseSchema = z.object({
    token: z.string(),
    userId: z.string(),
});

export default function Webpage() {
    return (
        <>
            <Box
                sx={{
                    width: { xs: "100%" },
                    display: "flex",
                    justifyContent: "flex-end",
                    backgroundColor: "rgba(255 255 255)",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        minHeight: "100dvh",
                        width: "100%",
                        px: 2,
                    }}
                >
                    <Box
                        component="main"
                        sx={{
                            "my": "auto",
                            "px": 6,
                            "py": 7,
                            "display": "flex",
                            "flexDirection": "column",
                            "gap": 2,
                            "width": 400,
                            "maxWidth": "100%",
                            "mx": "auto",
                            "borderRadius": "sm",
                            "& form": {
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                            },
                            ["& .MuiFormLabel-asterisk"]: {
                                visibility: "hidden",
                            },
                            "border": "1px solid",
                            "borderColor": "neutral.outlinedBorder",
                            "backgroundColor": "rgba(255 255 255)",
                        }}
                    >
                        <Stack sx={{ gap: 4, mb: 2 }}>
                            <Typography component="h1" level="h3">
                                Login
                            </Typography>
                        </Stack>
                        <Divider />
                        <Stack sx={{ gap: 4, mt: 2 }}>
                            <form
                                onSubmit={(event: React.FormEvent<SignInFormElement>) => {
                                    event.preventDefault();
                                    (async () => {
                                        const formElements = event.currentTarget.elements;
                                        const data = {
                                            email: formElements.email.value,
                                            password: formElements.password.value,
                                        };

                                        try {
                                            const serverHost = import.meta.env.VITE_SERVER_HOST as string;
                                            const serverPort = import.meta.env.VITE_SERVER_PORT as string;

                                            const response = await fetch(
                                                `http://${serverHost}:${serverPort}/api/login`,
                                                {
                                                    method: "POST",
                                                    headers: { "Content-Type": "application/json" },
                                                    body: JSON.stringify(data),
                                                }
                                            );
                                            console.log(`${serverHost}:${serverPort}/api/login`);
                                            alert(JSON.stringify(response, null, 2));

                                            if (!response.ok) {
                                                const error = await response.text();
                                                throw new Error(error || "Failed to login");
                                            }

                                            const json: unknown = await response.json();
                                            const result = LoginResponseSchema.parse(json);

                                            console.log("Server response:", result);
                                        }
                                        catch (err: unknown) {
                                            // console.error(String(err));
                                            if (err instanceof Error) alert(`Error: ${err.message}`);
                                            else alert(`Error: ${String(err)}`);
                                        }
                                    })().catch((err: unknown) => {
                                        // console.error(String(err));
                                        if (err instanceof Error) alert(`Error: ${err.message}`);
                                        else alert(`Error: ${String(err)}`);
                                    });
                                }}
                            >
                                <FormControl required>
                                    <FormLabel>E-mail</FormLabel>
                                    <Input type="email" name="email" />
                                </FormControl>
                                <FormControl required>
                                    <FormLabel>Senha</FormLabel>
                                    <Input type="password" name="password" />
                                </FormControl>
                                <Stack sx={{ gap: 4, mt: 2 }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "row-reverse",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <RefLink level="title-sm" href="#">
                                            Esqueceu sua senha?
                                        </RefLink>
                                    </Box>
                                    <Button type="submit" fullWidth>
                                        Entrar
                                    </Button>
                                </Stack>
                            </form>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
