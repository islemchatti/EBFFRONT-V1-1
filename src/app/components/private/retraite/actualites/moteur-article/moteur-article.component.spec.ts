import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoteurArticleComponent } from './moteur-article.component';

describe('MoteurArticleComponent', () => {
  let component: MoteurArticleComponent;
  let fixture: ComponentFixture<MoteurArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoteurArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoteurArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
