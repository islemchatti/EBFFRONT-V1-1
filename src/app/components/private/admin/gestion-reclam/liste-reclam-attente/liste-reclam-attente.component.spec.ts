import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeReclamAttenteComponent } from './liste-reclam-attente.component';

describe('ListeReclamAttenteComponent', () => {
  let component: ListeReclamAttenteComponent;
  let fixture: ComponentFixture<ListeReclamAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeReclamAttenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeReclamAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
