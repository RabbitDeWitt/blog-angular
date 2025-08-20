import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { FeaturedPosts } from "./components/featured-posts/featured-posts";
import { CategoriesSection } from "./components/categories-section/categories-section";
@Component({
  selector: 'app-root',
  imports: [Header, Hero, FeaturedPosts, CategoriesSection],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('blog-angular');
}
