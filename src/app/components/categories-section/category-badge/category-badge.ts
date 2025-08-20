import { Component, Input } from '@angular/core';
import { Category } from '../../../constants/category';
import { FileIcon, LucideAngularModule } from 'lucide-angular';


@Component({
  selector: 'category-badge',
  imports: [LucideAngularModule],
  templateUrl: './category-badge.html',
})
export class CategoryBadge {
  @Input() category: Category = {
    name: '',
    count: 0
  }

  readonly FileIcon = FileIcon
}
