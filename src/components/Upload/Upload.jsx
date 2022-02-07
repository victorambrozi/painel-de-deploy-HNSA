import React from "react";
import DragAndDrop from "../DragAndDrop/DragAndDrop"

import { StyleUpload } from "./upload-style";

const Upload = () => {
  return (
    <StyleUpload>
      {/* https://www.youtube.com/watch?v=G5UZmvkLWSQ  41:28min*/}
      {/* Modificar arquivos aceitos  */}

      <DragAndDrop />
    </StyleUpload>
  );
};

export default Upload;
