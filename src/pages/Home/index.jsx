import React, { useState } from "react";
import "./styles.css";
import { Redirect } from "react-router-dom";
import kenzieIcon from "../../assets/kenzieIcon.svg";
import defaultButton from "../../assets/defaultButton.svg";
import ModalTecnologies from "../../components/ModalTecnologies";
import ModalCreate from "../../components/ModalCreate";
export default function Home({ authenticated, setAuthenticated }) {
  const [createModal, setCreateModal] = useState(false);
  const [modal, setModal] = useState(false);
  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  const logout = () => {
    localStorage.clear();
    setAuthenticated(false);
  };

  const options = [
    {
      value: "Iniciante",
      label: "Iniciante",
    },
    { value: "Intermediário", label: "Intermediário" },
    {
      value: "Avançado",
      label: "Avançado",
    },
  ];

  return (
    <>
      <nav>
        <div>
          <img src={kenzieIcon} alt="logo" />
          <button onClick={logout}>Sair</button>
        </div>
      </nav>

      <header className="home-header">
        <div>
          <div>
            <p>Olá, Tiago Pesch</p>
          </div>
          <div>
            <h2>Primeiro módulo (Introdução ao Frontend)</h2>
          </div>
        </div>
      </header>

      <main>
        <div className="header-main">
          <div>
            <span>Tecnologias</span>
            <img
              src={defaultButton}
              alt="button-change-tecnology"
              onClick={() => setModal(true)}
            />
          </div>
        </div>
        <ModalTecnologies modal={modal} setModal={setModal} options={options} />
        {/* <ModalCreate modal={modal} setModal={setModal} options={options} /> */}
        <ul>
          <div></div>
          <li>
            <p>React JS</p>
            <span>Intermediário</span>
          </li>
          <li>
            <p>Material UI</p>
            <span>Avançado</span>
          </li>
          <li>
            <p>Styled-Components</p>
            <span>Intermediário</span>
          </li>
        </ul>
      </main>
    </>
  );
}
