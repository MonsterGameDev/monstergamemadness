import { Component } from '@angular/core';
import { IMonster } from './models/monster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  monster1: IMonster = {
    name: "Hans Jensen",
    vitality: 100,
    strength: 90,
    stamina: 100,
  };

  monster2: IMonster = {
    name: "Hans Jensen",
    vitality: 100,
    strength: 80,
    stamina: 100,
  };
}
