import React from "react";
import  Button  from "../Button/Button";
import { StyleForm, StyleTitleForm } from "./form-style";

//assets
import iconError from "../../assets/icons/error.svg";

const Form = (props) => {
  const [form, setForm] = React.useState({
    name: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <StyleTitleForm>Login</StyleTitleForm>

      <StyleForm onSubmit={handleSubmit}>
        <label htmlFor="name" className="label-name">
          Nome do usuário
        </label>
        <input
          type="text"
          id="name"
          value={form.name}
          onChange={(event) => setForm(event.target.value)}
          className="bg-icon"
        />
        <label htmlFor="password" className="label-name">
          Senha
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="bg-icon"
        />

        <label className="data-remember" htmlFor="data-remember">
          <input type="checkbox" name="data-remember" id="data-remember" />
          <span></span>
          Lembrar meus dados
        </label>

        <div className="login-error">
          <img src={iconError} alt="Error" />
          <span>Senha ou nome de usuário incorretos</span>
        </div>

        <Button text="Login" />

        <div className="forget-password">
          <p>
            Esqueceu a senha? <a href="/">Esqueci minha senha</a>
          </p>
        </div>
      </StyleForm>
    </>
  );
};

export default Form;
