import React from "react";

import { Container, UploadMessage } from "./drag-and-drop-style";

import { useDropzone } from "react-dropzone";
import FileList from "../FileList/FileList";

import { MdOutlineFileUpload } from "react-icons/md";
import Loading from "../Loading/Loading";

const DragAndDrop = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/png, image/jpeg",
  });

  React.useEffect(() => {
    // adicionar no LocalStorage
    // setUploadedFiles(...acceptedFiles);
  }, []);

  console.log(acceptedFiles);
  const renderUploadMessage = (isDragAccept, isDragReject) => {
    console.log(`accept: ${isDragAccept} / `, `reject: ${isDragReject}`);

    if (isDragAccept) {
      return (
        <UploadMessage>
          <MdOutlineFileUpload size={76} color="#3454CF" />
          <p>Solte o arquivo aqui.</p>
        </UploadMessage>
      );
    }

    if (isDragReject) {
      return (
        <UploadMessage>
          <MdOutlineFileUpload size={76} color="#3454CF" />

          <p>Arquivo não suportado.</p>
        </UploadMessage>
      );
    }

    return (
      <UploadMessage>
        <MdOutlineFileUpload size={76} color="#3454CF" />

        <p>
          Arraste e solte o arquivo <span>aqui</span>.
        </p>

        <span>Arquivos suportados: PDF, PDF, PDF</span>
      </UploadMessage>
    );
  };
  return (
    <>
      <Container>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div>{renderUploadMessage(isDragAccept, isDragReject)}</div>
        </div>
      </Container>
      <Loading loading={isLoading} />
      {acceptedFiles.length && <FileList files={acceptedFiles} />}
    </>
  );
};

export default DragAndDrop;
