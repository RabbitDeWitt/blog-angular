import { Component } from '@angular/core';
import { categories } from '../../constants/category';
import { CategoryBadge } from './category-badge/category-badge';

@Component({
  selector: 'app-categories-section',
  imports: [CategoryBadge],
  templateUrl: './categories-section.html',
  styleUrl: './categories-section.css'
})
export class CategoriesSection {
  categories = categories
}
