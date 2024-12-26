import React from 'react';

export function PulsingCard() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-75 animate-pulse"></div>
      <div className="relative bg-white rounded-lg p-4 shadow-xl">
        <p className="text-gray-800">Pulsing Effect</p>
      </div>
    </div>
  );
}