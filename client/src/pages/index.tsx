import { Link } from "react-router-dom";

import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

export default function Webpage() {
    return (
        <>
            <Header />
            <div className="bg-blue-500">
                <div>
                    <p>Bom dia!</p>
                </div>
                <div>
                    <Link to="/login">
                        Logar
                    </Link>
                </div>
                <div>
                    <Link to="/painel">
                        Acessar
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}
