import React from "react";
import { StyleDeploysData } from "./info-deploys-style";

//assets
import iconDeploys from "../../assets/icons/total-deploys.svg";
import iconHourDeploy from "../../assets/icons/hour-deploy.svg";
import iconDataDeploy from "../../assets/icons/data-deploy.svg";
const InfoDeploys = () => {
  return (
    <StyleDeploysData>
      <div className="card-deploy">
        <h2 className="card-deploy__title">Total de Deploys</h2>

        <div className="total-content">
          <img src={iconDeploys} alt="Icon Upload" />
          <span>700</span>
        </div>
      </div>

      <div className="card-deploy">
        <h2 className="card-deploy__title">Último Deploy</h2>

        <div className="last-content">
          <div className="last-content__hour">
            <img src={iconHourDeploy} alt="Icon Hour" />
            <span>18:00</span>
          </div>

          <div className="last-content__data">
            <img src={iconDataDeploy} alt="Icon Data" />
            <span>19/01</span>
          </div>
        </div>
      </div>
    </StyleDeploysData>
  );
};

export default InfoDeploys;
