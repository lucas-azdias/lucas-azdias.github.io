import { Box } from "@mui/joy";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Link } from "@/components/generics/link";

export function ChapterLinks() {
    const textLinks = [
        { label: "E-mail", to: "mailto:lucas.azevedodias@outlook.com" },
    ];

    const iconLinks = [
        { icon: <FaGithub />, to: "https://github.com/lucas-azdias/" },
        { icon: <FaLinkedin />, to: "https://www.linkedin.com/in/lucas-azdias/" },
    ];

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 2,
                paddingY: 1.5,
                borderBlock: "2.5px solid",
                borderColor: "currentColor",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    textAlign: "left",
                    gap: 1.25,
                }}
            >
                {textLinks.map(link => (
                    <Link
                        key={link.to}
                        to={link.to}
                        typography="body-sm"
                    >
                        {link.label}
                    </Link>
                ))}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    gap: 1.25,

                    "& a:nth-of-type(odd):hover": {
                        transform: "scale(1.2) rotate(10deg)",
                    },

                    "& a:nth-of-type(even):hover": {
                        transform: "scale(1.2) rotate(-10deg)",
                    },
                }}
            >
                {iconLinks.map(link => (
                    <Link
                        key={link.to}
                        to={link.to}
                        typography="body-md"
                        sx={{
                            fontSize: "1.4rem",
                            transform: "scale(1) rotate(0)",
                            transition: "transform ease-in-out 0.05s",
                        }}
                    >
                        {link.icon}
                    </Link>
                ))}
            </Box>
        </Box>
    );
}
