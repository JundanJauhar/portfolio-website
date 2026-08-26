import React from 'react';

interface Language {
  name: string;
  level: string;
}

interface LanguageSkillsProps {
  languages: Language[];
}

export default function LanguageSkills({ languages }: LanguageSkillsProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-2 mb-4">
        Language Proficiency
      </h3>
      <div className="space-y-4">
        {languages.map((language, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="font-semibold text-gray-700">{language.name}</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-100/50">
              {language.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
