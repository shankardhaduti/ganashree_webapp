import config from "../config/index.json";

const MainHero = () => {
  const { mainHero } = config;

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4" id="mainhero">
  <div className="sm:text-center lg:text-left">
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-secondary leading-tight">
      {mainHero.title}
    </h1>
    <p className="inline text-primary text-4xl sm:text-3xl md:text-4xl">
      {mainHero.subtitle}
    </p>
    <p className="mt-3 text-lg sm:text-base text-gray-500 sm:max-w-xl sm:mx-auto lg:mx-0">
      {mainHero.description}
    </p>
  </div>
</main>
  );
};

export default MainHero;