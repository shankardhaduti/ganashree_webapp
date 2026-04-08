import config from "../config/index.json";

const MainHero = () => {
  const { mainHero } = config;

  return (
    <main className="mt-4 mx-auto max-w-7xl px-4 sm:px-6 lg:mt-6 lg:px-8" id='mainhero'>
      <div className="sm:text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          <span className="inline text-red-700">{mainHero.title}</span>{" "}
          <span className="inline text-primary text-4xl sm:text-3xl md:text-6xl">
            {mainHero.subtitle}
          </span>
        </h1>

        <p className="mt-3 text-sm sm:text-base text-gray-500 sm:mt-4 sm:max-w-xl sm:mx-auto lg:mx-0">
          {mainHero.description}
        </p>

        <div className="mt-5 sm:flex sm:justify-center lg:justify-start gap-3">
          <div className="rounded-md shadow">
            <a href={mainHero.primaryAction.href} className="flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:opacity-90 transition">
              {mainHero.primaryAction.text}
            </a>
          </div>
          <div className="mt-3 sm:mt-0">
            <a href={mainHero.secondaryAction.href} className="flex items-center justify-center px-6 py-2 border border-primary text-sm font-medium rounded-md text-primary bg-transparent hover:bg-gray-50 transition">
              {mainHero.secondaryAction.text}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;