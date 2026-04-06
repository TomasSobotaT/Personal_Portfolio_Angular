import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterBarComponent } from '../../../../shared/footer-bar/footer-bar.component';

@Component({
  selector: 'app-course-docker',
  standalone: true,
  imports: [RouterLink, FooterBarComponent],
  templateUrl: './course-docker.component.html',
  styleUrl: './course-docker.component.scss',
})
export class CourseDockerComponent {}
