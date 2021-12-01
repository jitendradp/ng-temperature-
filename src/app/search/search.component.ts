import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, switchMap, tap } from 'rxjs';
import { WetherService } from '../services/wether.service';
import { SearchType } from './../models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  searchType: typeof SearchType = SearchType;
  temperatureDetails: any = {};
  errorMsg: any = {};
  constructor(private wetherService: WetherService) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      city: new FormControl(null, [Validators.required]),
      type: new FormControl(null),
    });
  }

  onSubmit(): void {
 
    const exclude =
      this.searchForm.value.type != SearchType.DAILY
        ? SearchType.DAILY
        : SearchType.HOURLY;
    const type = this.wetherService.convertTypeToString(exclude);
    this.temperatureDetails = {};
    this.errorMsg = {};
    this.wetherService
      .getCity(this.searchForm.value.city)
      .pipe(
        map((res: any) => {
          return { ...res.coord, type };
        }),
        switchMap((res: any) => {
          return this.wetherService.getTemperature(res);
        }),
        tap((res: any) => {
          const selectedType =
            this.wetherService.convertTypeToString(this.searchForm.value.type);
          this.temperatureDetails = {
            type: this.searchForm.value.type,
            name: this.searchForm.value.city,
            temp: res[selectedType],
          };
        })
      )
      .subscribe(
        () => {},
        (error) => { 
          this.errorMsg = error.error; }
      );
  }

  resetForm(){
    this.searchForm.reset();
    this.temperatureDetails = {};
    this.errorMsg = {};
  }
}
