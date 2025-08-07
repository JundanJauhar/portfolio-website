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

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
        Keahlian Teknis
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold text-lg text-gray-700 mb-3">Programming Languages</h3>
          <div className="space-y-2">
            {skills.programmingLanguages.map((skill, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>{skill.name}</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ width: getSkillWidth(skill.level) }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-700 mb-3">Frameworks & Tools</h3>
          <div className="flex flex-wrap gap-2">
            {skills.frameworks.map((framework, index) => (
              <span 
                key={index} 
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {framework}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
