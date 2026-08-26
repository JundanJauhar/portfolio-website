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
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm space-y-4">
      <h3 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-2">
        Contact & Socials
      </h3>
      <div className="space-y-3.5">
        {/* Email */}
        <a 
          href={`mailto:${contact.email}`} 
          className="flex items-center gap-3 p-2.5 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-200 group"
        >
          <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Email</span>
            <span className="text-sm font-medium truncate">{contact.email}</span>
          </div>
        </a>

        {/* Phone */}
        <a 
          href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`} 
          className="flex items-center gap-3 p-2.5 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-200 group"
        >
          <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Phone</span>
            <span className="text-sm font-medium">{contact.phone}</span>
          </div>
        </a>

        {/* GitHub */}
        {contact.github && (
          <a 
            href={contact.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 p-2.5 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-200 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-800 group-hover:scale-110 transition-transform">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">GitHub</span>
              <span className="text-sm font-medium truncate">JundanJauhar</span>
            </div>
          </a>
        )}

        {/* LinkedIn */}
        <a 
          href={contact.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 p-2.5 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-200 group"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">LinkedIn</span>
            <span className="text-sm font-medium truncate">JundanJauhar</span>
          </div>
        </a>
      </div>
    </div>
  );
}
