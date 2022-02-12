import React from "react";
import { StyleContainerFileList, FileInfo, Preview } from "./file-list-style";

// libs
import { MdCheckCircle, MdError } from "react-icons/md";

// assets
import logo from "../../assets/logo.svg";
const FileList = ({ files }) => {
  return (
    <StyleContainerFileList>
      {files?.map((file) => (
        <li key={file.name}>
          <FileInfo>
            <Preview src={logo} />

            <div>
              <strong>{file.name}</strong>
              <span>
                {file.size} 
                {file.success && <button onClick={() => {}}>Excluir</button>}
              </span>
            </div>
          </FileInfo>

          <div>
            {file.success && <MdCheckCircle size={24} color="#78e5d5" />}
            {file.error && <MdError size={24} color="#e57878" />}
          </div>
        </li>
      ))}
      );
    </StyleContainerFileList>
  );
};

export default FileList;
