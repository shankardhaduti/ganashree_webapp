
import Canvas from '../components/Canvas';
import Header from '../components/Header';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Footer from '../components/Fotter';

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PeopleIcon from "@mui/icons-material/People";
import FavoriteIcon from "@mui/icons-material/Favorite";

const stats = [
  { icon: PeopleIcon, value: "50+", label: "Experience", desc: "Over 50 years of experience", gradient: "#FFD700" },
  { icon: LocalShippingIcon, value: "Across State", label: "Delivery", desc: "Providing delivery across Karnataka", gradient: "#FFD700" },
  { icon: FavoriteIcon, value: "0% Cholesterol", label: "Healthcare", desc: "Includes cholesterol free for a healthier body", gradient: "#FFD700" }
];

const App = () => {
  return (
    <div className="bg-background flex flex-col gap-y-0 overflow-x-hidden w-full">

      {/* --- HERO SECTION --- */}
      {/* Container height now adapts to the image height */}
      <div className="relative bg-background pt-0 md:pt-0">
        <div className="w-full mx-auto px-1 md:px-4">
          <Header />
          {/* items-stretch ensures the text side matches the image height */}
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 pt-2 pb-6">
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <MainHero />
            </div>
            <div className="w-full lg:w-1/2">
               {/* Make sure MainHeroImage does NOT have 'absolute' positioning inside its own file */}
               <MainHeroImage />
            </div>
          </div>
        </div>
      </div>

      {/* --- STATS SECTION --- */}
      <section className="pt-2 pb-6 md:pb-8 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-2 text-gray-900">
              Impact By The Numbers
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
              A snapshot of the lives we've touched and the journey so far.
            </p>
          </div>
      

      {/* MAIN CONTENT SECTIONS */}
     


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="bg-white p-4 md:p-6 rounded-3xl border border-gray-100 text-center transition-all hover:shadow-lg">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-white shadow-md" style={{ background: s.gradient }}>
                    <Icon sx={{ fontSize: { xs: 24, md: 32 } }} />
                  </div>
                  <div className="text-2xl md:text-3xl font-black mb-1 text-primary">{s.value}</div>
                  <h3 className="text-lg font-bold mb-1 text-gray-800">{s.label}</h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- QUALITY ASSURANCE SECTION --- */}
      {/* Restored to Original Large Impact Size with relative positioning */}
    <section className="pt-16 md:pt-24 pb-0 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white overflow-hidden rounded-3xl shadow-xl border border-gray-100">
            <div className="bg-primary py-6 md:py-8 px-6">
              <h2 className="text-2xl md:text-4xl font-bold text-white text-center">
                Quality Assurance & Compliance
              </h2>
            </div>

            <div className="p-8 md:p-16 text-center">
              <div className="text-gray-600 space-y-6 md:space-y-8 text-base md:text-xl leading-relaxed">
                <p>
                  At{" "}
                  <strong className="text-gray-900">
                    Ganashri Basavaraj K Muragod
                  </strong>
                  , your health and safety are our highest priorities. We
                  operate in strict accordance with the FSSAI.
                </p>

                {/* Registration Number: break-all ensures no overflow on 320px screens */}
                <div className="py-6 px-4 bg-yellow-50 rounded-2xl border border-red-100 inline-block w-full">
                  <span className="text-primary font-bold block uppercase tracking-wider text-xs md:text-sm mb-2">
                    FSSAI Registration Number
                  </span>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight sm:tracking-widest break-all">
                    21225005001169
                  </span>
                </div>

                {/* Sub-info grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 pt-6 text-left">
                  <div className="p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
                    <p className="font-bold text-gray-900 mb-2">
                      Regulatory Compliance
                    </p>
                    <p className="text-sm md:text-base text-gray-500">
                      Registered under the FSS Act, 2006, as mandated by the
                      Government of Karnataka.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
                    <p className="font-bold text-gray-900 mb-2">
                      Safety Standards
                    </p>
                    <p className="text-sm md:text-base text-gray-500">
                      We comply with all provisions for petty food businesses to
                      ensure total transparency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         
      </section>
     

      {/* --- FOOTER & WAVES --- */}
      {/* -mt-32 pulls the Canvas waves up UNDER the Compliance card to fix the gap */}
      <div className="relative w-full -mt-32 md:-mt-48 z-0">
        <Canvas />
        <div className="bg-gray-900"> 
          <Footer />
        </div>
      </div>

    
    </div>
  );
};

export default App;