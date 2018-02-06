import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressupostCrearComponent } from './pressupost-crear.component';

describe('PressupostCrearComponent', () => {
  let component: PressupostCrearComponent;
  let fixture: ComponentFixture<PressupostCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressupostCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressupostCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
