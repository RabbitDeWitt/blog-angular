import { Component, Input } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { Category } from '../../constants/category';

@Component({
  selector: 'category-card',
  imports: [LucideAngularModule],
  templateUrl: './category-card.html',
})
export class CategoryCard {
  @Input() category: Category =
    {
      name: "",
      count: 0,
      description: "",
    }

}
