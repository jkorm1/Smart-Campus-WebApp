import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-800 text-white p-2 w-full" style={{ clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0% 100%)" }}>
      <div className="container mx-auto px-2 py-10">
        <div className="flex justify-between mb-2">
          <div className="flex items-center space-x-1">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-3 w-3" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-3 w-3" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-3 w-3" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Youtube className="h-3 w-3" />
            </a>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-[8px]">English</span>
            <span className="text-[8px]">EUR</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2 text-[8px]">
          <div>
            <h4 className="font-bold mb-1">Accommodation</h4>
            <ul>
              <li><a href="#" className="block mb-1">Hostels</a></li>
              <li><a href="#" className="block mb-1">Hotels</a></li>
              <li><a href="#" className="block mb-1">Bed and Breakfast</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-1">Customer Support</h4>
            <ul>
              <li><a href="#" className="block mb-1">Talk to Us</a></li>
              <li><a href="#" className="block mb-1">Help</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-1">Quick Links</h4>
            <ul>
              <li><a href="#" className="block mb-1">Blog</a></li>
              <li><a href="#" className="block mb-1">Top Hostels</a></li>
              <li><a href="#" className="block mb-1">Featured hostels</a></li>
              <li><a href="#" className="block mb-1">Tours & Experiences</a></li>
              <li><a href="#" className="block mb-1">Solo Travel</a></li>
              <li><a href="#" className="block mb-1">Student Discount</a></li>
              <li><a href="#" className="block mb-1">Roamies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-1">About Us</h4>
            <ul>
              <li><a href="#" className="block mb-1">Hostelworld Group PLC</a></li>
              <li><a href="#" className="block mb-1">Press</a></li>
              <li><a href="#" className="block mb-1">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-1">Work With Us</h4>
            <ul>
              <li><a href="#" className="block mb-1">Hostel Sign Up</a></li>
              <li><a href="#" className="block mb-1">Affiliate Program</a></li>
              <li><a href="#" className="block mb-1">Hostelworld Inbox</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-2 text-[8px]">
          <p className="mb-1">© 1999-2024 Hostelworld.com Limited</p>
          <ul className="flex space-x-1">
            <li><a href="#">Data Protection Notice & DSA</a></li>
            <li><a href="#">Terms & Legal</a></li>
            <li><a href="#">Coupons</a></li>
            <li><a href="#">Vouchers</a></li>
            <li><a href="#">Website Testing</a></li>
            <li><a href="#">Site Map</a></li>
            <li><a href="#">Cookie Preferences</a></li>
          </ul>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center space-x-2">
              <img src="path/to/globalsign-logo.png" alt="GlobalSign" className="h-3" />
              <img src="path/to/climate-neutral-logo.png" alt="Climate Neutral" className="h-3" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
