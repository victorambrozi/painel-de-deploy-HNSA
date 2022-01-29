import React from "react";
import { StyleContainerFileList, FileInfo, Preview } from "./file-list-style";

// libs
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";

const FileList = () => {
  const percentage = 66;

  return (
    <StyleContainerFileList>
      <li>
        <FileInfo>
          <Preview src="https://github.com/victorambrozi.png" />

          <div>
            <strong>nome do arquivo</strong>
            <span>
              64Kb <button onClick={() => {}}>Excluir</button>{" "}
            </span>
          </div>
        </FileInfo>

        <div>
          <CircularProgressbarWithChildren
            styles={{
              root: { width: 24 },
              path: {
                stroke: "#3454CF",
              },
            }}
            strokeWidth={10}
            value={percentage}
          />

          <a href="#" target="_blank" rel="noopener noreferrer">
            <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
          </a>

          <MdCheckCircle size={24} color="#78e5d5" />
          <MdError size={24} color="#e57878" />
        </div>
      </li>
    </StyleContainerFileList>
  );
};

export default FileList;
