import React, { useEffect, useState } from 'react';

interface Petal {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  sway: number;
  swaySpeed: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
}

export const FallingPetals: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const initialPetals: Petal[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * -100 - 10,
      size: Math.random() * 12 + 10,
      speed: Math.random() * 0.4 + 0.2,
      sway: Math.random() * 20,
      swaySpeed: Math.random() * 0.02 + 0.01,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 1 - 0.5,
      opacity: Math.random() * 0.6 + 0.4
    }));

    setPetals(initialPetals);

    let animationFrameId: number;
    let time = 0;

    const updatePetals = () => {
      time += 0.05;
      setPetals(prev =>
        prev.map(p => {
          let newY = p.y + p.speed;
          let newX = p.x + Math.sin(time * p.swaySpeed * 20 + p.sway) * 0.15;
          let newRotation = p.rotation + p.rotationSpeed;

          if (newY > 105) {
            newY = -10;
            newX = Math.random() * 100;
          }

          return {
            ...p,
            y: newY,
            x: newX,
            rotation: newRotation
          };
        })
      );
      animationFrameId = requestAnimationFrame(updatePetals);
    };

    animationFrameId = requestAnimationFrame(updatePetals);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {petals.map(petal => (
        <div
          key={petal.id}
          className="absolute rounded-bl-[60%] rounded-tr-[60%] rounded-tl-[10%] rounded-br-[10%] bg-gradient-to-br from-rose-400 via-pink-400 to-rose-500 shadow-sm"
          style={{
            left: `${petal.x}%`,
            top: `${petal.y}%`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.4}px`,
            opacity: petal.opacity,
            transform: `rotate(${petal.rotation}deg)`,
            filter: 'drop-shadow(0 2px 4px rgba(225, 29, 72, 0.2))'
          }}
        />
      ))}
    </div>
  );
};
