import { Experience } from '../types';

export const experienceData = (language: string): Experience[] => [
  {
    id: 1,
    company: 'Artemidas',
    role: language === 'pt' ? 'Desenvolvedor Web Full Stack' : 'Full Stack Web Developer',
    period: '2022 - Present',
    description:
      language === 'pt'
        ? 'Desenvolvimento de produtos internos para visualização de insights da empresa, como vendas, contatos e leads. Produção de sistemas modernos, sites, e o projeto Seufisio, que auxilia clínicas a criar sites para promover seus negócios.'
        : 'Development of internal products for company insights visualization, such as sales, contacts, and leads. Built modern systems, websites, and the Seufisio project, which helps clinics create websites to promote their business.',
  },
  {
    id: 2,
    company: 'Elevor',
    role: language === 'pt' ? 'Desenvolvedor Web Full Stack' : 'Full Stack Web Developer',
    period: '2022 - 2022',
    description:
      language === 'pt'
        ? 'Atuei na manutenção do ERP 360 e na migração de sistemas legados de VB.net para C#.'
        : 'Worked on maintaining the ERP 360 and migrating legacy systems from VB.net to C#.',
  },
  {
    id: 3,
    company: 'Postrafo',
    role: language === 'pt' ? 'Projetista de Painéis Elétricos' : 'Electrical Panels Designer',
    period: '2021 - 2022',
    description:
      language === 'pt'
        ? 'Gerenciava projetos e a produção de painéis para máquinas de tratamento de lagoas.'
        : 'Managed projects and the production of panels for lagoon treatment machines.',
  },
];
