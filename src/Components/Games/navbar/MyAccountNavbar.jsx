const MyAccountNavbar = () => {
    return (
      <>
        <nav className="bg-black fixed w-full top-0  px-[80px] justify-between  md:h-20 flex items-center">
          <div className=" header text-4xl  font-sans font-bold flex items-center  justify-center">
            <img
              src={`${process.env.PUBLIC_URL}/logo-3.jpg`}
              className=" h-16 md:h-[40px] w-[220px] mr-[10px]"
              alt="Logo"
            />
          </div>
        </nav>
      </>
    );
  };
  
  export default MyAccountNavbar;