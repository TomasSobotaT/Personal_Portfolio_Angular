import { DataSourceType } from '../enums/data-source-enum';

export interface Project {
  id: string;
  period?: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  link?: string;
}
