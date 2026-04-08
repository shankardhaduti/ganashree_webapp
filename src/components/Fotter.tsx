// @ts-nocheck
import React from "react";
import config from "../config/index.json";

import Link from "next/link";
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import MessageIcon from "@mui/icons-material/Message"
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  const { company, navigation } = config;

  const footer = {
    description: "We are Ganashri Oil Merchants, committed to delivering pure and premium quality edible oils.",
    phone1: "+918087678977",
    phone2: "+918459485202",
    email: "contact@ganashrioil.org.in",
    address: "Banhatti, Karnataka, India",
    socialMedia: {
      whatsapp: "https://web.whatsapp.com/",
      instagram: "https://www.instagram.com/",
      twitter: "https://twitter.com",
    },
  };

  return (
    <footer className="w-full block bg-[#0b1120] text-white pt-14 pb-8 ">
      {/* Reduced px-6 to px-2 and increased max-width to 7xl for more side space */}
      <div className="max-w-7xl mx-auto px-2 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + About */}
        <div className="flex flex-col items-start">
          <img src={company.logo} alt={company.name} className="h-12 mb-4" />
          <p className="text-gray-300 text-sm leading-relaxed">{footer.description}</p>
        </div>

        {/* Navigation */}
        <div className="md:ml-auto">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {navigation.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <span className="text-gray-300 hover:text-[#FFD700] cursor-pointer text-sm">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:ml-auto">
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <a href={`tel:${footer.phone1}`} className="flex items-center py-1 gap-2 text-gray-300 hover:text-[#FFD700] transition text-sm">
            <PhoneIcon sx={{ fontSize: 18 }} /><span>{footer.phone1}</span>
          </a>
          <a href={`tel:${footer.phone2}`} className="flex items-center py-1 gap-2 text-gray-300 hover:text-[#FFD700] transition text-sm">
            <PhoneIcon sx={{ fontSize: 18 }} /><span>{footer.phone2}</span>
          </a>
          <a href={`mailto:${footer.email}`} className="flex items-center py-1 gap-2 text-gray-300 hover:text-[#FFD700] transition text-sm">
            <MessageIcon sx={{ fontSize: 18 }} /><span>{footer.email}</span>
          </a>
          <div className="flex items-center py-1 gap-2 text-gray-300 text-sm">
            <LocationOnIcon sx={{ fontSize: 18 }} /><span>{footer.address}</span>
          </div>
        </div>

        {/* Social Media */}
        <div className="md:ml-auto">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href={footer.socialMedia.whatsapp} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#FFD700] transition">
              <WhatsAppIcon />
            </a>
            <a href={footer.socialMedia.twitter} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#FFD700] transition">
              <TwitterIcon />
            </a>
            <a href={footer.socialMedia.instagram} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#FFD700] transition">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;