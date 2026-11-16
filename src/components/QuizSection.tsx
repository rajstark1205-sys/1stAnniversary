import React, { useState } from 'react';
import { anniversaryConfig, QuizQuestion } from '../data/anniversaryData';
import { Heart, Sparkles, CheckCircle2, Award, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

export const QuizSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const question: QuizQuestion = anniversaryConfig.quiz[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (selectedOption !== null) return; // already answered
    setSelectedOption(idx);
    setShowExplanation(true);
    question.correctIndex = idx;
    setScore(prev => prev + 1);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    if (currentIdx < anniversaryConfig.quiz.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setIsFinished(true);
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    }
  };

  const restartQuiz = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <section id="quiz" className="py-24 bg-gradient-to-b from-white via-rose-50/40 to-white relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/80 text-rose-700 text-xs font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>Our Little Game</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Well Do You Know Us?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            A cute playful quiz about our memories, quirks, and little moments together.
          </p>
        </div>

        {!isFinished ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-rose-100 relative">
            <div className="flex justify-between items-center mb-6 text-xs font-semibold text-rose-600">
              <span>Question {currentIdx + 1} of {anniversaryConfig.quiz.length}</span>
              <span>Score: {score}</span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 mb-8 leading-snug">
              {question.question}
            </h3>

            <div className="space-y-4 mb-8">
              {question.options.map((opt: string, idx: number) => {
                let btnStyle = "bg-rose-50/60 border-rose-200/80 text-gray-800 hover:bg-rose-100/80 hover:border-rose-300";
                
                if (selectedOption !== null) {
                  if (idx === question.correctIndex) {
                    btnStyle = "bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold";
                  } else if (idx === selectedOption) {
                    btnStyle = "bg-rose-100 border-rose-400 text-rose-900";
                  } else {
                    btnStyle = "bg-gray-50 border-gray-200 text-gray-400 opacity-60";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={selectedOption !== null}
                    className={`w-full p-4 rounded-2xl border text-left font-medium text-sm sm:text-base transition-all flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {selectedOption !== null && idx === question.correctIndex && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    )}
                  </button>
                );
              })}
            </div>

            {showExplanation && (
              <div className="p-5 rounded-2xl bg-rose-50/80 border border-rose-200 text-rose-900 text-sm font-serif italic mb-8 animate-fadeIn">
                "{question.explanation}"
              </div>
            )}

            {selectedOption !== null && (
              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  className="px-8 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-medium text-sm shadow-md shadow-rose-500/25 transition-all"
                >
                  {currentIdx < anniversaryConfig.quiz.length - 1 ? 'Next Question →' : 'See Final Result ❤️'}
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Quiz Finished Screen */
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-rose-100 text-center animate-fadeIn">
            <div className="w-20 h-20 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-6 shadow-inner">
              <Award className="w-10 h-10" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Quiz Completed! 🎉
            </h3>

            <p className="text-gray-600 text-base mb-6">
              You scored <span className="font-bold text-rose-600">{score}</span> out of {anniversaryConfig.quiz.length}!
            </p>

            <div className="p-6 rounded-2xl bg-rose-50/80 border border-rose-200 text-rose-900 font-serif text-lg italic mb-8">
              "Whatever the answers are, we're still each other's favourite people. ❤️"
            </div>

            <button
              onClick={restartQuiz}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-medium text-sm shadow-md shadow-rose-500/25 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Play Again</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
