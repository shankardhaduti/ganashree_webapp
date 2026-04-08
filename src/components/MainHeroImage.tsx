import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;

  return (
    /* Removed absolute positioning so the div expands to the image height */
    <div className="w-full flex items-center justify-center p-4">
      <img
        className="w-full h-auto object-contain" 
        src={mainHero.img}
        alt="hero image"
      />
    </div>
  );
};

export default MainHeroImage;