import { Component } from '@angular/core';
import { categories, tags } from '../../constants/category';
import { CategoryCard } from "../../components/category-card/category-card";

@Component({
  selector: 'app-categorias',
  imports: [CategoryCard],
  templateUrl: './categorias.html',
})
export class Categorias {
  categories = categories
  tags = tags
}
