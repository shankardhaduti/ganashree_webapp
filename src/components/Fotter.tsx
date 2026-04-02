// @ts-nocheck
import React from "react";
import config from "../config/index.json";
import { Divider } from "@mui/material";

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
      whatsapp: "https://wa.me/918087678977",
      instagram: "https://instagram.com/",
      twitter: "https://twitter.com/",
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
                <a
                  href={`/${item.href}`}
                  className="text-gray-300 hover:text-white transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>

          {/* Phone 1 */}
          <a
            href={`tel:${footer.phone1}`}
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011-.24 11.72 11.72 0 003.66.58 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.47a1 1 0 011 1 11.72 11.72 0 00.58 3.66 1 1 0 01-.24 1z" />
            </svg>
            {footer.phone1}
          </a>

          {/* Phone 2 */}
          <a
            href={`tel:${footer.phone2}`}
            className="flex items-center gap-2 text-gray-300 hover:text-white mt-2"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011-.24 11.72 11.72 0 003.66.58 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.47a1 1 0 011 1 11.72 11.72 0 00.58 3.66 1 1 0 01-.24 1z" />
            </svg>
            {footer.phone2}
          </a>

          {/* Email */}
          <a
            href={`mailto:${footer.email}`}
            className="flex items-center gap-2 text-gray-300 hover:text-white mt-2"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            {footer.email}
          </a>

          {/* Location */}
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(
              footer.address
            )}`}
            target="_blank"
            className="flex items-center gap-2 text-gray-300 hover:text-white mt-2"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 119.5 9 2.5 2.5 0 0112 11.5z" />
            </svg>
            {footer.address}
          </a>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href={footer.socialMedia.whatsapp} target="_blank">
              <img src="/assets/icons/whatsapp.svg" className="h-6" />
            </a>

            <a href={footer.socialMedia.instagram} target="_blank">
              <img src="/assets/icons/instagram.svg" className="h-6" />
            </a>

            <a href={footer.socialMedia.twitter} target="_blank">
              <img src="/assets/icons/twitter.svg" className="h-6" />
            </a>
          </div>
        </div>
      </div>
<div className="my-10 border-t border-red-700"></div>      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-10">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
        <br />
        <span>
        <h6>Developed By</h6>
          <a href={footer.socialMedia.instagram} target="_blank">
              Aadi Info Solutions
            </a>
            </span>
      </div>
    </footer>
  );
};

export default Footer;
