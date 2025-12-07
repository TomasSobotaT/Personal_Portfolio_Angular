import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { ScrollService } from '../../core/scroll.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements AfterViewInit {
  constructor(
    private elRef: ElementRef<HTMLElement>,
    private scrollService: ScrollService
  ) {}

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
        threshold: 0.1, // cca 40 % sekce musí být vidět
      }
    );

    sections.forEach((s) => observer.observe(s));
  }
}
