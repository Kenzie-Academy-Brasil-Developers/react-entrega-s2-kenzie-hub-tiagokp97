import React, { useEffect, useState } from "react";
import "./styles.css";
import { Redirect } from "react-router-dom";
import kenzieIcon from "../../assets/kenzieIcon.svg";
import defaultButton from "../../assets/defaultButton.svg";
import ModalTecnologies from "../../components/ModalTecnologies";
import ModalCreate from "../../components/ModalCreate";
import api from "../../services/api";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
export default function Home({ authenticated, setAuthenticated }) {
  const { username } = useParams();
  const [createModal, setCreateModal] = useState(false);
  const [techId, setTechId] = useState(0);
  const [modal, setModal] = useState(false);
  const [id] = useState(JSON.parse(localStorage.getItem("Hub:userID")) || "");
  const [techs, setTechs] = useState([]);
  const [techName, setTechName] = useState("");
  const module = localStorage.getItem("Hub:course");

  const loadWorks = () => {
    api.get(`/users/${id}`).then((response) => setTechs(response.data.techs));
  };

  useEffect(() => {
    return loadWorks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  const logout = () => {
    localStorage.clear();
    setAuthenticated(false);
  };

  const patchModal = (id, title) => {
    setTechId(id);
    setTechName(title);
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
      <div className="container-home">
        <nav>
          <div>
            <img src={kenzieIcon} alt="logo" />
            <button onClick={logout}>Sair</button>
          </div>
        </nav>

        <header className="home-header">
          <div>
            <div>
              <p>Olá, {username}</p>
            </div>
            <div>
              <h2>{module}</h2>
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
                className="button-add-tech"
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
            loadWorks={loadWorks}
            techName={techName}
          />
          <ModalCreate
            modal={modal}
            setModal={setModal}
            options={options}
            loadWorks={loadWorks}
          />
          <ul>
            <div></div>
            {techs.map((tech) => {
              return (
                <li
                  key={tech.id}
                  onClick={() => patchModal(tech.id, tech.title)}
                >
                  <p>{tech.title}</p>
                  <span>{tech.status}</span>
                </li>
              );
            })}
          </ul>
        </main>
      </div>
    </>
  );
}
