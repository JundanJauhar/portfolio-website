'use client';

import React from 'react';

interface FooterProps {
  onDownloadCV?: () => void;
  onContact?: () => void;
}

export default function Footer({ onDownloadCV, onContact }: FooterProps) {
  return (
    <div className="bg-gray-50 p-6 text-center border-t">
      <p className="text-gray-600">
        Thank you for your attention. I am ready to contribute and learn in this internship program.
      </p>
      <div className="mt-4 flex flex-col md:flex-row md:justify-center md:items-center gap-4">
        <button 
          onClick={onDownloadCV}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Download CV
        </button>
        <button 
          onClick={onContact}
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors"
        >
          Contact Me
        </button>
      </div>
    </div>
  );
}
