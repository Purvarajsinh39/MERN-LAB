import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

const Header = () => {

  return(
    <>
<header className="bg-white border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      <div className="flex-shrink-0">
        <a href="#" className="text-xl font-bold text-gray-800">MyLogo</a>
      </div>
      <nav className="hidden md:flex space-x-8">
        <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium">Home</Link>
        <Link to="/about" className="text-gray-600 hover:text-gray-900 font-medium">About</Link>
        <Link to="/service" className="text-gray-600 hover:text-gray-900 font-medium">Services</Link>
        <Link to="/Contact" className="text-gray-600 hover:text-gray-900 font-medium">Contact</Link>
        <Link to="/Form" className="text-gray-600 hover:text-gray-900 font-medium">Form</Link>
        <Link to="/Memouse" className="text-gray-600 hover:text-gray-900 font-medium">Memouse</Link>
        <Link to="/UseRefData" className="text-gray-600 hover:text-gray-900 font-medium">UseRef</Link>
      </nav>
      <div className="hidden md:flex">
        <a href="#" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-75">Get Started</a>
      </div>
    </div>
  </div>
</header>
</>
  );
}


export default Header;