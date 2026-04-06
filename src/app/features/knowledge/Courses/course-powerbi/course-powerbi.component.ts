import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterBarComponent } from '../../../../shared/footer-bar/footer-bar.component';

@Component({
  selector: 'app-course-powerbi',
  standalone: true,
  imports: [RouterLink, FooterBarComponent],
  templateUrl: './course-powerbi.component.html',
  styleUrl: './course-powerbi.component.scss',
})
export class CoursePowerbiComponent {}
