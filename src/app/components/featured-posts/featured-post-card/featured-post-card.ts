import { Component, Input } from '@angular/core';
import { IPost } from '../../../constants/posts';

@Component({
  selector: 'featured-post-card',
  imports: [],
  templateUrl: './featured-post-card.html',
})
export class FeaturedPostCard {
  @Input() post: IPost = {
    id: 0,
    title: '',
    category: '',
    excerpt: '',
    image: '',
    readTime: '',
  }
}
