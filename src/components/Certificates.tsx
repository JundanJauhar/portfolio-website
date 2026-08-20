import Image from 'next/image';
import React from 'react';

interface Certificate {
  name: string;
  year: string;
  img: string;
  describe?: string;
}

interface CertificatesProps {
  certificates: Certificate[];
}

export default function Certificates({ certificates }: CertificatesProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3 border-b-2 border-indigo-500 pb-2">
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800">
          Certificates & Credentials
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <div 
            key={index} 
            className="group flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300"
          >
            {/* Image Container with Hover zoom */}
            <div className="relative h-48 bg-gray-50 overflow-hidden border-b border-gray-100 flex items-center justify-center">
              <Image 
                width={400} 
                height={250} 
                src={cert.img} 
                alt={cert.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <span className="absolute top-3 right-3 inline-flex items-center px-2 py-0.5 bg-indigo-600/90 text-white text-[10px] font-bold uppercase rounded-md shadow-sm">
                {cert.year}
              </span>
            </div>

            {/* Content info */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-base text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                  {cert.name}
                </h3>
                {cert.describe && (
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {cert.describe}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
