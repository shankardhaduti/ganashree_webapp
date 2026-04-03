import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;

  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center">
      <img
        className="w-full h-auto object-contain"
        src={mainHero.img}
        alt="hero image"
      />
    </div>
  );
};

export default MainHeroImage;