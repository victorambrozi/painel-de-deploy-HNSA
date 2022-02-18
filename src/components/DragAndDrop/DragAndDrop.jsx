import React from "react";

import { useDropzone } from "react-dropzone";
import filesize from "filesize";
import FileList from "../FileList/FileList";
import Loading from "../Loading/Loading";

// assets
import { MdOutlineFileUpload } from "react-icons/md";

//style
import { Container, UploadMessage } from "./drag-and-drop-style";

const DragAndDrop = () => {
  const [dataFile, setDataFile] = React.useState();
  const [infoDeploy, setInfoDeploy] = React.useState([]);

  const reader = new FileReader();
  
  const onDrop = React.useCallback((acceptedFiles) => {
    return setDataFile(() =>
    acceptedFiles.map((file) => {
      const date = new Date();

      const dataDeploy = {
        count: acceptedFiles.length,
          date: {
            day: String(date.getDate()).padStart(2, '0'),
            month: date.getMonth() + 1,
            hour: date.getHours(),
            minutes: date.getMinutes(), 
          },
        };
        setInfoDeploy(dataDeploy);
        
        // salvar dados do localStorage
        localStorage.setItem('infoDeploy', JSON.stringify(dataDeploy));

        return {
          success: true,
          error: false,
          progress: 0,
          size: filesize(file.size),
          name: file.name,
          file,
        };
      })
    );
  }, []);

  console.log(infoDeploy)
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/png, image/jpeg",
    onDrop,
  });

  const renderUploadMessage = (isDragAccept, isDragReject) => {
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
      {/* {!dataFile?.success && !dataFile?.error && <Loading loading={dataFile} /> } */}
      {!!acceptedFiles.length && <FileList files={dataFile} />}
    </>
  );
};


export default DragAndDrop;
