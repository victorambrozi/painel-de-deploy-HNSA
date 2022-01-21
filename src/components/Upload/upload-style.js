import styled from "styled-components";

import bgDashboard from "../../assets/bg-dashboard.svg"

const StyleUpload = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${bgDashboard});
  background-size: cover;
  background-position: center;
`;

export { StyleUpload };
