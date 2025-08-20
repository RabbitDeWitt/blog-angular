import { Component } from '@angular/core';
import { footerLinks } from '../../constants/footerLinks';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
})
export class Footer {
  footerLinks = footerLinks
}
