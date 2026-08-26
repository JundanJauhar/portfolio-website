import React from 'react';

interface MotivationProps {
  motivationText: string;
}

export default function Motivation({ motivationText }: MotivationProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-600 rounded-r-xl p-6 md:p-8">
      {/* Absolute background quote icon */}
      <div className="absolute right-4 bottom-2 text-indigo-100 transform translate-y-4 select-none pointer-events-none">
        <svg className="w-36 h-36 opacity-30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <div className="relative space-y-3">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Professional Summary
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line font-medium">
          {motivationText}
        </p>
      </div>
    </section>
  );
}
