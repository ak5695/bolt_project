import React from 'react';

interface CssCardProps {
  title: string;
  children: React.ReactNode;
  description: string;
}

export function CssCard({ title, children, description }: CssCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <div className="bg-gray-50 rounded-lg p-6 mb-4 flex items-center justify-center min-h-[200px]">
          {children}
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}