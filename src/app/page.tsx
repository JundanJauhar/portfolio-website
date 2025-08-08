"use client";

import React from "react";
import Header from "../components/Header";
import ContactInfo from "../components/ContactInfo";
import PersonalData from "../components/PersonalData";
import Education from "../components/Education";
import Skills from "../components/Skills";
import OrganizationExperience from "../components/OrganizationExperience";
import ProjectPortfolio from "../components/ProjectPortfolio";
import Certificates from "../components/Certificates";
import LanguageSkills from "../components/LanguageSkills";
import Motivation from "../components/Motivation";
import Footer from "../components/Footer";
import {
  userData,
  contactData,
  personalData,
  educationData,
  skillsData,
  organizationData,
  projectsData,
  certificatesData,
  languagesData,
  motivationText
} from "../data/portfolioData";

export default function Portfolio() {
  const handleDownloadCV = () => {
    // Buka halaman CV di tab baru
    window.open('/cv', '_blank');
  };

  const handleContact = () => {
    // Implementasi kontak
    window.open(`mailto:${contactData.email}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <Header user={userData} />

        {/* Contact Info */}
        <ContactInfo contact={contactData} />

        <div className="p-8 space-y-8">
          {/* Data Diri */}
          <PersonalData personalInfo={personalData} />

          {/* Pendidikan */}
          <Education education={educationData} />

          {/* Keahlian */}
          <Skills skills={skillsData} />

          {/* Pengalaman Organisasi */}
          <OrganizationExperience experiences={organizationData} />

          {/* Portofolio Proyek */}
          <ProjectPortfolio projects={projectsData} />

          {/* Sertifikat */}
          <Certificates certificates={certificatesData} />

          {/* Bahasa */}
          <LanguageSkills languages={languagesData} />

          {/* Motivasi */}
          <Motivation motivationText={motivationText} />
        </div>

        {/* Footer */}
        <Footer onDownloadCV={handleDownloadCV} onContact={handleContact} />
      </div>
    </main>
  );
}