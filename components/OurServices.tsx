import React from "react";
import {
  Briefcase,
  FileText,
  ShieldCheck,
  BarChart2,
  Building,
  ClipboardList,
} from "lucide-react";

const services = [
  {
    title: "GST Compliance",
    description: "GST registration, filing, and compliance advisory.",
    icon: Briefcase,
  },
  {
    title: "Tax Return Filing",
    description: "Income tax filing for individuals and businesses.",
    icon: FileText,
  },
  {
    title: "Auditing & Assurance",
    description: "Statutory and internal audits for financial accuracy.",
    icon: ShieldCheck,
  },
  {
    title: "Financial Advisory",
    description: "Expert advice on financial planning and business valuation.",
    icon: BarChart2,
  },
  {
    title: "Company Law Matters",
    description: "Company registration, compliance, and ROC filings.",
    icon: Building,
  },
  {
    title: "MIS Reporting",
    description: "Custom MIS reports for informed business decisions.",
    icon: ClipboardList,
  },
  {
    title: "Bookkeeping & Accounting",
    description: "Accurate and timely bookkeeping and accounting services",
  },
];

const OurServices = () => {
  return (
    <section className="py-12 bg-[#003865] text-white rounded-2xl mx-6">
      <div className="container mx-auto px-6 text-center">
        <h2 className="hidden md:block text-2xl md:text-3xl font-bold mb-6 ">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-gray-900 hover:text-[#003865]"
            >
              <service.icon className="w-10 h-10 text-[#003865] mx-auto mb-3" />
              <h3 className="text-lg md:text-xl font-semibold text-[#003865] mb-2">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
