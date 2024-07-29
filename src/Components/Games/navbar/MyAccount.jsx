import React from "react";
import MyAccountNavbar from "./MyAccountNavbar";
import Bottombar from "./bottombar";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";

function MyAccount() {
  const navigate = useNavigate();

  const MyAccount = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <MyAccountNavbar />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h2 className="text-2xl md:text-4xl items-center font-bold mt-8 text-white">
          Welcome To Playforia
        </h2>
      </div>
      <div>
        <div className="bottombar">
          <div className="icon-container">
            <FontAwesomeIcon
              icon={faHouse}
              className="icon"
              onClick={MyAccount}
            />
            <p className="label">Home</p>
          </div>

          <div className="icon-container">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <p className="label">My Account</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAccount;
