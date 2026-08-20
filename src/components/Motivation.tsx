import React from 'react';

interface MotivationProps {
  motivationText: string;
}

export default function Motivation({ motivationText }: MotivationProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
        Internship Motivation
      </h2>
      <div className="bg-blue-50 p-6 rounded-lg">
        <p className="text-gray-700 leading-relaxed">
          {motivationText}
        </p>
      </div>
    </section>
  );
}
