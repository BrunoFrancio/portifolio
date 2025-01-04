import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  const { language } = useLanguage();

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'contact@example.com',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: language === 'pt' ? 'Telefone' : 'Phone',
      value: '+1 234 567 890',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: language === 'pt' ? 'Localização' : 'Location',
      value: 'São Paulo, Brazil',
    },
  ];

  return (
    <div className="space-y-6">
      {contactInfo.map((info) => (
        <div key={info.label} className="flex items-center gap-4">
          <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
            {info.icon}
          </div>
          <div>
            <h4 className="font-medium">{info.label}</h4>
            <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;