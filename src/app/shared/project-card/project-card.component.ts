import { Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { DataSourceType } from '../../core/enums/data-source-enum';

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  private router = inject(Router);

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

  onCardClick() {
    const url = this.link();
    const type = this.dataSourceType();

    if (!url) {
      return;
    }

    if (type === DataSourceType.Other) {
      this.router.navigate([url]);
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }
}
