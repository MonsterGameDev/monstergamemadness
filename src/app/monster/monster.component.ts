import { Component, OnInit, Input } from '@angular/core';
import { IMonster } from '../models/monster';

@Component({
  selector: 'mg-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css']
})
export class MonsterComponent implements OnInit {
  
  @Input() monster: IMonster;

  constructor() { }

  ngOnInit() {
  }

}
