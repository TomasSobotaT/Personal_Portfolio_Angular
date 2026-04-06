import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterBarComponent } from '../../../../shared/footer-bar/footer-bar.component';

@Component({
  selector: 'app-course-mssql',
  standalone: true,
  imports: [RouterLink, FooterBarComponent],
  templateUrl: './course-mssql.component.html',
  styleUrl: './course-mssql.component.scss',
})
export class CourseMssqlComponent {}
