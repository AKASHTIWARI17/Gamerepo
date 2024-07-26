import { Link } from "react-router-dom";

const MyAccountNavbar = () => {
  return (
    <>
      <nav className="bg-black fixed w-full top-0  px-[80px] justify-between  md:h-20 flex items-center">
        <div className=" header text-4xl  font-sans font-bold flex items-center  justify-center">
          <Link to="/">
            {" "}
            <img
              src={`${process.env.PUBLIC_URL}/logo-3.jpg`}
              className=" h-12 md:h-[40px] w-[210px] mt-1"
              alt="Logo"
            />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default MyAccountNavbar;
