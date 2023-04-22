import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import ImageCarousel from "@/components/carousel";
import OurValues from "@/components/our-values";
import { Parallax } from "react-parallax";
import MyParallax from "@/components/parallax";

const inter = Inter({ subsets: ["latin"] });
const images = [
  {
    id: 1,
    src: "/about-bg.jpg",
    heading: "WE DON'T HAVE THE BEST, BUT WE HAVE THE GREATEST TEAM",
  },
  {
    id: 2,
    src: "/bg.jpg",
    heading:
      "THIS IS A PLACE WHERE TECHNOLOGY & CREATIVITY FUSED INTO DIGITAL CHEMISTRY",
  },
];

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-full sticky top-0 z-10">
        <Navbar />
      </div>
      <div className="w-full h-full">
        <div className="">
          <ImageCarousel />
        </div>
      </div>

      <div className="w-full h-full">
        <OurValues />
      </div>
    </div>
  );
}
