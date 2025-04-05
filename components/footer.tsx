
import React from "react";
import Logo from "../assets/CALOGO.png";
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-10 px-4 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div>
          <div className='bg-white text-gray-900 rounded-xl p-4 shadow-md w-fit'>
          <img
              src={Logo.src}
              alt="Logo"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h1 className="text-xl font-bold mt-4">Srkr Associates</h1>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <p>Srkr Associates</p>
            <p>Jubli Hills, Telangana, India</p>
            <p>Email:  ca.sivaramaraju25@gmail.com</p>
            <p>Phone: +91 9294556789</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <ul>
              <li><a href="#about">Company</a></li>
              {/* <li><a href="/careers">Careers</a></li> */}
              <li><a href="#services">Services</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul>
              <li>GST Filing</li>
              <li>Income Tax Return</li>
              <li>Auditing</li>
              <li>Bookkeeping</li>
            </ul>
          </div>
          {/* <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <ul>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div> */}
        </div>
        <p className="text-center text-xs text-gray-400 mt-8">
          © {new Date().getFullYear()} Srkr Associates. All rights reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  