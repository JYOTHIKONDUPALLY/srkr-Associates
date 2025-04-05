import React from "react";
import { ShieldCheck, Clock, Users, BadgeCheck, TrendingUp, CheckCircle, Lightbulb, FileText } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-[#003865] text-white rounded-3xl mx-6 my-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-wide">Why Choose Us?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white text-gray-900 rounded-xl p-4 shadow-md max-w-md mx-auto">
            <h3 className="text-lg font-bold mb-3 text-[#003865]">Other CA Firms</h3>
            <ul className="space-y-2 list-disc list-inside text-sm">
              <li>Generic financial solutions</li>
              <li>Limited personalized attention</li>
              <li>Manual processes with slower turnaround</li>
              <li>Outdated tools and reporting</li>
              <li>Reactive support model</li>
              <li>Minimal scalability and growth focus</li>
              <li>Conventional thinking, lack of innovation</li>
            </ul>
          </div>

          <div className="bg-white text-gray-900 rounded-xl p-4 shadow-md border-2 border-[#00b2ff] max-w-md mx-auto">
            <h3 className="text-lg font-bold mb-3 text-[#003865]">SRKR Associates</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <ShieldCheck className="text-[#003865] w-5 h-5 mt-1" />
                <span>Comprehensive & customized financial solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="text-[#003865] w-5 h-5 mt-1" />
                <span>Client-focused approach with personalized service</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="text-[#003865] w-5 h-5 mt-1" />
                <span>Efficient processes with timely delivery</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="text-[#003865] w-5 h-5 mt-1" />
                <span>Latest technology and reporting tools</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-[#003865] w-5 h-5 mt-1" />
                <span>Proactive support and advisory model</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="text-[#003865] w-5 h-5 mt-1" />
                <span>Growth-oriented strategies and scalability</span>
              </li>
              <li className="flex items-start gap-2">
                <Lightbulb className="text-[#003865] w-5 h-5 mt-1" />
                <span>Innovative thinking and modern approach</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
