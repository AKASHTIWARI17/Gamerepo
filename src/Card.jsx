import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Components/Games/navbar/Navbar";

function Card({ data }) {
  const navigate = useNavigate();

  const newTab = () => {
    navigate("/background");
  };

  return (
    <>
      {/* <div className="game-card" onClick={newTab}>
        <img src={data.url} alt="Game" className="game-image" />
        <p id="description">{data.description}</p>
        <div className="play-icon">
          <FontAwesomeIcon icon={faPlay} />
        </div>
      </div> */}

      {/* <div class="card1 bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img src={data.url} alt="Game" className="game-image" />
        <p id="description">{data.description}</p>
      </div> */}
      <div
        onClick={newTab}
        class="max-w-sm card1 mb-2 overflow-hidden   hover:cursor-pointer  rounded-lg shadow"
      >
        <a>
          <img class="rounded" src={data.url} alt="" />
        </a>
        <div class="p-2 text-white">
          <p>{`${data.description.slice(0, 66)}..`}</p>
        </div>
        <div className="playicon2">
          <FontAwesomeIcon icon={faPlay} />
        </div>
      </div>

      <Navbar />
    </>
  );
}

export default Card;
