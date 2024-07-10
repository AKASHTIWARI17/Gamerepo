import React, { useState } from 'react';
import './Card.css';
import Background from './Components/Games/Background';
// import { Link } from 'react-router-dom';

function Card({ data }) {
  const [showModel, setShowModel] = useState(false);

  const handleClick = () => {
    setShowModel(true);
  };

  return (
    <div className="game-card">
      {/* <Link to="/Background"> */}
        <img onClick={handleClick} src={data.url} alt="Game" className="game-image" />
      {/* </Link> */}
      {showModel && <Background />}
      <p id="description">{data.description}</p>
    </div>
  );
}

export default Card;
