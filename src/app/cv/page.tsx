"use client";

import React from "react";
import { userData, personalData, contactData, educationData, skillsData, organizationData, projectsData, certificatesData, languagesData } from "../../data/portfolioData";

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Print Button - Hidden saat print */}
      <div className="no-print fixed top-4 right-4 z-10">
        <button
          onClick={handlePrint}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
        >
          Print CV
        </button>
      </div>

      {/* CV Content */}
      <div className="max-w-4xl mx-auto p-8 bg-white">
        {/* Header */}
        <div className="text-center mb-8 border-b-2 border-gray-300 pb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{userData.name}</h1>
          <p className="text-xl text-gray-600 mb-1">{userData.title}</p>
          <p className="text-lg text-gray-500">{userData.subtitle}</p>
          
          <div className="mt-4 flex justify-center space-x-6 text-sm">
            <span>📧 {contactData.email}</span>
            <span>📱 {contactData.phone}</span>
            <span>🔗 GitHub: JundanJauhar</span>
            <span>🔗 LinkedIn: JundanJauhar</span>
          </div>
        </div>

        {/* Personal Information */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-200 pb-1">
            INFORMASI PRIBADI
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>Nama Lengkap:</strong> {personalData.fullName}</p>
              <p><strong>Tempat, Tanggal Lahir:</strong> {personalData.birthPlace}, {personalData.birthDate}</p>
              <p><strong>Jenis Kelamin:</strong> {personalData.gender}</p>
              <p><strong>Agama:</strong> {personalData.religion}</p>
            </div>
            <div>
              <p><strong>Alamat:</strong> {personalData.address}</p>
              <p><strong>Status:</strong> {personalData.maritalStatus}</p>
              <p><strong>Kewarganegaraan:</strong> {personalData.nationality}</p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-200 pb-1">
            PENDIDIKAN
          </h2>
          {educationData.map((edu, index) => (
            <div key={index} className="mb-3">
              <h3 className="font-semibold text-gray-800">{edu.institution}</h3>
              <p className="text-gray-600">{edu.degree} | {edu.period}</p>
              {edu.grade && <p className="text-gray-600">{edu.grade}</p>}
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-200 pb-1">
            KEAHLIAN TEKNIS
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Programming Languages:</h3>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {skillsData.programmingLanguages.map((skill, index) => (
                  <li key={index}>{skill.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Frameworks & Tools:</h3>
              <p className="text-sm text-gray-600">
                {skillsData.frameworks.join(", ")}
              </p>
            </div>
          </div>
        </section>

        {/* Organization Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-200 pb-1">
            PENGALAMAN ORGANISASI
          </h2>
          {organizationData.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold text-gray-800">{exp.organization}</h3>
              <p className="text-gray-600 font-medium">{exp.position} | {exp.period}</p>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-200 pb-1">
            PORTFOLIO PROYEK
          </h2>
          {projectsData.map((project, index) => (
            <div key={index} className="mb-3">
              <h3 className="font-semibold text-gray-800">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-1">{project.description}</p>
              <p className="text-sm text-gray-500">
                <strong>Teknologi:</strong> {project.technologies.join(", ")}
              </p>
              {project.link && (
                <p className="text-sm text-blue-600">{project.link}</p>
              )}
            </div>
          ))}
        </section>

        {/* Certificates */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-200 pb-1">
            SERTIFIKAT
          </h2>
          <div className="space-y-1">
            {certificatesData.map((cert, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span className="text-gray-800">{cert.name}</span>
                <span className="text-gray-600">{cert.year}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-200 pb-1">
            KEMAMPUAN BAHASA
          </h2>
          <div className="flex space-x-6">
            {languagesData.map((lang, index) => (
              <div key={index} className="text-sm">
                <span className="font-medium text-gray-800">{lang.name}:</span>
                <span className="text-gray-600 ml-1">{lang.level}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          .no-print {
            display: none;
          }
          body {
            font-size: 12px;
          }
          .page-break {
            page-break-before: always;
          }
        }
      `}</style>
    </div>
  );
}
