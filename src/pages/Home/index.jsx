import React, { useEffect, useState } from "react";
import "./styles.css";
import { Redirect } from "react-router-dom";
import kenzieIcon from "../../assets/kenzieIcon.svg";
import defaultButton from "../../assets/defaultButton.svg";
import ModalTecnologies from "../../components/ModalTecnologies";
import ModalCreate from "../../components/ModalCreate";
import api from "../../services/api";
export default function Home({ authenticated, setAuthenticated }) {
  const [createModal, setCreateModal] = useState(false);
  const [techId, setTechId] = useState(0);
  const [modal, setModal] = useState(false);
  const [token] = useState(JSON.parse(localStorage.getItem("Hub:token")) || "");
  const [id] = useState(JSON.parse(localStorage.getItem("Hub:userID")) || "");
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    const loadWorks = () => {
      api.get(`/users/${id}`).then((response) => setTechs(response.data.techs));
    };
    loadWorks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [techs]);

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  const logout = () => {
    localStorage.clear();
    setAuthenticated(false);
  };

  const pathModal = (id) => {
    setTechId(id);
    setCreateModal(true);
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
        <ModalTecnologies
          createModal={createModal}
          setCreateModal={setCreateModal}
          options={options}
          techId={techId}
          setTechs={setTechs}
          techs={techs}
        />
        <ModalCreate modal={modal} setModal={setModal} options={options} />
        <ul>
          <div></div>
          {techs.map((tech) => {
            return (
              <li key={tech.id} onClick={() => pathModal(tech.id)}>
                <p>{tech.title}</p>
                <span>{tech.status}</span>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
