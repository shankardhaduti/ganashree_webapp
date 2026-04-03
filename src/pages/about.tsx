import Header from "../components/Header";
import Footer from "../components/Fotter";
import LazyShow from "../components/LazyShow";
import About from "../components/About";

export default function AboutPage() {
  return (
    <>
      <Header />
      <LazyShow>
        <About />
      </LazyShow>
      <Footer />
    </>
  );
}