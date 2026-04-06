import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FooterBarComponent } from '../../shared/footer-bar/footer-bar.component';

@Component({
  selector: 'app-family-tree',
  imports: [RouterLink, FooterComponent, FooterBarComponent],
  templateUrl: './family-tree.component.html',
  styleUrl: './family-tree.component.scss',
})
export class FamilyTreeComponent { }
