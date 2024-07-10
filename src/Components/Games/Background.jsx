import React from 'react';
import "./Background.css";

function Background() {
  const data = {
    url: "./components/Background.png"  
  };

  return (
    <div className='bg-white text-black' id='container'>
      <h1 className='max-w-screen-xl bg-white text-slate-900 text-center h-10 py-2'>Unlimited mini golf universe</h1>
      <div id='box'>
        <img src={data.url} alt="Game" className="game-image" />
      </div>
      <div>
        <h4>
          Dreamtopia is a magic land where fairies, mermaids, witches, and all kinds of creatures live together peacefully. 
          But what threatens this atmosphere is the loss of the Elephant King's crown. Play the Sparkle Mountain Royal Ride 
          game to solve this problem quickly!<br />
          The ruler asked Barbie and Chelsea to give him a hand, as their magical powers are the strongest. You should guide 
          everyone through a rough journey and collect as many gems as possible. Are you in for a ride?
        </h4>
      </div>
    </div>
  );
}

export default Background;
