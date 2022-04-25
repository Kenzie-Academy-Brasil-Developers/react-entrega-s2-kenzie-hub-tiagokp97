import React from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import StyledSelect from "../Select/Select";
import { StyledButton } from "../Button/styles";
import api from "../../services/api";
import { useState } from "react";
import { toast } from "react-toastify";
export default function ModalTecnologies({
  createModal,
  setCreateModal,
  options,
  techId,
  setTechs,
  techs,
  techName,
  loadWorks,
}) {
  const [token] = useState(JSON.parse(localStorage.getItem("Hub:token")) || "");
  const schema = yup.object().shape({
    name: yup.string(),
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const deleteTech = () => {
    const newTechs = techs.filter((tech) => tech.id !== techId);
    api
      .delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((res) => {
        setCreateModal(false);
        setTechs(newTechs);
        toast.error("Tecnologia excluída com sucesso");
      });
  };

  const onSubmitFunction = (data) => {
    const newTechs = techs.filter((tech) => tech.id !== techId);
    api
      .put(`/users/techs/${techId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((res) => {
        setCreateModal(false);
        setTechs(newTechs);
        loadWorks();
        toast.success("Tecnologia atualizada com sucesso");
      });
  };

  return createModal === true ? (
    <div className="container-modal">
      <div className="header-modal">
        <div>
          <p>Editar Tecnologia</p>
          <button onClick={() => setCreateModal(false)}>X</button>
        </div>
      </div>

      <div className="container-input-modal">
        <div>
          <Input
            register={register}
            label="Nome"
            placeholder={techName}
            name="name"
            disabled
            error={errors.name?.message}
          />
        </div>
        <p className="label-select">Selecionar status</p>
        <div className="position">
          <StyledSelect
            name="selected"
            control={control}
            error={errors.option?.message}
            options={options}
            valueName={"status"}
            placeholder="Iniciante"
          />
        </div>
        <div className="container-button">
          <StyledButton
            className="button-patch"
            onClick={handleSubmit(onSubmitFunction)}
            color={"white"}
            background={"#59323F"}
            brightness={"brightness(0.8)"}
            width="205px"
            shadow="0px 5px 20px rgba(255, 66, 127, 0.4)"
            hover="#FF577F"
          >
            Salvar alterações
          </StyledButton>
          <StyledButton
            className="button-delete"
            onClick={() => deleteTech()}
            type="submit"
            color={"white"}
            background={"#868E96"}
            width="98px"
            shadow="0px 5px 20px rgba(255, 255, 255, 0.4)"
          >
            Excluir
          </StyledButton>
        </div>
      </div>
    </div>
  ) : null;
}
