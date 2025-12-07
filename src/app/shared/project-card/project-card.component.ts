import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  // moderní Inputs jako signály
  period = input<string>(''); // např. "2024 — PRESENT"
  title = input.required<string>(); // povinné
  subtitle = input<string>(); // volitelné
  description = input<string>(''); // krátký popis
  link = input<string>(); // URL na repo / demo
  imageUrl = input<string>(); // volitelný obrázek
  tags = input<string[]>([]); // tech stack
  hasImage = computed(() => !!this.imageUrl());
}
