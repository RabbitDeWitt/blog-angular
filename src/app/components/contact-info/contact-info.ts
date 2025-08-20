import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { Info } from '../../constants/contact-info';
import { NgClass } from '@angular/common';
import { pickColor } from '../../utils/pickColor';

@Component({
  selector: 'contact-info',
  imports: [LucideAngularModule, NgClass],
  templateUrl: './contact-info.html',
})
export class ContactInfo implements OnChanges {
  @Input() info: Info = {
    title: '',
    value: '',
    description: '',
    color: ''
  }

  ligthColor = ''
  darkColor = ''


  ngOnChanges(changes: SimpleChanges): void {
    const color = changes['info'].currentValue.color
    const { lightColor, darkColor } = pickColor(color)

    this.ligthColor = lightColor
    this.darkColor = darkColor
  }

}
