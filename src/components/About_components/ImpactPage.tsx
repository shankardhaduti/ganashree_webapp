import ScrollToTop from "./ScrollToTop";

const ImpactPage = () => {
  return (
    <main className="bg-white w-full overflow-x-hidden">
      
    
      <h2 className="text-3xl font-bold text-center mt-6 mb-6">
        About Us
      </h2>

      <section className="relative min-h-[55vh] md:min-h-[60vh] flex items-center justify-center text-center px-4 md:px-6 pt-12 pb-6 bg-primary">
        
        <div className="max-w-4xl w-full text-white">
          
          {/* Badge */}
          <span className="uppercase tracking-[2px] md:tracking-[3px] text-[10px] sm:text-xs md:text-sm font-semibold bg-white/20 px-3 py-1.5 rounded-full backdrop-blur inline-block mb-6">
            FSSAI Reg. No: 21225005001169
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[1.1] md:leading-tight">
            Ganashri Basavaraj K Muragod
            <br className="hidden sm:block" />
            <span className="text-white/90">
              {" "}Quality You Can Trust
            </span>
          </h1>


          <div className="mt-6 space-y-4 max-w-2xl mx-auto">
            <p className="text-black/90 text-base sm:text-lg md:text-xl">
              Serving Banahatti since 2025 with a commitment to excellence in
              vegetable oil processing and retail services.
            </p>

            <p className="text-black/70 text-xs sm:text-sm italic border-t border-white/20 pt-4 inline-block px-4">
              Operating under the strict standards of the Food Safety and
              Standards Act, 2006.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 flex justify-center px-2">
            <div className="w-full sm:w-auto bg-white text-red-700 px-8 py-4 rounded-xl font-bold shadow-lg">
              Banahatti, Karnataka
            </div>
          </div>

        </div>
      </section>

   

      <ScrollToTop />
    </main>
  );
};

export default ImpactPage;