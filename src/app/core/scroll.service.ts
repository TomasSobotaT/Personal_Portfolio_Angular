import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private activeSectionSubject = new BehaviorSubject<string>('about');
  activeSection$ = this.activeSectionSubject.asObservable();

  scrollTo(elementId: string) {
    const el = document.getElementById(elementId);
    if (!el) return;

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    this.setActiveSection(elementId);
  }

  setActiveSection(id: string) {
    this.activeSectionSubject.next(id);
  }
}
