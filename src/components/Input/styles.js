import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  color: var(--white);
  display: flex;
  flex-direction: column;
  margin-bottom: 21px;
  display: flex;

  p {
    margin-bottom: 18px;
    font-size: 10px;
    align-self: flex-start;
    max-width: 200px;
    min-height: 25px;
  }

  span {
    color: var(--pink);
  }
`;

export const InputContainer = styled.div`
  border-radius: 4px;
  background: var(--grey-20);
  display: flex;
  transition: 0.4;
  width: 265px;
  height: 38px;
  display: flex;
  align-items: center;
  padding: 1rem;
  border: solid 2px var(--grey-20);
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: var(--white);
    transition: background-color 500000s;
  }

}

  

  :focus-within {
    border: white solid 2px;
  }
  svg {
    color: var(--grey-10);
  }

  input {
    width: 90%;
    align-items: center;
    flex: 1;
    border: 0;
    background: transparent;
    color: var(--white);

}




    ::placeholder {
      color: var(--grey-10);
    }
  
`;
