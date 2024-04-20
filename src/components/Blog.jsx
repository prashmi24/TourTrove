import React from "react";
import { FaComments, FaRegEye } from "react-icons/fa";

export default function Blog() {
    const Card = ({ image, text }) => {
        return (
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img className="w-auto h-64 object-cover" src={image} alt="" />
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
                    <div className="text-center mb-8">
                        <p className="text-2xl font-semibold text-gray-800">Blog Post</p>
                        <h2 className="text-4xl font-bold text-gray-900">Our Latest Blogs</h2>
                    </div>
                    <div className="flex gap-12 w-100">
                        <Card image="/assets/jakub-dziubak-iOHJKJqO6E0-unsplash.jpg" text="Foodie's Guide to Global Cuisine" />
                        <Card image="/assets/fabian-blank-pElSkGRA2NU-unsplash.jpg" text="How to Travel on a Budget?" />
                        <Card image="/assets/suhyeon-choi-m4uUDTrcJeY-unsplash.jpg" text="The Ultimate Guide to Solo Travel" />
                    </div>
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
