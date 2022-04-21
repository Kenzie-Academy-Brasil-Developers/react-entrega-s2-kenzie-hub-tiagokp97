import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { Container } from "../../components/Input/styles";
import { StyledButton } from "../../components/Button/styles";
import Input from "../../components/Input";
import { StyledForm } from "../../components/Form/styles";
import kenzieIcon from "../../assets/kenzieIcon.svg";
export default function Register() {
  return (
    <>
      <header>
        <div className="container-header">
          <img src={kenzieIcon} alt="logo" />
          <Link to="/">Voltar</Link>
        </div>
      </header>

      <div className="container">
        <StyledForm>
          <div className="header">
            <h1>Crie sua conta</h1>
            <h2>Rapido e grátis, vamos nessa</h2>
          </div>
          <Input label="Nome" placeholder="Digite aqui seu nome" />
          <Input label="Email" placeholder="Digite aqui seu email" />
          <Input label="Senha" placeholder="Digite aqui seu senha" />
          <Input label="Confirmar senha" placeholder="Digite aqui seu nome" />
          <StyledButton color={"white"} background={"#59323F"}>
            Cadastrar
          </StyledButton>
        </StyledForm>
      </div>
    </>
  );
}
