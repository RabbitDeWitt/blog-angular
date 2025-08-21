import { Component } from '@angular/core';
import { navlinks } from '../../constants/navlinks';
import { NavLink } from "./nav-link/nav-link";
import { LucideAngularModule, Search } from "lucide-angular";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NavLink, LucideAngularModule, RouterLink],
  templateUrl: './header.html',
})
export class Header {
  links = navlinks

  readonly Seacrh = Search

}
