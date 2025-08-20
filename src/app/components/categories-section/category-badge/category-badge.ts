import { Component, Input } from '@angular/core';
import { ICategory } from '../../../constants/category';
import { FileIcon, LucideAngularModule } from 'lucide-angular';


@Component({
  selector: 'category-badge',
  imports: [LucideAngularModule],
  templateUrl: './category-badge.html',
})
export class CategoryBadge {
  @Input() category: ICategory = {
    name: '',
    count: 0
  }

  readonly FileIcon = FileIcon
}
