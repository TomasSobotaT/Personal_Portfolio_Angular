import { Component, computed, input } from '@angular/core';
import { DataSourceType } from '../../core/enums/data-source-enum';

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  period = input<string>('');
  title = input.required<string>();
  subtitle = input<string>();
  description = input<string>('');
  link = input<string>();
  imageUrl = input<string>();
  tags = input<string[]>([]);
  hasImage = computed(() => !!this.imageUrl());
  dataSourceType = input<DataSourceType>();
  protected readonly DataSourceType = DataSourceType;
}
