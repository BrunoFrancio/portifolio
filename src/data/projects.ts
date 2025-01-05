import { Project } from '../types';

export const getProjectsData = (language: string): Project[] => [
  {
    id: 1,
    title: language === 'pt' ? 'Clinic Pro' : 'Clinic Pro',
    description:
      language === 'pt'
        ? 'Uma plataforma para clínicas gerenciarem seus atendimentos e pacientes.'
        : 'A platform for clinics to manage their appointments and patients.',
    technologies: ['Laravel', 'PHP', 'Tailwind/CSSS', 'MySql', 'Docker'],
    link: 'https://github.com/BrunoFrancio/clinicpro',
    image: '/clinic-pro.webp',
  },
  {
    id: 2,
    title: language === 'pt' ? 'SPA Arquitetura' : 'SPA Arquitetura',
    description:
      language === 'pt'
        ? 'Um site moderno e interativo para promover serviços de arquitetura.'
        : 'A modern and interactive website to promote architecture services.',
    technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
    link: 'https://github.com/BrunoFrancio/spaarquitetura',
    image: '/spapiscinas.png',
  },
  {
    id: 3,
    title: language === 'pt' ? 'Challenge Coodesh' : 'Coodesh Challenge',
    description:
      language === 'pt'
        ? 'Solução para o desafio de back-end proposto pela Coodesh.'
        : 'Solution for the back-end challenge proposed by Coodesh.',
    technologies: ['Laravel', 'API Integration', 'PHP', 'MySql', 'Docker'],
    link: 'https://github.com/BrunoFrancio/challenge',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b',
  },
];
