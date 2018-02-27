import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MonstersService } from './../../services/monsters.service';
import { IMonster } from '../../models/monster';

@Component({
  selector: 'mg-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.css']
})
export class MonsterListComponent implements OnInit {
  @Output()
    chosenMonster: EventEmitter<IMonster> = new EventEmitter<IMonster>();

  monsters: IMonster[] = [];

  constructor(private _monstersService: MonstersService) { }

  ngOnInit() {
    this._monstersService.getMonsters()
      .subscribe(
        data => {
          this.monsters = data;
        },
        e => console.log(e),
        () => console.log ("Monster fetching completed")
      )
  }

  chooseMonster(monster: IMonster): void {
    this.chosenMonster.emit(monster);
  }

}
