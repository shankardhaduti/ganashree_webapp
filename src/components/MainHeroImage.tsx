import { useEffect, useState } from "react";
import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[650px] overflow-hidden">
      <img
        src={mainHero.img}
        alt="hero image"
        className="w-full h-full object-cover"
        style={{
          objectPosition: "right center",
          clipPath: isDesktop
            ? "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)"
            : "none"
        }}
      />
    </div>
  );
};

export default MainHeroImage;