import React from 'react';

export function GlassCard() {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg -z-10"></div>
      <div className="backdrop-blur-md bg-white/30 p-6 rounded-lg border border-white/30 
        transform transition-all duration-300 group-hover:scale-105">
        <p className="text-white font-medium">Glass Effect</p>
      </div>
    </div>
  );
}