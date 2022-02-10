import React from "react";
import { LoginComponent } from "./login-style";
import Form from "../../components/Form/Form";
import InfoContent from "../../components/InfoContent/InfoContent";

const Login = () => {
  return (
    <>
      <LoginComponent>
        <div className="form">
          <Form />
        </div>
          <InfoContent />
      </LoginComponent>
    </>
  );
};

export default Login;
