import { describe } from "node:test";

// Data untuk halaman portfolio
export const userData = {
  name: "Muhammad Jundan Jauhar",
  title: "Universitas Islam Indonesia",
  subtitle: "Teknik Informatika",
  img: "/Jundan.jpg" 
};

export const contactData = {
  email: "jundan87@gmail.com",
  phone: "0812-1551-0614",
  linkedin: "https://www.linkedin.com/in/jundan-jauhar-04a666259/",
  github: "https://github.com/JundanJauhar"
};

export const personalData = {
  fullName: "Muhammad Jundan Jauhar",
  birthPlace: "Yogyakarta",
  birthDate: "01 Juni 2003",
  gender: "Laki-laki",
  religion: "Islam",
  address: "Jl. Dusun Clumprit, Sardonoharjo, Ngaglik, Sleman, Yogyakarta",
  maritalStatus: "Belum Menikah",
  nationality: "Indonesia"
};

export const educationData = [
  {
    institution: "Universitas Islam Indonesia",
    degree: "S1 Teknik Informatika",
    period: "2022 - Sekarang (Semester 6)",
    grade: "IPK: 3.42/4.00"
  },
  {
    institution: "MAS Sunan Pandanaran",
    period: "2019 - 2022",
  }
];

export const skillsData = {
  programmingLanguages: [
    { name: "Java", level: 3 },
    { name: "JavaScript", level: 3 },
    { name: "PHP", level: 3 },
    { name: "Kotlin", level: 2 }
  ],
  frameworks: [
    "React", "Next.js", "Figma", "HTML", "CSS", "Git"
  ]
};

export const organizationData = [
  {
    organization: "Panitia Pekan Olahraga Informatika",
    position: "Anggota Dekorasi dan Perlengkapan",
    period: "Sep 2023",
    responsibilities: [
      "Membangun Gapura event",
      "Menata dan menyiapkan perlengkapan untuk lomba"
    ]
  }
];

export const projectsData = [
  {
    title: "TourGuide",
    description: "Ini adalah website pertama saya dalam dunia IT, website ini bertujuan untuk pemesanan Guide wisata secara online",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    link: "https://github.com/JundanJauhar/TourGuide"
  },
  {
    title: "JustDoSport",
    description: "Web pemesanan lapangan olahraga secara online",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    link: "https://github.com/JundanJauhar/justdosport"
  },
  {
    title: "EcoMama",
    description: "Aplikasi mobile untuk penukaran botol bekas dan mendapatkan poin dari setiap penukaran botol dan bisa digunakan untuk membeli produk yang tersedia di aplikasi",
    technologies: ["Kotlin"],
    link: "https://github.com/JundanJauhar/EcoMama"
  },
  {
    title: "Portofolio Website",
    description: "website portofolio pribadi yang menampilkan informasi tentang diri saya, proyek yang telah saya kerjakan, dan cara untuk menghubungi saya.",
    technologies: ["next.js", "React", "Tailwind CSS"],
    link: "https://github.com/JundanJauhar/portfolio-website"
  }
];

export const certificatesData = [
  { name: "Sertifikat Kelas Belajar Next.js dengan Headless CMS", year: "2025" ,img:"/nextJs-sertifikat.jpg", describe: "Sertifikat ini diberikan setelah menyelesaikan kelas Next.js dengan Headless CMS, yang mencakup pembuatan aplikasi web dinamis menggunakan Next.js dan integrasi dengan sistem manajemen konten headless." },
  { name: "Sertifikat Kelas Belajar ReactJS", year: "2024", img: "/reactJs-sertifikat.jpg" , describe:"Sertifikat ini diberikan setelah menyelesaikan kelas ReactJS, yang mencakup pembuatan aplikasi web interaktif menggunakan React." },
  { name: "Sertifikat Kelas Belajar Dasar HTML", year: "2023", img: "/html-sertifikat.jpg", describe: "Sertifikat ini diberikan setelah menyelesaikan kelas dasar HTML, yang mencakup pembuatan struktur dasar halaman web menggunakan HTML." }
];

export const languagesData = [
  { name: "Bahasa Indonesia", level: "Native" },
  { name: "Bahasa Inggris", level: "Basic" }
];

export const motivationText = `
Saya sangat antusias untuk mengikuti program magang ini karena ingin menerapkan 
ilmu yang telah saya pelajari di perkuliahan ke dalam dunia kerja yang nyata. 
Saya percaya bahwa pengalaman magang akan memberikan wawasan berharga tentang 
industri teknologi dan membantu saya mengembangkan keterampilan profesional. 
Saya siap berkontribusi dengan dedikasi tinggi dan semangat belajar yang besar.
`;
