import React from "react";
import "./Bottombar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Bottombar() {
  const navigate = useNavigate();

    const MyAccount = () => {
      navigate("/MyAccount");
    };
     
   const gototop =()=>{
    window.scrollTo({top:0 , left:0, behavior :"smooth"})
   }
    return (
        <div className="bottombar">
            <div className="icon-container">
                <FontAwesomeIcon icon={faHouse} className="icon" onClick={gototop}/>
                <p className="label">Home</p>
            </div>
          
            <div className="icon-container">
                <FontAwesomeIcon icon={faUser} className="icon" onClick={MyAccount}/>
                <p className="label">My Account</p>
            </div>
        </div>
    );
}

export default Bottombar;
