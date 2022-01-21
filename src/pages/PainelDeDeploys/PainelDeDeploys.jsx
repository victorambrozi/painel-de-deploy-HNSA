import React from "react";
import Upload from "../../components/Upload/Upload";
import Deploys from "../../components/Deploys/Deploys";
import { StylePainel } from "./painelDeDeploy-style.js";
import Header from "../../components/Header/Header";

const PainelDeDeploys = () => {
  return (
    <>
      <Header />
      <StylePainel>
        <Deploys />
        <Upload />
      </StylePainel>
    </>
  );
};

export default PainelDeDeploys;
