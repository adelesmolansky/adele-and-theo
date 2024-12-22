import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import photos from '../data/bestPhotos.json';
import { getImgPath } from '../util/util';

const loveString = 'I love you Theo <3';
const tenSeconds = 10000; // 10 seconds = 10000 milliseconds

// Generate random positions for photos on the screen
const generateRandomPosition = () => ({
  x: Math.random() * window.innerWidth - window.innerWidth / 2,
  y: Math.random() * window.innerHeight - window.innerHeight / 2,
  rotate: Math.random() * 180 - 90, // Ensures rotation is between -90 and +90
});

// Generate final grid-aligned positions
const finalAlignedPosition = (index: number) => {
  // determine the totalImagesPerRow based on the screen width and the amount of
  // spacing that we want between images
  const totalImagesPerRow = window.innerWidth / 300;

  const row = Math.floor(index / totalImagesPerRow);
  const col = index % totalImagesPerRow;
  const spacing = 250; // Adjust spacing between images

  return {
    x: col * spacing - (totalImagesPerRow * spacing) / 2, // Center horizontally
    y: row * spacing - 250, // greater number moves images up
    rotate: 0, // No rotation when aligned
  };
};

const Home = () => {
  // State to control animation
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Stop animation after 10 seconds
    setTimeout(() => setIsAnimating(false), tenSeconds);
  });

  const handleReplay = () => {
    setIsAnimating(false); // Stop animation
    setTimeout(() => setIsAnimating(true), 100); // Restart animation after a short delay

    // Stop animation after 10 seconds
    setTimeout(() => setIsAnimating(false), tenSeconds);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden relative flex items-center justify-center">
      {/* Text */}
      <motion.h1
        className="absolute top-3 text-white text-6xl md:text-8xl font-bold z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        Adele and Theo
      </motion.h1>

      <p className="absolute top-20 text-white text-center text-xl z-10 mt-8 font-bold">
        A story of love, adventure, and shared moments. Welcome to our journey.
        <br />
        {loveString}
      </p>

      {/* Images */}
      {photos.map((photo, index) => (
        <motion.img
          key={isAnimating ? `animating-${index}` : `aligned-${index}`} // Use key to force remount
          src={getImgPath(photo)}
          alt={`Photo ${index + 1}`}
          className="absolute w-48 object-cover rounded-lg shadow-lg"
          initial={
            isAnimating ? generateRandomPosition() : finalAlignedPosition(index)
          }
          animate={
            isAnimating
              ? {
                  x: Math.random() * window.innerWidth - window.innerWidth / 2,
                  y:
                    Math.random() * window.innerHeight - window.innerHeight / 2,
                  rotate: Math.random() * 180 - 90,
                }
              : finalAlignedPosition(index)
          }
          transition={{
            duration: isAnimating ? 10 : 3, // 10 seconds for animation, 1 second to align
          }}
        />
      ))}

      {/* Replay Button */}
      <button
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-white text-blue-500 font-bold py-2 px-4 rounded shadow-lg z-10"
        onClick={handleReplay}
      >
        Replay Animation
      </button>
    </div>
  );
};

export default Home;
