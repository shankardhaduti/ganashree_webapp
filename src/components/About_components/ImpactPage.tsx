import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PeopleIcon from "@mui/icons-material/People";
import FavoriteIcon from "@mui/icons-material/Favorite";

const stats = [
  {
    icon: PeopleIcon,
    value: "50+",
    label: "Experience",
    desc: "Over 50 years of experience",
    gradient: "linear-gradient(135deg, #b91c1c, #C23945)",
  },
  {
    icon: LocalShippingIcon,
    value: "Across State",
    label: "Delivery",
    desc: "Providing delivery across Karnataka",
    gradient: "linear-gradient(135deg, #7a1f26, #C23945)",
  },
  {
    icon: FavoriteIcon,
    value: "0% Cholesterol",
    label: "Healthcare",
    desc: "Includes cholesterol free for a healthier body",
    gradient: "linear-gradient(135deg, #b91c1c, #7a1f26)",
  },
];

const ImpactPage = () => {
  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden">
      <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>

      {/* 1. HERO SECTION: Handles extreme narrow (320px) and wide desktop */}
      <section className="relative min-h-[80vh] md:min-h-[75vh] flex items-center justify-center text-center px-4 md:px-6 py-16 bg-gradient-to-br from-red-700 to-red-500">
        <div className="max-w-4xl w-full text-white">
          {/* Badge: Font scales down on mobile */}
          <span className="uppercase tracking-[2px] md:tracking-[3px] text-[10px] sm:text-xs md:text-sm font-semibold bg-white/20 px-3 py-1.5 rounded-full backdrop-blur inline-block mb-6">
            FSSAI Reg. No: 21225005001169
          </span>

          {/* Heading: Fluid scaling from 30px to 60px */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[1.1] md:leading-tight">
            Ganha Shree BK Muragod:
            <br className="hidden sm:block" />
            <span className="text-white/90"> Quality You Can Trust</span>
          </h1>

          {/* Description: Controlled max-width prevents long lines on desktop */}
          <div className="mt-6 space-y-4 max-w-2xl mx-auto">
            <p className="text-white/90 text-base sm:text-lg md:text-xl">
              Serving Banahatti since 2025 with a commitment to excellence in
              vegetable oil processing and retail services.
            </p>
            <p className="text-white/70 text-xs sm:text-sm italic border-t border-white/20 pt-4 inline-block px-4">
              Operating under the strict standards of the Food Safety and
              Standards Act, 2006.
            </p>
          </div>

          {/* CTA/Location: Full width on mobile, auto on desktop */}
          <div className="mt-10 flex justify-center px-2">
            <div className="w-full sm:w-auto bg-white text-red-700 px-8 py-4 rounded-xl font-bold shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-default">
              Banahatti, Karnataka
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION: Grid adapts from 1 to 2 to 3 columns */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900">
              Impact By The Numbers
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
              A snapshot of the lives we've touched and the journey so far.
            </p>
          </div>

          {/* Responsive Grid Logic */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 text-center transition-all duration-300 hover:shadow-2xl sm:hover:-translate-y-2"
                >
                  <div
                    className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 md:mb-8 rounded-2xl flex items-center justify-center text-white shadow-lg"
                    style={{ background: s.gradient }}
                  >
                    <Icon sx={{ fontSize: { xs: 30, md: 40 } }} />
                  </div>

                  <div className="text-3xl md:text-4xl font-black mb-2 text-red-700">
                    {s.value}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {s.label}
                  </h3>

                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. COMPLIANCE SECTION: Focused on readability */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white overflow-hidden rounded-3xl shadow-xl border border-gray-100">
            <div className="bg-red-700 py-6 md:py-8 px-6">
              <h2 className="text-2xl md:text-4xl font-bold text-white text-center">
                Quality Assurance & Compliance
              </h2>
            </div>

            <div className="p-8 md:p-16 text-center">
              <div className="text-gray-600 space-y-6 md:space-y-8 text-base md:text-xl leading-relaxed">
                <p>
                  At{" "}
                  <strong className="text-gray-900">
                    Ganha Shree BK Muragod
                  </strong>
                  , your health and safety are our highest priorities. We
                  operate in strict accordance with the FSSAI.
                </p>

                {/* Registration Number: break-all ensures no overflow on 320px screens */}
                <div className="py-6 px-4 bg-red-50 rounded-2xl border border-red-100 inline-block w-full">
                  <span className="text-red-700 font-bold block uppercase tracking-wider text-xs md:text-sm mb-2">
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
    </main>
  );
};

export default ImpactPage;
