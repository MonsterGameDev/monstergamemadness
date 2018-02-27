import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonsterListComponent } from './monster-list/monster-list.component';
import { MonsterComponent } from './monster/monster.component';
import { PlayerComponent } from './container/player/player.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MonsterComponent,
    MonsterListComponent,
    PlayerComponent
  ],
  exports: [
    MonsterListComponent,
    MonsterComponent
  ]
})
export class MonstersModule { }
