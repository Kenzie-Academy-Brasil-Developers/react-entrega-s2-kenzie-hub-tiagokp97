import React from "react";
import { Container, InputContainer } from "./styles";

export default function Input({ label, icon: Icon, ...rest }) {
  return (
    <Container>
      <p>{label}</p>
      <InputContainer>
        <input {...rest} />
        {Icon && <Icon />}
      </InputContainer>
    </Container>
  );
}
