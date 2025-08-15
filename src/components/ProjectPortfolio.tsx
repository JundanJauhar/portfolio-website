import Image from 'next/image';
import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  img?: string;
}

interface ProjectPortfolioProps {
  projects: Project[];
}

export default function ProjectPortfolio({ projects }: ProjectPortfolioProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
        Project Portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">            {/* Project Info */}
            <div className="mb-3">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-3">{project.description}</p>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Project Link */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
