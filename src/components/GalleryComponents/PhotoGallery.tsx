const PhotoGallery = () => {
  const images = [
  "/assets/images/img1.jpeg",
    "/assets/images/img2.jpeg", 
    "/assets/images/img11.jpeg", 
    "/assets/images/img9.jpeg",
    "/assets/images/img4.jpeg",  
    "/assets/images/img22.jpeg"
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