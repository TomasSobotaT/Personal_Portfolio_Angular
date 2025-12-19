import { Component, signal } from '@angular/core';
import { HELPERS } from '../../core/data-sources/helper.datasource';
import { FooterBarComponent } from '../../shared/footer-bar/footer-bar.component';

@Component({
  selector: 'app-helpers',
  standalone: true,
  imports: [FooterBarComponent],
  templateUrl: './helpers.component.html',
  styleUrls: ['./helpers.component.scss'],
})
export class HelpersComponent {
  categories = [...HELPERS].sort((a, b) => b.items.length - a.items.length);
}
