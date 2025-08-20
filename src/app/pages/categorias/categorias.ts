import { Component } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { categories, tags } from '../../constants/category';
import { CategoryCard } from "../../components/category-card/category-card";

@Component({
  selector: 'app-categorias',
  imports: [Footer, Header, CategoryCard],
  templateUrl: './categorias.html',
})
export class Categorias {
  categories = categories
  tags = tags
}
