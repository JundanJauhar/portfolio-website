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
    <section className="space-y-6">
      <div className="flex items-center gap-3 border-b-2 border-indigo-500 pb-2">
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800">
          Organization Experience
        </h2>
      </div>

      <div className="relative border-l-2 border-indigo-100 ml-3 pl-6 space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Timeline dot */}
            <div className="absolute -left-[31px] top-1.5 bg-white border-4 border-indigo-600 rounded-full w-4 h-4 group-hover:bg-indigo-600 transition-colors"></div>

            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                    {exp.organization}
                  </h3>
                  <p className="text-indigo-600 font-semibold text-sm">
                    {exp.position}
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full w-fit">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-1.5 text-gray-600 text-sm">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="text-indigo-500 shrink-0 mt-1">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
