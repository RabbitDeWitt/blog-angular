import { Component, Input } from '@angular/core';

@Component({
  selector: 'nav-link',
  imports: [],
  templateUrl: './nav-link.html',
  styleUrl: './nav-link.css'
})
export class NavLink {
  @Input() navlink = ''
}
