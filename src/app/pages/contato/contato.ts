import { Component } from '@angular/core';
import { contactInfos } from '../../constants/contact-info';
import { ContactInfo } from "../../components/contact-info/contact-info";

@Component({
  selector: 'app-contato',
  imports: [ContactInfo],
  templateUrl: './contato.html',
})
export class Contato {
  infos = contactInfos
}
