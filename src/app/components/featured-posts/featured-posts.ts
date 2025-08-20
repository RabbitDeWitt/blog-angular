import { Component } from '@angular/core';
import { featuredPosts } from '../../constants/posts';
import { FeaturedPostCard } from './featured-post-card/featured-post-card';

@Component({
  selector: 'app-featured-posts',
  imports: [FeaturedPostCard],
  templateUrl: './featured-posts.html',
})
export class FeaturedPosts {
  posts = featuredPosts
}
