import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";

const NavbarForBack = () => {
  // const navigate = useNavigate();
  // const Card = () => {
  //   navigate("/Card");
  // };

  return (
    <nav className="bg-white fixed w-full z-20  top-0 py-4 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 flex items-center justify-between h-14  sm:mr-5  sm:h-10 md:h-12 lg:h-14 shadow-md">
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faArrowLeft} className="text-lg sm:text-xl md:text-2xl" />
      </div>
      <div className="text-center font-medium text-sm sm:text-base md:text-lg">
        <h2>Ultimate Mini Golf Universe</h2>
      </div>
      <div className="flex items-center justify-center">
        <img
          src={`${process.env.PUBLIC_URL}/logo-3.jpg`}
          className="h-8 mt-2  sm:h-8 md:h-10 lg:h-10"
          alt="Logo"
        />
      </div>
    </nav>
  );
};

export default NavbarForBack;
