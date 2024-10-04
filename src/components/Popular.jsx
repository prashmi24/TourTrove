import React, { useEffect, useRef } from "react";
import { HiLocationMarker, HiStar } from "react-icons/hi";

export default function Popular({ images }) {
  const Card = ({ image, text, location, ratings, price }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-4">
        <div>
          <img
            src={image}
            alt={`${text} in ${location}`}
            className="w-full h-64 object-cover object-center"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h5 className="text-xl font-semibold mb-2">{text}</h5>
          <div className="flex items-center mb-2">
            <HiLocationMarker size={20} className="text-blue-500 mr-2" />
            <p className="text-gray-600">{location}</p>
          </div>
          <div className="flex items-center mb-2">
            <HiStar className="text-yellow-500 mr-1" />
            <p className="text-gray-600">{ratings}</p>
          </div>
          <div className="text-xl font-semibold text-gray-700">{price}</div>
        </div>
      </div>
    );
  };

  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    const scrollInterval = setInterval(() => {
      if (
        container.scrollLeft + container.offsetWidth <
        container.scrollWidth
      ) {
        container.scrollLeft += container.offsetWidth;
      } else {
        container.scrollLeft = 0;
      }
    }, 2000);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <p className="text-2xl font-semibold text-gray-800">
              Popular Hotel
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              Most Popular Hotel
            </h2>
          </div>
          <div className="flex overflow-x-auto">
            <Card
              image="/assets/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg"
              text="Mountain View Inn"
              location="Aspen, Colorado, USA"
              ratings="4.9 (2k Reviews)"
              price="$500 per night"
            />
            <Card
              image="/assets/upgraded-points-c8UktkMDrbc-unsplash.jpg"
              text="Sunset Paradise Hotel"
              location="Santorini, Greece"
              ratings="5 (2.9k Reviews)"
              price="$350 per night"
            />
            <Card
              image="/assets/yosuke-ota-0R1GMsc2E7w-unsplash.jpg"
              text="Riverside Retreat Hotel"
              location="Kyoto, Japan"
              ratings="4.8 (2k Reviews)"
              price="$250 per night"
            />
            <Card
              image="/assets/man-pan-KTSYy-3XVSo-unsplash.jpg"
              text="Golden Sands Resort"
              location="Cancun, Mexico"
              ratings="4.7 (3.2k Reviews)"
              price="$300 per night"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-200">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <p className="text-2xl font-semibold text-gray-800">Our Gallery</p>
            <h2 className="text-4xl font-bold text-gray-900">
              Capture Unforgettable Moments
            </h2>
          </div>
          <div
            ref={containerRef}
            className="flex overflow-x-auto w-full h-96 items-center justify-center scroll-smooth"
            aria-live="polite"
          >
            {images &&
              images.map((image, id) => (
                <img
                  key={id}
                  src={image}
                  alt={`Gallery image ${id + 1}`}
                  className="mx-4 max-w-full max-h-full object-cover rounded-lg"
                  loading="lazy"
                />
              ))}
            <img
              src="/assets/juan-gomez-tgrwlTZXEtw-unsplash.jpg"
              alt="Gallery Image 1"
              className="mx-4   max-w-full max-h-full  object-cover rounded-lg"
            />
            <img
              src="/assets/mike-swigunski-ueBmz9K8zTg-unsplash.jpg"
              alt="Gallery Image 2"
              className="mx-4   max-w-full max-h-full  object-cover rounded-lg"
            />
            <img
              src="/assets/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg"
              alt="Gallery Image 3"
              className="mx-4   max-w-full max-h-full  object-cover rounded-lg"
            />
            <img
              src="/assets/antonio-gross-OIzy-UubqrE-unsplash.jpg"
              alt="Gallery Image 4"
              className="mx-4   max-w-full max-h-full  object-cover rounded-lg"
            />
            <img
              src="/assets/mihai-moisa-Djtc1T38-GY-unsplash.jpg"
              alt="Gallery Image 5"
              className="mx-4   max-w-full max-h-full  object-cover rounded-lg"
            />
            <img
              src="/assets/rafael-k-streit-XwGh-Dngypc-unsplash.jpg"
              alt="Gallery Image 6"
              className="mx-4   max-w-full max-h-full  object-cover rounded-lg"
            />
            <img
              src="/assets/arnel-hasanovic-fVwqaAqzj2g-unsplash.jpg"
              alt="Gallery Image 8"
              className="mx-4   max-w-full max-h-full  object-cover rounded-lg"
            />
            <img
              src="/assets/igor-oliyarnik-Uu5aXBI1oLk-unsplash.jpg"
              alt="Gallery Image 9"
              className="mx-4  max-w-full max-h-full  object-cover rounded-lg"
            />
            <img
              src="/assets/neon-joi-MZvbxsymork-unsplash.jpg"
              alt="Gallery Image 10"
              className="mx-4   max-w-full max-h-full  object-cover rounded-lg"
            />
            <img
              src="/assets/k-mitch-hodge-UdHP53gnxE8-unsplash.jpg"
              alt="Gallery Image 11"
              className="mx-4   max-w-full max-h-full  object-cover rounded-lg"
            />
            <img
              src="/assets/luqman-hariz-TuiEkw4D3v4-unsplash.jpg"
              alt="Gallery Image 12"
              className="mx-4   max-w-full max-h-full  object-cover rounded-lg"
            />
            <img
              src="/assets/neon-joi-MZvbxsymork-unsplash.jpg"
              alt="Gallery Image 13"
              className="mx-4   max-w-full max-h-full  object-cover rounded-lg"
            />
            <img
              src="/assets/axp-photography-4TqZYhCmOGw-unsplash.jpg"
              alt="Gallery Image 15"
              className="mx-4   max-w-full max-h-full  object-cover rounded-lg"
            />
            <img
              src="/assets/ryutaro-uozumi-U-HDKOZ6PnE-unsplash.jpg"
              alt="Gallery Image 16"
              className="mx-4   max-w-full max-h-full  object-cover rounded-lg"
            />
            <img
              src="/assets/laurentiu-isopescu-9ua73fUyWHY-unsplash.jpg"
              alt="Gallery Image 17"
              className="mx-4   max-w-full max-h-full  object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
