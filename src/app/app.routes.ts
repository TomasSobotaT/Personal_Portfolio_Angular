import { Routes } from '@angular/router';
import { MainPageComponent } from './features/main-page/main-page.component';
import { PageShellComponent } from './shared/page-shell/page-shell.component';
import { FamilyTreeComponent } from './features/family-tree/family-tree.component';
import { HelpersComponent } from './features/helpers/helpers.component';
import { KnowledgeComponent } from './features/knowledge/knowledge.component';
import { CourseAngularComponent } from './features/knowledge/Courses/course-angular/course-angular.component';
import { CourseAzureComponent } from './features/knowledge/Courses/course-azure/course-azure.component';
import { CourseBlazorComponent } from './features/knowledge/Courses/course-blazor/course-blazor.component';

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
  {
    path: 'knowledge',
    component: KnowledgeComponent,
  },
  {
    path: 'knowledge/course-angular',
    component: CourseAngularComponent,
  },
  {
    path: 'knowledge/course-azure',
    component: CourseAzureComponent,
  },
  {
    path: 'knowledge/course-blazor',
    component: CourseBlazorComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
