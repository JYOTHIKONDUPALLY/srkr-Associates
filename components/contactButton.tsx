import React from "react";
import { Phone } from "lucide-react";

const FloatingContactButton = () => {
  return (
    <a
      href="tel:+91 9294556789"
      className="fixed bottom-5 right-5 bg-[#00843D] text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-[#005b9f] transition-all z-50"
    >
      <Phone size={20} />
      <span className="hidden sm:inline">Contact Us</span>
    </a>
  );
};

export default FloatingContactButton;
