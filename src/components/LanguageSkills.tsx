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
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
        Language Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {languages.map((language, index) => (
          <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800">{language.name}</h3>
            <p className="text-blue-600">{language.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
