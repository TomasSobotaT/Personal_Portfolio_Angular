import { Project } from '../models/project.model';

export const OTHERS: Project[] = [
  {
    id: '1',
    title: 'Pomůcky při programování',
    description: 'Různé pomůcky pro programování a vývoj software.',
    tags: [],
    link: '/pomucky',
  },
  {
    id: '2',
    title: 'Knowledge base',
    description: 'Kurzy s odkazy na detaily kurzů a informace z nich.',
    tags: [],
    link: '/knowledge',
  },
  {
    id: '3',
    title: 'Staré portfolio',
    description: 'Starší verze portfolia a projekty.',
    tags: [],
    link: '/old',
  },
  {
    id: '4',
    title: 'Rodokmen',
    description:
      'Rodokmen mojí rodiny vytvořený v roce 2020 jako dárek rodičům.',
    tags: [],
    link: '/rodokmen',
  },
];
