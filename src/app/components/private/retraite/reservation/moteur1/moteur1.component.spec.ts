import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moteur1Component } from './moteur1.component';

describe('Moteur1Component', () => {
  let component: Moteur1Component;
  let fixture: ComponentFixture<Moteur1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Moteur1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Moteur1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
