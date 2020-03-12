import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Redirect2fbComponent } from './redirect2fb.component';

describe('Redirect2fbComponent', () => {
  let component: Redirect2fbComponent;
  let fixture: ComponentFixture<Redirect2fbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Redirect2fbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Redirect2fbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
