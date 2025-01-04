import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js',
    technologies: ['React', 'Node.js', 'MongoDB', 'Redux'],
    link: 'https://example.com/ecommerce',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io'],
    link: 'https://example.com/taskapp',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather dashboard with interactive maps and forecasts',
    technologies: ['React', 'OpenWeatherMap API', 'Leaflet'],
    link: 'https://example.com/weather',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b',
  },
];