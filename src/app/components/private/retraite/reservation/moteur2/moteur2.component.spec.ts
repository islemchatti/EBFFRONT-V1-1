import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moteur2Component } from './moteur2.component';

describe('Moteur2Component', () => {
  let component: Moteur2Component;
  let fixture: ComponentFixture<Moteur2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Moteur2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Moteur2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
