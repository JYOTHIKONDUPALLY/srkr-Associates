"use client";

import React, { useState } from "react";
import Logo from "../assets/CALOGO.png";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow bg-white">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:justify-between items-center px-6 py-4 gap-4">
        {/* Mobile View: Logo and Title on Left, Nav Button on Right */}
        <div className="flex justify-between w-full items-center md:hidden">
          <div className="flex items-center gap-2">
            <img
              src={Logo.src}
              alt="Logo"
              className="w-16 h-16 object-contain"
            />
            <h1 className="text-xl font-bold">Srkr Associates</h1>
          </div>
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop View: Logo and Title */}
        <div className="hidden md:flex items-center gap-2">
          <img src={Logo.src} alt="Logo" className="w-16 h-16 object-contain" />
          <h1 className="text-xl font-bold">Srkr Associates</h1>
        </div>

        {/* Navigation Links - Visible in Medium and Up */}
        <nav className="hidden md:flex gap-6 text-xl font-medium">
          <Link href="/" className="hover:text-[#003865]">
            Home
          </Link>
          <Link href="#about" className="hover:text-[#003865]">
            About
          </Link>
          <Link href="#services" className="hover:text-[#003865]">
            Services
          </Link>
          {/* <Link href="#careers" className="hover:text-[#003865]">Careers</Link> */}
          <Link href="#contact" className="hover:text-[#003865]">
            Contact
          </Link>
        </nav>

        {/* Contact Info - Desktop Only */}
        {/* Removed for mobile view as per request */}
        <div className="hidden md:block text-lg text-right space-y-1">
          <p className="flex items-center justify-end gap-2">
            <Phone size={16} className="text-[#003865]" />
            +91 9294556789
          </p>
          <p className="flex items-center justify-end gap-2">
            <Mail size={16} className="text-[#003865]" />
            ca.sivaramaraju25@gmail.com
          </p>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-[#003865] text-white flex flex-col gap-3 px-6 py-4 text-sm font-medium">
          <Link href="/" className="hover:text-[#EAF4FB]">
            Home
          </Link>
          <Link href="#about" className="hover:text-[#EAF4FB]">
            About
          </Link>
          <Link href="#services" className="hover:text-[#EAF4FB]">
            Services
          </Link>
          {/* <Link href="#careers" className="hover:text-[#EAF4FB]">Careers</Link> */}
          <Link href="#contact" className="hover:text-[#EAF4FB]">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
