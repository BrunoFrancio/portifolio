import React from 'react';
import { Experience } from '../../types';
import { Briefcase } from 'lucide-react';

const TimelineItem: React.FC<Experience> = ({ company, role, period, description }) => {
  return (
    <div className="relative pl-8 pb-8">
      <div className="absolute left-0 top-0 h-full w-0.5 bg-indigo-200 dark:bg-indigo-900"></div>
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-500">
        <Briefcase className="w-2 h-2 absolute top-1 left-1 text-white" />
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">{company}</h3>
        <div className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">{role}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">{period}</div>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;