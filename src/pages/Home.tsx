import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import photos from '../data/bestPhotos.json';
import { getImgPath } from '../util/util';

const loveString = 'I love you Theo ❤️';
const tenSeconds = 10000; // 10 seconds = 10000 milliseconds

// Generate random positions for photos on the screen
const generateRandomPosition = () => ({
  x: Math.random() * window.innerWidth - window.innerWidth / 2,
  y: Math.random() * window.innerHeight - window.innerHeight / 2,
  rotate: Math.random() * 180 - 90, // Ensures rotation is between -90 and +90
});

// Generate final grid-aligned positions
const finalAlignedPosition = (index: number, windowWidth: number) => {
  // Decide how many columns (aka images per row) to display based on screen width
  let columns = 1;
  if (windowWidth >= 1200) columns = 6;
  else if (windowWidth >= 992) columns = 5;
  else if (windowWidth >= 768) columns = 4;
  else columns = 2;

  // Calculate the total size for each image
  const totalSizeForImage = (windowWidth / columns) * 0.9; // 80% of the column width

  // Calculate current row/column
  const row = Math.floor(index / columns);
  const col = index % columns;

  return {
    x:
      col * totalSizeForImage -
      (columns * totalSizeForImage) / 2 +
      totalSizeForImage / 2, // Center horizontally
    y: row * totalSizeForImage - window.innerHeight / 4, // Center vertically
    rotate: 0, // No rotation when aligned
  };
};

/**
 * Home Page.
 * A collection of our best photos together, animated in a fun way.
 */
const Home = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Stop animation after 10 seconds
    setTimeout(() => setIsAnimating(false), tenSeconds);

    // Recalculate positions on window resize
    const handleResize = () => setIsAnimating(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleReplay = () => {
    setIsAnimating(false); // Stop animation
    setTimeout(() => setIsAnimating(true), 100); // Restart animation after a short delay
    setTimeout(() => setIsAnimating(false), tenSeconds); // Stop after 10 seconds
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 relative flex items-center justify-center overflow-x-hidden">
      {/* Text */}
      <motion.h1
        className="absolute top-3 text-white text-4xl md:text-6xl font-bold z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        Adele and Theo
      </motion.h1>

      <p className="absolute top-10 md:top-15 text-white text-center text-sm md:text-lg z-10 mt-8 font-bold px-4">
        A story of love, adventure, and shared moments. Welcome to our journey.
        <br />
        {loveString}
      </p>

      {/* Images */}
      {photos.map((photo, index) => (
        <motion.div
          key={isAnimating ? `animating-${index}` : `aligned-${index}`} // Use key to force remount
          className="absolute overflow-y-auto"
          style={{
            width: `clamp(150px, ${window.innerWidth / 7}px, 250px)`, // Responsive sizing
            aspectRatio: '1 / 1', // Ensures consistent box aspect ratio
          }}
          initial={
            isAnimating
              ? generateRandomPosition()
              : finalAlignedPosition(index, windowWidth)
          }
          animate={
            isAnimating
              ? {
                  x: Math.random() * window.innerWidth - window.innerWidth / 2,
                  y:
                    Math.random() * window.innerHeight - window.innerHeight / 2,
                  rotate: Math.random() * 180 - 90,
                }
              : finalAlignedPosition(index, windowWidth)
          }
          transition={{
            duration: isAnimating ? 10 : 3, // 10 seconds for animation, 1 second to align
          }}
        >
          <img
            src={getImgPath(photo)}
            alt={`${index + 1}`}
            className="w-full h-full object-contain"
          />
        </motion.div>
      ))}

      {/* Replay Button */}
      <button
        className="absolute bottom-24 right-4 bg-white text-blue-500 font-bold py-2 px-4 rounded z-10"
        onClick={handleReplay}
      >
        Replay Animation
      </button>
    </div>
  );
};

export default Home;
