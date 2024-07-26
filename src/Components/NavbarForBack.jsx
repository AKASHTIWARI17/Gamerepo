import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useMoveBack } from "../hooks/useMoveBack";
import { Link } from "react-router-dom";

const NavbarForBack = ({ name }) => {
  const moveBacks = useMoveBack();

  return (
    <nav className="bg-[#1f1f1f] text-white fixed w-full  z-20 top-0 py-4 px-2 md:px-12   flex items-center justify-between h-14 shadow-md">
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon
          onClick={moveBacks}
          icon={faArrowLeft}
          className="text-lg sm:text-xl md:text-2xl cursor-pointer"
        />
      </div>
      {/* <div className="text-center hidden md:block font-medium text-sm sm:text-base md:text-lg">
        <h2>{name}</h2>
      </div> */}
      <div className="flex items-center justify-center mt-2 sm:mt-0">
        <img
          src={`${process.env.PUBLIC_URL}/logo-3.jpg`}
          className="h-8 lg:mr-5 sm:h-8 md:h-10 lg:h-10"
          alt="Logo"
        />
      </div>
    </nav>
  );
};

export default NavbarForBack;
