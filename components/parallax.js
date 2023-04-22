import { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import Image from "next/image";

const AboutPage = () => {
  const [bgImage, setBgImage] = useState("/about-bg.jpg");

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImage((prevImage) =>
        prevImage === "/about-bg.jpg" ? "/bg.jpg" : "about-bg.jpg"
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen">
      <Parallax
        bgImage={bgImage}
        strength={500}
        className="h-full w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundSize: "cover" }}
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Hello, world!</h1>
        </div>
      </Parallax>
    </div>
  );
};

export default AboutPage;
