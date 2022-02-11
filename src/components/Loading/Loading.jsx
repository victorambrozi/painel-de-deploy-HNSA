import React from "react";
import { MdOutlineStopCircle, MdPlayCircleOutline } from "react-icons/md";

// style
import { Container } from "./loading-style";

const Loading = ({ progress }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const handleClick = () => {
    setIsLoading(!isLoading)
  };

  return (
    <Container>
      <h2>{isLoading ? "Carregando..." : "Pausado"}</h2>
      <div className="loading-info">
        <span className="loading-percentage">25% -</span>
        <div className="loading-timer">
          <p>
            <span id="time">3 </span>
            segundos restantes
          </p>
        </div>
      </div>

      <div className="loading-progress">
        <progress className="progress" value="70" max="100"></progress>
        <button onClick={handleClick}>
          {isLoading ? (
            <MdOutlineStopCircle size={50} color="#4E4E4E" />
          ) : (
            <MdPlayCircleOutline size={50} color="#4E4E4E" />
          )}
        </button>
      </div>
    </Container>
  );
};

export default Loading;
