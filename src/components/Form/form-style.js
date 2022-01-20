import styled from "styled-components";

const StyleTitleForm = styled.h2`
  font-size: 2rem;
  font-weight: 700;
`;

const StyleForm = styled.form`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .input-name {
    font-size: 1.6rem;
    font-weight: 700;
    color: #0f0f0f;
  }

  > input {
    margin-top: 0.5rem;
    max-width: 41rem;
    padding: 1rem;
    
    border: 1px solid rgba(78, 78, 78, 0.25);
    border-radius: 1rem;
  }

  > input + label {
      margin-top: 2rem;
  }
`;

export { StyleForm, StyleTitleForm };
