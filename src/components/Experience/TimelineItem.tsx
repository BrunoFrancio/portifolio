import React from 'react';
import { Experience } from '../../types';
import { Briefcase } from 'lucide-react';

const TimelineItem: React.FC<Experience> = ({ company, role, period, description }) => {
  return (
    <div className="relative pl-8 pb-8">
      <div className="absolute left-0 top-0 h-full w-0.5 bg-primary/30"></div>
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary">
        <Briefcase className="w-2 h-2 absolute top-1 left-1 text-foreground" />
      </div>
      <div className="bg-card p-6 rounded-lg shadow-md border border-border">
        <h3 className="text-lg font-semibold text-foreground">{company}</h3>
        <div className="text-primary font-medium mb-2">{role}</div>
        <div className="text-sm text-muted-foreground mb-4">{period}</div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;