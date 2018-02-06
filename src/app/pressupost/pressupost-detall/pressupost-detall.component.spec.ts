import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressupostDetallComponent } from './pressupost-detall.component';

describe('PressupostDetallComponent', () => {
  let component: PressupostDetallComponent;
  let fixture: ComponentFixture<PressupostDetallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressupostDetallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressupostDetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
