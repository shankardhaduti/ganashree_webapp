import Header from "../components/Header";
import Footer from "../components/Fotter";
import LazyShow from "../components/LazyShow";
import Product from "../components/Product";
import ScrollToTop from "../components/About_components/ScrollToTop";

export default function ProductsPage() {
  return (
    <>
      <Header />
      <LazyShow>
        <Product />
      </LazyShow>
      <ScrollToTop/>
      <div className="relative w-full">
  <Footer />
      </div>
    
    </>
  );
}