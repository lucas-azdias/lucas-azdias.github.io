import { ChapterText } from "@/components/page-sections/chapter-text";

export default function Webpage() {
    return (
        <ChapterText>
            <p>
                Olá, meu nome é Lucas Dias, sou bacharel em
                {" "}
                <strong>Ciência da Computação</strong>
                {" "}
                pela
                {" "}
                <strong>Pontifícia Universidade Católica do Paraná (PUCPR)</strong>
                {" "}
                e pós-graduando em
                {" "}
                <strong>Gestão Estratégica de Negócios</strong>
                {" "}
                pela
                {" "}
                <strong>FAE</strong>
                .
            </p>

            <p>
                Atuo como desenvolvedor
                {" "}
                <em>mid-level</em>
                , com foco no desenvolvimento de soluções baseadas em LLMs e Visão
                Computacional, aplicadas à automação de processos em diversas empresas
                de diferentes setores no Brasil.
            </p>
        </ChapterText>
    );
}
