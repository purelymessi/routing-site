import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Fill } from "react-icons/ri";
import { FaMoon, FaSun } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
        <div className="text-2xl font-bold text-blue-600 dark:text-gray-200">
          re:<span className='text-black dark:text-gray-400'>commerce</span>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="hidden md:block">
            {darkMode ? <FaMoon size={24} fill='#eaeaea' /> : <FaSun size={24} fill='#010101' />}
          </button>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <Link to="/products" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Products</Link>
            <Link to="/about" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">About</Link>
            <Link to="/contacts" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Contacts</Link>
          </div>
          <button onClick={toggleSidebar} className="md:hidden p-2">
            {isSidebarOpen ? <MdCancel className="h-6 w-6 text-gray-800 dark:text-gray-200" /> : <RiMenu3Fill className="h-6 w-6 text-gray-800 dark:text-gray-200" />}
          </button>
          <button onClick={toggleDarkMode} className="md:hidden p-2">
            {darkMode ? <FaMoon size={24} fill='#eaeaea' /> : <FaSun size={24} fill='#010101' />}
          </button>
        </div>
      </nav>

      <div className={`fixed top-0 right-0 bottom-0 bg-gray-800 bg-opacity-75 z-50 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
        <div className="w-64 bg-white dark:bg-gray-800 h-full p-4">
          <button onClick={toggleSidebar} className="p-2">
            <MdCancel className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          </button>
          <div className="mt-8">
            <Link to="/" className="block py-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <Link to="/products" className="block py-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Products</Link>
            <Link to="/about" className="block py-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">About</Link>
            <Link to="/contacts" className="block py-2 text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400">Contacts</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
