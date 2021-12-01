import { Component, Input, OnInit } from '@angular/core';
import { SearchType } from '../models';

@Component({
  selector: 'app-render-table',
  templateUrl: './render-table.component.html',
  styleUrls: ['./render-table.component.css']
})
export class RenderTableComponent implements OnInit {

  @Input() content: any;
  searchType: typeof SearchType = SearchType;
  constructor() { }

  ngOnInit(): void {
  }

}
