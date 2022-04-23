import styled from "styled-components";

export const StyledButton = styled.button`
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  /* width: 265px; */
  width: ${(props) => props.width};
  height: 38px;
  border: none;
  border-radius: 4px;
  transition: 0.4s;

  &:hover {
    background-color: ${(props) => props.hover};
    filter: ${(props) => props.brightness};
    box-shadow: ${(props) => props.shadow};
  }
`;
