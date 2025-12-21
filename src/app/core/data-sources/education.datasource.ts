import { Project } from '../models/project.model';

export const EDUCATIONS: Project[] = [
  {
    id: '1',
    period: '12/2025',
    title: 'Kompletní administrace Microsoft SQL Serveru',
    description:
      'Komplexní kurz administrace Microsoft SQL Serveru: instalace, konfigurace, zabezpečení, údržba, zálohování, obnova a monitoring.',
    tags: ['MS-SQL', 'T-SQL', 'Databáze'],
    link: 'https://www.gopas.cz/kompletni-administrace-microsoft-sql-serveru_goc6345',
  },
  // {
  //   id: '1',
  //   period: '10/2025',
  //   title: 'Microsoft Azure – The Complete Guide',
  //   description: 'Kompletní kurz Microsoft Azure na Udemy.',
  //   tags: ['Microsoft Azure', 'Cloud'],
  //   link: 'https://www.udemy.com/course/microsoft-azure-from-zero-to-hero-the-complete-guide',
  // },
  {
    id: '2',
    period: '09/2025',
    title: 'Angular – The Complete Guide (2025 Edition)',
    description: 'Komplexní kurz Angularu a Typescriptu na Udemy.',
    tags: ['Angular', 'Typescript', 'Frontend'],
    link: 'https://www.udemy.com/course/the-complete-guide-to-angular-2',
  },
  {
    id: '3',
    period: '07/2025',
    title: 'Optimalizace výkonu, ladění a škálovatelnost aplikací',
    description:
      'Profesionální školení Gopas zaměřené na výkon, ladění a škálování .NET aplikací.',
    tags: ['.NET', 'Optimalizace', 'Ladění'],
    link: 'https://www.gopas.cz/optimalizace-vykonu-ladeni-a-skalovatelnost-aplikaci_goc2126',
  },
  {
    id: '4',
    period: '07/2023',
    title: 'ITNetwork - programátor WWW aplikací C# .NET',
    description:
      'Kurz C#, ASP.NET, ADO.NET, EF, MS-SQL, Javascript, HTML, CSS, Bootstrap, Git.',
    tags: ['C#', 'Javascript ', 'HTML', 'CSS'],
    link: 'https://www.itnetwork.cz/portfolio/77823',
  },
];
