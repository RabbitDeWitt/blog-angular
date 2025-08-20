import { Component, Input } from '@angular/core';
import { LucideAngularModule, User } from "lucide-angular";

@Component({
  selector: 'worker-card',
  imports: [LucideAngularModule],
  templateUrl: './worker-card.html',
})
export class WorkerCard {
  @Input() worker = {
    name: '',
    description: '',
    work: '',
    photo: ''
  }

  readonly User = User
}
