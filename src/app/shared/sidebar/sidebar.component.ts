import { Component } from '@angular/core';
import { ScrollService } from '../../core/scroll.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  currentYear = new Date().getFullYear();

  constructor(private scrollService: ScrollService) {}

  scrollTo(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
  }
}
