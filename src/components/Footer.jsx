import React from "react";
import { FaFacebookSquare, FaTwitterSquare, FaInstagram, FaYoutube, FaPhone, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center md:text-left">
                        <img src="" alt="" className="mx-auto mb-4" /> 
                        <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum fugiat quidem laudantium magnam iusto explicabo nostrum, neque maxime dolorem beatae!</p> 
                        <h5 className="text-lg font-bold text-gray-800 mt-4 mb-2">Follow us on:</h5>
                        <div className="flex justify-center md:justify-start">
                            <FaFacebookSquare className="text-blue-500 mr-4" size={20}/>
                            <FaTwitterSquare className="text-blue-500 mr-4" size={20} />
                            <FaInstagram className="text-blue-500 mr-4" size={20} />
                            <FaYoutube className="text-blue-500" size={20} />
                        </div>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold text-gray-800 mb-4">Tour Types</h5>
                        <ul className="text-gray-600">
                            <li>Adventure Tours</li>
                            <li>Group Tours</li>
                            <li>Seasonal Tours</li>
                            <li>Relaxation Tours</li>
                            <li>Family Friendly Tours</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold text-gray-800 mb-4">Contact Info</h5>
                        <ul className="text-gray-600">
                            <li className="flex items-center mb-2"><FaPhone className="mr-2" /><span>812-125-1251 +666-125-1254</span></li>
                            <li className="flex items-center mb-2"><FaClock className="mr-2" /><span>Mon-Fri 9:00-18:00 (except public holidays)</span></li>
                            <li className="flex items-center"><FaMapMarkerAlt className="mr-2" /><span>Address</span></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold text-gray-800 mb-4">Gallery</h5>
                        <div className="grid grid-cols-3 gap-4">
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <p className="text-gray-600">#169 Copyright 2024. All rights Reserved by ghoomoYaaro</p>
            </div>
        </footer>
    );
}
