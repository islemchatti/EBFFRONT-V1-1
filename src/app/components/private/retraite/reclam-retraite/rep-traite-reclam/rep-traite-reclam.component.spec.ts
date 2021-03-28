import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepTraiteReclamComponent } from './rep-traite-reclam.component';

describe('RepTraiteReclamComponent', () => {
  let component: RepTraiteReclamComponent;
  let fixture: ComponentFixture<RepTraiteReclamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepTraiteReclamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepTraiteReclamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
