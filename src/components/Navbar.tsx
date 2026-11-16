import React, { useState, useEffect } from 'react';
import { Heart, Volume2, VolumeX, Music, BookOpen, Sparkles } from 'lucide-react';
import { romanticAudio } from '../utils/audioPlayer';

interface NavbarProps {
  onOpenGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGuide }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleMusic = async () => {
    const playing = await romanticAudio.togglePlay();
    setIsPlaying(playing);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 shadow-inner group-hover:scale-105 transition-transform">
            <Heart className="w-5 h-5 fill-rose-500 text-rose-500 animate-pulse" />
          </div>
          <span className="font-serif text-lg font-bold text-gray-800 tracking-wide">
            17.11.2026 <span className="text-rose-500 font-sans font-light">♥</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#timeline" className="hover:text-rose-600 transition-colors">Our Story</a>
          <a href="#gallery" className="hover:text-rose-600 transition-colors">Memories</a>
          <a href="#letter" className="hover:text-rose-600 transition-colors">Love Letter</a>
          <a href="#countdown" className="hover:text-rose-600 transition-colors">Countdown</a>
          <a href="#surprises" className="hover:text-rose-600 transition-colors">Surprises</a>
          <a href="#quiz" className="hover:text-rose-600 transition-colors">Quiz</a>
        </nav>

        <div className="flex items-center gap-3">
          {/* Buttons removed per user request */}
        </div>
      </div>
    </header>
  );
};
