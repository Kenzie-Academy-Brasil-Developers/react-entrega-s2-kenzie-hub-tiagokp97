import React, { useState } from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import StyledSelect from "../Select/Select";
import { StyledButton } from "../Button/styles";
import api from "../../services/api";
import { toast } from "react-toastify";
export default function ModalCreate({ modal, setModal, options, loadWorks }) {
  const [token] = useState(JSON.parse(localStorage.getItem("Hub:token")) || "");

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório!"),
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        loadWorks();
        setModal(false);
        toast.success("Tecnologia criada");
      })
      .catch((err) => console.log(err));
  };

  return modal === true ? (
    <form className="container-modal" onSubmit={handleSubmit(onSubmitFunction)}>
      <div className="header-modal">
        <div>
          <p>Tecnologia Detalhes</p>
          <button onClick={() => setModal(false)}>X</button>
        </div>
      </div>

      <div className="container-input-modal">
        <div>
          <Input
            register={register}
            label="Nome"
            placeholder="Nome da sua tecnologia"
            name="title"
            error={errors.title?.message}
          />
        </div>
        <p className="label-select">Status</p>
        <StyledSelect
          control={control}
          error={errors.option?.message}
          options={options}
          placeholder=""
          valueName="status"
          shadow="box-shadow: 0px 15px 20px rgba(255, 66, 127, 0.4)"
        />
        <div className="container-button">
          <StyledButton
            className="button-register"
            type="submit"
            color={"white"}
            background={"#FF577F"}
            brightness={"brightness(0.8)"}
            width="320px"
            shadow="0px 5px 20px rgba(255, 66, 127, 0.4)"
          >
            Cadastrar Tecnologia
          </StyledButton>
        </div>
      </div>
    </form>
  ) : null;
}
