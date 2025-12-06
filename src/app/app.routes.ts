import { Routes } from '@angular/router';
import { MainPageComponent } from './features/main-page/main-page.component';
import { PageShellComponent } from './shared/page-shell/page-shell.component';

export const routes: Routes = [
  {
    path: '',
    component: PageShellComponent, // shell = layout
    children: [
      { path: '', component: MainPageComponent }, // /
      //{ path: 'portfolio', component: PortfolioPageComponent }, // /portfolio
    ],
  },
];
