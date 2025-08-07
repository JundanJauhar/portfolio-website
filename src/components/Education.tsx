import React from 'react';

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  grade?: string;
}

interface EducationProps {
  education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
        Pendidikan
      </h2>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg text-gray-800">{edu.institution}</h3>
            <p className="text-blue-600 font-medium">{edu.degree}</p>
            <p className="text-gray-600">{edu.period}</p>
            {edu.grade && <p className="text-gray-600">{edu.grade}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
