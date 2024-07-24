import React from 'react';
import Navbar from '../../Navbar';

function MyAccount() {
  
  return (
    <>
      <div className='flex flex-col items-center justify-center'>
      <Navbar/>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h2 className="text-2xl md:text-4xl font-bold mt-8">Welcome To Playforia</h2>
      </div>
    </>
  );
}

export default MyAccount;
