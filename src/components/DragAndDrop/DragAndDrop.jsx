import React from "react";

import { Container, UploadMessage } from "./drag-and-drop-style";

import { useDropzone } from "react-dropzone";
import FileList from "../FileList/FileList";

import arrowUpload from "../../assets/icons/arrow-upload.svg";

const DragAndDrop = () => {
  const { acceptedFiles, getRootProps, getInputProps, isDragAccept } =
    useDropzone();

  const renderUploadMessage = (isDragAccept) => {
    if (!isDragAccept) {
      return (
        <UploadMessage>
          <img src={arrowUpload} alt="File Upload" />

          <p>
            Arraste e solte o arquivo <span>aqui</span>.
          </p>

          <span>Arquivos suportados: PDF, PDF, PDF</span>
        </UploadMessage>
      );
    }
  };
  return (
    <>
      <Container>
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <div>{renderUploadMessage(isDragAccept)}</div>
        </div>
      </Container>
      {!acceptedFiles.length !== 0 && <FileList files={acceptedFiles} />}
    </>
  );
};

export default DragAndDrop;
