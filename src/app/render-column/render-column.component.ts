import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-render-column',
  templateUrl: './render-column.component.html',
  styleUrls: ['./render-column.component.css']
})
export class RenderColumnComponent implements OnInit {

  @Input() temp: any;
  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['temp']){
      this.temp = changes['temp'].currentValue
    }
  
    
  }

}
