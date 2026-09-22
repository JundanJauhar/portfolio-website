"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ContactSection from "../components/ContactSection";
import {
  certificatesData,
  educationData,
  profileData,
  projectsData,
  skillsData,
  userData,
  workExperienceData,
} from "../data/portfolioData";

const documentation = [
  { src: "/experienceWork/On Boarding.jpeg", label: "PT PAL / Onboarding" },
  { src: "/experienceWork/Ruangan IT.jpeg", label: "PT PAL / IT Division" },
  { src: "/experienceWork/Berkunjung ke divisi IMEX.jpeg", label: "PT PAL / IMEX Visit" },
  { src: "/experienceWork/User QA.jpeg", label: "PT PAL / QA Testing" },
  { src: "/experienceWork/testing user Supply Chain.jpeg", label: "PT PAL / Supply Chain Testing" },
  { src: "/experienceWork/WhatsApp Image 2026-09-21 at 10.16.08.jpeg", label: "PT PAL / Collaboration" },
  { src: "/experienceWork/Jundan Foto.jpeg", label: "PT PAL / Internship" },
];

export default function Portfolio() {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="portfolio-page">
      <div className="aurora aurora--one" /><div className="aurora aurora--two" /><div className="aurora aurora--three" />
      <header className="clean-nav editorial-shell">
        <a className="clean-brand" href="#top"><span>JJ</span> JUNDAN <i>JAUHAR</i></a>
        <nav><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#contact">Contact</a></nav>
        <a className="nav-cv" href="/CV-Muhammad-Jundan-Jauhar.pdf" target="_blank">View CV ↗</a>
      </header>

      <section className="editorial-shell clean-hero" id="top">
        <div className="hero-title-block reveal"><span className="overline">PERSONAL PORTFOLIO / 2026</span><h1>Muhammad<br /><em>Jundan</em><br />Jauhar<span className="title-block" /></h1><p>Full Stack Developer<br />building useful digital products.</p></div>
        <div className="hero-side reveal"><span className="hero-number">01 / 09</span><div className="hero-image-wrap"><Image src={userData.img} alt={userData.name} fill priority sizes="420px" /></div><span className="hero-caption">Yogyakarta, Indonesia<br />07°48&apos;S 110°22&apos;E</span></div>
      </section>

      <section className="editorial-shell intro-section" id="about">
        <div className="section-label reveal"><span>01</span> INTRODUCTION</div>
        <div className="intro-card reveal">
          <div className="intro-photo"><Image src={profileData.img} alt="Jundan Jauhar" fill sizes="300px" /><span className="photo-index">01 — PROFILE</span></div>
          <div className="intro-hi">Hi<span>,</span><small>nice to meet you.</small></div>
          <div className="intro-copy"><p>Saya mahasiswa Teknik Informatika yang antusias membangun produk digital yang berguna. Saat magang di PT PAL Indonesia, saya mengembangkan <strong>Procurement Tracking System</strong> enterprise menggunakan <strong>Laravel</strong> dan terbiasa bekerja dalam ritme <strong>Agile</strong>.</p><p className="intro-note">From database modelling to responsive front-end — I enjoy making complex systems feel simple.</p><div className="status-pill"><i /><span /><span /><span /> FULL STACK DEVELOPER</div></div>
        </div>
      </section>

      <section className="editorial-shell journey-section" id="experience">
        <div className="section-label reveal"><span>02</span> EDUCATION & EXPERIENCE</div>
        <div className="journey-grid">
          <div className="journey-list">
            {workExperienceData.map((item) => <div className="journey-item reveal" key={item.company}><div className="journey-top"><span className="year-badge">2025 — 2026</span><span className="journey-company">{item.company}</span></div><h3>Full Stack Developer</h3><p>{item.division}</p><div className="timeline-bar"><span /><i /><span /></div><div className="timeline-caption"><small>OCTOBER</small><small>APRIL</small></div></div>)}
            {educationData.map((item) => <div className="journey-item journey-item--education reveal" key={item.institution}><div className="journey-top"><span className="year-badge">{item.period}</span><span className="journey-company">Education</span></div><h3>{item.degree}</h3><p>{item.institution} · {item.grade}</p><div className="timeline-bar"><span /><i /><span /></div><div className="timeline-caption"><small>START</small><small>NOW</small></div></div>)}
          </div>
          <aside className="profile-sidebar reveal">
            <a className="qr-card" href="/CV-Muhammad-Jundan-Jauhar.pdf" target="_blank"><div className="fake-qr"><b>▦</b><b>▦</b><b>▦</b><span>▦ ▦ ▦ ▦</span><span>▦ ▦ ▦ ▦</span><span>▦ ▦ ▦ ▦</span></div><strong>Click or scan<br />to see my CV ↗</strong></a>
            <div className="sidebar-block"><h3>Interest & Expertise</h3><p>Product engineering<br />UI/UX thinking<br />Data & systems<br />Creative problem solving</p></div>
            <div className="sidebar-block"><h3>Hardskill</h3><div className="skill-pills">{[...skillsData.frameworks, "Java", "Kotlin"].map((skill) => <span key={skill}>{skill}</span>)}</div></div>
          </aside>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="editorial-shell"><div className="section-label reveal"><span>03</span> SELECTED CASE STUDIES</div></div>
        {projectsData.map((project, index) => <article className={`case-study case-study--${index + 1} ${index % 2 ? "reverse" : "forward"}`} key={project.title}><div className="editorial-shell"><div className="case-heading reveal"><span>THE PROJECT / 0{index + 1}</span><h2>{project.title}</h2><p>{project.description}</p></div><div className="case-layout"><div className="case-brief reveal"><small>ROLE / FULL STACK DEVELOPER</small><h3>{index === 0 ? "PROCUREMENT TRACKING SYSTEM" : project.title.toUpperCase()}</h3><ul>{project.technologies.map((tech) => <li key={tech}>{tech} implementation</li>)}<li>Responsive product experience</li><li>Clear workflow and user feedback</li></ul><a href={project.link} target="_blank" rel="noreferrer">Open all brief ↗</a></div><div className="screen-grid reveal">{project.images.map((image, screenIndex) => <figure className={`screen screen--${screenIndex + 1}`} key={image}><Image src={image} alt={`${project.title} screenshot ${screenIndex + 1}`} fill sizes="(max-width: 800px) 94vw, 280px" /></figure>)}</div></div></div></article>)}
      </section>

      <section className="editorial-shell documentation-section">
        <div className="section-label reveal"><span>04</span> WORK DOCUMENTATION</div><h2 className="editorial-heading reveal">The work<br /><em>behind the work.</em></h2>
        <div className="doc-grid">{documentation.map((item, index) => <figure className={`doc-card doc-card--${index + 1} reveal`} key={item.src}><Image src={item.src} alt={item.label} fill sizes="(max-width: 700px) 90vw, 30vw" /><figcaption>{item.label}</figcaption></figure>)}</div>
      </section>

      <section className="editorial-shell certification-section">
        <div className="section-label reveal"><span>05</span> CERTIFICATION</div><h2 className="editorial-heading reveal">Proof of<br /><em>curiosity.</em></h2>
        <div className="cert-grid">{certificatesData.map((certificate, index) => <button className={`cert-card cert-card--${index + 1} reveal`} key={certificate.name} onClick={() => setSelectedCertificate(index)}><div className="cert-image"><Image src={certificate.img} alt={certificate.name} fill sizes="(max-width: 700px) 85vw, 320px" /><span>{certificate.year}</span><i>VIEW ↗</i></div><div className="cert-meta"><small>0{index + 1} / CREDENTIAL</small><strong>{certificate.name}</strong><p>{certificate.describe}</p></div></button>)}</div>
      </section>

      <footer className="site-footer-shell">
        <ContactSection />
        <div className="editorial-shell clean-footer">
          <span>© 2026 Muhammad Jundan Jauhar</span>
          <span>Full Stack Developer</span>
        </div>
      </footer>
      {selectedCertificate !== null && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setSelectedCertificate(null)}><button className="lightbox-close" onClick={() => setSelectedCertificate(null)} aria-label="Close preview">×</button><Image src={certificatesData[selectedCertificate].img} alt={certificatesData[selectedCertificate].name} width={1200} height={800} onClick={(event) => event.stopPropagation()} /></div>}
    </main>
  );
}
