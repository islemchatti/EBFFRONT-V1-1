import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRetraiteComponent } from './update-retraite.component';

describe('UpdateRetraiteComponent', () => {
  let component: UpdateRetraiteComponent;
  let fixture: ComponentFixture<UpdateRetraiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRetraiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRetraiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
