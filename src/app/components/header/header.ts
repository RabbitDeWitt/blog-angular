import { Component } from '@angular/core';
import { navlinks } from '../../constants/navlinks';
import { NavLink } from "./nav-link/nav-link";
import { LucideAngularModule, Search } from "lucide-angular";

@Component({
  selector: 'app-header',
  imports: [NavLink, LucideAngularModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  links = navlinks

  readonly Seacrh = Search

}
