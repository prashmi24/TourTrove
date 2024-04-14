import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    const showDropdown = () => {
        setDropdown(!dropdown);
    };
    return (
        <nav className="bg-transpernt py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <div >
                        <img src="/assets/logo.png" alt="logo" className="logo" />
                    </div>
                </div>
                <ul className="hidden md:flex space-x-6 text-gray-800">
                    <li><a href="#" className="hover:text-blue-600">Home</a></li>
                    <li><a href="#" className="hover:text-blue-600">Tours</a></li>
                    <li><a href="#" className="hover:text-blue-600">Hotel</a></li>
                    <li><a href="#" className="hover:text-blue-600">Pages</a></li>
                    <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                    <li><a href="#" className="hover:text-blue-600">Contact</a></li>
                    <li><button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mr-2.5">Get Exploration</button></li>
                </ul>
                <div className="md:hidden">
                    {dropdown ? (
                        <div onClick={showDropdown} className="text-gray-800 cursor-pointer hover:text-blue-600">
                            <MdClose className="text-3xl" />
                        </div>
                    ) : (
                        <div onClick={showDropdown} className="text-gray-800 cursor-pointer hover:text-blue-600">
                            <HiMenuAlt3 className="text-3xl" />
                        </div>
                    )}
                </div>
                {dropdown && (
                    <div className="md:hidden">
                        <ul className="text-gray-800">
                            <li><a href="#" className="hover:text-blue-600">Home</a></li>
                            <li><a href="#" className="hover:text-blue-600">Tours</a></li>
                            <li><a href="#" className="hover:text-blue-600">Hotel</a></li>
                            <li><a href="#" className="hover:text-blue-600">Pages</a></li>
                            <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
