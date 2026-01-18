import { Link } from "react-router-dom";

export default function Webpage() {
    return (
        <>
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
        </>
    );
}
