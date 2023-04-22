import { useState, useEffect } from "react";
import Image from "next/image";
function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: "/about-bg.jpg",
      alt: "about image",
      heading: "We don't have the best, but we have the greatest team",
    },
    {
      src: "/bg.jpg",
      alt: "about image",
      heading:
        "This is a place where technology & creativity fused into digital chemistry",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, images]);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleSlideClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="h-full">
      <div className="relative">
        <button
          className="absolute z-10 top-1/2 -translate-y-1/2 left-0 focus:outline-none"
          onClick={prevImage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white hover:text-gray-300 transition duration-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M15.2929,4.29289 C15.6834,3.90237 16.3166,3.90237 16.7071,4.29289 C17.0976,4.68342 17.0976,5.31658 16.7071,5.70711 L12.4142,10 L16.7071,14.2929 C17.0976,14.6834 17.0976,15.3166 16.7071,15.7071 C16.3166,16.0976 15.6834,16.0976 15.2929,15.7071 L10.2929,10.7071 C9.90237,10.3166 9.90237,9.68342 10.2929,9.29289 L15.2929,4.29289 Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          className="absolute z-10 top-1/2 -translate-y-1/2 right-0 focus:outline-none"
          onClick={nextImage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white hover:text-gray-300 transition duration-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.70711,4.29289 C4.31658,3.90237 3.68342,3.90237 3.29289,4.29289 C2.90237,4.68342 2.90237,5.31658 3.29289,5.70711 L7.58579,10 L3.29289,14.2929 C2.90237,14.6834 2.90237,15.3166 3.29289,15.7071 C3.68342,16.0976 4.31658,16.0976 4.70711,15.7071 L9.70711,10.7071 C10.0976,10.3166 10.0976,9.68342 9.70711,9.29289 L4.70711,4.29289 Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <Image
          className="w-full h-full min-h-[400px] max-h-full "
          src={images[currentIndex].src}
          alt="background"
          width={2000}
          height={2000}
        />

        <h2 className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white font-bold text-md lg:text-5xl p-2 text-center px-4 py-2">
          {images[currentIndex].heading}
        </h2>
        <div className="absolute bottom-2 right-1/2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`${
                currentIndex === index
                  ? "bg-white text-gray-900"
                  : "bg-gray-900 text-white"
              } w-4 h-4 mx-2 rounded-full justify-center items-center focus:outline-none`}
              onClick={() => handleSlideClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;
