import styled from "styled-components";

const StyleUpload = styled.div`
  width: 100%;
  margin-top: 6rem;
`;

const DropContainer = styled.div`
margin: 0 2rem;
  padding: 2rem;
  border: 1px dashed rgba(0, 0, 0, 0.4);
  border-radius: 1.5rem;

  font-size: 50px;

  cursor: pointer;
  transition: height 0.2s ease;
`;

const UploadMessage = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-size: 50px;
`;

export { StyleUpload, DropContainer, UploadMessage };
