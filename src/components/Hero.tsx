import React from 'react';
import { Heart, Sparkles, ArrowDown } from 'lucide-react';
import { anniversaryConfig } from '../data/anniversaryData';
import { romanticAudio } from '../utils/audioPlayer';

interface HeroProps {
  onEnterWorld: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onEnterWorld }) => {
  const handleEnter = async () => {
    try {
      await romanticAudio.play();
    } catch {
      // ignore
    }
    onEnterWorld();
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-rose-50/80 via-pink-50/40 to-white pt-20 pb-16">
      {/* Background floating glow and decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Floating Polaroid Memory Snapshots in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        {/* Left Floating Polaroid */}
        <div className="absolute top-[20%] left-[8%] w-44 bg-white p-3 pb-6 rounded-xl shadow-xl transform -rotate-6 animate-bounce" style={{ animationDuration: '6s' }}>
          <div className="w-full h-36 bg-rose-50 rounded-lg overflow-hidden mb-2">
            <img src="/photos/PHOTO_01.jpg" alt="Memory Snapshot" className="w-full h-full object-cover" />
          </div>
          <p className="font-serif text-xs text-center text-gray-700 italic">Our first memory ❤️</p>
        </div>

        {/* Right Floating Polaroid */}
        <div className="absolute top-[28%] right-[8%] w-44 bg-white p-3 pb-6 rounded-xl shadow-xl transform rotate-6 animate-bounce" style={{ animationDuration: '7s', animationDelay: '1s' }}>
          <div className="w-full h-36 bg-pink-50 rounded-lg overflow-hidden mb-2">
            <img src="/photos/PHOTO_03.jpg" alt="Memory Snapshot" className="w-full h-full object-cover" />
          </div>
          <p className="font-serif text-xs text-center text-gray-700 italic">Precious moments ✨</p>
        </div>
      </div>

      {/* Floating sparkles and mini hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[15%] text-rose-300 animate-bounce" style={{ animationDuration: '3s' }}>
          <Sparkles className="w-5 h-5 opacity-70" />
        </div>
        <div className="absolute top-36 right-[20%] text-pink-400 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
          <Heart className="w-4 h-4 fill-pink-300 opacity-60" />
        </div>
        <div className="absolute bottom-32 left-[25%] text-rose-400 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
          <Heart className="w-5 h-5 fill-rose-200 opacity-60" />
        </div>
        <div className="absolute bottom-28 right-[30%] text-amber-300 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '2s' }}>
          <Sparkles className="w-6 h-6 opacity-70" />
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center z-10 flex flex-col items-center">
        {/* Date badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-rose-200/60 shadow-sm text-rose-700 text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4 text-rose-500" />
          <span>{anniversaryConfig.hero.dateDisplay} — 1st Anniversary</span>
        </div>

        {/* Animated Center Heart */}
        <div className="relative mb-8 group cursor-pointer" onClick={handleEnter}>
          <div className="absolute inset-0 bg-rose-400/20 rounded-full blur-xl group-hover:bg-rose-400/40 transition-all duration-500 scale-110" />
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-rose-500 to-pink-400 flex items-center justify-center shadow-xl shadow-rose-500/25 transform transition-transform group-hover:scale-105">
            <Heart className="w-14 h-14 sm:w-18 sm:h-18 fill-white text-white animate-pulse" />
          </div>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 tracking-tight mb-6">
          {anniversaryConfig.hero.title}
        </h1>

        <p className="font-sans text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed mb-4">
          {anniversaryConfig.hero.subtitle}
        </p>

        <p className="font-serif italic text-rose-600 text-sm sm:text-base mb-10 tracking-wide">
          "{anniversaryConfig.hero.tagline}"
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={handleEnter}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-rose-600 to-pink-500 text-white font-medium text-lg shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            <span>Enter Our Little World ♡</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
