import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface ProjectPortfolioProps {
  projects: Project[];
}

export default function ProjectPortfolio({ projects }: ProjectPortfolioProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3 border-b-2 border-indigo-500 pb-2">
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800">
          Featured Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group flex flex-col justify-between bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300"
          >
            <div>
              {/* Project Title */}
              <div className="flex justify-between items-start gap-4 mb-2">
                <h3 className="font-bold text-lg text-gray-800 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                {project.link && (
                  <span className="text-gray-400 group-hover:text-indigo-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 00-2 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
            </div>

            <div>
              {/* Technologies Badge */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-emerald-50 border border-emerald-100/50 text-emerald-700 font-semibold px-2 py-0.5 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  Explore Codebase
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
