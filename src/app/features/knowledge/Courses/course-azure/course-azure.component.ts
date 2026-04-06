import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterBarComponent } from '../../../../shared/footer-bar/footer-bar.component';

@Component({
  selector: 'app-course-azure',
  standalone: true,
  imports: [RouterLink, FooterBarComponent],
  templateUrl: './course-azure.component.html',
  styleUrl: './course-azure.component.scss',
})
export class CourseAzureComponent {}
