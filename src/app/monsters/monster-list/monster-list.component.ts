import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MonstersService } from './../../services/monsters.service';
import { IMonster } from '../../models/monster';

@Component({
  selector: 'mg-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.css']
})
export class MonsterListComponent implements OnInit {
  @Input() monsters: IMonster[];
  
  @Output()
    selectedMonster: EventEmitter<IMonster> = new EventEmitter<IMonster>();

  constructor() { }

  ngOnInit() {
    
  }

  chooseMonster(monster: IMonster): void {
    this.selectedMonster.emit(monster);
  }

}
