import React from "react";
import { ButtonComponent } from "./button-style";

const Button = ({ text, type, handleSubmit }) => {

  return (
    <ButtonComponent type={type} onClick={(event) => handleSubmit(event)}>
      {text}
    </ButtonComponent>
  );
};

export default Button;
