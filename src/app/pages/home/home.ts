import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";
import { FeaturedPosts } from "../../components/featured-posts/featured-posts";
import { CategoriesSection } from "../../components/categories-section/categories-section";
import { RecentPosts } from "../../components/recent-posts/recent-posts";

@Component({
  selector: 'app-home',
  imports: [Hero, FeaturedPosts, CategoriesSection, RecentPosts],
  templateUrl: './home.html',
})
export class Home {

}
