import { Component } from '@angular/core';
import { ScrollService } from '../../scroll.service.ts/scroll.service'; // cesta podle tebe

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  currentYear = new Date().getFullYear();
  activeSection = 'about';

  constructor(private scrollService: ScrollService) {
    this.scrollService.activeSection$.subscribe((id) => {
      this.activeSection = id;
    });
  }

  scrollTo(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
  }
}
