// import Gallery from "../components/Gallery";

// export default function GalleryPage() {
//   return <Gallery />;
// }


import Header from "../components/Header";
import Footer from "../components/Fotter";
import LazyShow from "../components/LazyShow";
import Gallery from "../components/Gallery";
import Canvas from "../components/Canvas";

export default function GalleryPage() {
  return (
    <>
      <Header />
      <LazyShow>
        <Gallery />
      </LazyShow>
       <div className="relative w-full -mt-32 md:-mt-48 z-0">
        <Canvas />
      </div>
      <div className="relative w-full">
    
        <Footer />
      </div>
     
    </>
  );
}