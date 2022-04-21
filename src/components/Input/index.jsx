import React from "react";
import { Container, InputContainer } from "./styles";

export default function Input({ label, icon, ...rest }) {
  return (
    <Container>
      <p>{label}</p>
      <InputContainer>
        <input {...rest} />
      </InputContainer>
    </Container>
  );
}
