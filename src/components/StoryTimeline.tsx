import React, { useState } from 'react';
import { anniversaryConfig, TimelineItem } from '../data/anniversaryData';
import { Heart, Calendar, ChevronDown, Sparkles } from 'lucide-react';

export const StoryTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="timeline" className="py-24 bg-gradient-to-b from-white via-rose-50/30 to-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/80 text-rose-700 text-xs font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>Our Journey</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Every Love Story Has Its Moments...
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            From the very first hello to 365 days of absolute magic. Click any chapter to reveal a secret memory.
          </p>
        </div>

        <div className="relative">
          {/* Center Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-rose-200 via-pink-300 to-rose-200 transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {anniversaryConfig.timeline.map((item: TimelineItem, index: number) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedId === item.id;

              return (
                <div key={item.id} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-8`}>
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-white border-2 border-rose-400 shadow-md flex items-center justify-center transform -translate-x-1/2 z-10 hidden md:flex">
                    <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div 
                      onClick={() => toggleExpand(item.id)}
                      className={`group cursor-pointer bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border ${isExpanded ? 'border-rose-300 ring-2 ring-rose-100' : 'border-rose-100/80 hover:border-rose-200'}`}
                    >
                      <div className="flex items-center gap-2 text-rose-600 text-xs font-semibold mb-2">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.date}</span>
                      </div>

                      <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Photo Thumbnail */}
                      <div className="relative h-48 rounded-xl overflow-hidden mb-4 bg-rose-50 shadow-inner">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e)=>{
                            (e.target as HTMLImageElement).src = '/photos/PHOTO_01.jpg';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                        <span className="absolute bottom-3 left-3 text-white text-xs font-medium px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm">
                          Chapter {item.id}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-xs text-rose-500 font-medium pt-2 border-t border-gray-100">
                        <span>{isExpanded ? 'Hide Secret Memory' : 'Click to Reveal Secret'}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                      </div>

                      {/* Hidden Message Reveal */}
                      {isExpanded && (
                        <div className="mt-4 p-4 rounded-xl bg-rose-50/80 border border-rose-100 text-rose-900 text-sm font-serif italic animate-fadeIn">
                          "{item.hiddenMessage}"
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
