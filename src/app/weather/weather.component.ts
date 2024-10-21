import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherForecast } from '../weather-forecast.model'; // Adjust the path as necessary
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {
  weatherForecasts: WeatherForecast[] = [];

  constructor(private readonly weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherForecasts();
  }

  getWeatherForecasts(): void {
    this.weatherService.getWeatherForecast().subscribe((forecasts: WeatherForecast[]) => {
      this.weatherForecasts = forecasts;
    });
  }
}
