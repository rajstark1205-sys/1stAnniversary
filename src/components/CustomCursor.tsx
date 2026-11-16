import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trails, setTrails] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    let trailId = 0;
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Add sparkle / heart trail periodically
      if (Math.random() > 0.6) {
        setTrails(prev => [
          ...prev.slice(-12),
          { id: trailId++, x: e.clientX, y: e.clientY }
        ]);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Check hover on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a') || target.style.cursor === 'pointer') {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Clean up trails
  useEffect(() => {
    const timer = setInterval(() => {
      setTrails(prev => prev.slice(1));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Trail particles */}
      {trails.map(t => (
        <div
          key={t.id}
          className="fixed pointer-events-none z-50 text-rose-400 animate-ping opacity-60 text-xs"
          style={{ left: `${t.x}px`, top: `${t.y}px`, transform: 'translate(-50%, -50%)' }}
        >
          ♥
        </div>
      ))}

      {/* Main Custom Cursor Follower */}
      <div
        className={`fixed pointer-events-none z-50 transition-transform duration-75 ease-out flex items-center justify-center ${isClicking ? 'scale-75' : isHovered ? 'scale-150' : 'scale-100'}`}
        style={{ left: `${position.x}px`, top: `${position.y}px`, transform: `translate(-50%, -50%) ${isHovered ? 'scale(1.4)' : 'scale(1)'}` }}
      >
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-rose-500/20 backdrop-blur-[1px] border border-rose-400/40 shadow-sm">
          <Heart className="w-4 h-4 fill-rose-500 text-rose-600 animate-pulse" />
        </div>
      </div>
    </>
  );
};
