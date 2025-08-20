import { Component, Input } from '@angular/core';

@Component({
  selector: 'popular-post-card',
  imports: [],
  templateUrl: './popular-post-card.html',
})
export class PopularPostCard {
  @Input() post = {
    id: 0,
    title: '',
    views: ''
  }
}
