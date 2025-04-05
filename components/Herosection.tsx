"use client";
import { Typewriter } from "react-simple-typewriter";
import heroImage from "@/assets/heroimage.png";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-[#EAF4FB] px-6 md:px-20 py-5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col mb-10 md:mb-0">
  
        <h1 className="text-3xl md:text-5xl font-bold text-[#003865] leading-tight mb-4 text-center md:text-left">
          SRKR Associates - <span className="text-[#00843D]">Chartered Accountants</span>
        </h1>
  
        <h2 className="text-xl md:text-3xl font-semibold text-[#003865] mb-4 text-center md:text-left">
          <Typewriter
            words={[
              "Bookkeeping & Accounting",
              "Tax Planning & Compliance",
              "GST Registration & Filing",
              "Labour Law Advisory",
              "Company Law Matters",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
  
        {/* 👇 Image in between for mobile */}
        <div className="block md:hidden mb-6">
          <img
            src={heroImage.src}
            alt="CA services illustration"
            className="w-2/3 mx-auto"
          />
        </div>
  
        <p className="text-[#333] text-lg mb-6 text-center md:text-left">
          We provide comprehensive financial and regulatory services tailored
          to businesses and individuals — with professionalism, precision, and
          client satisfaction at our core.
        </p>
  
        <ul className="text-[#003865] space-y-2 font-medium mb-6 ml-4 md:text-left">
          <li>✔ Expert Chartered Accountants</li>
          <li>✔ Full-spectrum Financial & Compliance Services</li>
          <li>✔ Client-Centric & Timely Delivery</li>
        </ul>
  
        <div className="text-center md:text-left">
          <button
            className="bg-[#00843D] hover:bg-green-700 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact Us Today
          </button>
        </div>
      </div>
  
      {/* Desktop Image Section */}
      <div className="hidden md:block md:w-1/2">
        <img
          src={heroImage.src}
          alt="CA services illustration"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </div>
  </section>
  
  );
};

export default HeroSection;
