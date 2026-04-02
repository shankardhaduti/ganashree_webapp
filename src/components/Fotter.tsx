// @ts-nocheck
import React from "react";
import config from "../config/index.json";
import { Link } from "react-scroll";
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
      "We are Ganshri Oil Merchants, committed to delivering pure and premium quality edible oils.",
    phone1: "+918087678977",
    phone2: "+918459485202",
    email: "contact@ganshrioil.org.in",
    address: "Banhatti, Karnataka, India",
    socialMedia: {
      whatsapp: WhatsAppIcon,
      instagram: InstagramIcon,
      twitter: TwitterIcon,
    },
  };

  return (
    <footer className="bg-gray-900 text-white pt-14 pb-8 mt-20">
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
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  className="text-gray-300 hover:text-white transition cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>

          {/* Phone 1 */}
          <a href={`tel:${footer.phone2}`} className="flex items-center py-1 gap-2 text-gray-300 hover:text-white transition">
  <PhoneIcon sx={{ fontSize: 20 }} /><span>{footer.phone1}</span>
  
</a>

          {/* Phone 2 */}
           
<a href={`tel:${footer.phone2}`} className="flex items-center  py-1 gap-2 text-gray-300 hover:text-white transition">
  <PhoneIcon sx={{ fontSize: 20 }} /><span>{footer.phone2}</span>
  
</a>
          
          

          {/* Email */}
          <a href={`tel:${footer.email}`} className="flex items-center  py-1 gap-2 text-gray-300 hover:text-white transition">
  <MessageIcon sx={{ fontSize: 20 }} /><span>{footer.email}</span>
  
</a>

          {/* Location */}
              <a href={`tel:${footer.address}`} className="flex items-center py-1 gap-2 text-gray-300 hover:text-white transition">
  <LocationOnIcon sx={{ fontSize: 20 }} /><span>{footer.address}</span>
  
</a>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <Link
                  to={footer.socialMedia.whatsapp}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  className="text-gray-300 hover:text-white transition cursor-pointer"
                >
                  <WhatsAppIcon/>
                </Link>
          

                <Link
                  to={footer.socialMedia.twitter}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  className="text-gray-300 hover:text-white transition cursor-pointer"
                >
                  <TwitterIcon/>
                </Link>

                 <Link
                  to={footer.socialMedia.instagram}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  className="text-gray-300 hover:text-white transition cursor-pointer"
                >
                  <InstagramIcon/>
                </Link>
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