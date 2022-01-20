import React from "react";
import { ButtonComponent } from "../Button/button-style";
import { StyleForm, StyleTitleForm } from "./form-style";

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
        <label htmlFor="name" className="input-name">
          Nome do usuário
        </label>
        <input
          type="text"
          id="name"
          value={form.name}
          onChange={(event) => setForm(event.target.value)}
          placeholder="nome"
        />
        <label htmlFor="password" className="input-name">
          Senha
        </label>
        <input type="password" name="password" id="password" />

        {/* adicionar campo para senha incorreta aqui */}
        <input type="checkbox" name="data-remember" id="data-remember" />

       <ButtonComponent title="Login" />
      </StyleForm>

      <p>Esqueceu a senha? <a href="/">Esqueci minha senha</a></p>
    </>
  );
};

export default Form;
