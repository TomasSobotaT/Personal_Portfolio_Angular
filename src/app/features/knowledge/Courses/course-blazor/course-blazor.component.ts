import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterBarComponent } from '../../../../shared/footer-bar/footer-bar.component';

@Component({
  selector: 'app-course-blazor',
  standalone: true,
  imports: [RouterLink, FooterBarComponent],
  templateUrl: './course-blazor.component.html',
  styleUrl: './course-blazor.component.scss',
})
export class CourseBlazorComponent {}
