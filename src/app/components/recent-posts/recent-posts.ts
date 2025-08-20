import { Component } from '@angular/core';
import { RecentPostCard } from './recent-post-card/recent-post-card';
import { popularPosts, recentPosts } from '../../constants/posts';
import { PopularPostCard } from './popular-post-card/popular-post-card';

@Component({
  selector: 'app-recent-posts',
  imports: [RecentPostCard, PopularPostCard],
  templateUrl: './recent-posts.html',
})
export class RecentPosts {
  recentPosts = recentPosts
  popularPosts = popularPosts
}
