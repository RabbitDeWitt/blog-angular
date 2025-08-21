import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nav-link',
  imports: [RouterLink],
  templateUrl: './nav-link.html',
})
export class NavLink {
  @Input() navlink = {
    label: '',
    href: ''
  }
}
