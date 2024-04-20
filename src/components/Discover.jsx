import React from "react";
import { HiStar } from "react-icons/hi";

export default function Discover() {
    return (
        <div className="bg-gray-50">
            <section className="container mx-auto py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <img src="your-image-url" alt="Travel Destination" className="rounded-lg shadow-lg"/>
                    </div>
                    <div>
                        <div className="flex items-center mb-4">
                            <img src="your-logo-url" alt="Logo" className="h-8 mr-2"/>
                            <img src="your-logo-url" alt="Logo" className="h-8"/>
                        </div>
                        <p className="text-lg text-gray-800">
                            Conventially customize Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam itaque tenetur obcaecati repellat aspernatur, doloremque cumque rerum aliquam natus, nobis nam consequatur, mollitia fugiat aliquid.
                        </p>
                        <div className="mt-4">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mr-4">Get Exploration</button>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Read More</button>
                        </div>
                    </div>
                    <img src="/public/assets/aerial-view-koh-hong-island-krabi-thailand.jpg" alt="Travel Image" className=" rounded-lg shadow-lg max-w-xl max-h-full object-cover"/>
                    <img src="/public/assets/aleksandar-popovski-H9TP5uAQyyY-unsplash.jpg" alt="Travel Image" className="mx-4 rounded-lg shadow-lg max-w-xl max-h-full object-cover"/>
                    <img src="/public/assets/anthony-delanoix-Q0-fOL2nqZc-unsplash.jpg" alt="Travel Image" className="mx-4 rounded-lg shadow-lg max-w-xl max-h-full object-cover"/>
                </div>
            </section>
            <section className="testimonial py-12">
                <div className="container mx-auto text-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <span className="text-xl font-semibold">Testimonial</span>
                            <h2 className="text-3xl font-bold mb-4">What our customers say about us</h2>
                            <p className="text-lg mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia hic nam itaque corrupti perspiciatis perferendis similique dicta quas dolorem quae fuga doloribus tempore, dolores, voluptate illo voluptas tempora eligendi officia quod non! Aperiam vero reprehenderit tenetur, ea dolorem assumenda hic provident nam. Dolores, impedit. Numquam sed laboriosam excepturi itaque?
                            </p>
                            <span className="text-lg">Jack</span>
                            <span className="text-lg">Millerr</span>
                            <div className="mt-4">
                                {[...Array(5)].map((_, index) => (
                                    <HiStar size={24} key={index} className="text-yellow-400"/>
                                ))}
                            </div>
                        </div>
                        <div>
                            <img src="" alt="Testimonial" className="rounded-lg shadow-lg"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

