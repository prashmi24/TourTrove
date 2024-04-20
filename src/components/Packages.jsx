import React from "react";
import { HiStar } from "react-icons/hi";
import { FaBus } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { PiBowlFoodFill } from "react-icons/pi";
import { IoPartlySunnySharp } from "react-icons/io5";
import { TbShip } from "react-icons/tb";
import { GiMountains } from "react-icons/gi";
import { GiCampingTent } from "react-icons/gi";
import { TbBeach } from "react-icons/tb";

export default function Packages() {
    const Card = ({ image, text, destination, review, price }) => {
        return (
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={image} alt="" className="w-full h-64 object-cover object-center" />
                <div className="p-4">
                    <h5 className="text-xl font-semibold text-gray-800">{text}</h5>
                    <div className="flex items-center mt-2 text-gray-600">
                        <p>{destination}</p>
                    </div>
                    <div className="flex items-center mt-2 text-gray-600">
                        <HiStar className="text-yellow-500 mr-1" />
                        <p>{review}</p>
                        <div className="ml-4 font-semibold text-lg text-gray-800">{price}</div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-gray-50">
            <div className="container mx-auto py-12 ">
                <div className="text-center">
                    <p className="text-2xl font-semibold text-gray-800">Journey to Paradise</p>
                    <h2 className="text-4xl font-bold text-gray-900">Our Best-Selling Destinations Await</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 ml-4 mr-4 cursor-pointer">
                    <Card image="/assets/yu-kato-cddaZDt6uRw-unsplash.jpg" text="Asian Explorer Expedition" destination="Tokyo, Kyoto, Bangkok" review="4.9/5" price="$4,500 per person (12 days, cultural tour)"/>
                    <Card image="/assets/aleksandar-popovski-H9TP5uAQyyY-unsplash.jpg" text="Adventure in the Andes" destination="Peru (Machu Picchu)" review="4.7/5" price=" $2,000 per person (5 days, guided trek)"/>
                    <Card image="/assets/florian-wehde-WBGjg0DsO_g-unsplash.jpg" text="European Grand Tour" destination="Paris, Rome, Barcelona" review="4.8/5" price="$5,000 per person (10 days, guided tour)"/>
                    <Card image="/assets/rayyu-maldives-xPsFXsbXJRg-unsplash.jpg" text="Tropical Paradise Escape" destination="Maldives" review="4.9/5" price=" $3,500 per person (7 days, all-inclusive)"/>
                    
                </div>
            </div>
            <section className="bg-gray-200 py-12">
                <div className="container mx-auto">
                    <div className="text-center">
                        <p className="text-2xl font-semibold text-gray-800">Browse by exclusive tour packages</p>
                        <h2 className="text-4xl font-bold text-gray-900">Explore Our Popular Travel Packages</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                        <div className="flex items-center justify-center bg-white shadow-lg rounded-lg p-6 cursor-pointer">
                        <FaGlobe className="w-12 h-12 text-blue-500" />
                            <p className="text-lg font-semibold text-gray-800 ml-4">Different Countries</p>
                        </div>
                        <div className="flex items-center justify-center bg-white shadow-lg rounded-lg p-6 cursor-pointer">
                        <FaBus className="w-12 h-12 text-blue-500"/> 
                            <p className="text-lg font-semibold text-gray-800 ml-4">Bus Tours</p>
                        </div>
                        <div className="flex items-center justify-center bg-white shadow-lg rounded-lg p-6 cursor-pointer">
                            <PiBowlFoodFill className="w-12 h-12 text-blue-500" />
                            <p className="text-lg font-semibold text-gray-800 ml-4">Food Tours</p>
                        </div>
                        <div className="flex items-center justify-center bg-white shadow-lg rounded-lg p-6 cursor-pointer">
                            <IoPartlySunnySharp className="w-12 h-12 text-blue-500" />
                            <p className="text-lg font-semibold text-gray-800 ml-4">Summer Rest</p>
                        </div>
                        <div className="flex items-center justify-center bg-white shadow-lg rounded-lg p-6 cursor-pointer">
                            <TbShip className="w-12 h-12 text-blue-500" />
                            <p className="text-lg font-semibold text-gray-800 ml-4">Ship Cruises</p>
                        </div>
                        <div className="flex items-center justify-center bg-white shadow-lg rounded-lg p-6 cursor-pointer">
                            <GiMountains className="w-12 h-12 text-blue-500" />
                            <p className="text-lg font-semibold text-gray-800 ml-4">Mountain Tours</p>
                        </div>
                        <div className="flex items-center justify-center bg-white shadow-lg rounded-lg p-6 cursor-pointer">
                            <GiCampingTent className="w-12 h-12 text-blue-500" />
                            <p className="text-lg font-semibold text-gray-800 ml-4">Camping Tours</p>
                        </div>
                        <div className="flex items-center justify-center bg-white shadow-lg rounded-lg p-6 cursor-pointer">
                            <TbBeach className="w-12 h-12 text-blue-500" />
                            <p className="text-lg font-semibold text-gray-800 ml-4">Beaches</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
