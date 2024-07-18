import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Card({ data }) {
  const navigate = useNavigate();

  const newTab = () => {
    navigate("/background");
  }

  return (
    <div className="game-card" onClick={newTab}>
      <img src={data.url} alt="Game" className="game-image" />
      <p id="description">{data.description}</p>
      <div className="play-icon">
      <FontAwesomeIcon icon={faPlay}/>
      </div>
      <div className='buttom'>
      <FontAwesomeIcon icon={faHouse} className="icon"/>
       <p className='first'>Home</p>
       <FontAwesomeIcon icon={faUser} className="iconsecond" />
        <p className='paragraph'>My account</p>
      </div>
    </div>
  );
}

export default Card;

