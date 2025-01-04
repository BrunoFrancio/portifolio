import { Skill } from '../types';

export const skillsData: {
  backend: Skill[];
  frontend: Skill[];
} = {
  backend: [
    { name: 'PHP', icon: 'php' },
    { name: 'Laravel', icon: 'laravel' },
    { name: 'C#', icon: 'csharp' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'SQL Server', icon: 'microsoftsqlserver' },
    { name: 'Git', icon: 'git' },
    { name: 'Docker', icon: 'docker' },
  ],
  frontend: [
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'Next.js', icon: 'nextdotjs' },
    { name: 'Tailwind CSS', icon: 'tailwindcss' },
  ],
};
