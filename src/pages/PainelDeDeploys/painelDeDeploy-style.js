import styled from "styled-components";
import bgDashboard from "../../assets/bg-dashboard.svg";

const StylePainel = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  background-image: url(${bgDashboard});
  background-size: cover;
  background-repeat: no-repeat;
`;

export { StylePainel };
