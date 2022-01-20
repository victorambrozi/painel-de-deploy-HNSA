import styled from "styled-components";

const ButtonComponent = styled.button`
  margin: 2rem 0 3rem 0;
  padding: 1.5rem;
  background: #3454CF;

  border: none;
  border-radius: 1rem;
  
  font-size: 1.4rem;
  font-weight: 500;
  color: #FFF;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: .3s;

  &:hover {
    filter: brightness(1.2)
  }
`;

export {
  ButtonComponent
}