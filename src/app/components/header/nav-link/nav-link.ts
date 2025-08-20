import { Component, Input } from '@angular/core';

@Component({
  selector: 'nav-link',
  imports: [],
  templateUrl: './nav-link.html',
})
export class NavLink {
  @Input() navlink = {
    label: '',
    href: ''
  }
}
