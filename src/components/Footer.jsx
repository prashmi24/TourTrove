import React from "react";
import { FaFacebookSquare, FaTwitterSquare, FaInstagram, FaYoutube, FaPhone, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-transperent-100 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center md:text-left">
                        <img src="" alt="" className="mx-auto mb-4" /> 
                        <p className="text-gray-600">Have questions or need assistance? Our friendly customer support team is here to help. Get in touch with us via phone, email, or live chat, and we'll gladly assist you with any inquiries or concerns you may have. Your satisfaction is our top priority!</p> 
                        <h5 className="text-lg font-bold text-gray-800 mt-4 mb-2">Follow us on:</h5>
                        <div className="flex justify-center md:justify-start">
                            <FaFacebookSquare className="text-black-500 mr-4" size={20}/>
                            <FaTwitterSquare className="text-black-500 mr-4" size={20} />
                            <FaInstagram className="text-black-500 mr-4" size={20} />
                            <FaYoutube className="text-black-500" size={20} />
                        </div>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold text-gray-800 mb-4">Services</h5>
                        <ul className="text-gray-600">
                            <li>Flight Booking</li>
                            <li>Hotel Reservations</li>
                            <li>Car Rentals</li>
                            <li>Travel Insurance</li>
                            <li>Destination Guides and Resources</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold text-gray-800 mb-4">Contact Info</h5>
                        <ul className="text-black-600">
                            <li className="flex items-center mb-2"><FaPhone className="mr-2" /><span>812-125-1251 +666-125-1254</span></li>
                            <li className="flex items-center mb-2"><FaClock className="mr-2" /><span>Mon-Fri 9:00-18:00 (except public holidays)</span></li>
                            <li className="flex items-center"><FaMapMarkerAlt className="mr-2" /><span>Address</span></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold text-gray-800 mb-4">Gallery</h5>
                        <div className="grid grid-cols-3 gap-4">
                            <img src="/assets/aerial-view-koh-hong-island-krabi-thailand.jpg" alt="" />
                            <img src="/assets/architecture-outdoors-blend-historic-mediterranean-city-generative-ai.jpg" alt="" />
                            <img src="/assets/breathtaking-shot-colosseum-amphitheatre-located-rome-italy.jpg" alt="" />
                            <img src="/assets/luca-bravo-O453M2Liufs-unsplash.jpg" alt="" />
                            <img src="/assets/famous-tower-bridge-evening-london-england.jpg" alt="" />
                            <img src="/assets/leh-ladak-flag-faith-mountain.jpg" alt="" />
                            <img src="/assets/set-colored-balloons-flying-ground-cappadocia-turkey.jpg" alt="" />
                          
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <p className="text-gray-600">&#169; 2024 by TourTrove</p>
            </div>
        </footer>
    );
}
