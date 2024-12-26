import React from 'react';
import { Link } from 'react-router-dom';
import { effectsData } from '../data/effectsData';

export function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {effectsData.map((effect) => (
          <Link
            key={effect.id}
            to={`/effect/${effect.id}`}
            className="block group"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden 
              transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {effect.title}
                </h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-4 
                  flex items-center justify-center min-h-[200px]">
                  <effect.component />
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {effect.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}