import styled from "styled-components";

// assets
import iconName from "../../assets/icons/input-name.svg";
import iconPassword from "../../assets/icons/password.svg";

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 41rem;
`;

const StyleLogo = styled.div`
  display: flex;
  align-items: center;

  h2 {
    width: 100%;
    max-width: 15rem;

    margin-left: 3rem;

    font-size: 2rem;
    color: #0f0f0f;
    text-transform: uppercase;
  }
`;

const StyleTitleForm = styled.h2`
  margin: 15.7rem 0 4rem 0;
  font-size: 2rem;
  font-weight: 700;
`;

const StyleForm = styled.form`
  width: 100%;

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
    width: 100%;

    border: 1px solid rgba(78, 78, 78, 0.25);
    border-radius: 1rem;

    font-size: 1.4rem;
    color: rgba(78, 78, 78, 0.6);
    outline: none;
  }

  .bg-icon {
    padding-left: 3.5rem;
    display: flex;
    align-items: center;

    background-repeat: no-repeat;
    background-position: 1.5rem;
  }

  > input#name {
    background-image: url(${iconName});
  }

  > input#password {
    background-image: url(${iconPassword});
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
    color: #7b7b7b;

    position: relative;

    > input {
      margin-right: 1rem;
      width: 0;
      height: 0;

      opacity: 0;

      &:checked ~ span {
        background: #3454cf;
      }
    }

    > span {
      position: absolute;
      top: 0;
      left: 0;

      width: 1rem;
      height: 1rem;

      border: 2px solid #3454cf;
      border-radius: 0.2rem;
    }
  }

  .login-error {
    margin: 2rem 0;
    padding: 0.8rem 2rem;

    border: 1px solid #e0b1ae;
    border-radius: 1rem;

    display: flex;
    align-items: center;

    background: #ffe0de;

    > span {
      margin-left: 2rem;

      font-size: 1.2rem;
      font-weight: 500;
      color: #6e2723;
    }
  }

  .forget-password {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 1.2rem;
      > a {
        font-size: 1.2rem;
        color: #3454cf;
      }
    }
  }
`;

export { StyleForm, StyleTitleForm, StyleLogo, Container };
