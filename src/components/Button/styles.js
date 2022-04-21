import styled from "styled-components";

export const StyledButton = styled.button`
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  width: 260px;
  height: 38px;
  border: none;
  border-radius: 4px;
`;
