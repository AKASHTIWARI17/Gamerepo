import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';
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
     </div>
     <Navbar/>
     </>
  );
}

export default Card;

