import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressupostEditarComponent } from './pressupost-editar.component';

describe('PressupostEditarComponent', () => {
  let component: PressupostEditarComponent;
  let fixture: ComponentFixture<PressupostEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressupostEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressupostEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
