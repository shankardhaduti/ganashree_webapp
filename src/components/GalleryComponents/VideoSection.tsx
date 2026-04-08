import { useRef, useEffect, useState } from "react";
// Optional: Install lucide-react for icons (npm install lucide-react)
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => setIsPlaying(false));
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="pb-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Watch Our Process
          </h3>

          <div className="relative group w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-2xl border-4 border-gray-100 bg-black">
            <video
              ref={videoRef}
              src="/assets/videos/WhatsApp Video 2026-03-30 at 8.27.15 PM.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />

            {/* CUSTOM CONTROLS OVERLAY */}
            <div className="absolute bottom-6 right-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              
              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                className="bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-3 rounded-full transition"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>

              {/* Mute/Unmute Button */}
              <button
                onClick={toggleMute}
                className="bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-3 rounded-full transition"
              >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;