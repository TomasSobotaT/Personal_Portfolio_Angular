import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterBarComponent } from '../../shared/footer-bar/footer-bar.component';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [RouterLink, FooterBarComponent],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {}
