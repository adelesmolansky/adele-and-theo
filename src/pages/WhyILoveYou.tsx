import React from 'react';
import { motion } from 'framer-motion';
import lovePoint from '../data/lovePoints.json';

/**
 * Component to display a list of reasons why I love you.
 * The list is a vertical list of reasons with heart emojis.
 * We use the data from lovePoints.json to populate the list.
 */
const WhyILoveYou: React.FC = () => (
  <div className="min-h-screen bg-pink-100 flex flex-col items-center py-12 px-6">
    {/* Animate the page title */}
    <motion.h1
      className="text-4xl md:text-6xl text-pink-700 font-bold mb-8"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      What I Love About You
    </motion.h1>

    {/* Main section with the reasons */}
    <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
      <ul className="space-y-3">
        {lovePoint.map((point, index) => (
          <motion.li
            key={index}
            className="flex items-center text-md md:text-lg text-gray-700"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <span className="text-pink-500 mr-4">❤️</span>
            {point}
          </motion.li>
        ))}
      </ul>
    </div>

    {/* Little paragraph at the bottom */}
    <p className="text-md mt-4">
      Thanks for loving me too. Love is a wonderful thing when it's with you
      ❤️😊
    </p>
  </div>
);

export default WhyILoveYou;
