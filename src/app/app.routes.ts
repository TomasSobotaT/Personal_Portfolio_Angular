import { Routes } from '@angular/router';
import { MainPageComponent } from './features/main-page/main-page.component';
import { PageShellComponent } from './shared/page-shell/page-shell.component';
import { FamilyTreeComponent } from './features/family-tree/family-tree.component';
import { HelpersComponent } from './features/helpers/helpers.component';

export const routes: Routes = [
  {
    path: '',
    component: PageShellComponent,
    children: [{ path: '', component: MainPageComponent }],
  },
  {
    path: 'rodokmen',
    component: FamilyTreeComponent,
  },
  {
    path: 'pomucky',
    component: HelpersComponent,
  },
];
