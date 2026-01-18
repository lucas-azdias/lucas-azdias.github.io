import LogoSVG from "!/public/assets/images/logo.svg"


export function CFooter() {
    return (
        <footer className="{styles.footer}">
            <div className="{`wrapper ${styles.wrapper}`}">
                <div className="{styles.logo_copyright}">
                    <LogoSVG className="{`img`}" width="60px" />
                    <span className="smaller">Copyright {new Date().getFullYear()} © AzDias</span>
                </div>
                <div className="{styles.message}">
                    <small className="smaller">Col. 3:23 — Tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens, ...</small>
                </div>
            </div>
        </footer>
    );
}
