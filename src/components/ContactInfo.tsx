import React from 'react';

interface Contact {
  email: string;
  phone: string;
  linkedin: string;
  github?: string;
}

interface ContactInfoProps {
  contact: Contact;
}

export default function ContactInfo({ contact }: ContactInfoProps) {
  return (
    <div className="bg-gray-50 p-6 border-b">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div>
          <h3 className="font-semibold text-gray-700">Email</h3>
          <a href={`mailto:${contact.email}`} className="text-blue-600">{contact.email}</a>
        </div>
        <div>
          <h3 className="font-semibold text-gray-700">GitHub</h3>
          <a href={contact.github || "https://github.com/JundanJauhar"} target="_blank" rel="noopener noreferrer" className="text-blue-600">
            JundanJauhar
          </a>
        </div>
        <div>
          <h3 className="font-semibold text-gray-700">LinkedIn</h3>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600">
            JundanJauhar
          </a>
        </div>
      </div>
    </div>
  );
}
