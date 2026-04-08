import Header from "../components/Header";
import Footer from "../components/Fotter";
import LazyShow from "../components/LazyShow";
import About from "../components/About";
import ScrollToTop from "../components/About_components/ScrollToTop";
import Canvas from "../components/Canvas";

export default function AboutPage() {
  return (
    <>
      {/* Header on top */}
      <Header />

      {/* Main content */}
      <LazyShow>
        <About />
      </LazyShow>

      {/* Canvas / Wave animation behind content */}
      <div className="relative w-full -mt-32 md:-mt-48 z-0">
        <Canvas />
      </div>

      {/* Scroll to Top button */}
      <ScrollToTop />

      {/* Footer */}
      <div className="relative w-full">
        <Footer />
      </div>
    </>
  );
}