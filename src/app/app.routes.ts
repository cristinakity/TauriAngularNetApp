import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { PikachuComponent } from './pikachu/pikachu.component';

export const routes: Routes = [
  { path: 'weather', component: WeatherComponent },
  { path: 'pikachu', component: PikachuComponent }
];
