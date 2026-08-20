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
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
      <div className="text-center">
        <div className="w-64 h-64 bg-white rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
          {!imageError ? (
            <Image 
              src={user.img} 
              alt="Profile Portfolio" 
              width={240} 
              height={240} 
              className="w-60 h-60 rounded-full object-cover"
              priority
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-60 h-60 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-6xl font-bold">
              {user.name.charAt(0)}
            </div>
          )}
        </div>
        <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
        <p className="text-xl opacity-90">{user.title}</p>
        {user.subtitle && <p className="text-lg opacity-80">{user.subtitle}</p>}
      </div>
    </div>
  );
}
