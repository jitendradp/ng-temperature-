import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SearchType } from '../models';

@Injectable({
  providedIn: 'root'
})
export class WetherService {

  apiUrl: string = environment.apiUrl;
  apiKey: string = environment.apiKey
  constructor(private httpClient: HttpClient) { }

  getCity(cityName: string) {
    return this.httpClient.get(`${this.apiUrl}/weather?q=${cityName}&limit=1&appid=${this.apiKey}`)
  }

  getTemperature({ lon, lat, type }: any) {
    return this.httpClient.get(`${this.apiUrl}/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,${type},alerts&appid=${this.apiKey}`);
  }


  convertTolowerCase(string: String): string {
    return string.toLowerCase();
  }

  convertTypeToString(type: number): string {
    return this.convertTolowerCase(SearchType[type])
  }


}
