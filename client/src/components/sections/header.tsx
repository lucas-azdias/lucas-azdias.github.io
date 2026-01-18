import { Link } from "react-router-dom";

import LogoSVG from "!/public/assets/images/logo.svg"


export function CHeader() {
    const pages = ["ferramentas", "contato", "sobre"];
    const headerAcessosContent = pages.map((page, index) => (
        <Link key={index} className="{styles.acessos_links}" to={page.toLowerCase()}>{page}</Link>
    ))

    return (
        <header className="{styles.header}">
            <div className="{`wrapper ${styles.wrapper}`}">
                <Link className="{styles.logo}" to="/">
                    <LogoSVG className="{`img`}" height="20px" />
                </Link>
                <div className="{`desktop ${styles.acessos_desktop}`}">
                    {headerAcessosContent}
                </div>
            </div>
        </header>
    );
}
