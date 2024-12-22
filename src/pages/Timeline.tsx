import React from 'react';
import events from '../data/events.json';
import { getImgPath } from '../util/util';

const Timeline: React.FC = () => (
  <div className="min-h-screen bg-pink-100 py-12 px-6 flex justify-center">
    <div className="w-full max-w-4xl">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Our Timeline
      </h1>
      <div className="relative border-l-4 border-pink-500">
        {events.map((event, index) => (
          <div key={index} className="mb-12 ml-6 relative">
            {/* Dot to mark the event on the timeline */}
            <div className="absolute -left-10 top-0 w-6 h-6 bg-pink-500 rounded-full border-4 border-gray-100"></div>
            {/* Date Label */}
            <p className="absolute -left-[8.5rem] top-1 text-gray-600 text-sm font-bold">
              {event.date}
            </p>
            {/* Event Content */}
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-xl font-semibold text-pink-500">
                {event.title}
              </h3>
              <p className="text-gray-700 mt-2">{event.description}</p>
              {event.photos && (
                <div className="mt-4">
                  <div className="overflow-x-auto flex space-x-4">
                    {event.photos.map((photo, photoIndex) => (
                      <div
                        key={photoIndex}
                        // give each photo the same possible width and height
                        className="relative w-64 h-48 flex-shrink-0 rounded-lg shadow-md overflow-hidden"
                      >
                        <img
                          src={getImgPath(photo)}
                          alt={`${event.title} ${photoIndex + 1}`}
                          // fill the container but preserve aspect ratio
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Timeline;
