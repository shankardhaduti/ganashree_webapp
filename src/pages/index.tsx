import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Product from '../components/Product';
import ContactUs from '../components/ContactUs';
import Gallery from '../components/Gallery'; // 1. Added Gallery Import
import Footer from '../components/Fotter';  // Fixed "Fotter" typo

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>

      <Canvas />


     

    

      <LazyShow>
        <>
          <Canvas />
          <Footer />
        </>
      </LazyShow>
      
      <Analytics />
    </div>
  );
};

export default App;