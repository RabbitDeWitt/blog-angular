import { Component } from '@angular/core';
import { navlinks } from '../../constants/navlinks';
import { NavLink } from "./nav-link/nav-link";

@Component({
  selector: 'app-header',
  imports: [NavLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  links = navlinks

}
