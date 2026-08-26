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
    <section className="space-y-6">
      <div className="flex items-center gap-3 border-b-2 border-indigo-500 pb-2">
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-4-9 4 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800">
          Education
        </h2>
      </div>

      <div className="relative border-l-2 border-indigo-100 ml-3 pl-6 space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="relative group">
            {/* Timeline dot */}
            <div className="absolute -left-[31px] top-1.5 bg-white border-4 border-indigo-600 rounded-full w-4 h-4 group-hover:bg-indigo-600 transition-colors"></div>

            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                    {edu.institution}
                  </h3>
                  <p className="text-indigo-600 font-semibold text-sm">
                    {edu.degree}
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full w-fit">
                  {edu.period}
                </span>
              </div>
              {edu.grade && (
                <div className="inline-flex items-center gap-1.5 mt-1 text-sm text-emerald-600 font-medium bg-emerald-50 px-2.5 py-0.5 rounded-md">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {edu.grade}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
