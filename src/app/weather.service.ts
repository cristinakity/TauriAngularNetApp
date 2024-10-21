import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherForecast } from './weather-forecast.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly apiUrl = 'http://localhost:5180';

  constructor(private readonly http: HttpClient) { }


  getWeatherForecast(): Observable<WeatherForecast[]> {
    const url = `${this.apiUrl}/weatherforecast`;
    return this.http.get<WeatherForecast[]>(url);
  }
}
