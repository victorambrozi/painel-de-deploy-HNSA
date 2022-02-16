import React from "react";
import Button from "../Button/Button";
import { StyleForm, StyleTitleForm, StyleLogo, Container } from "./form-style";
import { MdOutlineErrorOutline } from "react-icons/md";

import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

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
      <Container>
        <StyleLogo>
          <img src={logo} alt="Brasão da OM" />

          <h2>Hospital Naval de Salvador</h2>
        </StyleLogo>

        <StyleForm onSubmit={handleSubmit}>
          <StyleTitleForm>Login</StyleTitleForm>

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
            <MdOutlineErrorOutline size={15} color="#BB7772" />
            <span>Senha ou nome de usuário incorretos</span>
          </div>

          <Link to="/deploys">
            <Button text="Login" />
          </Link>

          <div className="forget-password">
            <p>
              Esqueceu a senha? <a href="/">Esqueci minha senha</a>
            </p>
          </div>
        </StyleForm>
      </Container>
    </>
  );
};

export default Form;
