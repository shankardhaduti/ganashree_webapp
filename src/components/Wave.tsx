import { FC, useEffect, useRef } from "react";
import { useCanvasContext } from "../hooks/useCanvas";
import useResponsiveSize from "../hooks/useResponsiveSize";
import WaveObj from "../utils/wave";

const Wave: FC = () => {
  const { context } = useCanvasContext();
  const { width } = useResponsiveSize();
  const height = 600;
  
  // Use a Ref for frequency so it doesn't reset or trigger re-renders
  const frequencyRef = useRef(0.013);

  useEffect(() => {
    if (!context) return;

    // Updated to your Brand Colors: Brown and Gold
    const waves = {
      frontWave: new WaveObj([0.0211, 0.028, 0.015], 'rgba(139, 69, 19, 0.08)'), // Saddle Brown
      backWave: new WaveObj([0.0122, 0.018, 0.005], 'rgba(255, 215, 0, 0.08)'),  // Gold
    };

    let animationId: number;

    const render = () => {
      // Clear exactly the width we have
      context.clearRect(0, 0, width, height);
      
      Object.values(waves).forEach((wave) => {
        wave.draw(context, width, height, frequencyRef.current);
      });

      frequencyRef.current += 0.013;
      animationId = requestAnimationFrame(render);
    };

    render();

    // CLEANUP: Stops the animation when the component unmounts
    return () => cancelAnimationFrame(animationId);
  }, [context, width]); // Only restarts if the window is resized

  return null;
};

export default Wave;