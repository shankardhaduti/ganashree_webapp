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
    description:
      "We are Ganashri Oil Merchants, committed to delivering pure and premium quality edible oils.",
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
    <footer className="w-full block bg-gray-900 text-white pt-14 pb-8 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <img src={company.logo} alt={company.name} className="h-12 mb-4" />
          <p className="text-gray-300 text-sm">{footer.description}</p>
        </div>

        {/* Navigation */}
          <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {navigation.map((item,index) => (
              <li key={index}>
      <Link href={item.href}>
        <span className="text-gray-300 hover:text-[#FFD700] cursor-pointer">
          {item.name}
        </span>
      </Link>
    </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>

          {/* Phone 1 */}
          <a href={`tel:${footer.phone2}`} className="flex items-center py-1 gap-2 text-gray-300 hover:text-[#FFD700] transition">
  <PhoneIcon sx={{ fontSize: 20 }} /><span>{footer.phone1}</span>
  
</a>

          {/* Phone 2 */}
           
<a href={`tel:${footer.phone2}`} className="flex items-center  py-1 gap-2 text-gray-300 hover:text-[#FFD700] transition">
  <PhoneIcon sx={{ fontSize: 20 }} /><span>{footer.phone2}</span>
  
</a>
          
          

          {/* Email */}
          <a href={`tel:${footer.email}`} className="flex items-center  py-1 gap-2 text-gray-300 hover:text-[#FFD700] transition">
  <MessageIcon sx={{ fontSize: 20 }} /><span>{footer.email}</span>
  
</a>

          {/* Location */}
              <a href={`tel:${footer.address}`} className="flex items-center py-1 gap-2 text-gray-300 hover:text-[#FFD700] transition">
  <LocationOnIcon sx={{ fontSize: 20 }} /><span>{footer.address}</span>
  
</a>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href={footer.socialMedia.whatsapp} className="flex items-center py-1 gap-2 text-gray-300 hover:text-[#FFD700] transition">
               <WhatsAppIcon/>
            </a>
           
          
 <a href={footer.socialMedia.twitter} className="flex items-center py-1 gap-2 text-gray-300 hover:text-[#FFD700] transition">
               <TwitterIcon/>
            </a>

                  <a href={footer.socialMedia.instagram} className="flex items-center py-1 gap-2 text-gray-300 hover:text-[#FFD700] transition">
               <InstagramIcon/>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-10">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;