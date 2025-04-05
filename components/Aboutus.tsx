import React from "react";
import { ShieldCheck, Clock, Users, BadgeCheck, TrendingUp, CheckCircle, Lightbulb, FileText } from "lucide-react";
import AboutImage from "../assets/AboutUs.png"; 

const AboutUs = () => {
  return (
    <div className="container bg-gradient-to-br from-white to-[#EAF4FB] text-gray-900 rounded-3xl overflow-hidden flex flex-col md:flex-row items-center" id="about">
  <div className="block md:hidden w-full px-6 text-center mt-6">
    <h2 className="text-2xl font-bold text-[#003865] mb-4">
      About SRKR Associates
    </h2>
  </div>
    {/* Image Section */}
    <div className="w-full md:w-1/2 mb-6 md:mb-0 px-6 md:px-0">
      <img
        src={AboutImage.src}
        alt="About SRKR Associates"
        className="w-4/5 md:w-full h-auto mx-auto"
      />
    </div>
  
    {/* Text Section */}
    <div className="w-full md:w-1/2 md:pl-10 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-[#003865] mb-4">
        About SRKR Associates
      </h2>
      <p className="text-sm md:text-base mb-4">
        SRKR Associates is a reputable and experienced Chartered Accountancy firm dedicated to providing comprehensive financial and regulatory services to businesses and individuals.
      </p>
      <p className="text-sm md:text-base mb-4">
        With a team of highly skilled and experienced Chartered Accountant partners, we offer a wide range of solutions tailored to meet the unique needs of our clients—from auditing and tax compliance to strategic financial planning.
      </p>
      <p className="text-sm md:text-base">
        We take pride in our client-centric approach, combining professional excellence with a deep commitment to timely, accurate service delivery.
      </p>
    </div>
  </div>
  
  );
};

export default AboutUs;
