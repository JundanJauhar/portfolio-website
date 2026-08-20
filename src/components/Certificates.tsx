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
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
        Certificates
      </h2>
      <div className="space-y-3 ">
        {certificates.map((cert, index) => (
          <div key={index} className=" justify-between items-center py-2 border-b border-gray-100 flex md:flex-row flex-col   bg-gray-50 rounded-lg p-4">
            <div className='flex justify-center items-center mr-4 my-5'>
              <Image width={500} height={500} src={cert.img} alt={cert.name} className="w-full - h-full object-cover rounded-md" />
            </div>
            <div className=" flex-row md:flex-row justify-between items-start md:items-center w-full">
              <div className='text-center flex-1'>
                <span className="font-medium text-3xl  text-gray-800 text-center">{cert.name}</span>
              </div>
              <div className='text-center items-center'>
                <span className="text-gray-600 ">{cert.year}</span>
              </div>
              <div>
                {cert.describe && <p className="text-gray-500 text-sm mt-1 text-center">{cert.describe}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
