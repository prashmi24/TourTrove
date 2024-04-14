import React from "react";

export default function Hero() {
    return (
        <div className="hero-section">
            <div className="max-w-lg content">
                <div>
                    {/* <h2 className="text-5xl font-bold text-white outline-black">Experience the World, Your Way!</h2>
                    <p className="mt-2 text-white  tracking-wide text-xl">Discover exciting destinations, find amazing deals, and book your dream vacation hassle-free.</p> */}
                    <h2>Experience the World, Your Way!</h2>
                    <p >Discover exciting destinations, find amazing deals, and book your dream vacation hassle-free.</p>
                </div>
                <div className="mt-2">
                    <button className="mr-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Get Exploration</button>
                    <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</button>
                </div>
            </div>
            <div>
                <img src="/assets/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg" alt="hero-img"/>
            </div>
        </div>
    );
}