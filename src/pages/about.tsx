import Header from "../components/Header";
import Footer from "../components/Fotter";
import LazyShow from "../components/LazyShow";
import About from "../components/About";
import ScrollToTop from "../components/About_components/ScrollToTop";

export default function AboutPage() {
  return (
    <>
      <Header />
      <LazyShow>
        <About />
      </LazyShow>
      <ScrollToTop/>
      
    <div className="relative w-full">
       
           <Footer />
         </div>
    </>
  );
}