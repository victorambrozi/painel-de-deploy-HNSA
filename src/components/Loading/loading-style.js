import styled from "styled-components";

const Container = styled.div`
  padding: 3rem 2rem;
  width: 100%;
  max-width: 70rem;

  background: #f5f5f5;
  box-shadow: 0px 1.6rem 1.6rem .-8rem rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 50px;

  h2 {
    font-size: 3rem;
    font-weight: 600;
    color: #4e4e4e;
  }

  .loading-info {
    margin: 1.5rem 0 3rem 0;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 0.4rem;

    span {
      font-size: 1.4rem;
      color: #4e4e4e;
    }

    .loading-timer {
      p {
        display: flex;
        align-items: center;

        > span {
          margin-right: 0.5rem;
        }
      }
    }
  }

  .loading-progress {
    width: 100%;
    max-width: 80%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4.5rem;

    .progress {
      width: 100%;
      height: 1rem;

      border-radius: 0.6rem;
      background: #d4dcee;
      color: #3454cf;

      /* muda a cor do progress em diferentes navegadores */
      &::-moz-progress-bar {
        background: #3454cf;
        border-radius: .6rem;
      }
      &::-ms-fill {
        background: #3454cf;
        border-radius: .6rem;
      }
      &::webkit-progress-value {
        background: #3454cf;
        border-radius: .6rem;
      }
      &::webkit-progress-bar {
        background: #3454cf;
        border-radius: .6rem;
      }
    }

    > button {
        border: none;
        background: transparent;
        cursor: pointer;
    }
  }
`;

export { Container };
