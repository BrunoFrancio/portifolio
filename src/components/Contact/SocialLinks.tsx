import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/yourusername',
      label: 'GitHub',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn',
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: 'https://twitter.com/yourusername',
      label: 'Twitter',
    },
  ];

  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;