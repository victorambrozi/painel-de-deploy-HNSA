import React from "react";
import Upload from "../../components/Upload/Upload";
import InfoDeploys from "../../components/InfoDeploys/InfoDeploys";
import { StylePainel, Container } from "./painelDeDeploy-style.js";
import Header from "../../components/Header/Header";
import FileList from "../../components/FileList/FileList";

const PainelDeDeploys = () => {
  return (
      <Container>
        <Header />
        <StylePainel>
          <InfoDeploys />
          <Upload />
          <FileList />
        </StylePainel>
      </Container>
  );
};

export default PainelDeDeploys;
