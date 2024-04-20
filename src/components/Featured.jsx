import React, { useState } from "react";
import { FaHotel, FaPlaneDeparture, FaCar, FaShip } from "react-icons/fa";

export default function Featured() {
    const [active, setActive] = useState('Hotel');

    const Card = ({ packages, image, country, amount, row }) => {
        const [divColor, setDivColor] = useState({ bgColor: "", textColor: "" });

        return (
            <div className={`rounded-lg shadow-lg p-4 grid grid-rows-${row} transition-colors duration-300 ease-in-out transform hover:scale-105`} 
                onMouseEnter={() => setDivColor({ bgColor: 'blue-500', textColor: 'white' })} 
                onMouseLeave={() => setDivColor({ bgColor: 'white', textColor: 'blue-500' })}>
                <div className={`bg-${divColor.bgColor} text-${divColor.textColor} p-2 rounded-md`}>
                    {packages} Packages
                </div>
                <img src={image} alt="" className="w-full h-64 object-cover object-center" />
                <div> 
                    <h2 className="text-lg font-semibold mt-2">{country}</h2>
                    <p className="text-gray-600">Starting from ${amount}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 ml-4">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
                <button onClick={() => setActive("Hotel")} className={`rounded-full py-2 px-4 ${active === "Hotel" ? "bg-blue-500 text-white" : "bg-#F8F6E3 text-gray-800"}`}>
                    <FaHotel className="inline-block mr-2" />
                    Hotel
                </button>
                <button onClick={() => setActive('Flight')} className={`rounded-full py-2 px-4 ${active === "Flight" ? "bg-blue-500 text-white" : "bg-#F8F6E3 text-gray-800"}`}>
                    <FaPlaneDeparture className="inline-block mr-2" />
                    Flight
                </button>
                <button onClick={() => setActive('Car')} className={`rounded-full py-2 px-4 ${active === "Car" ? "bg-blue-500 text-white" : "bg-#F8F6E3 text-gray-800"}`}>
                    <FaCar className="inline-block mr-2" />
                    Car
                </button>
                <button onClick={() => setActive('Ship')} className={`rounded-full py-2 px-4 ${active === "Ship" ? "bg-blue-500 text-white" : "bg-#F8F6E3 text-gray-800"}`}>
                    <FaShip className="inline-block mr-2" />
                    Ship
                </button>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
                <span className="flex flex-wrap space-y-2 md:space-y-0 md:space-x-2   justify-center items-center">
                    <p className="text-base text-gray-700">Your Destination</p>
                    <input type="text" placeholder="Greece" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-primary" />
                </span>
                <span className="flex flex-wrap space-y-2 md:space-y-0 md:space-x-2  justify-center items-center">
                    <p className="text-base text-gray-700">Check In</p>
                    <input type="date" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-primary" />
                </span>
                <span className="flex flex-wrap space-y-2 md:space-y-0 md:space-x-2  justify-center items-center">
                    <p className="text-base text-gray-700">Check Out</p>
                    <input type="date" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-primary" />
                </span>
                <span className="flex flex-wrap space-y-2 md:space-y-0 md:space-x-2  justify-center items-center">
                    <p className="text-base text-gray-700">Adult</p>
                    <input type="text" placeholder="2" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-primary" />
                </span>
                <span className="flex flex-wrap space-y-2 md:space-y-0 md:space-x-2  justify-center items-center">
                    <p className="text-base text-gray-700">Child</p>
                    <input type="text" placeholder="2" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-primary" />
                </span>
                <button className="bg-blue-500 text-white rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-primary hover:bg-blue-600">Book Now</button>
            </div>
            <div>
                <span className="text-center">
                    <p className="text-2xl font-semibold text-gray-800">Special Offers</p>
                    <h2 className="text-4xl font-bold text-gray-900">Don't miss out on our exclusive deals and discounts!</h2>
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 cursor-pointer">
                    <Card amount="2400" country="Italy" image="/assets/damiano-baschiera-hFXZ5cNfkOk-unsplash.jpg" packages="2"/>
                    <Card amount="980" country="Mexico" image="/assets/pedro-lastra-8gJqRaAaKx4-unsplash.jpg" packages="4" />
                    <Card amount="1200" country="France" image="/assets/anthony-delanoix-Q0-fOL2nqZc-unsplash.jpg" packages="3"/>
                    <Card amount="500" country="Turkey" image="/assets/engin-yapici-WA1u0scVLZU-unsplash.jpg" packages="3"/>
                    <Card amount="800" country="India" image="/assets/kirti-kalla-JRhvllDBhzs-unsplash.jpg" packages="6" />
                    <Card amount="1999" country="Spain" image="/assets/janette-speyer-R1_TwF_OThQ-unsplash.jpg" packages="5"/>
                </div>
            </div>
        </div>
    );
}
