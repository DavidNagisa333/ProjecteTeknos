import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressupostComponent } from './pressupost.component';

describe('PressupostComponent', () => {
  let component: PressupostComponent;
  let fixture: ComponentFixture<PressupostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressupostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressupostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
