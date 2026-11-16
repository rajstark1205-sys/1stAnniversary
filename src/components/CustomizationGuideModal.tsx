import React from 'react';
import { X, Sparkles, FolderOpen, FileCode, Heart } from 'lucide-react';

interface CustomizationGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomizationGuideModal: React.FC<CustomizationGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl border border-rose-200 relative animate-fadeIn"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-600 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-rose-600 mb-2">
          <Sparkles className="w-5 h-5" />
          <span className="text-xs font-semibold uppercase tracking-wider">Personalisation Guide</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          How to Make This Website Your Own ❤️
        </h2>

        <div className="space-y-6 text-gray-600 text-sm sm:text-base leading-relaxed">
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-rose-50/60 border border-rose-100">
            <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 font-bold">1</div>
            <div>
              <h3 className="font-serif font-bold text-gray-900 mb-1 flex items-center gap-2">
                <FileCode className="w-4 h-4 text-rose-600" />
                <span>Editing Text, Dates & Messages</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Open <code className="bg-white px-1.5 py-0.5 rounded border border-rose-200 font-mono text-rose-700">src/data/anniversaryData.ts</code> to update names, dates, the anniversary love letter, reasons why you love her, quiz questions, and timeline memories.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-pink-50/60 border border-pink-100">
            <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center shrink-0 font-bold">2</div>
            <div>
              <h3 className="font-serif font-bold text-gray-900 mb-1 flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-pink-600" />
                <span>Replacing Photos</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Your photos are organized in <code className="bg-white px-1.5 py-0.5 rounded border border-pink-200 font-mono text-pink-700">public/photos/</code> as <code className="font-mono text-pink-700">PHOTO_01.jpg</code> through <code className="font-mono text-pink-700">PHOTO_20.jpg</code> and <code className="font-mono text-pink-700">OUR_FAVOURITE_PHOTO.jpg</code>. Simply replace these files with your personal pictures keeping the exact same filenames!
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
            <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 font-bold">3</div>
            <div>
              <h3 className="font-serif font-bold text-gray-900 mb-1 flex items-center gap-2">
                <Heart className="w-4 h-4 text-amber-600 fill-amber-600" />
                <span>Background Music</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                You can place your special song at <code className="bg-white px-1.5 py-0.5 rounded border border-amber-200 font-mono text-amber-800">public/audio/our-song.mp3</code>. If no file is provided, the website automatically plays a soothing Web Audio API ambient chord melody when music is toggled!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onClose}
            className="px-8 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-medium text-sm shadow-md transition-all"
          >
            Got It, Let's Celebrate! ❤️
          </button>
        </div>
      </div>
    </div>
  );
};
