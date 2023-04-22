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

  const handleSlideClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="h-full">
      <div className="relative">
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
