import React from 'react';
import MyAccountNavbar from "./MyAccountNavbar"

function MyAccount() {
  
  return (
    <>
      <div className='flex flex-col items-center justify-center'>
      <MyAccountNavbar/>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h2 className="text-2xl md:text-4xl font-bold mt-8 text-white">Welcome To Playforia</h2>
      </div>
    </>
  );
}

export default MyAccount;
