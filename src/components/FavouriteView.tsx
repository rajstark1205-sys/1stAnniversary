import React, { useState, useEffect } from 'react';
import { anniversaryConfig } from '../data/anniversaryData';
import { Heart, Sparkles } from 'lucide-react';

export const FavouriteView: React.FC = () => {
  const allPhotos = [
    "/photos/OUR_FAVOURITE_PHOTO.jpg",
    ...anniversaryConfig.memories.map(m => m.image)
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % allPhotos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [allPhotos.length]);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-pink-50/30 to-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/80 text-rose-700 text-xs font-medium mb-3">
          <Sparkles className="w-3.5 h-3.5 text-rose-500" />
          <span>Special Highlight</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          And My Favourite View Will Always Be You.
        </h2>

        <div className="relative max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-rose-50 mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-end p-8">
            <p className="text-white font-serif text-lg italic">
              "Among all the beautiful things in this world, you're still my favourite."
            </p>
          </div>

          <div className="relative w-full h-[450px] sm:h-[550px]">
            {allPhotos.map((photo, idx) => (
              <img
                key={photo + idx}
                src={photo}
                alt={`Favourite View ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                onError={(e)=>{
                  (e.target as HTMLImageElement).src = '/photos/PHOTO_01.jpg';
                }}
              />
            ))}
          </div>

          <div className="absolute bottom-4 right-4 z-20 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-medium">
            {currentIndex + 1} / {allPhotos.length}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-rose-600 font-serif text-lg">
          <Heart className="w-5 h-5 fill-rose-500 text-rose-500 animate-pulse" />
          <span>Forever & Always</span>
          <Heart className="w-5 h-5 fill-rose-500 text-rose-500 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
