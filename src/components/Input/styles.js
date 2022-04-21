import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  color: var(--white);
  display: flex;
  flex-direction: column;
  margin-bottom: 21px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    margin-bottom: 18px;
    font-size: 10px;
    align-self: flex-start;
  }
`;

export const InputContainer = styled.div`
  border-radius: 4px;
  background: var(--grey-20);
  padding: 1rem;
  display: flex;
  transition: 0.4;
  width: 265px;

  input {
    background: transparent;
    flex: 1;
    border: none;

    ::placeholder {
      color: var(--grey-10);
    }
  }
`;
