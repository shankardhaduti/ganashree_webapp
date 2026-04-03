const VideoSection = () => {
  return (
    <section className="pb-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Watch Our Process</h3>
          
          {/* 16:9 Aspect Ratio Box */}
          <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="assets\videos\WhatsApp Video 2026-03-30 at 8.27.15 PM.mp4"
              title="Ganha Shree Production Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
export default VideoSection;