import React from "react";
import Dropzone from "react-dropzone";

// style
import { StyleUpload, DropContainer, UploadMessage } from "./upload-style.js";

// assets
import iconUpload from "../../assets/icons/upload.svg";

const Upload = () => {
  const renderDragMessage = (isDragActive, isDragReject) => {
    // se eu não tiver arquivos selecionados (padrão)
    if (!isDragActive) {
      return (
      <UploadMessage>
        <div className="icon-upload">
          <img src={iconUpload} alt="Icon Upload" />
        </div>

        <p>Arraste e solte o arquivo <span>aqui</span>.</p>
        <span>Arquivos suportados: PDF, PDF, PDF</span>
      </UploadMessage>
      );
    }

    // se o arquivo não for suportado
    if(isDragReject) {
      <UploadMessage type="error">
        <p>Arquivo não suportado</p>
      </UploadMessage>
    }

    // se eu tiver com o arquivo selecionado(e for aceito pelo dropzone -> isDragReject === false)
    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>
  };
  return (
    <StyleUpload>
      {/* https://www.youtube.com/watch?v=G5UZmvkLWSQ */}
      {/* Modificar arquivos aceitos  */}
      <Dropzone accept="file/*" onDropAccepted={() => {}}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
            className="dropzone"
          >
            <input {...getInputProps()} />
            {}
          </DropContainer>
        )}
      </Dropzone>
    </StyleUpload>
  );
};

export default Upload;
