import { Component, signal } from '@angular/core';
import { HELPERS } from '../../core/data-sources/helper.datasource';

@Component({
  selector: 'app-helpers',
  standalone: true,
  templateUrl: './helpers.component.html',
  styleUrls: ['./helpers.component.scss'],
})
export class HelpersComponent {
  categories = [...HELPERS].sort((a, b) => b.items.length - a.items.length);
}
