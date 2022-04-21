import React from "react";
import kenzieIcon from "../../assets/kenzieIcon.svg";
import { StyledButton } from "../../components/Button/styles";
import { StyledForm } from "../../components/Form/styles";
import Input from "../../components/Input";
import { FaEye } from "react-icons/fa";
import "./styles.css";

export default function Login() {
  return (
    <>
      <header>
        <img src={kenzieIcon} alt="logo" />
      </header>

      <div className="container">
        <StyledForm>
          <div className="header">
            <h1>Login</h1>
          </div>
          <Input label="Email" placeholder="Digite aqui seu email" />
          <Input
            icon={FaEye}
            label="Senha"
            placeholder="Digite aqui seu senha"
          />

          <StyledButton
            color={"white"}
            background={"#FF577F"}
            hover={"#FF427F"}
          >
            Cadastrar
          </StyledButton>
          <p className="text">Ainda não possui uma conta?</p>

          <StyledButton
            color={"white"}
            background={"#868E96"}
            hover={"#343B41"}
          >
            Cadastre-se
          </StyledButton>
        </StyledForm>
      </div>
    </>
  );
}
