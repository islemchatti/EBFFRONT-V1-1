import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenuReclamComponent } from './contenu-reclam.component';

describe('ContenuReclamComponent', () => {
  let component: ContenuReclamComponent;
  let fixture: ComponentFixture<ContenuReclamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenuReclamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenuReclamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
