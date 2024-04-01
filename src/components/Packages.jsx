import React from "react";
import { HiStar } from "react-icons/hi";

export default function Packages() {
    const Card = ({ image, text }) => {
        return (
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={image} alt="" className="w-full h-64 object-cover object-center" />
                <div className="p-4">
                    <h5 className="text-xl font-semibold text-gray-800">{text}</h5>
                    <div className="flex items-center mt-2 text-gray-600">
                        <HiStar className="text-yellow-500 mr-1" />
                        <p>(2.3k Reviews)</p>
                        <div className="ml-auto font-semibold text-lg text-gray-800">₹9400</div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-gray-50">
            <div className="container mx-auto py-12">
                <div className="text-center">
                    <p className="text-2xl font-semibold text-gray-800">Popular Packages</p>
                    <h2 className="text-4xl font-bold text-gray-900">Checkout our packages</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                    <Card
                        image="url_to_image1.jpg"
                        text="Enjoy the Beauty Place in Greece City"
                    />
                    <Card
                        image="url_to_image2.jpg"
                        text="Enjoy the Beauty Place in Greece City"
                    />
                    <Card
                        image="url_to_image3.jpg"
                        text="Enjoy the Beauty Place in Greece City"
                    />
                    <Card
                        image="url_to_image4.jpg"
                        text="Enjoy the Beauty Place in Greece City"
                    />
                </div>
            </div>
            <section className="bg-gray-200 py-12">
                <div className="container mx-auto">
                    <div className="text-center">
                        <p className="text-2xl font-semibold text-gray-800">Travel</p>
                        <h2 className="text-4xl font-bold text-gray-900">Select Offers for Travelling</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                        <div className="flex items-center justify-center bg-white shadow-lg rounded-lg p-6">
                            <img src="" alt="" className="w-12 h-12" />
                            <p className="text-lg font-semibold text-gray-800 ml-4">Different Countries</p>
                        </div>
                        <div className="flex items-center justify-center bg-white shadow-lg rounded-lg p-6">
                            <img src="/ghoomoYaaro/src/assets/travel-concept-with-landmarks.jpg" alt="" className="w-12 h-12" />
                            <p className="text-lg font-semibold text-gray-800 ml-4">Bus Tours</p>
                        </div>
                        <div className="flex items-center justify-center bg-white shadow-lg rounded-lg p-6">
                            <img src="" alt="" className="w-12 h-12" />
                            <p className="text-lg font-semibold text-gray-800 ml-4">Food Tours</p>
                        </div>
                        <div className="flex items-center justify-center bg-white shadow-lg rounded-lg p-6">
                            <img src="" alt="" className="w-12 h-12" />
                            <p className="text-lg font-semibold text-gray-800 ml-4">Summer Rest</p>
                        </div>
                        <div className="flex items-center justify-center bg-white shadow-lg rounded-lg p-6">
                            <img src="" alt="" className="w-12 h-12" />
                            <p className="text-lg font-semibold text-gray-800 ml-4">Different Countries</p>
                        </div>
                        <div className="flex items-center justify-center bg-white shadow-lg rounded-lg p-6">
                            <img src="" alt="" className="w-12 h-12" />
                            <p className="text-lg font-semibold text-gray-800 ml-4">Ship Cruises</p>
                        </div>
                        <div className="flex items-center justify-center bg-white shadow-lg rounded-lg p-6">
                            <img src="" alt="" className="w-12 h-12" />
                            <p className="text-lg font-semibold text-gray-800 ml-4">Mountain Tours</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
