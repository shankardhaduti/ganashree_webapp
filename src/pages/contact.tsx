import Header from "../components/Header";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Fotter";
import LazyShow from "../components/LazyShow";
import ScrollToTop from "../components/About_components/ScrollToTop";

export default function ContactPage() {
  return (
    <>
      <Header />
      <LazyShow>
      <ContactUs />
        </LazyShow>
        <ScrollToTop/>
       <div className="relative w-full">
          
              <Footer />
            </div>
    </>
  );
}