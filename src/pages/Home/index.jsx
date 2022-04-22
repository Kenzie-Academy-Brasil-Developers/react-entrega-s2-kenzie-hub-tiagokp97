import React from "react";
import "./styles.css";
import { Link, Redirect } from "react-router-dom";
import Input from "../../components/Input";
import kenzieIcon from "../../assets/kenzieIcon.svg";
import Button from "../../components/Button";
import defaultButton from "../../assets/defaultButton.svg";
export default function Home({ authenticated, setAuthenticated }) {
  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  const logout = () => {
    localStorage.clear();
    setAuthenticated(false);
  };

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
            <img src={defaultButton} alt="button-change-tecnology" />
          </div>
        </div>

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
