import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  align-items: center;
  background-color: var(--grey-30);
  padding: 33px;
  border-radius: 4px;

  @media (max-width: 600px) {
    body {
      background-color: red !important;
    }
  }
`;
