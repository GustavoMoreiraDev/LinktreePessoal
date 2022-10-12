import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./style.css";

const Main = ({ menuSuperior }) => {
  const infoMain = {
    nome: "Gustavo Moreira",
    profissao: "Desenvolvedor Front End",
  };

  return (
    <>
      <section className="main-wrapper">
        {menuSuperior}
        <main className="main-position">
          <div className="main-image-wrapper">
            <div className="main-image-escopo">
              <StaticImage
                className="main-image"
                src="../../images/perfil.jpg"
                placeholder="blurred"
                loading="eager"
                title="Gustavo Moreira"
                alt="Gustavo Moreira | Dev "
              />
            </div>
          </div>
          <div className="main-info-wrapper">
            <h1>{`${infoMain.nome}`}</h1>
            <h3>{`${infoMain.profissao}`}</h3>
          </div>
        </main>
      </section>
    </>
  );
};

export default Main;
