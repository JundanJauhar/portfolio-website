"use client";

import React, { useRef, useEffect, useCallback } from "react";
import { useRouter } from 'next/navigation';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { userData, personalData, contactData, educationData, skillsData, organizationData, projectsData, certificatesData, languagesData } from "../../data/portfolioData";

export default function CVPage() {
  const cvRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const generatePDF = useCallback(async () => {
    if (!cvRef.current) return;

    try {
      console.log('Starting PDF generation...');
      
      // Generate canvas dari HTML yang tersembunyi
      const canvas = await html2canvas(cvRef.current, {
        scale: 2, // Turunkan ke 2 untuk stabilitas
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        scrollX: 0,
        scrollY: 0,
        logging: false
      });

      console.log('Canvas generated successfully');

      // Buat PDF
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      
      // Calculate ratio untuk fit ke halaman
      const ratio = Math.min(pdfWidth / (imgWidth * 0.264583), pdfHeight / (imgHeight * 0.264583));
      const imgX = (pdfWidth - (imgWidth * 0.264583 * ratio)) / 2;
      const imgY = 0;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * 0.264583 * ratio, imgHeight * 0.264583 * ratio);
      
      console.log('PDF created successfully');
      
      // Download PDF
      pdf.save('CV-Muhammad-Jundan-Jauhar.pdf');
      
      console.log('PDF download initiated');
      
      // Redirect ke halaman utama setelah 3 detik
      setTimeout(() => {
        router.push('/');
      }, 3000);
    } catch (error) {
      console.error('Error generating PDF:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      alert(`Gagal generate PDF: ${errorMessage}`);
      router.push('/');
    }
  }, [router]);

  // Auto generate PDF ketika component dimount
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Starting PDF generation after delay...');
      generatePDF();
    }, 2000); // Tingkatkan delay ke 2 detik

    return () => clearTimeout(timer);
  }, [generatePDF]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Loading Message */}
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Generating PDF...</h2>
        <p className="text-gray-600">Your CV will be downloaded automatically</p>
      </div>

      {/* Hidden CV Content for PDF Generation */}
      <div ref={cvRef} className="absolute top-[-9999px] left-0 bg-white" style={{ 
        width: '210mm', 
        minHeight: '297mm', 
        padding: '20mm',
        fontFamily: 'Arial, sans-serif',
        fontSize: '12px',
        lineHeight: '1.4'
      }}>
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{userData.name}</h1>
          <h2 className="text-xl text-gray-700 mb-1">{userData.title}</h2>
          <p className="text-lg text-gray-600">{userData.subtitle}</p>
          
          <div className="mt-4 text-sm text-gray-600">
            <p>📧 {contactData.email} | 📱 {contactData.phone}</p>
            <p>🔗 GitHub: JundanJauhar | LinkedIn: JundanJauhar</p>
            <p>🌐 jundanjauhar-portofolio.vercel.app</p>
          </div>
        </div>

        <hr className="border-gray-300 mb-6" />

        {/* Two Column Layout */}
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="col-span-1 space-y-6">
            {/* Personal Information */}
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3 border-b-2 border-blue-600 pb-1">
                INFORMASI PRIBADI
              </h3>
              <div className="space-y-2 text-sm">
                <p><strong>Nama:</strong> {personalData.fullName}</p>
                <p><strong>TTL:</strong> {personalData.birthPlace}, {personalData.birthDate}</p>
                <p><strong>Jenis Kelamin:</strong> {personalData.gender}</p>
                <p><strong>Agama:</strong> {personalData.religion}</p>
                <p><strong>Status:</strong> {personalData.maritalStatus}</p>
                <p><strong>Kewarganegaraan:</strong> {personalData.nationality}</p>
                <p><strong>Alamat:</strong> {personalData.address}</p>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3 border-b-2 border-blue-600 pb-1">
                BAHASA
              </h3>
              <div className="space-y-1 text-sm">
                {languagesData.map((lang, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-gray-600">{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3 border-b-2 border-blue-600 pb-1">
                KEAHLIAN TEKNIS
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold mb-1">Programming:</h4>
                  <ul className="space-y-1">
                    {skillsData.programmingLanguages.map((skill, index) => (
                      <li key={index}>• {skill.name}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Frameworks:</h4>
                  <p>{skillsData.frameworks.join(", ")}</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="col-span-2 space-y-6">
            {/* Education */}
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3 border-b-2 border-blue-600 pb-1">
                PENDIDIKAN
              </h3>
              {educationData.map((edu, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">{edu.institution}</h4>
                      <p className="text-gray-700">{edu.degree}</p>
                      {edu.grade && <p className="text-sm text-gray-600">{edu.grade}</p>}
                    </div>
                    <span className="text-sm text-gray-600 font-medium">{edu.period}</span>
                  </div>
                </div>
              ))}
            </section>

            {/* Organization Experience */}
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3 border-b-2 border-blue-600 pb-1">
                PENGALAMAN ORGANISASI
              </h3>
              {organizationData.map((exp, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">{exp.position}</h4>
                      <p className="text-gray-700">{exp.organization}</p>
                    </div>
                    <span className="text-sm text-gray-600 font-medium">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Projects */}
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3 border-b-2 border-blue-600 pb-1">
                PORTFOLIO PROYEK
              </h3>
              <div className="space-y-3">
                {projectsData.map((project, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-gray-900">{project.title}</h4>
                    <p className="text-sm text-gray-700 mb-1">{project.description}</p>
                    <p className="text-xs text-gray-600">
                      <strong>Tech:</strong> {project.technologies.join(", ")}
                    </p>
                    {project.link && (
                      <p className="text-xs text-blue-600">{project.link}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Certificates */}
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3 border-b-2 border-blue-600 pb-1">
                SERTIFIKAT
              </h3>
              <div className="space-y-2">
                {certificatesData.map((cert, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-900">{cert.name}</span>
                    <span className="text-gray-600">{cert.year}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
