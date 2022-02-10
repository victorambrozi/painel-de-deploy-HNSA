import styled from "styled-components";
import bgInfoContent from "../../assets/bg-info-content.svg";

const StyleInfoComponent = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url(${bgInfoContent});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .content {
   margin-top: 27.9rem;

    color: #fff;
    margin-left: 9rem;

    h2 {
      font-size: clamp(2vw, 3rem, 4vw);
      font-weight: 700;
    }

    p {
      margin-top: 1rem;
      font-size: clamp(1.8vw, 2rem, 5vw);
      font-weight: 300;
    }
  }
`;

export { StyleInfoComponent };
