import React from 'react';
import './Background.css'
function Background() {
  return (
    <>
      <div className="card">
     <div>
      <h2 id='navbar'>Unlimeted mini Golf universe</h2>
     <img src={`${process.env.PUBLIC_URL}/logo-3.jpg`} className='h-10' alt="Logo" id='nav-img' />
     </div>
        <img className='h-96 ' id='box' />
        <p className='text-slate-900' id="description">
           <br></br>
        Dreamtopia is a magic land where fairies, mermaids, witches, and all kinds of creatures live together peacefully. But what threatens this atmosphere is the loss of the Elephant King's crown. Play the Sparkle Mountain Royal Ride game to solve this problem quickly!
        The ruler asked Barbie and Chelsea to give him a hand, as their magical powers are the strongest. You should guide everyone through a rough journey and collect as many gems as possible. Are you in for a ride?
        <br></br>  
        How to Play
        The Elephant King will carry you on his back into a magical experience. Your task is to search the Sparkle Mountain and collect gems. The only controller you need is the Up arrow key, which allows you to jump and avoid obstacles. And there is no need to jump for diamonds, as the king attracts them instantly.
        <br></br> 
        The game has no definite ending; it just keeps testing your attention span and reaction speed. Thus, the first level will train you for 500 meters. This distance will grow gradually, with 100 meters per round. For each level, you have three lives, which can't be regenerated until the run is over.
        <br></br>  
        A special power you should consider is the Rainbow bar. You can charge it by collecting the colorful stars, and when it's full, it will give you a speed boost.
        <br></br>
        Useful Tips
        Watch out for possible hazards, though. The red, spiky crystals will take one life from you. But if you see any warning signs beforehand, remember you will have to jump soon. Another thing that can cause harm is landing too hard on the ground, so be mindful of your steps.
        <br></br>
        When it comes to your final score, the regular gems bring you 50 points, while the stars are worth 100 marks. And another tip – if you see big, round planets, jump. Trust me. It will take you to the right path.
        <br></br>
        Become the savior of Dreamtopia and help the Chelsea and Barbie restore the Elephant King's precious crown!`,
        </p>
      </div>
    </>
  );
}

export default Background;



