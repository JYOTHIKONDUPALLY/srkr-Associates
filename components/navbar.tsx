"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
         {/* Desktop Links */}
      <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/careers">Careers</Link></li>
          <li><Link href="/services">Services</Link></li>
        </ul>

       
        

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white border-t border-gray-200 px-4 pb-4 space-y-2 text-sm font-medium text-gray-700">
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link href="/careers" onClick={() => setMenuOpen(false)}>Careers</Link></li>
          <li><Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
