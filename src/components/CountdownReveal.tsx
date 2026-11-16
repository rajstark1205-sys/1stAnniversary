import React, { useState } from 'react';
import { Heart, Clock, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CountdownReveal: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 365,
    hours: 12,
    minutes: 45,
    seconds: 30
  });
  const [isFastForwarding, setIsFastForwarding] = useState(false);
  const [isReached, setIsReached] = useState(false);

  const startFastForward = () => {
    if (isFastForwarding || isReached) return;
    setIsFastForwarding(true);

    let d = timeLeft.days;
    let h = timeLeft.hours;
    let m = timeLeft.minutes;
    let s = timeLeft.seconds;

    const interval = setInterval(() => {
      d = Math.max(0, d - Math.floor(Math.random() * 30 + 15));
      h = Math.max(0, h - Math.floor(Math.random() * 4 + 2));
      m = Math.max(0, m - Math.floor(Math.random() * 8 + 4));
      s = Math.max(0, s - Math.floor(Math.random() * 15 + 10));

      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });

      if (d === 0 && h === 0 && m === 0 && s === 0) {
        clearInterval(interval);
        setIsFastForwarding(false);
        setIsReached(true);
        triggerCelebration();
      }
    }, 50);
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#e11d48', '#fb7185', '#f43f5e', '#fbbf24', '#fbcfe8']
    });
  };

  return (
    <section id="countdown" className="py-24 bg-gradient-to-b from-white via-rose-50/50 to-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/80 text-rose-700 text-xs font-medium mb-3">
          <Clock className="w-3.5 h-3.5 text-rose-500" />
          <span>Anniversary Countdown</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Finally, The Moment We've Been Waiting For...
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-8">
          Click the button below to fast-forward through 365 days of anticipation!
        </p>

        {/* Button */}
        {!isReached && (
          <div className="mb-12">
            <button
              onClick={startFastForward}
              disabled={isFastForwarding}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-rose-600 to-pink-500 hover:from-rose-700 hover:to-pink-600 text-white font-medium text-lg shadow-xl shadow-rose-500/30 transition-all transform hover:scale-105 active:scale-95 disabled:opacity-70 cursor-pointer"
            >
              <Heart className={`w-6 h-6 fill-white ${isFastForwarding ? 'animate-bounce' : 'animate-pulse'}`} />
              <span>{isFastForwarding ? 'Fast Forwarding to 0...' : 'Click me 💖'}</span>
            </button>
          </div>
        )}

        {/* Countdown Grid Below Button */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-rose-100 flex flex-col items-center">
            <span className="font-serif text-4xl sm:text-5xl font-bold text-rose-600 mb-1">
              {String(timeLeft.days).padStart(3, '0')}
            </span>
            <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">Days</span>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-rose-100 flex flex-col items-center">
            <span className="font-serif text-4xl sm:text-5xl font-bold text-rose-600 mb-1">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">Hours</span>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-rose-100 flex flex-col items-center">
            <span className="font-serif text-4xl sm:text-5xl font-bold text-rose-600 mb-1">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">Minutes</span>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-rose-100 flex flex-col items-center">
            <span className="font-serif text-4xl sm:text-5xl font-bold text-rose-600 mb-1">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">Seconds</span>
          </div>
        </div>

        {/* Celebration / Reveal Message */}
        {isReached && (
          <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden animate-fadeIn">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            
            <PartyPopper className="w-12 h-12 mx-auto mb-4 animate-bounce text-amber-200" />
            
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
              IT'S OUR FIRST ANNIVERSARY! ❤️
            </h3>
            
            <p className="text-rose-100 text-lg sm:text-xl font-medium mb-6">
              365 days down. Forever to go.
            </p>

            <button
              onClick={triggerCelebration}
              className="px-8 py-3 rounded-full bg-white text-rose-600 font-medium shadow-lg hover:bg-rose-50 transition-all transform hover:scale-105"
            >
              Celebrate With Confetti 🎉
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
