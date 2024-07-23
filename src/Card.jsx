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
      <div classname="max-w-sm card1 overflow-hidden bg-white border hover:cursor-pointer border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a onClick={newTab}>
          <img classname="rounded-t-lg" src={data.url} alt="" />
          <div classname="play-icon">
            <FontAwesomeIcon icon={faPlay} />
          </div>
        </a>
        <div classname="p-5">
          <p id="description">{data.description}</p>
        </div>
      </div>
      <Navbar/>
    </>
  );
}

export default Card;
