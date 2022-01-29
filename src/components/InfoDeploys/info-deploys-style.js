import styled from "styled-components";

const StyleDeploysData = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  .card-deploy {
    padding: 1.6rem 2rem;
    background: #f5f5f5;
    border-radius: 2rem;

    .card-deploy__title {
      font-size: 1.4rem;
      font-weight: 500;
      color: #4e4e4e;
    }

    .total-content {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    .last-content {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 3rem;

      .last-content__hour,
      .last-content__data {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
    }
  }

  img + span {
    margin-left: 1rem;
    font-size: 3rem;
    font-weight: 700;
    color: #4e4e4e;
  }
`;

export { StyleDeploysData };
