import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StoryTimeline } from './components/StoryTimeline';
import { MemoryGallery } from './components/MemoryGallery';
import { LoveLetter } from './components/LoveLetter';
import { CountdownReveal } from './components/CountdownReveal';
import { LoveSurprises } from './components/LoveSurprises';
import { QuizSection } from './components/QuizSection';
import { FavouriteView } from './components/FavouriteView';
import { FinalSurprise } from './components/FinalSurprise';
import { CustomizationGuideModal } from './components/CustomizationGuideModal';
import { FallingPetals } from './components/FallingPetals';
import { CustomCursor } from './components/CustomCursor';
import { Heart } from 'lucide-react';

export default function App() {
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-rose-100 selection:text-rose-900 relative">
      <FallingPetals />
      <CustomCursor />
      <Navbar onOpenGuide={() => setIsGuideOpen(true)} />
      
      <main>
        <Hero onEnterWorld={() => scrollToSection('timeline')} />
        <StoryTimeline />
        <MemoryGallery />
        <LoveLetter />
        <CountdownReveal />
        <LoveSurprises />
        <QuizSection />
        <FavouriteView />
        <FinalSurprise />
      </main>

      {/* Footer */}
      <footer className="bg-rose-950 text-rose-200 py-12 border-t border-rose-900/50 text-center relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-rose-900/60 border border-rose-700/50 flex items-center justify-center text-rose-300">
            <Heart className="w-5 h-5 fill-rose-400 text-rose-400 animate-pulse" />
          </div>
          <p className="font-serif text-lg text-rose-100">
            1st Anniversary • 17.11.2025 — 17.11.2026
          </p>
          <p className="text-xs text-rose-300/70">
            Created with infinite love and care for our first milestone together.
          </p>
          <button
            onClick={() => setIsGuideOpen(true)}
            className="text-xs text-amber-300 hover:underline mt-2 font-medium"
          >
            How to customise this website ✨
          </button>
        </div>
      </footer>

      <CustomizationGuideModal 
        isOpen={isGuideOpen} 
        onClose={() => setIsGuideOpen(false)} 
      />
    </div>
  );
}
