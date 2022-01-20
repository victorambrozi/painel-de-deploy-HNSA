import React from 'react';
import { ButtonComponent } from './button-style';

const Button = (props) => {
  return <ButtonComponent>{props.title}</ButtonComponent>;
};

export default Button;
