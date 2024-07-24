import React from "react";
import "./Card.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Components/Games/navbar/Navbar";

function Card({ data, oncardClick }) {
  return (
    <>
      <div className="flex justify-center mt-24">
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4 mx-2 md:mx-5">
          {data.map((data, index) => (
            <Link to="/background" key={index}>
              {" "}
              <div
                onClick={() => oncardClick(data.id)}
                class="max-w-sm card1 mb-2 overflow-hidden   hover:cursor-pointer  rounded-lg shadow"
              >
                <div>
                  <img class="rounded" src={data.url} alt="" />
                </div>
                <div class="p-2 text-white">
                  <p>{`${data.description.slice(0, 66)}..`}</p>
                </div>
                <div className="playicon2">
                  <FontAwesomeIcon icon={faPlay} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Navbar />
    </>
  );
}

export default Card;
