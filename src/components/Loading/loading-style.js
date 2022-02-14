import styled from "styled-components";

const Container = styled.div`
  margin-top: 6rem;
  padding: 3rem 2rem;
  width: 100%;
  max-width: 70rem;

  background: #f5f5f5;
  box-shadow: 0px 1.6rem 1.6rem -0.8rem rgba(0, 0, 0, 0.1);
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
      background-color: #D4DCEE;
      border-radius: .6rem;

      overflow: hidden;
    }

    > button {
      border: none;
      background: transparent;
      cursor: pointer;
    }
  }
`;

export { Container };
