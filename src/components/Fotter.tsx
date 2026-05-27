// @ts-nocheck
import React from "react";
import config from "../config/index.json";
import Link from "next/link";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  const { company, navigation } = config;

  const footer = {
    description:
      "We are Ganashri Oil Merchants, committed to delivering pure and premium quality edible oils.",
    subtitle: "ಗಾಣದ ಎಣ್ಣೆಯತ್ತ ಮತ್ತೆ ಜಗದ ಚಿತ್ತ ಸಾಂಪ್ರದಾಯಿಕ ಖಾದ್ಯ ತೈಲ ಉತ್ಪಾದನೆ .",

    phone1: "+917795385340",
    phone2: "+917406188562",
    email: "contact@ganashrioil.org.in",
    address: "Banhatti, Karnataka, India",
    socialMedia: {
      whatsapp: "https://web.whatsapp.com/",
      instagram:
        "https://www.instagram.com/ganashri_oil_dealer_banahatti",
      twitter: "https://twitter.com",
    },
  };

  return (
    <footer className="w-full bg-[#0B1120] text-white pt-8 pb-6">

      {/* Grid */}
      <div className="w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-20">

        {/* About */}
        <div className="flex flex-col items-start text-left">
          <img src={company.logo} alt={company.name} className="h-10 mb-3" />
          <p className="text-gray-300 text-base leading-relaxed">
            {footer.description}
          </p>
            <p className="text-gray-300 text-base leading-relaxed">
            {footer.subtitle}
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start text-left md:ml-12">
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <div className="flex flex-wrap gap-4">
            {navigation.map((item, index) => (
              <Link key={index} href={item.href}>
                <span className="text-gray-300 hover:text-[#FFD700] cursor-pointer">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-start text-left md:ml-12">
          <h4 className="text-lg font-semibold mb-3">Contact</h4>

          <div className="flex items-center gap-2 text-gray-300 mb-2">
            <PhoneIcon sx={{ fontSize: 18 }} />
            <span>
              <a href={`tel:${footer.phone1}`} className=" text-white hover:text-[#FFFFFF]">
                {footer.phone1}
              </a>{" "}
              |{" "}
              <a href={`tel:${footer.phone2}`} className=" text-white hover:text-[#FFFFFF]">
                {footer.phone2}
              </a>
            </span>
          </div>
          <a
            href={`mailto:${footer.email}`}
            className="flex items-center gap-2 text-gray-300 hover:text-[#FFD700] mb-2"
          >
            <MessageIcon sx={{ fontSize: 18 }} />
            <span>{footer.email}</span>
          </a>

          <div className="flex items-center gap-2 text-gray-300 mb-3">
            <LocationOnIcon sx={{ fontSize: 18 }} />
            
            <span>{footer.address}</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href={footer.socialMedia.whatsapp} target="_blank" rel="noreferrer">
              <WhatsAppIcon sx={{ fontSize: 28, color: "white" }} />
            </a>
            <a href={footer.socialMedia.twitter} target="_blank" rel="noreferrer">
              <TwitterIcon sx={{ fontSize: 28, color: "white" }} />
            </a>
            <a href={footer.socialMedia.instagram} target="_blank" rel="noreferrer">
              <InstagramIcon sx={{ fontSize: 28, color: "white" }} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
        <br /><br />
        Developed by{" "}
        <a
          href="https://aadiinfosolutions.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          Aadi Info Solutions
        </a>
      </div>
    </footer>
  );
};

export default Footer;