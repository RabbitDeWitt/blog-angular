import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { Mission } from '../../constants/mission';
import { NgClass } from '@angular/common';

@Component({
  selector: 'mission-card',
  imports: [LucideAngularModule, NgClass],
  templateUrl: './mission-card.html',
})
export class MissionCard implements OnChanges {
  @Input() mission: Mission = {
    title: '',
    description: '',
    color: '',
  }

  private readonly colorDivMap: Record<string, string> = {
    purple: 'bg-purple-50',
    green: 'bg-green-50',
    blue: 'bg-blue-50',
  };

  private readonly colorIconMap: Record<string, string> = {
    purple: 'bg-purple-600',
    green: 'bg-green-600',
    blue: 'bg-blue-600',
  };

  colorDiv = ''
  colorIcon = ''

  ngOnChanges(changes: SimpleChanges): void {
    const color = changes['mission'].currentValue.color;

    this.colorDiv = this.colorDivMap[color]
    this.colorIcon = this.colorIconMap[color]
  }

}
