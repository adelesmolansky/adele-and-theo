import React from 'react';
import movies from '../data/movies.json';

const MovieDates: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Movie Dates
      </h1>
      <p className="text-lg text-center text-gray-600 mb-6">
        A collection of the movies we've watched together and my reflections.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
          >
            <h2 className="text-2xl font-semibold text-gray-800">
              {movie.name}
            </h2>
            <p className="text-gray-800 mt-2">
              {movie.month} {movie.year}
            </p>
            <p className="text-gray-600 mt-2">Reflection: {movie.reflection}</p>
            {movie.person && (
              <p className="text-blue-600 mt-2 font-medium">
                Recommended by: {movie.person}
              </p>
            )}
          </div>
        ))}
      </div>

      <p className="text-lg text-center text-gray-600 my-12">
        Now it's time for us to watch some more movies together! 🎥🍿
      </p>
    </div>
  );
};

export default MovieDates;
