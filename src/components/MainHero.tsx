import React from "react";
import config from "../config/index.json";

const MainHero = () => {
  const { mainHero } = config;

  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-14 lg:mt-16 lg:px-8" id='mainhero'>
      <div className="sm:text-center lg:text-left">
        {/* TITLE (BIGGER) + SUBTITLE */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          <span className="inline">{mainHero.title}</span>{" "}
          <span className="inline text-primary text-2xl sm:text-3xl md:text-4xl">
            {mainHero.subtitle}
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-3 text-sm sm:text-base text-gray-500 sm:mt-4 sm:max-w-xl sm:mx-auto md:mt-4 lg:mx-0">
          {mainHero.description}
        </p>

        {/* BUTTONS */}
        <div className="mt-5 sm:mt-6 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href={mainHero.primaryAction.href}
              className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary"
            >
              {mainHero.primaryAction.text}
            </a>
          </div>

          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href={mainHero.secondaryAction.href}
              className="w-full flex items-center justify-center px-6 py-2 border border-primary text-sm font-medium rounded-md text-secondary bg-background hover:bg-border hover:text-primary"
            >
              {mainHero.secondaryAction.text}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
