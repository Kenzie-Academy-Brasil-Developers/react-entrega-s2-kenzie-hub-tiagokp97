import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  align-items: center;
  background-color: var(--grey-30);
  padding: 33px;
  border-radius: 4px;
  animation: myAnim 1s ease 0s 1 normal forwards;
  box-shadow: 0px 15px 20px rgba(255, 66, 127, 0.4);

  @keyframes myAnim {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }
`;
