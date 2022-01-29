import React from "react";
import Upload from "../../components/Upload/Upload";
import InfoDeploys from "../../components/InfoDeploys/InfoDeploys";
import { StylePainel } from "./painelDeDeploy-style.js";
import Header from "../../components/Header/Header";
import FileList from "../../components/FileList/FileList";

const PainelDeDeploys = () => {
  return (
    <>
      <Header />
      <StylePainel>
        <InfoDeploys />
        <Upload />
        <FileList />
      </StylePainel>
    </>
  );
};

export default PainelDeDeploys;
