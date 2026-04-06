import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HELPERS } from '../../core/data-sources/helper.datasource';
import { FooterBarComponent } from '../../shared/footer-bar/footer-bar.component';

@Component({
  selector: 'app-helpers',
  standalone: true,
  imports: [RouterLink, FooterBarComponent],
  templateUrl: './helpers.component.html',
  styleUrls: ['./helpers.component.scss'],
})
export class HelpersComponent {
  categories = [...HELPERS].sort((a, b) => b.items.length - a.items.length);
}
