import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Components/Games/navbar/Navbar';


function Card({ data }) {
  const navigate = useNavigate();

  const newTab = () => {
    navigate("/background");
  }

  return (
    <>
    <div className="game-card" onClick={newTab}>
      <img src={data.url} alt="Game" className="game-image" />
      <p id="description">{data.description}</p>
      <div className="play-icon">
      <FontAwesomeIcon icon={faPlay}/>
      </div>
     </div>
     <Navbar/>
     </>
  );
}

export default Card;

