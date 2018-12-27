import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalRankingComponent } from './global-ranking.component';

describe('GlobalRankingComponent', () => {
  let component: GlobalRankingComponent;
  let fixture: ComponentFixture<GlobalRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
