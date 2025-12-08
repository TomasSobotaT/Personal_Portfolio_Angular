import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: '0',
    period: '2025',
    title: 'Tomáš Sobota Angular Portfolio Website',
    description: 'Stránky osobního portfolia postavené na Angularu',
    tags: [],
    imageUrl: '/assets/images/projects/asp_pm_1.png',
  },
  {
    id: '1',
    period: '2025',
    title: 'Payroll & Accounting Migration',
    description: `Spolupráce na migraci a modernizaci mzdového a účetního systému.
      Vývoj a údržba mikroslužeb pro import mzdových dat, tvorbu faktur a integraci účetních procesů.
      Generování fakturačních XML/XLS výstupů a reportů.
      Datové SQL migrace a frontend pro mapování mzdových složek.
      Webová aplikace v Angularu s využitím NgRx a state managementu.`,
    tags: [],
    imageUrl: '/assets/images/projects/payroll.png',
  },
  {
    id: '2',
    period: '2025',
    title: 'Digital Signature Integration (Signi)',
    description: `Vývoj API/mikroservis pro digitální podepisování dokumentů, webhooky a správu signovacích procesů.`,
    tags: [],
    imageUrl: '/assets/images/projects/signi.png',
  },
  {
    id: '3',
    period: '2024',
    title: 'Payroll Data Integration Microservice',
    description: `API/mikroservisa pro stažení mzdových podkladů, jejich transformaci a export do účetnictví.`,
    tags: [],
    imageUrl: '/assets/images/projects/payroll_01.png',
  },
  {
    id: '4',
    period: '2024',
    title: 'Generic Codebook Microservice',
    description: `Generická mikroservice pro správu číselníků postavená na minimal API, multi-tenant, reflektivní mapování.`,
    tags: [],
    imageUrl: '/assets/images/projects/codebook.png',
  },
  {
    id: '5',
    period: '2023',
    title: 'Legacy Desktop System Maintenance',
    description: `Údržba a vývoj firemní Windows Forms aplikace (.NET Framework), bugfixing a přidávání funkcí. Migrace logky no dových microservices.`,
    tags: [],
    imageUrl: '/assets/images/projects/winform.png',
  },
];
