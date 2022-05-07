import React, { useContext } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import UserContainer from "../components/ContainerDoUsuario";
import FotoDoUsuario from "../components/FotoDoUsuario/Index";
import DetalhesDoUsuario from "../components/DetalhesDoUsuario/Index";
import Numeros from "../components/Numeros/Index";
import { context } from "../Context";
import Logo from "../components/Cabecalho/Logo.jpeg";
import "../components/Cabecalho/ContainerHeader.css";
import Logo2 from "../components/Cabecalho/Compass.png";

export default function Home() {
    const ctx = useContext(context);
    return (
        <>
            <Container>
                <header>
                    <div className="">
                        <img className="img_logo" src={Logo} alt="" />
                    </div>
                </header>

                <Header />
                <UserContainer>
                    {ctx.userData?.name ? (
                        <React.Fragment>
                            <FotoDoUsuario
                                url={ctx.userData?.avatar_url}
                                alternativeText={ctx.userdata?.login}
                            />
                            <DetalhesDoUsuario
                                Nome={ctx.userData?.name}
                                Usuario={ctx.userData?.login}
                                Descricao={ctx.userData?.bio}
                            />
                            <Numeros repos={ctx.userData?.public_repos} />
                        </React.Fragment>
                    ) : undefined}
                </UserContainer>

                <footer>
                    <div className="">
                        <img className="img_logo" src={Logo2} alt="" />
                        <p className="img_logo">
                            &copy; Copyright Compass - 2022
                        </p>
                    </div>
                </footer>
            </Container>
        </>
    );
}
