import React from "react";
import Upload from "../../components/Upload/Upload";
import Deploys from "../../components/Deploys/Deploys"
import { StylePainel } from "./painelDeDeploy-style.js";

const PainelDeDeploys = () => {
  return (
    <StylePainel>
      <Deploys />
      <Upload />
    </StylePainel>
  );
};

export default PainelDeDeploys;
