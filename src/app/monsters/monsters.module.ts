import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonsterListComponent } from './monster-list/monster-list.component';
import { MonsterComponent } from './monster/monster.component';
import { Player1Component } from './containers/player1/player1.component';
import { Player2Component } from './containers/player2/player2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MonsterComponent,
    MonsterListComponent,
    Player1Component,
    Player2Component,
  ],
  exports: [
    Player1Component,
    Player2Component
  ]
})
export class MonstersModule { }
