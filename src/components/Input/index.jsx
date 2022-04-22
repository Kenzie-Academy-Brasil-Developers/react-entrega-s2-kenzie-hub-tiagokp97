import React from "react";
import { Container, InputContainer } from "./styles";

export default function Input({
  label,
  icon: Icon,
  register,
  error,
  name,
  ...rest
}) {
  return (
    <Container>
      <p>
        {label} {!!error && <span> - {error}</span>}
      </p>
      <InputContainer>
        <input {...register(name)} {...rest} />
        {Icon && <Icon />}
      </InputContainer>
    </Container>
  );
}
