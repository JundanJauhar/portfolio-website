'use client';

import React from 'react';

interface FooterProps {
  onContact?: () => void;
}

export default function Footer({ onContact }: FooterProps) {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white rounded-xl p-8 shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left space-y-1 max-w-xl">
          <h3 className="font-bold text-lg">Let&apos;s Build Something Together!</h3>
          <p className="text-indigo-200 text-sm leading-relaxed">
            Thank you for your time. I am highly motivated to contribute, collaborate, and grow as a software engineering intern.
          </p>
        </div>
        <div className="w-full md:w-auto shrink-0 flex justify-center">
          <button 
            onClick={onContact}
            className="flex items-center justify-center gap-2 bg-white text-indigo-900 hover:bg-indigo-50 font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all duration-200 active:scale-95 text-sm w-full sm:w-auto"
          >
            <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Me
          </button>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-indigo-800/40 text-center text-xs text-indigo-300">
        © {new Date().getFullYear()} Muhammad Jundan Jauhar. All rights reserved. Built with Next.js and Tailwind CSS.
      </div>
    </footer>
  );
}
