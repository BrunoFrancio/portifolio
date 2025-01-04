import React from 'react';
import { Testimonial } from '../../types';

const TestimonialCard: React.FC<Testimonial> = ({ name, role, content, image }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 italic">{content}</p>
    </div>
  );
};

export default TestimonialCard;