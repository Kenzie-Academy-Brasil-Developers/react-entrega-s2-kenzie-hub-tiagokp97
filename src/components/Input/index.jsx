import React from "react";
import { Container, InputContainer } from "./styles";
import { useState } from "react";
import { BsEyeSlashFill } from "react-icons/bs";
export default function Input({
  label,
  icon: Icon,
  register,
  error,
  name,
  ...rest
}) {
  const [show, setShow] = useState("text");

  const teste = () => {
    show === "text" ? setShow("password") : setShow("text");
  };
  return (
    <Container>
      <p>
        {label} {!!error && <span> - {error}</span>}
      </p>
      <InputContainer>
        <input
          {...register(name)}
          {...rest}
          type={label === "Senha" ? show : "text"}
        />
        {Icon ? (
          show === "text" ? (
            <Icon onClick={teste} />
          ) : (
            <BsEyeSlashFill onClick={teste} />
          )
        ) : null}
      </InputContainer>
    </Container>
  );
}
