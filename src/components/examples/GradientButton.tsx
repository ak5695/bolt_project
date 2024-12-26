import React from 'react';

export function GradientButton() {
  return (
    <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full 
      hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 
      shadow-lg hover:shadow-xl">
      Hover Me
    </button>
  );
}