import Header from "../components/Header";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Fotter";
import LazyShow from "../components/LazyShow";

export default function ContactPage() {
  return (
    <>
      <Header />
      <LazyShow>
      <ContactUs />
        </LazyShow>
      <Footer />
    </>
  );
}