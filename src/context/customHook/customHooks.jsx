import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineErrorOutline } from "react-icons/md";
import { AuthContext } from "../GeneralContext";

const useAtuh = () => React.useContext(AuthContext);

const useStatus = () => {
  const auth = useAtuh();
  const navigate = useNavigate();

  if (!auth.user) {
    return (
      <div className="login-error">
        <MdOutlineErrorOutline size={15} color="#BB7772" />
        <span>Senha ou nome de usuário incorretos</span>
      </div>
    );
  }

  return navigate("/deploys");
};

export { useAtuh, useStatus };