import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardReclamComponent } from './dashboard-reclam.component';

describe('DashboardReclamComponent', () => {
  let component: DashboardReclamComponent;
  let fixture: ComponentFixture<DashboardReclamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardReclamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardReclamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
