import { Component, OnInit, Input } from '@angular/core';
import { IMonster } from '../../../models/monster';
import { MonstersService } from '../../../services/monsters.service';

@Component({
  selector: 'mg-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.css']
})
export class Player2Component implements OnInit {

  monsters: IMonster[] = [];
  selectedMonster: IMonster;

  constructor(private _monstersService: MonstersService) { }

  ngOnInit() {
    this._monstersService.getPlayer2Monsters()
    .subscribe(
      data => {
        this.monsters = data;
      },
      e => console.log(e),
      () => console.log ("Monster fetching completed")
    )
  }

  selectMonsterHandler(e: IMonster){
    this.selectedMonster = e;
    console.log("Monster: ", this.selectedMonster)
  }

}
