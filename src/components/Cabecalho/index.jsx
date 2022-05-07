import { useHistory } from "react-router-dom";
import Logo from "../Cabecalho/Logo.jpeg";
import "../Cabecalho/ContainerHeader.css";

const Cabeca = () => {
    let history = useHistory();
    return (
        <>
            <header>
                <div className="btns">
                    <h1>
                        <img className="img_logo" src={Logo} alt="" />
                    </h1>
                </div>
                <div className="btns">
                    <button
                        className="efeito efeito-1"
                        onClick={() => history.goBack()}
                    >
                        Home
                    </button>
                </div>
            </header>
        </>
    );
};

export default Cabeca;
