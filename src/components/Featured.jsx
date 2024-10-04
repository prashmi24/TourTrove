import React, { useState } from "react";
import { FaHotel, FaPlaneDeparture, FaCar, FaShip } from "react-icons/fa";

export default function Featured() {
  const [active, setActive] = useState("Hotel");

  const Card = ({ packages, image, country, amount }) => {
    return (
      <div className="rounded-lg shadow-lg p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
        <div className="bg-blue-500 text-white p-2 rounded-md mb-2 text-center">
          {packages} Packages
        </div>
        <img
          src={image}
          alt={`${country} travel`}
          className="w-full h-64 object-cover object-center"
          loading="lazy"
        />
        <div className="mt-2">
          <h2 className="text-lg font-semibold">{country}</h2>
          <p className="text-gray-600">Starting from ${amount}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Buttons to filter by type */}
      <div className="flex justify-center space-x-4 mb-8">
        {[
          { label: "Hotel", icon: FaHotel },
          { label: "Flight", icon: FaPlaneDeparture },
          { label: "Car", icon: FaCar },
          { label: "Ship", icon: FaShip },
        ].map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
              active === label
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            } hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300`}
          >
            <Icon />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Form for search criteria */}
      <div className="flex flex-wrap justify-between items-center space-y-4 md:space-y-0 mb-8">
        {[
          { label: "Your Destination", placeholder: "Greece" },
          { label: "Check In", type: "date" },
          { label: "Check Out", type: "date" },
          { label: "Adult", placeholder: "2" },
          { label: "Child", placeholder: "2" },
        ].map(({ label, placeholder, type }, index) => (
          <div key={index} className="flex items-center space-x-2">
            <label className="text-base text-gray-700">{label}</label>
            <input
              type={type || "text"}
              placeholder={placeholder}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              aria-label={label}
            />
          </div>
        ))}
        <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Book Now
        </button>
      </div>

      {/* Special Offers */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Special Offers</h2>
        <p className="text-4xl font-bold text-gray-900">
          Don't miss out on our exclusive deals and discounts!
        </p>
      </div>

      {/* Cards displaying the travel packages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card
          amount="2400"
          country="Italy"
          image="/assets/damiano-baschiera-hFXZ5cNfkOk-unsplash.jpg"
          packages="2"
        />
        <Card
          amount="980"
          country="Mexico"
          image="/assets/pedro-lastra-8gJqRaAaKx4-unsplash.jpg"
          packages="4"
        />
        <Card
          amount="1200"
          country="France"
          image="/assets/anthony-delanoix-Q0-fOL2nqZc-unsplash.jpg"
          packages="3"
        />
        <Card
          amount="500"
          country="Turkey"
          image="/assets/engin-yapici-WA1u0scVLZU-unsplash.jpg"
          packages="3"
        />
        <Card
          amount="800"
          country="India"
          image="/assets/kirti-kalla-JRhvllDBhzs-unsplash.jpg"
          packages="6"
        />
        <Card
          amount="1999"
          country="Spain"
          image="/assets/janette-speyer-R1_TwF_OThQ-unsplash.jpg"
          packages="5"
        />
      </div>
    </div>
  );
}
