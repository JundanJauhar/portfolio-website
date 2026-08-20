import React from 'react';

interface ProgrammingSkill {
  name: string;
  level: number; // 1-5 scale
}

interface SkillsData {
  programmingLanguages: ProgrammingSkill[];
  frameworks: string[];
}

interface SkillsProps {
  skills: SkillsData;
}

export default function Skills({ skills }: SkillsProps) {
  const getSkillWidth = (level: number) => {
    return `${(level / 5) * 100}%`;
  };

  const getLevelLabel = (level: number) => {
    if (level <= 2) return 'Beginner';
    if (level === 3) return 'Intermediate';
    if (level === 4) return 'Advanced';
    return 'Expert';
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm space-y-6">
      <div>
        <h3 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-2 mb-4">
          Programming Languages
        </h3>
        <div className="space-y-4">
          {skills.programmingLanguages.map((skill, index) => (
            <div key={index} className="space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className="font-bold text-gray-700">{skill.name}</span>
                <span className="text-indigo-600 font-medium text-xs">
                  {getLevelLabel(skill.level)}
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full transition-all duration-500" 
                  style={{ width: getSkillWidth(skill.level) }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-2 mb-4">
          Frameworks & Tools
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.frameworks.map((framework, index) => (
            <span 
              key={index} 
              className="px-3 py-1.5 bg-indigo-50 border border-indigo-100/50 text-indigo-700 font-semibold rounded-lg text-xs hover:bg-indigo-100 hover:border-indigo-200 transition-all duration-200 cursor-default"
            >
              {framework}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
