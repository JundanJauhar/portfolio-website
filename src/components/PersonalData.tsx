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
  const items = [
    { label: 'Full Name', value: personalInfo.fullName },
    { label: 'Place, Date of Birth', value: `${personalInfo.birthPlace}, ${personalInfo.birthDate}` },
    { label: 'Gender', value: personalInfo.gender },
    { label: 'Religion', value: personalInfo.religion },
    { label: 'Marital Status', value: personalInfo.maritalStatus },
    { label: 'Nationality', value: personalInfo.nationality },
    { label: 'Address', value: personalInfo.address }
  ];

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-2 mb-4">
        Personal Details
      </h3>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col border-b border-gray-50 pb-2 last:border-0 last:pb-0">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              {item.label}
            </span>
            <span className="text-sm font-medium text-gray-700 mt-0.5">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
