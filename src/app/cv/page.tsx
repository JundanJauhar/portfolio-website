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
        scale: 2,
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
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Loading Message */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ 
          width: '128px', 
          height: '128px', 
          border: '2px solid #2563eb', 
          borderTop: '2px solid transparent', 
          borderRadius: '50%', 
          margin: '0 auto 16px',
          animation: 'spin 1s linear infinite'
        }}></div>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>Generating PDF...</h2>
        <p style={{ color: '#6b7280' }}>Your CV will be downloaded automatically</p>
      </div>

      {/* Hidden CV Content for PDF Generation - Using only inline styles */}
      <div ref={cvRef} style={{ 
        position: 'absolute',
        top: '-9999px',
        left: '0',
        width: '210mm', 
        minHeight: '297mm', 
        padding: '20mm',
        fontFamily: 'Arial, sans-serif',
        fontSize: '12px',
        lineHeight: '1.4',
        backgroundColor: '#ffffff',
        color: '#000000'
      }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827', marginBottom: '8px', margin: '0 0 8px 0' }}>{userData.name}</h1>
          <h2 style={{ fontSize: '20px', color: '#374151', marginBottom: '4px', margin: '0 0 4px 0' }}>{userData.title}</h2>
          <p style={{ fontSize: '18px', color: '#6b7280', margin: '0' }}>{userData.subtitle}</p>
          
          <div style={{ marginTop: '16px', fontSize: '14px', color: '#6b7280' }}>
            <p style={{ margin: '4px 0' }}>📧 {contactData.email} | 📱 {contactData.phone}</p>
            <p style={{ margin: '4px 0' }}>🔗 GitHub: JundanJauhar | LinkedIn: JundanJauhar</p>
            <p style={{ margin: '4px 0' }}>🌐 jundanjauhar-portofolio.vercel.app</p>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #d1d5db', marginBottom: '24px' }} />

        {/* Two Column Layout */}
        <div style={{ display: 'flex', gap: '32px' }}>
          {/* Left Column */}
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Personal Information */}
            <section>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '12px', paddingBottom: '4px', borderBottom: '2px solid #2563eb' }}>
                INFORMASI PRIBADI
              </h3>
              <div style={{ fontSize: '14px' }}>
                <p style={{ margin: '8px 0' }}><strong>Nama:</strong> {personalData.fullName}</p>
                <p style={{ margin: '8px 0' }}><strong>TTL:</strong> {personalData.birthPlace}, {personalData.birthDate}</p>
                <p style={{ margin: '8px 0' }}><strong>Jenis Kelamin:</strong> {personalData.gender}</p>
                <p style={{ margin: '8px 0' }}><strong>Agama:</strong> {personalData.religion}</p>
                <p style={{ margin: '8px 0' }}><strong>Status:</strong> {personalData.maritalStatus}</p>
                <p style={{ margin: '8px 0' }}><strong>Kewarganegaraan:</strong> {personalData.nationality}</p>
                <p style={{ margin: '8px 0' }}><strong>Alamat:</strong> {personalData.address}</p>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '12px', paddingBottom: '4px', borderBottom: '2px solid #2563eb' }}>
                BAHASA
              </h3>
              <div style={{ fontSize: '14px' }}>
                {languagesData.map((lang, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'space-between', margin: '4px 0' }}>
                    <span style={{ fontWeight: '500' }}>{lang.name}</span>
                    <span style={{ color: '#6b7280' }}>{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '12px', paddingBottom: '4px', borderBottom: '2px solid #2563eb' }}>
                KEAHLIAN TEKNIS
              </h3>
              <div style={{ fontSize: '14px' }}>
                <div style={{ marginBottom: '12px' }}>
                  <h4 style={{ fontWeight: '600', marginBottom: '4px' }}>Programming:</h4>
                  {skillsData.programmingLanguages.map((skill, index) => (
                    <div key={index} style={{ margin: '4px 0' }}>• {skill.name}</div>
                  ))}
                </div>
                <div>
                  <h4 style={{ fontWeight: '600', marginBottom: '4px' }}>Frameworks:</h4>
                  <p style={{ margin: 0 }}>{skillsData.frameworks.join(", ")}</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div style={{ flex: '2', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Education */}
            <section>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '12px', paddingBottom: '4px', borderBottom: '2px solid #2563eb' }}>
                PENDIDIKAN
              </h3>
              {educationData.map((edu, index) => (
                <div key={index} style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h4 style={{ fontWeight: '600', color: '#111827', margin: 0 }}>{edu.institution}</h4>
                      <p style={{ color: '#374151', margin: '2px 0' }}>{edu.degree}</p>
                      {edu.grade && <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>{edu.grade}</p>}
                    </div>
                    <span style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>{edu.period}</span>
                  </div>
                </div>
              ))}
            </section>

            {/* Organization Experience */}
            <section>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '12px', paddingBottom: '4px', borderBottom: '2px solid #2563eb' }}>
                PENGALAMAN ORGANISASI
              </h3>
              {organizationData.map((exp, index) => (
                <div key={index} style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <div>
                      <h4 style={{ fontWeight: '600', color: '#111827', margin: 0 }}>{exp.position}</h4>
                      <p style={{ color: '#374151', margin: '2px 0' }}>{exp.organization}</p>
                    </div>
                    <span style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>{exp.period}</span>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '14px', color: '#6b7280' }}>
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} style={{ marginBottom: '4px' }}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Projects */}
            <section>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '12px', paddingBottom: '4px', borderBottom: '2px solid #2563eb' }}>
                PORTFOLIO PROYEK
              </h3>
              <div>
                {projectsData.map((project, index) => (
                  <div key={index} style={{ marginBottom: '12px' }}>
                    <h4 style={{ fontWeight: '600', color: '#111827', margin: 0 }}>{project.title}</h4>
                    <p style={{ fontSize: '14px', color: '#374151', margin: '4px 0' }}>{project.description}</p>
                    <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>
                      <strong>Tech:</strong> {project.technologies.join(", ")}
                    </p>
                    {project.link && (
                      <p style={{ fontSize: '12px', color: '#2563eb', margin: 0 }}>{project.link}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Certificates */}
            <section>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '12px', paddingBottom: '4px', borderBottom: '2px solid #2563eb' }}>
                SERTIFIKAT
              </h3>
              <div>
                {certificatesData.map((cert, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', margin: '8px 0' }}>
                    <span style={{ color: '#111827' }}>{cert.name}</span>
                    <span style={{ color: '#6b7280' }}>{cert.year}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* CSS for spinner animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `
      }} />
    </div>
  );
}
