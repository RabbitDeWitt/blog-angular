import { Component } from '@angular/core';
import { missions } from '../../constants/mission';
import { MissionCard } from '../../components/mission-card/mission-card';
import { team } from '../../constants/team';
import { WorkerCard } from "../../components/worker-card/worker-card";

@Component({
  selector: 'app-sobre',
  imports: [MissionCard, WorkerCard],
  templateUrl: './sobre.html',
})
export class Sobre {
  missions = missions

  team = team
}
