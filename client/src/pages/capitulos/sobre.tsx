import { Typography } from "@mui/joy";

export default function Webpage() {
    return (
        <Typography
            level="body-md"
            textAlign="left"
            sx={{
                "&::first-letter": {
                    textTransform: "capitalize",
                    fontSize: "var(--joy-fontSize-xl2)",
                    fontFamily: "var(--joy-fontFamily-display)",
                    lineHeight: 1,
                },
            }}
        >
            Olá, meu nome é Lucas Dias, sou bacharel em <b>Ciência da Computação</b> pela
            Pontifícia Universidade Católica do Paraná (PUCPR) e pós-graduando em <b>Gestão
            Estratégica de Negócios</b> pela <b>FAE</b>.
            <br /><br />
            Atuo como desenvolvedor <i>mid-level</i>, com foco no desenvolvimento de
            soluções baseadas em LLMs e Visão Computacional, aplicadas à automação de
            processos de ponta a ponta em empresas de diferentes setores no Brasil.
        </Typography>
    );
}
