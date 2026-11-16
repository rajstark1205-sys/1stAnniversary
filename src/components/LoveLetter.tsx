import React, { useState } from 'react';
import { anniversaryConfig } from '../data/anniversaryData';
import { Mail, Heart, Sparkles, Send } from 'lucide-react';

export const LoveLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openLetter = () => {
    setIsOpen(true);
  };

  return (
    <section id="letter" className="py-24 bg-gradient-to-b from-white via-rose-50/40 to-white relative overflow-hidden">
      {/* Decorative rose petals / sparkle background */}
      <div className="absolute top-10 right-10 text-rose-300 animate-pulse pointer-events-none">
        <Sparkles className="w-8 h-8 opacity-60" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/80 text-rose-700 text-xs font-medium mb-3">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>Digital Love Letter</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            A Letter From My Heart To Yours 💌
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            A quiet space dedicated entirely to what my heart feels for you.
          </p>
        </div>

        {!isOpen ? (
          /* Closed Envelope Card */
          <div className="max-w-md mx-auto bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl p-8 sm:p-12 shadow-xl border border-rose-200/60 text-center relative overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-200/40 rounded-full blur-2xl pointer-events-none" />

            <div className="w-24 h-24 rounded-full bg-rose-100 border-2 border-rose-300 flex items-center justify-center mx-auto mb-6 shadow-inner relative group cursor-pointer" onClick={openLetter}>
              <Mail className="w-12 h-12 text-rose-600 animate-bounce" />
              <div className="absolute -bottom-2 w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-md">
                <Heart className="w-4 h-4 fill-white" />
              </div>
            </div>

            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
              To My Dearest Love
            </h3>
            <p className="text-gray-600 text-sm mb-8 leading-relaxed">
              An envelope sealed with love, waiting just for you to open it on our 1st anniversary.
            </p>

            <button
              onClick={openLetter}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-medium shadow-lg shadow-rose-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Open Your Letter</span>
              <Heart className="w-4 h-4 fill-white" />
            </button>
          </div>
        ) : (
          /* Opened Letter Paper */
          <div className="max-w-3xl mx-auto bg-[#fffdf9] rounded-3xl p-8 sm:p-16 shadow-2xl border border-amber-200/80 relative animate-fadeIn transition-all duration-700">
            {/* Paper Texture and Stamp / Wax Seal */}
            <div className="absolute top-6 right-6 sm:top-10 sm:right-10 w-16 h-16 rounded-full bg-rose-700 text-white flex items-center justify-center shadow-lg border-2 border-rose-800 rotate-12">
              <Heart className="w-8 h-8 fill-white" />
            </div>

            <div className="font-serif text-gray-800 space-y-6 text-base sm:text-lg leading-relaxed">
              <p className="font-bold text-xl sm:text-2xl text-rose-900 mb-6">
                {anniversaryConfig.letter.greeting}
              </p>

              {anniversaryConfig.letter.paragraphs.map((p, idx) => (
                <p key={idx} className="text-gray-700">
                  {p}
                </p>
              ))}

              <div className="pt-6 border-t border-amber-200/60 mt-8">
                <p className="whitespace-pre-line text-rose-900 font-medium leading-relaxed">
                  {anniversaryConfig.letter.closing}
                </p>
                <p className="mt-6 font-serif italic text-rose-700 text-lg">
                  {anniversaryConfig.letter.signoff}
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs text-rose-600 hover:text-rose-800 underline transition-colors font-medium"
              >
                Close Envelope
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
