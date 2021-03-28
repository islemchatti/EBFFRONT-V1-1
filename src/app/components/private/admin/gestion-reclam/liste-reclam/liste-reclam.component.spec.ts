import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeReclamComponent } from './liste-reclam.component';

describe('ListeReclamComponent', () => {
  let component: ListeReclamComponent;
  let fixture: ComponentFixture<ListeReclamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeReclamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeReclamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
