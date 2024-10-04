import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const showDropdown = () => {
    setDropdown(!dropdown);
  };
  const closeDropdown = () => {
    setDropdown(false);
  };
  return (
    <nav className="header flex items-center bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div>
          <div className=" w-[80px] h-[80px] ">
            <img
              src="/assets/logo.png"
              alt="Travel website logo"
              className="w-full h-full object-cover rounded-full"
              loading="lazy"
            />
          </div>
        </div>
        <ul className="hidden md:flex space-x-6 text-gray-800">
          <li>
            <a href="#" className="hover:text-blue-600 focus:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 focus:text-blue-600">
              About Us
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-blue-600 focus:text-blue-600">
              Destinations
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 focus:text-blue-600">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 focus:text-blue-600">
              Contact
            </a>
          </li>
          <li>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mr-2.5">
              Explore
            </button>
          </li>
        </ul>
        {/* mobile menu toggle*/}
        <div className="md:hidden">
          <button
            onClick={showDropdown}
            aria-label={dropdown ? "Close Menu" : "Open Menu"}
            className="text-gray-800 cursor-pointer hover:text-blue-600 focus:outline-none"
          >
            {dropdown ? (
              <MdClose className="text-3xl" />
            ) : (
              <HiMenuAlt3 className="text-3xl" />
            )}
          </button>
        </div>

        {/* mobile dropdown menu */}
        {dropdown && (
          <div className="md:hidden absolute top-[100px] left-0 right-0 bg-white shadow-lg py-4 px-6">
            <ul className="text-gray-800 space-y-4">
              <li>
                <a
                  href="#"
                  onClick={closeDropdown}
                  className="block hover:text-blue-600 focus:text-blue-600"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={closeDropdown}
                  className="block hover:text-blue-600 focus:text-blue-600"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={closeDropdown}
                  className="block hover:text-blue-600 focus:text-blue-600"
                >
                  Destination
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={closeDropdown}
                  className="block hover:text-blue-600 focus:text-blue-600"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={closeDropdown}
                  className="block hover:text-blue-600 focus:text-blue-600"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
