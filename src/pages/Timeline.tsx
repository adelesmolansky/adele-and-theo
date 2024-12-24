import React, { useState } from 'react';
import events from '../data/events.json';
import { getImgPath } from '../util/util';

/**
 * Timeline Page.
 * A collection of our best photos together, animated in a fun way.
 * Each event has a date, title, description, and photos.
 * Clicking on a photo enlarges it in a modal.
 */
const Timeline: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-pink-100 py-6 px-6 flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Title */}
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-4">
          Our Timeline
        </h1>
        {/* Main container for the events */}
        <div className="relative border-l-4 border-pink-500">
          {events.map((event, index) => (
            <div key={index} className="mb-6 ml-6 relative">
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
                          className="relative w-64 h-48 flex-shrink-0 rounded-lg shadow-md overflow-hidden cursor-pointer"
                          onClick={() => openModal(getImgPath(photo))}
                        >
                          <img
                            src={getImgPath(photo)}
                            alt={`${event.title} ${photoIndex + 1}`}
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

      {/* Modal for enlarged image */}
      {isModalOpen && modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg p-4 w-11/12 max-w-5xl max-h-[75vh] flex flex-col items-center">
            <button
              className="absolute top-1 right-1 font-extrabold text-lg hover:text-grey-600"
              onClick={closeModal}
            >
              X
            </button>
            <img
              src={modalImage}
              alt="Enlarged"
              className="max-w-full max-h-[70vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
