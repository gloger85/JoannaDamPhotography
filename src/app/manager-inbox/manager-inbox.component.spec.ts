import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerInboxComponent } from './manager-inbox.component';

describe('ManagerInboxComponent', () => {
  let component: ManagerInboxComponent;
  let fixture: ComponentFixture<ManagerInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
