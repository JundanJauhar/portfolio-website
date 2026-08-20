import React from 'react';

interface WorkExperienceItem {
  role: string;
  company: string;
  division: string;
  period: string;
  responsibilities: string[];
}

interface WorkExperienceProps {
  experiences: WorkExperienceItem[];
}

export default function WorkExperience({ experiences }: WorkExperienceProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3 border-b-2 border-indigo-500 pb-2">
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800">
          Work Experience
        </h2>
      </div>
      
      <div className="relative border-l-2 border-indigo-100 ml-3 pl-6 space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Timeline dot */}
            <div className="absolute -left-[31px] top-1.5 bg-white border-4 border-indigo-600 rounded-full w-4 h-4 group-hover:bg-indigo-600 transition-colors"></div>
            
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-indigo-600 font-semibold text-base mt-0.5">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 text-sm mt-0.5 font-medium">
                    {exp.division}
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-semibold rounded-full w-fit">
                  📅 {exp.period}
                </span>
              </div>
              
              <ul className="space-y-2.5 text-gray-600">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <svg className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
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
