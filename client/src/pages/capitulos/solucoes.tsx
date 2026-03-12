import { Box } from "@mui/joy";

import { Link } from "@/components/generics/link";
import { Image } from "@/components/generics/image";

interface Solution {
    imagePath: string
    title: string
    to: string
}

export default function Webpage() {
    const solutions: Solution[] = [
        {
            imagePath: "/assets/images/solutions/cotacoes-pecuaria.png",
            title: "Cotações da Pecuária",
            to: "https://azdias.com.br/link/watch?v=xxxxxx",
        },
    ];

    return (
        <>
            {solutions.map(solution => (
                <Box
                    key={solution.to}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                    }}
                >
                    <Link
                        sx={theme => ({
                            width: "100%",
                            padding: 0.5,

                            border: "2px dashed",
                            borderColor: theme.vars.palette.text.primary,

                            filter: "saturate(50%)",

                            transition: "filter ease-in-out 0.15s, box-shadow 0.2s ease",
                            "&:hover": {
                                filter: "saturate(100%)",
                                boxShadow: `0 0 20px ${theme.vars.palette.neutral.solidBg}`,
                            },

                            "& img": {
                                transition: "transform 0.25s ease",
                            },
                            "&:hover img": {
                                transform: "scale(1.05)",
                            },
                        })}
                        to={solution.to}
                    >
                        <Image height="250px" src={solution.imagePath} alt={solution.title} />
                    </Link>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Link
                            level="body-md"
                            to={solution.to}
                        >
                            {solution.title}
                        </Link>
                        <Link
                            level="body-md"
                            to={solution.to}
                        >
                            {solution.to.replace(/^.*:\/\//, "").replace(/\/.*$/, "")}
                        </Link>
                    </Box>
                </Box>
            ))}
        </>
    );
}
