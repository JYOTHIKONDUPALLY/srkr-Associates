import React from "react";
import { Building2, Banknote, BriefcaseBusiness, HeartPulse, GraduationCap, Landmark } from "lucide-react";

const industries = [
  { title: "Startups", icon: BriefcaseBusiness },
  { title: "Healthcare", icon: HeartPulse },
  { title: "Education", icon: GraduationCap },
  { title: "Finance", icon: Banknote },
  { title: "Government", icon: Landmark },
  { title: "Real Estate", icon: Building2 },
];

const IndustriesWeServe = () => {
  return (
    <section className="py-16 bg-[#003865] text-white rounded-3xl mx-6 my-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-wide">Industries We Serve</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-10">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-gray-900 flex flex-col items-center"
            >
              <industry.icon className="w-12 h-12 text-[#003865] mb-5" />
              <h3 className="text-lg md:text-xl font-semibold text-center tracking-tight">{industry.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
