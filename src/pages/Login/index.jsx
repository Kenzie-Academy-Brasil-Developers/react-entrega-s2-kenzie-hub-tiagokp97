import React from "react";
import kenzieIcon from "../../assets/kenzieIcon.svg";
import { StyledButton } from "../../components/Button/styles";
import { StyledForm } from "../../components/Form/styles";
import Input from "../../components/Input";
import { FaEye } from "react-icons/fa";
import "./styles.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Redirect, useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

export default function Login({ authenticated, setAuthenticated }) {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .required("Campo obrigatório!"),
  });
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        // console.log(response.data.token);
        const { token } = response.data;
        localStorage.setItem("Hub:token", JSON.stringify(token));
        setAuthenticated(true);
        return history.push("/home");
      })
      .cath((err) => toast.err("Email ou senha inválidos"));
  };

  if (authenticated) {
    return <Redirect to="/home" />;
  }

  const redirect = () => {
    history.push("/");
  };

  return (
    <>
      <header>
        <img src={kenzieIcon} alt="logo" />
      </header>

      <div className="container">
        <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
          <div className="header">
            <h1>Login</h1>
          </div>

          <Input
            name="email"
            error={errors.email?.message}
            register={register}
            label="Email"
            placeholder="Digite aqui seu email"
          />
          <Input
            register={register}
            icon={FaEye}
            label="Senha"
            placeholder="Digite aqui seu senha"
            type="password"
            name="password"
            error={errors.password?.message}
          />

          <StyledButton
            color={"white"}
            background={"#FF577F"}
            hover={"#FF427F"}
          >
            Entrar
          </StyledButton>
          <p className="text">Ainda não possui uma conta?</p>

          <StyledButton
            onClick={redirect}
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
