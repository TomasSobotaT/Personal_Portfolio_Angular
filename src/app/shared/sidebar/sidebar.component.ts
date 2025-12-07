import { Component } from '@angular/core';
import { ScrollService } from '../../core/scroll.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [FooterComponent],
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
