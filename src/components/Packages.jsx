import React from "react";
import { HiStar } from "react-icons/hi";
import { FaBus, FaGlobe } from "react-icons/fa6";
import { PiBowlFoodFill } from "react-icons/pi";
import { IoPartlySunnySharp } from "react-icons/io5";
import { TbShip, TbBeach } from "react-icons/tb";
import { GiMountains, GiCampingTent } from "react-icons/gi";

export default function Packages() {
  const Card = ({ image, text, destination, review, price }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        <img
          src={image}
          alt={`${text} in ${destination}`}
          className="w-full h-64 object-cover object-center"
          loading="lazy"
        />
        <div className="p-4">
          <h5 className="text-xl font-semibold text-gray-800">{text}</h5>
          <div className="flex items-center mt-2 text-gray-600">
            <p>{destination}</p>
          </div>
          <div className="flex items-center mt-2 text-gray-600">
            <HiStar className="text-yellow-500 mr-1" />
            <p>{review}</p>
            <div className="ml-4 font-semibold text-lg text-gray-800">
              {price}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const tourPackages = [
    {
      image: "/assets/yu-kato-cddaZDt6uRw-unsplash.jpg",
      text: "Asian Explorer Expedition",
      destination: "Tokyo, Kyoto, Bangkok",
      review: "4.9/5",
      price: "$4,500 per person (12 days, cultural tour)",
    },
    {
      image: "/assets/aleksandar-popovski-H9TP5uAQyyY-unsplash.jpg",
      text: "Adventure in the Andes",
      destination: "Peru (Machu Picchu)",
      review: "4.7/5",
      price: "$2,000 per person (5 days, guided trek)",
    },
    {
      image: "/assets/florian-wehde-WBGjg0DsO_g-unsplash.jpg",
      text: "European Grand Tour",
      destination: "Paris, Rome, Barcelona",
      review: "4.8/5",
      price: "$5,000 per person (10 days, guided tour)",
    },
    {
      image: "/assets/rayyu-maldives-xPsFXsbXJRg-unsplash.jpg",
      text: "Tropical Paradise Escape",
      destination: "Maldives",
      review: "4.9/5",
      price: "$3,500 per person (7 days, all-inclusive)",
    },
  ];

  const icons = [
    { icon: FaGlobe, label: "Different Countries" },
    { icon: FaBus, label: "Bus Tours" },
    { icon: PiBowlFoodFill, label: "Food Tours" },
    { icon: IoPartlySunnySharp, label: "Summer Rest" },
    { icon: TbShip, label: "Ship Cruises" },
    { icon: GiMountains, label: "Mountain Tours" },
    { icon: GiCampingTent, label: "Camping Tours" },
    { icon: TbBeach, label: "Beaches" },
  ];

  return (
    <div className="bg-gray-50">
      {/* Best-Selling Destinations Section */}
      <div className="container mx-auto py-12">
        <div className="text-center">
          <p className="text-2xl font-semibold text-gray-800">
            Journey to Paradise
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Our Best-Selling Destinations Await
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 px-4 cursor-pointer">
          {tourPackages.map((packageData, index) => (
            <Card key={index} {...packageData} />
          ))}
        </div>
      </div>

      {/* Exclusive Tour Packages Section */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="text-2xl font-semibold text-gray-800">
              Browse by exclusive tour packages
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              Explore Our Popular Travel Packages
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {icons.map(({ icon: Icon, label }, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white shadow-lg rounded-lg p-6 cursor-pointer transition-transform duration-300 hover:scale-105"
                aria-label={label} // Add aria-label for accessibility
              >
                <Icon className="w-12 h-12 text-blue-500" />
                <p className="text-lg font-semibold text-gray-800 ml-4">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
