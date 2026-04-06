import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterBarComponent } from '../../../../shared/footer-bar/footer-bar.component';

@Component({
  selector: 'app-course-angular',
  standalone: true,
  imports: [RouterLink, FooterBarComponent],
  templateUrl: './course-angular.component.html',
  styleUrl: './course-angular.component.scss',
})
export class CourseAngularComponent {}
