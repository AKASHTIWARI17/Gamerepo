const Navbar = () => {
  return (
    <>
      <nav className="bg-[#1f1f1f]  fixed w-full z-20 top-0 py-[15px] px-[80px] justify-between  h-20 flex items-center">
        <div className=" header text-4xl  font-sans font-bold flex items-center  justify-center">
          <img
            src={`${process.env.PUBLIC_URL}/logo-3.jpg`}
            className=" h-[40px] w-[210px] mr-[10px]"
            alt="Logo"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
