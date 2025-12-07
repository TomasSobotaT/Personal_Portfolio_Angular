import { AfterViewInit, Component, ElementRef, signal } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { PROJECTS } from '../../core/data-sources/project.datasource';
import { EXPERIENCES } from '../../core/data-sources/experience.datasource';

@Component({
  selector: 'app-main-page',
  standalone: true,
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  imports: [ProjectCardComponent],
})
export class MainPageComponent implements AfterViewInit {
  constructor(
    private elRef: ElementRef<HTMLElement>,
    private scrollService: ScrollService
  ) {}

  projects = PROJECTS;
  experiences = EXPERIENCES;

  ngAfterViewInit(): void {
    const sections = this.elRef.nativeElement.querySelectorAll<HTMLElement>(
      'section[data-section-id]'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const id = visible.target.getAttribute('data-section-id');
          if (id) {
            this.scrollService.setActiveSection(id);
          }
        }
      },
      {
        threshold: 0.7, // cca 40 % sekce musí být vidět
      }
    );

    sections.forEach((s) => observer.observe(s));
  }
}
