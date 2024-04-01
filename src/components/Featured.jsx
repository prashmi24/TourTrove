import React, { useState } from "react";
import { FaHotel, FaPlaneDeparture, FaCar, FaShip } from "react-icons/fa";

export default function Featured() {
    const [active, setActive] = useState('Hotel');

    const Card = ({ packages, image, country, amount, row }) => {
        const [divColor, setDivColor] = useState({ bgColor: "", textColor: "" });

        return (
            <div className={`rounded-lg shadow-lg p-4 grid grid-rows-${row} transition-colors duration-300 ease-in-out transform hover:scale-105`} 
                onMouseEnter={() => setDivColor({ bgColor: '#6347F9', textColor: 'white' })} 
                onMouseLeave={() => setDivColor({ bgColor: 'white', textColor: '#6347F9' })}>
                <div className={`bg-${divColor.bgColor} text-${divColor.textColor} p-2 rounded-md`}>
                    {packages} Packages
                </div>
                <img src={image} alt="" className="mt-2" />
                <div>
                    <h2 className="text-lg font-semibold mt-2">{country}</h2>
                    <p className="text-gray-600">Starting from ₹{amount}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <p className="text-xl font-semibold">Travel</p>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
                <button onClick={() => setActive("Hotel")} className={`rounded-full py-2 px-4 ${active === "Hotel" ? "bg-#6AD4DD text-white" : "bg-#F8F6E3 text-gray-800"}`}>
                    <FaHotel className="inline-block mr-2" />
                    Hotel
                </button>
                <button onClick={() => setActive('Flight')} className={`rounded-full py-2 px-4 ${active === "Flight" ? "bg-#6AD4DD text-white" : "bg-#F8F6E3 text-gray-800"}`}>
                    <FaPlaneDeparture className="inline-block mr-2" />
                    Flight
                </button>
                <button onClick={() => setActive('Car')} className={`rounded-full py-2 px-4 ${active === "Car" ? "bg-#6AD4DD text-white" : "bg-#F8F6E3 text-gray-800"}`}>
                    <FaCar className="inline-block mr-2" />
                    Car
                </button>
                <button onClick={() => setActive('Ship')} className={`rounded-full py-2 px-4 ${active === "Ship" ? "bg-#6AD4DD text-white" : "bg-#F8F6E3 text-gray-800"}`}>
                    <FaShip className="inline-block mr-2" />
                    Ship
                </button>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
                <span className="flex flex-wrap space-y-2 md:space-y-0 md:space-x-2">
                    <p className="text-sm text-gray-700">Your Destination</p>
                    <input type="text" placeholder="Thailand" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-primary" />
                </span>
                <span className="flex flex-wrap space-y-2 md:space-y-0 md:space-x-2">
                    <p className="text-sm text-gray-700">Check In</p>
                    <input type="date" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-primary" />
                </span>
                <span className="flex flex-wrap space-y-2 md:space-y-0 md:space-x-2">
                    <p className="text-sm text-gray-700">Check Out</p>
                    <input type="date" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-primary" />
                </span>
                <span className="flex flex-wrap space-y-2 md:space-y-0 md:space-x-2">
                    <p className="text-sm text-gray-700">Adult</p>
                    <input type="text" placeholder="2" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-primary" />
                </span>
                <span className="flex flex-wrap space-y-2 md:space-y-0 md:space-x-2">
                    <p className="text-sm text-gray-700">Child</p>
                    <input type="text" placeholder="2" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-primary" />
                </span>
                <button className="bg-#6AD4DD text-white rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-primary">Book Now</button>
            </div>
            <div>
                <span>
                    <p className="text-xl font-semibold">Featured Tours</p>
                    <h2 className="text-2xl font-bold mb-4">Beautiful Places Around the World</h2>
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card amount="1200" country="Paris" image="" packages="3" row="2" />
                    <Card amount="1200" country="Paris" image="" packages="3" row="2" />
                    <Card amount="1200" country="Paris" image="" packages="3" row="2" />
                    <Card amount="1200" country="Paris" image="" packages="3" row="2" />
                    <Card amount="1200" country="Paris" image="" packages="3" row="2" />
                </div>
            </div>
        </div>
    );
}
