import React from "react";
import { FaComments, FaRegEye } from "react-icons/fa";

export default function Blog() {
    const Card = ({ image, text }) => {
        return (
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img className="w-full h-64 object-cover" src={image} alt="" />
                <div className="p-4">
                    <p className="text-gray-500">Travel</p>
                    <h5 className="text-lg font-semibold text-gray-800">{text}</h5>
                    <div className="flex items-center justify-between mt-2">
                        <span className="flex items-center text-gray-600">
                            <FaComments size={20} className="mr-1" />
                            <p>45</p>
                        </span>
                        <span className="flex items-center text-gray-600">
                            <FaRegEye className="mr-1" />
                            <p>23k+ views</p>
                        </span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <section className="container mx-auto py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <p className="text-sm text-blue-500 uppercase font-semibold">Blog Post</p>
                        <h2 className="text-3xl font-semibold text-gray-800">Our Latest Blogs</h2>
                    </div>
                    <div>
                        <Card image="" text="Beauty Place in Greece" />
                    </div>
                </div>
            </section>
            <section className="bg-gray-200 py-12">
                <div className="container mx-auto flex justify-center space-x-8">
                    <img className="w-32 h-32 object-cover rounded-full" src="" alt="" />
                    <img className="w-32 h-32 object-cover rounded-full" src="" alt="" />
                    <img className="w-32 h-32 object-cover rounded-full" src="" alt="" />
                    <img className="w-32 h-32 object-cover rounded-full" src="" alt="" />
                </div>
            </section>
            <section className="container mx-auto py-12">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Sign up for our Newsletter</h2>
                    <div className="flex">
                        <input type="email" placeholder="Enter your email here" className="w-full py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <button className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Subscribe Now</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
