import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepNontraiteReclamComponent } from './rep-nontraite-reclam.component';

describe('RepNontraiteReclamComponent', () => {
  let component: RepNontraiteReclamComponent;
  let fixture: ComponentFixture<RepNontraiteReclamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepNontraiteReclamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepNontraiteReclamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
