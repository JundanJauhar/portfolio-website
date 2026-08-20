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
import WorkExperience from "../components/WorkExperience";
import {
  userData,
  contactData,
  personalData,
  educationData,
  skillsData,
  workExperienceData,
  organizationData,
  projectsData,
  certificatesData,
  languagesData,
  motivationText
} from "../data/portfolioData";

export default function Portfolio() {
  const handleContact = () => {
    // Hubungi email secara langsung
    window.open(`mailto:${contactData.email}`);
  };

  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (Sticky Sidebar on Desktop) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-8">
            {/* Profile Header */}
            <Header user={userData} />

            {/* Contact & Social Links */}
            <ContactInfo contact={contactData} />

            {/* Technical Skills Profile */}
            <Skills skills={skillsData} />

            {/* Language Fluency */}
            <LanguageSkills languages={languagesData} />

            {/* Detailed Personal Attributes */}
            <PersonalData personalInfo={personalData} />
          </div>

          {/* Right Column (Detailed Scrollable Content) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Core Motivation / Professional Summary */}
            <Motivation motivationText={motivationText} />

            {/* Professional Work History */}
            <WorkExperience experiences={workExperienceData} />

            {/* Highlighted Software Projects */}
            <ProjectPortfolio projects={projectsData} />

            {/* Scholastic Achievements */}
            <Education education={educationData} />

            {/* Industry Certificates */}
            <Certificates certificates={certificatesData} />

            {/* Extracurricular / Organization Role */}
            <OrganizationExperience experiences={organizationData} />

            {/* Page Footer Action Cards */}
            <Footer onContact={handleContact} />
          </div>

        </div>
      </div>
    </main>
  );
}