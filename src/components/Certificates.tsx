import React from 'react';

interface Certificate {
  name: string;
  year: string;
}

interface CertificatesProps {
  certificates: Certificate[];
}

export default function Certificates({ certificates }: CertificatesProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
        Sertifikat & Prestasi
      </h2>
      <div className="space-y-3">
        {certificates.map((cert, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="font-medium text-gray-800">{cert.name}</span>
            <span className="text-gray-600">{cert.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
