import Header from "../components/Header";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Fotter";
import LazyShow from "../components/LazyShow";
import ScrollToTop from "../components/About_components/ScrollToTop";
import Canvas from "../components/Canvas";

export default function ContactPage() {
  return (
    <>
      <Header />
      <LazyShow>
      <ContactUs />
        </LazyShow>
         <div className="relative w-full -mt-32 md:-mt-48 z-0">
        <Canvas />
      </div>
        <ScrollToTop/>
       <div className="relative w-full">
          
              <Footer />
            </div>
    </>
  );
}