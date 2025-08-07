import React from 'react';

interface OrganizationItem {
  organization: string;
  position: string;
  period: string;
  responsibilities: string[];
}

interface OrganizationExperienceProps {
  experiences: OrganizationItem[];
}

export default function OrganizationExperience({ experiences }: OrganizationExperienceProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
        Pengalaman Organisasi
      </h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-lg text-gray-800">{exp.organization}</h3>
            <p className="text-blue-600 font-medium">{exp.position}</p>
            <p className="text-gray-600">{exp.period}</p>
            <ul className="text-gray-600 mt-2 list-disc list-inside">
              {exp.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
