import React from 'react';

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PeopleIcon from '@mui/icons-material/People';
import FavoriteIcon from '@mui/icons-material/Favorite'
const stats = [
  {
    icon: PeopleIcon,
    value: "50+",
    label: "Experience",
    desc: "Over 50 years of expeirence",
    gradient: "linear-gradient(135deg, var(--color-primary), #c23945)",
  },
  {
    icon: LocalShippingIcon,
    value: "Across State",
    label: "Delievery",
    desc: "Providing delievery across Karnataka",
    gradient: "linear-gradient(135deg, var(--color-secondary), #c23945)",
  },
  {
    icon: FavoriteIcon,
    value: "0% cholestrol",
    label: "Healthcare",
    desc: "includes cholestrol free for helthier body",
    gradient: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
  }
];

const ImpactPage = () => {
  return (
    <main className="bg-white">

      {/* HERO */}
      <main className="bg-white">
  {/* HERO SECTION - REWRITTEN FOR GANHA SHREE BK MURAGOD */}
  <section className="relative min-h-[75vh] flex items-center justify-center text-center px-5 bg-gradient-to-br from-red-700 to-red-500">
    <div className="max-w-3xl text-white">
      
      {/* Badge highlighting FSSAI Registration [cite: 3, 4] */}
      <span className="uppercase tracking-[3px] text-sm font-semibold bg-white/20 px-4 py-1 rounded-full backdrop-blur">
        FSSAI Reg. No: 21225005001169
      </span>

      {/* Main Heading focusing on the Business Name [cite: 10] */}
      <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
        Ganha Shree BK Muragod:<br />
        Quality You Can Trust
      </h1>

      {/* Descriptive text using specific business details [cite: 13, 53, 59] */}
      <div className="mt-4">
        <div className="content">
          <p className="text-white/90 text-lg">
            Serving Banhatti since 2025 with a commitment to excellence 
            in vegetable oil processing and retail services.
          </p>
          <p className="text-white/80 text-sm mt-4 italic">
            Operating under the strict standards of the Food Safety and 
            Standards Act, 2006.
          </p>
        </div>
      </div>
      
      {/* Call to action or location focus [cite: 10] */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <div className="bg-white text-red-700 px-6 py-3 rounded-xl font-bold shadow-lg">
          Banahatti, Karnataka
        </div>
      </div>
    </div>
  </section>
</main>

      {/* STATS */}
      <section className="py-16 md:py-20 px-5">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-4"
              style={{ color: 'var(--color-secondary)' }}
            >
              Impact By The Numbers
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              A snapshot of the lives we've touched and the journey so far.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((s, i) => {
              const Icon = s.icon;

              return (
                <div
                  key={i}
                  className="bg-white p-10 rounded-2xl border border-gray-100 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-900/5"
                >
                  <div
                    className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center text-white shadow-lg"
                    style={{ background: s.gradient }}
                  >
                    <Icon size={32} />
                  </div>

                  <div
                    className="text-4xl font-bold mb-2"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {s.value}
                  </div>

                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: 'var(--color-secondary)' }}
                  >
                    {s.label}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* QUALITY & COMPLIANCE */}
      <section className="py-16 md:py-20 px-5 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-800">
            Quality Assurance & Compliance
          </h2>

          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
            
            <div className="text-gray-600 space-y-4">
              
              <p>
                At <strong>Ganha Shree BK Muragod</strong>, your health and safety are our highest priorities. 
                We operate in strict accordance with the Food Safety and Standards Authority of India (FSSAI).
              </p>

              <p>
                <strong className="text-red-600">
                  FSSAI Registration Number:
                </strong>{" "}
                21225005001169
              </p>

              <p>
                <strong>Regulatory Compliance:</strong> Our business is fully registered under the 
                FSS Act, 2006, as mandated by the Government of Karnataka.
              </p>

              <p>
                <strong>Standards:</strong> We comply with all provisions laid down for petty food 
                businesses to ensure a transparent and trustworthy relationship with our customers.
              </p>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
};

export default ImpactPage;