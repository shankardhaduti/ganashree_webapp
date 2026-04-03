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
import Gallery from '../components/Gallery'; 
import Footer from '../components/Fotter'; // Ensure the filename matches

const App = () => {
  return (
    /* Change 1: Added overflow-x-hidden here to kill the bottom scrollbar */
    <div className="bg-background flex flex-col gap-y-16 overflow-x-hidden w-full">
      
      {/* HERO SECTION */}
      <div className="relative bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>

      <Canvas />

      {/* MAIN CONTENT SECTIONS */}
      <LazyShow>
        <About />
      </LazyShow>

      <LazyShow>
        <Gallery />
      </LazyShow>

      <LazyShow>
        <Product />
      </LazyShow>

      <LazyShow>
        <ContactUs />
      </LazyShow>

      {/* FOOTER SECTION - Outside of any restricted width containers */}
      <div className="relative w-full">
        <Canvas />
        <Footer />
      </div>

      <Analytics />
    </div>
  );
};

export default App;