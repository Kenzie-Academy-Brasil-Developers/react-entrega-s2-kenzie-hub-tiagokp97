import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { StyledButton } from "../../components/Button/styles";
import { StyledForm } from "../../components/Form/styles";
import Input from "../../components/Input";
import kenzieIcon from "../../assets/kenzieIcon.svg";
import StyledSelect from "../../components/Select/Select";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export default function Register() {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .required("Campo obrigatório!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não coincidem")
      .required("Campo obrigatório!"),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <header>
        <div className="container-header">
          <img src={kenzieIcon} alt="logo" />
          <Link to="/login">Voltar</Link>
        </div>
      </header>

      <div className="container">
        <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
          <div className="header">
            <h1>Crie sua conta</h1>
            <h2>Rapido e grátis, vamos nessa</h2>
          </div>
          <Input
            register={register}
            label="Nome"
            placeholder="Digite aqui seu nome"
            name="name"
            error={errors.name?.message}
          />
          <Input
            register={register}
            label="Email"
            placeholder="Digite aqui seu email"
            name="email"
            error={errors.email?.message}
          />
          <Input
            register={register}
            label="Senha"
            placeholder="Digite aqui seu senha"
            type="password"
            name="password"
            error={errors.password?.message}
          />
          <Input
            register={register}
            label="Confirmar senha"
            placeholder="Digite aqui seu nome"
            name="passwordConfirm"
            error={errors.passwordConfirm?.message}
          />
          <p className="modulo">Selecionar módulo</p>
          <StyledSelect control={control} error={errors.option?.message} />
          <p className="modulo">Breve bio</p>
          <textarea></textarea>
          <StyledButton
            type="submit"
            color={"white"}
            background={"#59323F"}
            brightness={"brightness(0.8)"}
          >
            Cadastrar
          </StyledButton>
        </StyledForm>
      </div>
    </>
  );
}
