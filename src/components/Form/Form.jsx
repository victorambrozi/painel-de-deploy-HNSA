import React, { useState } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import * as Custom from "../../context/customHook/customHooks";
import MessageError from "./MessageError/MessageError";

import { StyleForm, StyleTitleForm, StyleLogo, Container } from "./form-style";
import logo from "../../assets/logo.svg";

const Form = (props) => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const [stateChecked, setStateChecked] = React.useState(false);

  const authenticator = Custom.useAtuh();

  let navigate = useNavigate();

  const dataForm = {
    name,
    password,
  };

  const dataStorage = {
    name,
    stateChecked,
  };

  function saveData(prop, dataForm) {
    localStorage.setItem(
      `${prop.toString()}`,
      JSON.stringify([{ ...dataForm }])
    );
  }

  const handleCheckBox = ({ target }) => {
    setStateChecked(target.checked);

    if (!target.checked) {
      localStorage.removeItem("data");
    } else {
      if (name !== "") {
        //salvar dados no localStorage
        saveData("data", dataStorage);
      }
    }
    console.log(target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name && password) {
      //salvar no storage
      saveData("data", dataStorage);

      authenticator.signin(dataForm, () => {
        setError(false);
        console.log("logado");

        navigate("/deploys");
      });
    } else if (!name || !password) {
      setError(true);
    }
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
            value={name}
            onChange={({ target }) => setName(target.value)}
            className="bg-icon"
          />
          <label htmlFor="password" className="label-name">
            Senha
          </label>
          <input
            type="password"
            name="password"
            value={password}
            id="password"
            className="bg-icon"
            onChange={({ target }) => setPassword(target.value)}
          />

          <label className="data-remember" htmlFor="data-remember">
            <input
              type="checkbox"
              name="data-remember"
              id="data-remember"
              onClick={handleCheckBox}
            />
            <span></span>
            Lembrar meus dados
          </label>

          {error ? <MessageError /> : null}

          <Button text="Login" type="submit" handleSubmit={handleSubmit} />

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
