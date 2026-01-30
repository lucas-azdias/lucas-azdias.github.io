export interface Page {
    label: string
    to: string
}

// Central list of all pages
export const PAGES: Page[] = [
    { label: "SOBRE", to: "/capitulos/sobre" },
    { label: "FERRAMENTAS", to: "/capitulos/ferramentas" },
    { label: "PROJETOS", to: "/capitulos/projetos" },
    { label: "ARTIGOS", to: "/capitulos/artigos" },
    { label: "ARQUIVOS", to: "/capitulos/arquivos" },
];
