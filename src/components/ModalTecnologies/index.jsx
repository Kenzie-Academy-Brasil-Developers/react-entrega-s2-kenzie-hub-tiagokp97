import React from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import StyledSelect from "../Select/Select";
import { StyledButton } from "../Button/styles";
export default function ModalTecnologies({ modal, setModal, options }) {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
  });
  const {
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return modal === true ? (
    <div className="container-modal">
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
            placeholder="Digite aqui seu nome"
            name="name"
            error={errors.name?.message}
          />
        </div>
        <p className="label-select">Status</p>
        <StyledSelect
          control={control}
          error={errors.option?.message}
          options={options}
          placeholder="Iniciante"
        />
        <div className="container-button">
          <StyledButton
            type="submit"
            color={"white"}
            background={"#59323F"}
            brightness={"brightness(0.8)"}
            width="205px"
          >
            Salvar alterações
          </StyledButton>
          <StyledButton
            type="submit"
            color={"white"}
            background={"#868E96"}
            brightness={"brightness(0.8)"}
            width="98px"
          >
            Excluir
          </StyledButton>
        </div>
      </div>
    </div>
  ) : null;
}
