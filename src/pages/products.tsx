import Header from "../components/Header";
import Footer from "../components/Fotter";
import LazyShow from "../components/LazyShow";
import Product from "../components/Product";
import ScrollToTop from "../components/About_components/ScrollToTop";
import Canvas from "../components/Canvas";

export default function ProductsPage() {
  return (
    <>
      <Header />
      <LazyShow>
        <Product />
      </LazyShow>
      <ScrollToTop/>
       <div className="relative w-full -mt-32 md:-mt-48 z-0">
              <Canvas />
            </div>
      <div className="relative w-full">
  <Footer />
      </div>
    
    </>
  );
}