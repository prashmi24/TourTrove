import React, { useEffect, useRef } from "react";
import { HiLocationMarker, HiStar } from "react-icons/hi";

export default function Popular({ images }) {
    const Card = ({ image, text }) => {
        return (
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-4">
                <div>
                    <img src={image} alt="" className="w-full h-64 object-cover object-center" />
                </div>
                <div className="p-4">
                    <h5 className="text-xl font-semibold mb-2">{text}</h5>
                    <div className="flex items-center mb-2">
                        <HiLocationMarker size={20} className="text-primary mr-2" />
                        <p className="text-gray-600">Bali, Indonesia</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <HiStar className="text-orange mr-1" />
                        <p className="text-gray-600">4.5 (2.5k Reviews)</p>
                    </div>
                    <div className="text-xl font-semibold text-gray-700">₹7520</div>
                </div>
            </div>
        );
    };

    const containerRef = useRef(null);
    useEffect(() => {
        const container = containerRef.current;
        const scrollInterval = setInterval(() => {
            if (container.scrollLeft + container.offsetWidth < container.scrollWidth) {
                container.scrollLeft += container.offsetWidth;
            } else {
                container.scrollLeft = 0;
            }
        }, 3000);
        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <div>
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto">
                    <div className="text-center mb-8">
                        <p className="text-2xl font-semibold text-gray-800">Popular Hotel</p>
                        <h2 className="text-4xl font-bold text-gray-900">Most Popular Hotel</h2>
                    </div>
                    <div className="flex overflow-x-auto">
                        <Card image="" text="Enjoy the beauty in Greece" />
                        <Card image="" text="Enjoy the beauty in Greece" />
                        <Card image="" text="Enjoy the beauty in Greece" />
                        <Card image="" text="Enjoy the beauty in Greece" />
                    </div>
                </div>
            </section>
            <section className="py-12 bg-gray-200">
                <div className="container mx-auto">
                    <div className="text-center mb-8">
                        <p className="text-2xl font-semibold text-gray-800">Our Gallery</p>
                        <h2 className="text-4xl font-bold text-gray-900">Best Travellers Share a Photo</h2>
                    </div>
                    <div ref={containerRef} className="flex overflow-x-auto">
                        {images && images.map((image, id) => (<img key={id} src={image} alt="" className="mx-4" />))}
                    </div>
                </div>
            </section>
        </div>
    );
}
