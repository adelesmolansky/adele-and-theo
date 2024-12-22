import React from 'react';
import dinners from '../data/dinners.json';

// Prefix for the image paths
const IMAGE_PREFIX = '/images/homeCookedDinners/';

/**
 * Home Cooked Dinners Page.
 * A gallery of past meals and a collection of dinner ideas for inspiration.
 */
const HomeCookedDinners: React.FC = () => {
  const dinnerIdeas = dinners.ideas;
  const dinnerPhotos = dinners.photos;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 to-yellow-300 p-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Home Cooked Dinners
      </h1>
      <p className="text-lg text-center text-gray-600 mb-4">
        A gallery of our past meals and a collection of dinner ideas for
        inspiration!
      </p>

      {/* Gallery Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Past Meals
        </h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
          {dinnerPhotos.map((photo, index) => (
            <div key={index} className="relative group">
              {/* Meal Image */}
              <img
                src={`${IMAGE_PREFIX}${photo.filename}`}
                alt={`Meal ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
              {/* Hover Effect: Meal Date */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <p className="text-white text-lg font-semibold">{photo.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dinner Ideas Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Dinner Ideas
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          {dinnerIdeas.map((idea, index) => (
            <li key={index} className="mb-2">
              {idea}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomeCookedDinners;
