import { Project } from '../models/project.model';

export const EDUCATIONS: Project[] = [
  {
    id: '1',
    period: 'prosinec 2023 – dosud',
    title: 'Verisoft s.r.o. - .NET Developer',
    description:
      'Vývoj moderních .NET mikroslužeb a integrací, Datové migrace, MSSQL a Angular frontend. Vyvíjel jsem např. API pro digitální podepisování se službou Signi, včetně webhooků, dávkových procesů a správy dokumentů. Současně jsem udržoval a rozvíjel legacy WinForms CRM Saplikaci.',
    tags: ['C#', 'ASP.NET', 'WinForms', 'Angular', 'MSSQL', 'Azure DevOps'],
  },
  {
    id: '2',
    period: 'červenec 2023 – prosinec 2023',
    title: 'C# junior programátor, .NET a web developer na volné noze',
    description:
      'Realizace malých softwarových projektů, tvorba webových stránek, opensouce projekty.',
    tags: ['C#', 'Javascript ', 'HTML', 'CSS'],
  },
  {
    id: '3',
    period: 'srpen 2022 – červen 2023',
    title: 'Kurz programátor WWW aplikací C# .NET',
    description:
      'Kurz C#, ASP.NET, ADO.NET, EF, MS-SQL, Javascript, HTML, CSS, Bootstrap, Git.',
    tags: ['C#', 'Javascript ', 'HTML', 'CSS'],
  },
];
