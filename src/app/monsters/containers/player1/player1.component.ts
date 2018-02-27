import { Component, OnInit, Input } from '@angular/core';
import { MonstersService } from '../../../services/monsters.service';
import { IMonster } from '../../../models/monster';

@Component({
  selector: 'mg-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.css']
})
export class Player1Component implements OnInit {
  
  monsters: IMonster[] = [];
  selectedMonster: IMonster;

  constructor(private _monstersService: MonstersService) { }

  ngOnInit() {
    this._monstersService.getPlayer1Monsters()
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
