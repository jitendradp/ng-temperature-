import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderColumnComponent } from './render-column.component';

describe('RenderColumnComponent', () => {
  let component: RenderColumnComponent;
  let fixture: ComponentFixture<RenderColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
