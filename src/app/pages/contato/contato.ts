import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { contactInfos } from '../../constants/contact-info';
import { ContactInfo } from "../../components/contact-info/contact-info";

@Component({
  selector: 'app-contato',
  imports: [Header, Footer, ContactInfo],
  templateUrl: './contato.html',
})
export class Contato {
  infos = contactInfos
}
