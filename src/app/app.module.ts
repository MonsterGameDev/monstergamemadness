import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MonstersService } from './services/monsters.service';
import { HttpClientModule } from '@angular/common/http';
import { MonstersModule } from './monsters/monsters.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { WarriorsComponent } from './warriors/warriors.component';
import { ArenaComponent } from './arena/arena.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    WarriorsComponent,
    ArenaComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MonstersModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'warriors', component: WarriorsComponent},
      {path: 'arena', component: ArenaComponent},
      {path: 'about', component: AboutComponent},
      {path:'', redirectTo: '/home', pathMatch: 'full'},
      {path:'**', redirectTo: '/home', pathMatch: 'full'}
    ])
  ],
  providers: [MonstersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
