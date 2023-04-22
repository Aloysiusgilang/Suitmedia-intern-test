import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import ImageCarousel from "@/components/carousel";
import OurValues from "@/components/our-values";
import { Parallax } from "react-parallax";
import MyParallax from "@/components/parallax";
import Card from "@/components/card";
import ContactUS from "@/components/contact-us";

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
      <div id="contact" className="w-full h-full">
        <ContactUS />
      </div>
    </div>
  );
}
