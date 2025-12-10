import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterBarComponent } from '../footer-bar/footer-bar.component';

@Component({
  selector: 'app-page-shell',
  imports: [RouterOutlet, SidebarComponent, FooterBarComponent],
  templateUrl: './page-shell.component.html',
  styleUrl: './page-shell.component.scss',
})
export class PageShellComponent {}
