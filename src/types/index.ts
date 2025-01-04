export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
}
