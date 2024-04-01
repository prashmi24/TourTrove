import React from "react";

export default function Hero() {
    return (
        <div className="hero-section">
            <div className="max-w-lg mr-12">
                <div>
                    <h2 className="text-4xl font-bold text-blue-600">Random Stuff</h2>
                    <p className="mt-4 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam obcaecati maiores nostrum aperiam, ab, recusandae sunt eum beatae provident, corrupti repudiandae eos a perferendis tenetur vitae doloremque. Alias, iste soluta.</p>
                </div>
                <div className="mt-6">
                    <button className="mr-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Get Exploration</button>
                    <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</button>
                </div>
            </div>
            <div>
                <img src="" alt="" />
            </div>
        </div>
    );
}
