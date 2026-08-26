'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface User {
  name: string;
  title: string;
  subtitle?: string;
  img: string; 
}

interface HeaderProps {
  user: User;
}

export default function Header({ user }: HeaderProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 text-white p-8 rounded-t-xl md:rounded-xl md:shadow-sm">
      <div className="flex flex-col items-center text-center">
        {/* Profile Image with Ring Effect */}
        <div className="relative group mb-6">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative w-44 h-44 bg-white rounded-full flex items-center justify-center overflow-hidden border-4 border-indigo-900 shadow-xl">
            {!imageError ? (
              <Image 
                src={user.img} 
                alt="Muhammad Jundan Jauhar" 
                width={176} 
                height={176} 
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                priority
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-5xl font-extrabold">
                {user.name.charAt(0)}
              </div>
            )}
          </div>
        </div>
        
        {/* Name and Titles */}
        <h1 className="text-2xl font-extrabold tracking-tight mb-2 bg-clip-text bg-gradient-to-r from-white to-blue-100">
          {user.name}
        </h1>
        <div className="inline-block px-3 py-1 bg-indigo-500/30 border border-indigo-400/20 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-200 mb-4">
          {user.title}
        </div>
        {user.subtitle && (
          <p className="text-sm font-medium text-indigo-200/90 max-w-xs">
            {user.subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
