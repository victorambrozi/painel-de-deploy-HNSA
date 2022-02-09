import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  width: 100%;
  /* min-height: 35rem; */

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px dashed rgba(0, 0, 0, 0.4);
  border-radius: 1.5rem;

  font-size: 50px;

  > input {
    width: 100%;
    height: 100%;
  }
`;

const UploadMessage = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    max-width: 100%;
    display: block;
  }

  p {
    margin-top: 3rem;
    font-size: 3rem;
    font-weight: 600;
    color: #7b7b7b;

    span {
      font-size: 3rem;
      color: #3454cf;
    }
  }

  span {
    margin-top: 1rem;
    font-size: 1.4rem;
    color: #7b7b7b;
  }
`;

export { Container, UploadMessage };