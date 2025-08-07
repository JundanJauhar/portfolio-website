'use client';

import React from 'react';

interface FooterProps {
  onContact?: () => void;
}

export default function Footer({ onContact }: FooterProps) {
  return (
    <div className="bg-gray-50 p-6 text-center border-t">
      <p className="text-gray-600">
        Terima kasih atas perhatiannya. Saya siap untuk berkontribusi dan belajar dalam program magang ini.
      </p>
      <div className="mt-4 space-x-4">
        <button 
          onClick={onContact}
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors"
        >
          Hubungi Saya
        </button>
      </div>
    </div>
  );
}
