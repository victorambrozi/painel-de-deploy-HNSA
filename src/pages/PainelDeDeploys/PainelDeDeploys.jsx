import React from "react";
// components
import InfoDeploys from "../../components/InfoDeploys/InfoDeploys";
import Header from "../../components/Header/Header";
import FileList from "../../components/FileList/FileList";
import DragAndDrop from "../../components/DragAndDrop/DragAndDrop";

// assets
import { StylePainel, Container } from "./painelDeDeploy-style.js";

const PainelDeDeploys = () => {
  return (
      <Container>
        <Header />
        <StylePainel>
          <InfoDeploys />
          <DragAndDrop />
          <FileList />
        </StylePainel>
      </Container>
  );
};

export default PainelDeDeploys;
