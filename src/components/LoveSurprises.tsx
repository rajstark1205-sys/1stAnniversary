import React, { useState } from 'react';
import { anniversaryConfig, OpenWhenCard } from '../data/anniversaryData';
import { Heart, Sparkles, Mail, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';

export const LoveSurprises: React.FC = () => {
  // A. Why I Love You state
  const [reasonIndex, setReasonIndex] = useState<number>(0);
  const [isAnimatingReason, setIsAnimatingReason] = useState(false);

  const nextReason = () => {
    setIsAnimatingReason(true);
    setTimeout(() => {
      setReasonIndex((prev) => (prev + 1) % anniversaryConfig.reasons.length);
      setIsAnimatingReason(false);
    }, 200);
  };

  // B. Open When state
  const [activeEnvelope, setActiveEnvelope] = useState<OpenWhenCard | null>(null);

  // C. How Much I Love You state
  const [clickCount, setClickCount] = useState(0);
  const [loveMessage, setLoveMessage] = useState("Click the heart to measure my love!");

  const handleGrowHeart = () => {
    const nextCount = clickCount + 1;
    setClickCount(nextCount);
    if (nextCount > 10) {
      setLoveMessage("Still not enough to measure how much I love you! ❤️♾️");
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    } else if (nextCount > 5) {
      setLoveMessage("Growing bigger and bigger, just like my love for you! 💖");
    } else {
      setLoveMessage("Keep clicking! My love keeps expanding! 💕");
    }
  };

  return (
    <section id="surprises" className="py-24 bg-gradient-to-b from-white via-pink-50/30 to-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/80 text-rose-700 text-xs font-medium mb-3">
            <Gift className="w-3.5 h-3.5 text-rose-500" />
            <span>Interactive Surprises</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Little Things, Just For You.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            A few playful ways to remind you how much you are cherished every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* A. Why I Love You Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-rose-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-rose-600 font-serif font-bold text-lg mb-4">
                <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
                <span>Why I Love You</span>
              </div>
              <p className="text-gray-600 text-sm mb-6">
                Click the heart to discover another reason why you mean the world to me.
              </p>

              <div className={`min-h-[120px] p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-200/60 flex items-center justify-center text-center transition-all duration-300 ${isAnimatingReason ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                <p className="font-serif text-lg sm:text-xl text-rose-900 italic leading-relaxed">
                  "{anniversaryConfig.reasons[reasonIndex]}"
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                onClick={nextReason}
                className="px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-medium text-sm shadow-md shadow-rose-500/25 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Reveal Another Reason</span>
              </button>
            </div>
          </div>

          {/* C. How Much I Love You Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-rose-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-rose-600 font-serif font-bold text-lg mb-4">
                <Sparkles className="w-5 h-5 text-rose-500" />
                <span>How Much I Love You</span>
              </div>
              <p className="text-gray-600 text-sm mb-6">
                Tap the heart repeatedly and watch it grow with every beat!
              </p>

              <div className="flex flex-col items-center justify-center my-6">
                <button
                  onClick={handleGrowHeart}
                  style={{ transform: `scale(${1 + Math.min(clickCount * 0.08, 0.8)})` }}
                  className="w-24 h-24 rounded-full bg-gradient-to-tr from-rose-600 to-pink-500 flex items-center justify-center shadow-xl shadow-rose-500/30 transition-transform duration-300 active:scale-95 cursor-pointer"
                >
                  <Heart className="w-12 h-12 fill-white text-white animate-pulse" />
                </button>
              </div>

              <p className="text-center font-serif text-rose-900 font-medium text-base">
                {loveMessage}
              </p>
            </div>

            <div className="mt-8 text-center text-xs text-gray-400">
              Clicks: {clickCount}
            </div>
          </div>

          {/* B. Open When... Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-rose-100 lg:col-span-2">
            <div className="flex items-center gap-2 text-rose-600 font-serif font-bold text-lg mb-2">
              <Mail className="w-5 h-5 text-rose-500" />
              <span>Open When... Mini Envelopes</span>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Select an envelope whenever you need a little extra love or comfort.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {anniversaryConfig.openWhen.map((env: OpenWhenCard) => (
                <div
                  key={env.id}
                  onClick={() => setActiveEnvelope(env)}
                  className="group cursor-pointer bg-gradient-to-br from-rose-50/80 to-pink-50/80 rounded-2xl p-5 border border-rose-200/70 hover:border-rose-400 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Heart className="w-6 h-6 fill-rose-500 text-rose-500" />
                  </div>
                  <h4 className="font-serif font-bold text-gray-900 text-sm mb-1">{env.title}</h4>
                  <span className="text-[11px] text-gray-500">{env.subtitle}</span>
                </div>
              ))}
            </div>

            {/* Envelope Modal */}
            {activeEnvelope && (
              <div 
                onClick={() => setActiveEnvelope(null)}
                className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
              >
                <div 
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-rose-200 text-center relative animate-fadeIn"
                >
                  <div className="w-16 h-16 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 fill-rose-500 text-rose-500" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{activeEnvelope.title}</h3>
                  <p className="text-gray-700 font-serif text-base leading-relaxed mb-6 bg-rose-50 p-6 rounded-2xl border border-rose-100">
                    "{activeEnvelope.message}"
                  </p>
                  <button
                    onClick={() => setActiveEnvelope(null)}
                    className="px-6 py-2.5 rounded-full bg-rose-600 text-white font-medium text-sm shadow-md hover:bg-rose-700 transition-colors"
                  >
                    Close Letter ❤️
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
