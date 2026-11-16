import React, { useState } from 'react';
import { anniversaryConfig } from '../data/anniversaryData';
import { Heart, Sparkles, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';

export const FinalSurprise: React.FC = () => {
  const [revealed, setRevealed] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#e11d48', '#fb7185', '#fbbf24', '#ffffff', '#9f1239']
    });
  };

  return (
    <section className="py-28 bg-gradient-to-b from-rose-950 via-rose-900 to-rose-950 text-white relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-rose-200 text-xs font-medium mb-6">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>The Grand Finale</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl font-bold mb-6 tracking-tight">
          Happy 1st Anniversary, My Love. ❤️
        </h2>

        <p className="text-rose-200 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
          One year of us. A lifetime of memories waiting to happen.
        </p>

        {!revealed ? (
          <div className="flex justify-center">
            <button
              onClick={handleReveal}
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium text-lg shadow-xl shadow-rose-900/50 transition-all transform hover:scale-105 active:scale-95"
            >
              <Gift className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>One Last Surprise...</span>
            </button>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-rose-500/30 border border-rose-400 text-rose-200 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 fill-rose-400 text-rose-400 animate-pulse" />
            </div>

            <p className="font-serif text-lg sm:text-xl text-rose-100 italic leading-relaxed whitespace-pre-line mb-8">
              "{anniversaryConfig.finalMessage}"
            </p>

            <div className="pt-6 border-t border-white/10 text-rose-300 text-sm font-medium tracking-widest uppercase">
              Forever isn't long enough with you.
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
