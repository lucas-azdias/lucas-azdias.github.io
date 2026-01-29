export interface Page {
    label: string;
    to: string;
}

// Central list of all pages
export const PAGES: Page[] = [
    { label: "SOBRE", to: "/sobre" },
    { label: "FERRAMENTAS", to: "/ferramentas" },
    { label: "PROJETOS", to: "/projetos" },
    { label: "ARTIGOS", to: "/artigos" },
    { label: "ARQUIVOS", to: "/arquivos" },
];
