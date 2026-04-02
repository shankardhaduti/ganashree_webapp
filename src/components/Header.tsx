import React, { Fragment } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-scroll';

import config from '../config/index.json';

const Menu = () => {
  const { navigation, company, callToAction } = config;
  const { name: companyName, logo } = company;

  return (
    <>
      <svg
        className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-background transform translate-x-1/2"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

      <Popover>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            {/* LOGO */}
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">{companyName}</span>
                  <img alt="logo" className="h-16 w-auto sm:h-16" src={logo} />
                </a>

                {/* MOBILE MENU BUTTON */}
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" />
                  </Popover.Button>
                </div>
              </div>
            </div>

            {/* 🌟 DESKTOP MENU */}
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  spy={true}
                  smooth={true}
                  duration={800}
                  offset={-70}   
                  activeClass="active"
                  className="font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}

              {/* CONTACT */}
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={800}
                offset={-70}
                className="font-medium text-red-600 hover:text-red-800 cursor-pointer"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>

        {/* 🌟 MOBILE MENU */}
        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel className="absolute z-10 top-0 inset-x-0 p-2 md:hidden">
            <div className="rounded-lg shadow-md bg-background ring-1 ring-black ring-opacity-5 overflow-hidden">

              {/* HEADER */}
              <div className="px-5 pt-4 flex items-center justify-between">
                <img className="h-8 w-auto" src={logo} alt="" />
                <Popover.Button className="bg-background rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                  <XIcon className="h-6 w-6" />
                </Popover.Button>
              </div>

              {/* MENU ITEMS */}
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    spy={true}
                    smooth={true}
                    duration={800}
                    offset={-70}
                    activeClass="active"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ))}

                {/* CONTACT */}
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={800}
                  offset={-70}
                  className="block px-3 py-2 rounded-md text-base font-medium text-red-600 hover:text-red-800 hover:bg-gray-50 cursor-pointer"
                >
                  Contact Us
                </Link>
              </div>

              {/* CTA BUTTON */}
              <a
                href={callToAction.href}
                className="block w-full px-5 py-3 text-center font-medium text-primary bg-gray-50 hover:bg-gray-100"
              >
                {callToAction.text}
              </a>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default Menu;