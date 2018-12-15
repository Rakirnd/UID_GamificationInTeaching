import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunfactComponent } from './funfact.component';

describe('FunfactComponent', () => {
  let component: FunfactComponent;
  let fixture: ComponentFixture<FunfactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunfactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunfactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
