const PhotoGallery = () => {
  const images = [
  "/assets/images/WhatsApp Image 2026-03-31 at 3.49.19 PM.jpeg",
    "/assets/images/WhatsApp Image 2026-03-30 at 8.27.27 PM.jpeg", 
    "/assets/images/WhatsApp Image 2026-03-30 at 8.27.23 PM.jpeg", 
    "/assets/images/WhatsApp Image 2026-03-30 at 8.27.25 PM (1).jpeg",
    "/assets/images/WhatsApp Image 2026-03-30 at 8.27.28 PM.jpeg",  
    "/assets/images/WhatsApp Image 2026-03-30 at 8.27.26 PM.jpeg"
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Facility Gallery</h2>
        
        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md group">
              <img 
                src={src} 
                alt={`Gallery ${index}`} 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PhotoGallery;