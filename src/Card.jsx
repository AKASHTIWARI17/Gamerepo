import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function Card({ data }) {
  return (
    <>
      <div class="max-w-sm card1 mb-2 overflow-hidden hover:cursor-pointer  rounded-lg shadow">
        <a>
          <img class=" image rounded h-52 w-60 " src={data.url} alt="" />
        </a>
        <div class=" paragraph p-2 text-white">
          <p>{`${data.description.slice(0, 50)}..`}</p>
        </div>
        <div className="playicon2">
          <FontAwesomeIcon icon={faPlay} />
        </div>
      </div>
    </>
  );
}

export default Card;
