import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunfactPostComponent } from './funfact-post.component';

describe('FunfactPostComponent', () => {
  let component: FunfactPostComponent;
  let fixture: ComponentFixture<FunfactPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunfactPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunfactPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
