import Header from "../components/Header";
import Footer from "../components/Fotter";
import LazyShow from "../components/LazyShow";
import Product from "../components/Product";

export default function ProductsPage() {
  return (
    <>
      <Header />
      <LazyShow>
        <Product />
      </LazyShow>
      <Footer />
    </>
  );
}