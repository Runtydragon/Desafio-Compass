import React, { useContext } from "react";
import Cabecalho from "../components/Cabecalho/index";
import Container from "../components/Container";
import ReposContainer from "../components/ReposContainer";
import { context } from "../Context";
import "../components/Cabecalho/ContainerHeader.css";
import Logo2 from "../components/Cabecalho/Compass.png";

const Repos = (props) => {
    const ctx = useContext(context);

    return (
        <>
            <Cabecalho />
            <Container>
                <ReposContainer name={ctx.userData?.name} repos={ctx.repos} />
                <footer>
                    <div>
                        <img className="img_logo" src={Logo2} alt="" />
                        <p className="img_logo">
                            &copy; Copyright Compass - 2022
                        </p>
                    </div>
                </footer>
            </Container>
        </>
    );
};
export default Repos;
