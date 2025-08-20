import { Component, Input } from '@angular/core';

@Component({
  selector: 'recent-post-card',
  imports: [],
  templateUrl: './recent-post-card.html',
})
export class RecentPostCard {
  @Input() post = {
    id: 0,
    title: "",
    excerpt: "",
    date: "",
    category: "",
  }
}
