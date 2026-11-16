import React, { useState } from 'react';
import { anniversaryConfig, MemoryItem } from '../data/anniversaryData';
import { Heart, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const MemoryGallery: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<Record<number, boolean>>({});

  const memories = anniversaryConfig.memories;

  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index % memories.length);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(selectedPhotoIndex === 0 ? memories.length - 1 : selectedPhotoIndex - 1);
    }
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % memories.length);
    }
  };

  const currentPhoto = selectedPhotoIndex !== null ? memories[selectedPhotoIndex] : null;

  // Duplicate memories array for seamless infinite marquee loop
  const duplicatedMemories = [...memories, ...memories];

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white via-pink-50/20 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/80 text-rose-700 text-xs font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>Cinematic Slideshow</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            A Thousand Memories, One Favourite Person.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Hover to pause. Click any photo to view in full resolution or tap the heart to save to your favourites.
          </p>
        </div>
      </div>

      {/* Moving Slow Slide Show Container */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Gradient fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-6 px-3">
          {duplicatedMemories.map((memory: MemoryItem, idx: number) => {
            const actualIndex = idx % memories.length;
            const isFav = !!favorites[memory.id];
            return (
              <div
                key={`${memory.id}-${idx}`}
                onClick={() => openLightbox(actualIndex)}
                className="group relative w-72 sm:w-80 h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-rose-50 cursor-pointer flex-shrink-0 transform hover:-translate-y-2 border-2 border-rose-100/80"
              >
                <img
                  src={memory.image}
                  alt={memory.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  onError={(e)=>{
                    (e.target as HTMLImageElement).src = '/photos/PHOTO_01.jpg';
                  }}
                />
                
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white">
                      {memory.date}
                    </span>
                    <button
                      onClick={(e) => toggleFavorite(memory.id, e)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-transform active:scale-90 ${isFav ? 'bg-rose-500 text-white' : 'bg-white/30 text-white hover:bg-white/50'}`}
                    >
                      <Heart className={`w-5 h-5 ${isFav ? 'fill-white' : ''}`} />
                    </button>
                  </div>

                  <div>
                    <p className="text-white text-base font-serif font-medium leading-snug mb-1">
                      {memory.caption}
                    </p>
                    <span className="text-rose-200 text-xs font-sans tracking-wide">
                      {memory.category}
                    </span>
                  </div>
                </div>

                {/* Always visible favorite badge if favorited */}
                {isFav && (
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-lg">
                    <Heart className="w-4 h-4 fill-white" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && currentPhoto && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevPhoto}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            <div className="relative w-full h-[60vh] sm:h-[70vh] bg-black flex items-center justify-center">
              <img
                src={currentPhoto.image}
                alt={currentPhoto.caption}
                className="max-h-full max-w-full object-contain"
                onError={(e)=>{
                  (e.target as HTMLImageElement).src = '/photos/PHOTO_01.jpg';
                }}
              />
            </div>

            <div className="w-full p-6 bg-gray-950 flex items-center justify-between border-t border-white/10">
              <div>
                <p className="text-white text-lg font-serif mb-1">{currentPhoto.caption}</p>
                <p className="text-rose-400 text-xs">{currentPhoto.category} • {currentPhoto.date}</p>
              </div>
              <button
                onClick={(e) => toggleFavorite(currentPhoto.id, e)}
                className={`px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all ${favorites[currentPhoto.id] ? 'bg-rose-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                <Heart className={`w-4 h-4 ${favorites[currentPhoto.id] ? 'fill-white' : ''}`} />
                <span>{favorites[currentPhoto.id] ? 'Favorited' : 'Favourite'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
