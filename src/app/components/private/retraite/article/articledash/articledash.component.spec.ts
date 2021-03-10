import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticledashComponent } from './articledash.component';

describe('ArticledashComponent', () => {
  let component: ArticledashComponent;
  let fixture: ComponentFixture<ArticledashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticledashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticledashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
