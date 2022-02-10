import React from "react";
import { StyleDeploysData } from "./info-deploys-style";

import { MdAccessTime, MdOutlineCalendarToday, MdOutlineCloudUpload } from "react-icons/md";

const InfoDeploys = () => {
  return (
    <StyleDeploysData>
      <div className="card-deploy">
        <h2 className="card-deploy__title">Total de Deploys</h2>

        <div className="total-content">
        <MdOutlineCloudUpload size={30} color="#4E4E4E" />
          <span>700</span>
        </div>
      </div>

      <div className="card-deploy">
        <h2 className="card-deploy__title">Último Deploy</h2>

        <div className="last-content">
          <div className="last-content__hour">
            <MdAccessTime size={25} color="#4E4E4E" />
            <span>18:00</span>
          </div>

          <div className="last-content__data">
            <MdOutlineCalendarToday size={25} color="#4E4E4E" />
            <span>19/01</span>
          </div>
        </div>
      </div>
    </StyleDeploysData>
  );
};

export default InfoDeploys;
