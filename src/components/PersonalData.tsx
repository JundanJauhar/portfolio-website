import React from 'react';

interface PersonalInfo {
  fullName: string;
  birthPlace: string;
  birthDate: string;
  gender: string;
  religion: string;
  address: string;
  maritalStatus: string;
  nationality: string;
}

interface PersonalDataProps {
  personalInfo: PersonalInfo;
}

export default function PersonalData({ personalInfo }: PersonalDataProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
        Data Diri
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <div>
            <span className="font-semibold text-gray-700">Nama Lengkap:</span>
            <p className="text-gray-600">{personalInfo.fullName}</p>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Tempat, Tanggal Lahir:</span>
            <p className="text-gray-600">{personalInfo.birthPlace}, {personalInfo.birthDate}</p>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Jenis Kelamin:</span>
            <p className="text-gray-600">{personalInfo.gender}</p>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Agama:</span>
            <p className="text-gray-600">{personalInfo.religion}</p>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <span className="font-semibold text-gray-700">Alamat:</span>
            <p className="text-gray-600">{personalInfo.address}</p>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Status:</span>
            <p className="text-gray-600">{personalInfo.maritalStatus}</p>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Kewarganegaraan:</span>
            <p className="text-gray-600">{personalInfo.nationality}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
