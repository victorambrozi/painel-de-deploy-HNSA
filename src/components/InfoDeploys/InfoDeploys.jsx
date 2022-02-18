import React from "react";
import { StyleDeploysData } from "./info-deploys-style";

import {
  MdAccessTime,
  MdOutlineCalendarToday,
  MdOutlineCloudUpload,
} from "react-icons/md";

const InfoDeploys = () => {
  const [dataDeploy, setDataDeploy] = React.useState("");
  const [currentDate, setActualDate] = React.useState({
    currentDay: String(new Date().getDay()).padStart(2, "0"),
    currentMonth: new Date().getMonth() + 1,
    currentHour: {
      hour: new Date().getHours(),
      minutes: new Date().getMinutes(),
    },
  });

  React.useEffect(() => {
    const dataInfo = JSON.parse(localStorage.getItem("infoDeploy"));
    setDataDeploy(dataInfo ? dataInfo : {});
  }, []);

  const { date } = dataDeploy;
  const { currentDay, currentMonth, currentHour } = currentDate;

  const deployHour = () => String(date?.hour && date?.hour).padStart(2, '0');
  const deployMinutes = () => {
    const minutes = date?.minutes && date.minutes;
    return `${String(minutes).padStart(2, '0')}`;
  };
  const deployDate = () => {
    const day = date?.day && date.day;
    const month = date?.month && date.month;
    return `${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")}`;
  };

  console.log(!!deployMinutes);

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

        {date ? (
          <div className="last-content">
            <div className="last-content__hour">
              <MdAccessTime size={25} color="#4E4E4E" />
              <span>{`${deployHour()}:${deployMinutes()}`}</span>
            </div>

            <div className="last-content__data">
              <MdOutlineCalendarToday size={25} color="#4E4E4E" />
              <span>{`${deployDate()}`}</span>
            </div>
          </div>
        ) : (
          <span>Não há deploys</span>
        )}
      </div>
    </StyleDeploysData>
  );
};

export default InfoDeploys;
