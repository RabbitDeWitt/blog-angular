import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { FeaturedPosts } from "./components/featured-posts/featured-posts";
import { CategoriesSection } from "./components/categories-section/categories-section";
import { RecentPosts } from "./components/recent-posts/recent-posts";
import { Footer } from "./components/footer/footer";
@Component({
  selector: 'app-root',
  imports: [Header, Hero, FeaturedPosts, CategoriesSection, RecentPosts, Footer],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('blog-angular');
}
