import styled from "styled-components";

// assets
import iconName from "../../assets/icons/input-name.svg";
import iconPassword from "../../assets/icons/password.svg";

const StyleTitleForm = styled.h2`
  font-size: 2rem;
  font-weight: 700;
`;

const StyleForm = styled.form`
  margin-top: 4rem;
  max-width: 41rem;

  display: flex;
  justify-content: center;
  flex-direction: column;

  .label-name {
    font-size: 1.6rem;
    font-weight: 700;
    color: #0f0f0f;
  }

  > input {
    margin-top: 0.5rem;
    padding: 1.5rem;
    width: 37rem;
    
    border: 1px solid rgba(78, 78, 78, 0.25);
    border-radius: 1rem;
    
    font-size: 1.4rem;
    color: rgba(78, 78, 78, 0.6);
    outline: none;
  }

  .bg-icon {
    padding-left: 3.5rem;
    display: flex:
    align-items: center;

    background-repeat: no-repeat;
    background-position: 1.5rem;
  }

  > input#name {
    background-image: url(${iconName})
  }

  > input#password {
    background-image: url(${iconPassword})
  }

  > input + label {
      margin-top: 2rem;
  }

  .data-remember {
    margin-top: 1.5rem;

    display: flex;
    align-items: center;

    font-weight: 500;
    font-size: 1rem;
    color: #7B7B7B;

    position: relative;
    
    > input {
      margin-right: 1rem;
      width: 0;
      height: 0;

      opacity: 0;

      &:checked ~ span {
        background: #3454CF;
      }
    }

    > span {
      position: absolute;
      top: 0;
      left: 0;

      width: 1rem;
      height: 1rem;

      border: 2px solid #3454CF;
      border-radius: .2rem;
    }

  }

  .login-error {
    margin: 2rem 0;
    padding: .8rem 2rem;

    border: 1px solid #E0B1AE;
    border-radius: 1rem;

    display: flex;
    align-items: center;

    background: #FFE0DE;

    // display: none; // acionar com JS

    > span {
      margin-left: 2rem;
      
      font-size: 1.2rem;
      font-weight: 500;
      color: #6E2723;
    }

  }

  .forget-password {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 1.2rem;
      > a {
        font-size: 1.2rem;
        color: #3454CF;
      }
  }
  }
`;

export { StyleForm, StyleTitleForm };
