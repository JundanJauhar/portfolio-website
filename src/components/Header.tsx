import React from 'react';

interface User {
  name: string;
  title: string;
  subtitle?: string;
}

interface HeaderProps {
  user: User;
}

export default function Header({ user }: HeaderProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
      <div className="text-center">
        <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
          <div className="w-28 h-28 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-4xl font-bold">
            FN
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
        <p className="text-xl opacity-90">{user.title}</p>
        {user.subtitle && <p className="text-lg opacity-80">{user.subtitle}</p>}
      </div>
    </div>
  );
}
