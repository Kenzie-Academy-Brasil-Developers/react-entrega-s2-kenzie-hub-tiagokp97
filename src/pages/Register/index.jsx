import React from "react";
import "./styles.css";
import { Link, Redirect, useHistory } from "react-router-dom";
import { StyledButton } from "../../components/Button/styles";
import { StyledForm } from "../../components/Form/styles";
import Input from "../../components/Input";
import kenzieIcon from "../../assets/kenzieIcon.svg";
import StyledSelect from "../../components/Select/Select";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
export default function Register({ authenticated }) {
  const schema = yup.object().shape({
    name: yup.string().required("Digite seu nome!"),
    email: yup.string().email("Email inválido").required("Deixa seu email!"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .required("Campo obrigatório!")
      .matches(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
        "Falta caractere capital, minusculo e especial"
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não coincidem")
      .required("Campo obrigatório!"),
    course_module: yup.string().required("Selecione o seu módulo!"),
    bio: yup.string().required("Campo obrigatório!"),
  });

  const history = useHistory();

  const onSubmitFunction = (data) => {
    api
      .post("/users", data)
      .then((_) => {
        toast.success("Conta criada com sucesso");

        return history.push("/login");
      })
      .catch((err) => toast.error("Erro ao criar a conta, tente outro email"));
  };

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  if (authenticated) {
    return <Redirect to="/home" />;
  }

  const options = [
    {
      value: "Primeiro módulo (Introdução ao Frontend)",
      label: "Primeiro módulo (Introdução ao Frontend)",
    },
    {
      value: "Segundo módulo (Frontend Avançado)",
      label: "Segundo módulo (Frontend Avançado)",
    },
    {
      value: "Terceiro módulo (Introdução ao Backend)",
      label: "Terceiro módulo (Introdução ao Backend)",
    },
    {
      value: "Quarto módulo (Backend Avançado)",
      label: "Quarto módulo (Backend Avançado)",
    },
  ];

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
            icon={FaEye}
            error={errors.password?.message}
          />
          <Input
            register={register}
            label="Confirmar senha"
            icon={FaEye}
            type="password"
            placeholder="Digite aqui seu nome"
            name="passwordConfirm"
            error={errors.passwordConfirm?.message}
          />
          <Input
            register={register}
            label="Contato"
            placeholder="Deixe seu contato"
            name="contact"
            error={errors.passwordConfirm?.message}
          />

          <p className="modulo">
            Selecionar módulo<span> - {errors.selected?.message}</span>
          </p>
          <StyledSelect
            control={control}
            error={errors.option?.message}
            options={options}
            placeholder="Selecione o seu módulo"
            valueName="course_module"
            name="selected"
            {...register("selected")}
          />
          <p className="modulo">
            Bio {!!errors && <span> - {errors.bio?.message} </span>}
          </p>
          {/* {label} {!!error && <span> - {error}</span>} */}

          <textarea
            {...register("bio")}
            error
            placeholder="Fale um pouco sobre você"
            name="bio"
          />

          <StyledButton
            type="submit"
            color={"white"}
            background={"#59323F"}
            width="265px"
            shadow="0px 15px 20px rgba(255, 66, 127, 0.4)"
            hover="#FF577F"
          >
            Cadastrar
          </StyledButton>
        </StyledForm>
      </div>
    </>
  );
}
