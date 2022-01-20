import React from "react";
import { LoginComponent } from "./login-style";
import Form from "../../components/Form/Form";
import InfoContent from "../../components/InfoContent/InfoContent";

const Login = () => {
  return (
    <>
      <LoginComponent>
          <InfoContent />
        <div className="form">
          <Form />
        </div>
      </LoginComponent>
    </>
  );
};

export default Login;
